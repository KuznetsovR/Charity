import { Component, OnInit } from '@angular/core';
import { Store } from '../../interfaces/interfaces';
import { STORES } from '../../constants/sections';

@Component({
	selector: 'app-remove-page',
	templateUrl: './remove-page.component.html',
	styleUrls: ['./remove-page.component.scss']
})
export class RemovePageComponent implements OnInit {
	selectedStore: Store | null = null;
	stores = STORES;
	constructor() {}
	selectStore(store: Store): void {
		this.selectedStore = store;
	}
	ngOnInit(): void {}
}
