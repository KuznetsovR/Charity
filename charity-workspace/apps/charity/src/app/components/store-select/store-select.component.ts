import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '../../interfaces/interfaces';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-store-select',
	templateUrl: './store-select.component.html',
	styleUrls: ['./store-select.component.scss']
})
export class StoreSelectComponent implements OnInit {
	@Output() store = new EventEmitter<Store>();
	selectedStore: Store | null = null;
	stores: Store[];

	constructor(private apiService: ApiService) {}
	async ngOnInit(): Promise<void> {
		this.stores = await this.apiService.getRequest('/shop/');
	}
	selectStore(store: Store): void {
		this.store.emit(store);
	}
}
