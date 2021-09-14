import { Component, OnInit } from '@angular/core';
import { Store } from '../../interfaces/interfaces';
import { STORES } from '../../constants/sections';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-find-card-page',
	templateUrl: './find-card-page.component.html',
	styleUrls: ['./find-card-page.component.scss']
})
export class FindCardPageComponent implements OnInit {
	cardNumber = new FormControl('', [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
	findCardDataForm = new FormGroup({
		cardNumber: this.cardNumber
	});
	selectedStore: Store | null = null;
	stores = STORES;
	constructor() {}
	selectStore(store: Store): void {
		this.selectedStore = store;
	}
	checkLength(event: Event): void {
		if ((event.target as HTMLInputElement).value.length > 21) {
			(event.target as HTMLInputElement).value = (event.target as HTMLInputElement).value.slice(0, 21);
		}
	}
	ngOnInit(): void {}
	onSubmit(): void {
		console.log('Form submitted', this.cardNumber.value, this.selectedStore.name);
	}
}
