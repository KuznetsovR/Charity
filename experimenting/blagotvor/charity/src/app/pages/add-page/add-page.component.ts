import { Component, OnInit } from '@angular/core';
import { Store } from '../../interfaces/interfaces';
import { STORES } from '../../constants/sections';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-page',
	templateUrl: './add-page.component.html',
	styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
	cardNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
	name = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]);
	addDataForm = new FormGroup({
		cardNumber: this.cardNumber,
		name: this.name
	});
	selectedStore: Store | null = null;
	stores = STORES;
	constructor() {}
	selectStore(store: Store): void {
		this.selectedStore = store;
	}
	ngOnInit(): void {}

	onSubmit(): void {
		console.log('Form submitted', this.cardNumber.value, this.name.value, this.selectedStore.name);
	}
	checkLength(event: Event): void {
		if ((event.target as HTMLInputElement).value.length > 21) {
			(event.target as HTMLInputElement).value = (event.target as HTMLInputElement).value.slice(0, 21);
		}
	}
}
