import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControls, Store } from '../../interfaces/interfaces';
import { ApiService } from '../../services/api.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {
	@Input() formInputs: string[];
	@Input() actionName: string;
	@Input() action: string;
	bsModalRef?: BsModalRef;

	dataForm: FormGroup;
	cardNumber: FormControl;
	passportNumber: FormControl;
	name: FormControl;
	surname: FormControl;
	patronymic: FormControl;
	reason: FormControl;
	controls: FormControls = {};
	userTriedToSendInvalid = false;

	selectedStore: Store | null = null;
	stores: Store[];
	constructor(private apiService: ApiService) {}

	ngOnInit(): void {
		for (const input of this.formInputs) {
			switch (input) {
				case 'cardNumber':
					this.cardNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
					this.controls.cardNumber = this.cardNumber;
					break;
				case 'passportNumber':
					this.passportNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]);
					this.controls.passportNumber = this.passportNumber;
					break;
				case 'name':
					this.name = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
					this.surname = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
					this.patronymic = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
					this.controls.name = this.name;
					this.controls.surname = this.surname;
					this.controls.patronymic = this.patronymic;
					break;
				case 'reason':
					this.reason = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё\d ]+$/i)]);
					this.controls.reason = this.reason;
			}
		}
		this.dataForm = new FormGroup(this.controls);
	}

	selectStore(store: Store): void {
		this.selectedStore = store;
	}

	trimForm(): void {
		Object.keys(this.dataForm.controls).forEach((key) => {
			return typeof this.dataForm.get(key).value === 'string'
				? this.dataForm.get(key).setValue(this.dataForm.get(key).value.trim())
				: null;
		});
	}

	onSubmit(): void {
		this.trimForm();
		if (this.dataForm.invalid) {
			this.userTriedToSendInvalid = true;
			return;
		}
		switch (this.action) {
			case 'Добавить карту':
				this.apiService.postRequest(`admin/card`, {
					number: this.cardNumber.value,
					owner: this.passportNumber.value,
					shop: this.selectedStore.id
				});
				break;
			case 'Добавить клиента':
				this.apiService.postRequest('admin/owner', {
					passportNumber: this.passportNumber.value,
					name: this.name.value,
					surname: this.surname.value,
					patronymic: this.patronymic.value
				});
				break;

			case 'Удалить карту':
				this.apiService.deleteRequest(`path`, {});
				break;
			case 'Удалить клиента':
				this.apiService.deleteRequest(`path`, {});
				break;
		}
	}
}
