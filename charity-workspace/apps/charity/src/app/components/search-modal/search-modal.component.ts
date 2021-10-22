import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormControls, Store } from '../../interfaces/interfaces';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
	selector: 'app-search-modal',
	templateUrl: './search-modal.component.html',
	styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
	@Input() dataType;
	selectedStore: Store;

	searchForm: FormGroup;
	cardNumber: FormControl;
	passportNumber: FormControl;
	name: FormControl;
	surname: FormControl;
	patronymic: FormControl;
	controls: FormControls = {};
	constructor(public bsModalRef: BsModalRef) {}
	ngOnInit(): void {
		this.name = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
		this.surname = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
		this.patronymic = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё]+$/i)]);
		this.controls.name = this.name;
		this.controls.surname = this.surname;
		this.controls.patronymic = this.patronymic;
		if (this.dataType === 'card') {
			this.cardNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
			this.controls.cardNumber = this.cardNumber;
		} else {
			this.passportNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{1,10}$/)]);
			this.controls.passportNumber = this.passportNumber;
		}
		this.searchForm = new FormGroup(this.controls);
	}

	trimForm(): void {
		Object.keys(this.searchForm.controls).forEach((key) => {
			return typeof this.searchForm.get(key).value === 'string'
				? this.searchForm.get(key).setValue(this.searchForm.get(key).value.trim())
				: null;
		});
	}

	selectStore(store: Store): void {
		this.selectedStore = store;
	}

	onSubmit(): void {
		this.trimForm();
		this.bsModalRef.hide();
	}
}
