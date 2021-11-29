import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '../../interfaces/interfaces';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-store-select',
	templateUrl: './store-select.component.html',
	styleUrls: ['./store-select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreSelectComponent implements OnInit {
	@Output() store = new EventEmitter<Store>();
	selectedStore: Store | null = null;
	stores: Store[];

	constructor(private apiService: ApiService) {}
	ngOnInit(): void {
		this.apiService.getRequest('user/shop').subscribe((stores: Store[]) => (this.stores = stores));
	}
	selectStore(store: Store): void {
		this.selectedStore = store;
		this.store.emit(store);
	}
}
