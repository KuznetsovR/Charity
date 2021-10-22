import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Card, FormControls, Store } from '../../interfaces/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-found-card-modal',
	templateUrl: './found-card-modal.component.html',
	styleUrls: ['./found-card-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class FoundCardModalComponent implements OnInit {
	data: Card;
	dataState: 'changing' | 'static' = 'static';
	selectedStore: Store;
	changeClientForm: FormGroup;
	cardNumber: FormControl;
	id: FormControl;
	owner: FormControl;
	controls: FormControls = {};
	ngOnInit(): void {
		this.owner = new FormControl(this.data.owner, [Validators.required, Validators.pattern(/^[а-яё ]+$/i)]);
		this.controls.owner = this.owner;
		this.cardNumber = new FormControl(this.data.number, [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
		this.controls.cardNumber = this.cardNumber;
		this.id = new FormControl(this.data.id, [Validators.required, Validators.pattern(/^\d{8,20}$/)]);
		this.controls.id = this.id;
		this.changeClientForm = new FormGroup(this.controls);
		this.selectedStore = { name: this.data.shop, id: 1, image: '123' };
	}
	selectStore(store: Store): void {
		this.selectedStore = store;
	}
	changeDataState(newState: 'changing' | 'static'): void {
		this.dataState = newState;
	}
	changeCard(): void {
		this.changeDataState('static');
	}
}
