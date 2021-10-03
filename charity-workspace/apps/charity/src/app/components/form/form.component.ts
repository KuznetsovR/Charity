import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControls, RequestBody, Store } from '../../interfaces/interfaces';
import { STORES } from '../../constants/sections';
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
	reason: FormControl;
	controls: FormControls = {};

	selectedStore: Store | null = null;
	stores = STORES;
	dataIsAvailable = true;
	constructor(private apiService: ApiService, private modalService: BsModalService) {}

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
					this.name = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]);
					this.controls.name = this.name;
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
		const reqBody: RequestBody = {};
		for (const control of Object.entries(this.controls)) {
			reqBody[control[0]] = control[1].value;
		}
		if (this.formInputs?.includes('store')) {
			reqBody.store = this.selectedStore.name;
		}
		switch (this.action) {
			case 'Добавить карту':
				this.apiService.postRequest(`path`, reqBody);
				break;
			case 'Добавить клиента':
				this.apiService.postRequest(`path`, reqBody);
				break;
			case 'Найти карту':
				this.dataIsAvailable = false;
				this.apiService.getRequest(`path`).then((res: string) => {
					const initialState: ModalOptions = {
						initialState: {
							card: res,
							class: 'modal-lg modal-dialog-centered'
						}
					};
					this.dataIsAvailable = true;
					this.bsModalRef = this.modalService.show(FoundCardModalComponent, initialState);
				});
				break;
			case 'Найти клиента':
				this.apiService.getRequest(`path`).then((res: string) => {
					const initialState: ModalOptions = {
						initialState: {
							client: res,
							class: 'modal-lg modal-dialog-centered'
						}
					};
					this.bsModalRef = this.modalService.show(FoundClientModalComponent, initialState);
				});
				break;
			case 'Удалить карту':
				this.apiService.deleteRequest(`path`, reqBody);
				break;
			case 'Удалить клиента':
				this.apiService.deleteRequest(`path`, reqBody);
				break;
		}
	}
}
