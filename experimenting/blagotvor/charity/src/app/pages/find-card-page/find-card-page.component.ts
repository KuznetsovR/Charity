import { Component, OnInit } from '@angular/core';
import { Store } from '../../interfaces/interfaces';
import { STORES } from '../../constants/sections';

@Component({
	selector: 'app-find-card-page',
	templateUrl: './find-card-page.component.html',
	styleUrls: ['./find-card-page.component.scss']
})
export class FindCardPageComponent implements OnInit {
	selectedStore: Store | null = null;
	stores = STORES;
	constructor() {}
	selectStore(store: Store): void {
		this.selectedStore = store;
	}
	ngOnInit(): void {}
}
