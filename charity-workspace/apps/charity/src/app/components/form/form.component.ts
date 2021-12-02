import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FormControls } from './form-entities';
import { Store } from 'src/app/interfaces/store.entity';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchModalComponent } from '../search-modal/search-modal.component';

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
	number: FormControl;
	passportNumber: FormControl;
	ownerId: FormControl;
	name: FormControl;
	surname: FormControl;
	patronymic: FormControl;
	reason: FormControl;
	controls: FormControls = {};
	userTriedToSendInvalid = false;

	selectedStore: Store | null = null;
	stores: Store[];
	constructor(private apiService: ApiService, private modalService: BsModalService) {}

	ngOnInit(): void {
		for (const input of this.formInputs) {
			switch (input) {
				case 'number':
					this.number = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-z\d]*$/)]);
					this.controls.number = this.number;
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
				case 'ownerId':
					this.ownerId = new FormControl('', [Validators.required, Validators.pattern(/^\d+$/i)]);
					this.controls.ownerId = this.ownerId;
					break;
				case 'reason':
					this.reason = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё\d ]+$/i)]);
					this.controls.reason = this.reason;
					break;
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
				this.apiService
					.postRequest(`admin/card`, {
						id: 0,
						number: this.number.value,
						owner: this.ownerId.value,
						shop: this.selectedStore.id,
						active: true
					})
					.pipe(
						mergeMap((res) => {
							console.log('pizdec');
							const initialState: ModalOptions = {
								class: 'modal-dialog-centered',
								animated: true
							};
							this.bsModalRef = this.modalService.show(SearchModalComponent, initialState);
							return of(res);
						})
					)
					.subscribe();
				break;
			case 'Добавить клиента':
				this.apiService
					.postRequest('admin/owner', {
						id: 0,
						useCount: 0,
						active: true,
						passportNumber: this.passportNumber.value,
						name: this.name.value,
						surname: this.surname.value,
						patronymic: this.patronymic.value
					})
					.pipe(
						mergeMap((res) => {
							console.log('pizdec');
							const initialState: ModalOptions = {
								class: 'modal-dialog-centered',
								animated: true
							};
							this.bsModalRef = this.modalService.show(SearchModalComponent, initialState);
							return of(res);
						})
					)
					.subscribe();
				break;
			default:
				throw new Error('unknown action');
		}
	}
}
