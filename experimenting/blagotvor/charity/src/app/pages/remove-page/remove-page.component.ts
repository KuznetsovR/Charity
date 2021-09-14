import { Component, OnInit } from '@angular/core';
import { Store } from '../../interfaces/interfaces';
import { STORES } from '../../constants/sections';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-remove-page',
	templateUrl: './remove-page.component.html',
	styleUrls: ['./remove-page.component.scss']
})
export class RemovePageComponent implements OnInit {
	cardNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
	reason = new FormControl('', [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]);
	removeDataForm = new FormGroup({
		cardNumber: this.cardNumber,
		reason: this.reason
	});
	selectedStore: Store | null = null;
	stores = STORES;
	constructor() {}
	selectStore(store: Store): void {
		this.selectedStore = store;
	}
	ngOnInit(): void {}
	checkLength(event: Event): void {
		if ((event.target as HTMLInputElement).value.length > 21) {
			(event.target as HTMLInputElement).value = (event.target as HTMLInputElement).value.slice(0, 21);
		}
	}
	onSubmit(): void {
		console.log('Form submitted', this.cardNumber.value, this.reason.value, this.selectedStore.name);
	}
}
