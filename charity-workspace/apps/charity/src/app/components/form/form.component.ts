import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControls, Store } from '../../interfaces/interfaces';
import { ApiService } from '../../services/api.service';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FoundCardModalComponent } from '../found-card-modal/found-card-modal.component';
import { FoundClientModalComponent } from '../found-client-modal/found-client-modal.component';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	@Input() formInputs: string[];
	@Input() actionName: string;
	@Input() action: string;
	bsModalRef?: BsModalRef;

	findCardDataForm: FormGroup;
	cardNumber: FormControl;
	passportNumber: FormControl;
	name: FormControl;
	surname: FormControl;
	patronymic: FormControl;
	reason: FormControl;
	controls: FormControls = {};

	selectedStore: Store | null = null;
	stores: Store[];
	constructor(private apiService: ApiService, private modalService: BsModalService) {}

	async ngOnInit(): Promise<void> {
		for (const input of this.formInputs) {
			switch (input) {
				case 'cardNumber':
					this.cardNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
					this.controls.cardNumber = this.cardNumber;
					break;
				case 'passportNumber':
					this.passportNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{1,10}$/)]);
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
					this.reason = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]);
					this.controls.reason = this.reason;
			}
		}
		this.findCardDataForm = new FormGroup(this.controls);
	}

	selectStore(store: Store): void {
		this.selectedStore = store;
	}

	onSubmit(): void {
		switch (this.action) {
			case 'Добавить карту':
				this.apiService.postRequest(`/card/`, {
					number: this.cardNumber.value,
					owner: this.passportNumber.value,
					shop: this.selectedStore.id
				});
				break;
			case 'Добавить клиента':
				this.apiService.postRequest('/owner/', {
					passport_number: this.passportNumber.value,
					name: this.name.value,
					surname: this.surname.value,
					patronymic: this.patronymic.value
				});
				break;

			case 'Найти карту':
				this.apiService
					.getRequest(`/card/?number=${this.cardNumber.value}&shop=${this.selectedStore.id}`)
					.then((res: string) => {
						const initialState: ModalOptions = {
							initialState: {
								cards: res,
								class: 'modal-lg modal-dialog-centered'
							}
						};
						this.bsModalRef = this.modalService.show(FoundCardModalComponent, initialState);
					});
				break;

			case 'Найти клиента':
				this.apiService.getRequest(`/owner/${this.passportNumber.value}`).then((res: string) => {
					const initialState: ModalOptions = {
						initialState: {
							clients: res,
							class: 'modal-lg modal-dialog-centered'
						}
					};
					this.bsModalRef = this.modalService.show(FoundClientModalComponent, initialState);
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
