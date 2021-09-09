import { Component, OnInit } from '@angular/core';
import { Store } from '../../interfaces/interfaces';
import { STORES } from '../../constants/sections';

@Component({
	selector: 'app-add-page',
	templateUrl: './add-page.component.html',
	styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
	selectedStore: Store | null = null;
	stores = STORES;
	constructor() {}
	selectStore(store: Store): void {
		this.selectedStore = store;
	}
	ngOnInit(): void {}
}
