import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from 'src/app/interfaces/store.entity';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-store-select',
	templateUrl: './store-select.component.html',
	styleUrls: ['./store-select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreSelectComponent implements OnInit {
	@Input() selectedStore: Store | null = null;
	@Input() invalid = false;
	@Output() store = new EventEmitter<Store>();
	stores: Store[];
	constructor(private apiService: ApiService) {}
	ngOnInit(): void {
		this.apiService
			.getRequest('user/shop')
			.subscribe((stores: Store[]) => (this.stores = stores));
	}
	selectStore(store: Store): void {
		this.selectedStore = store;
		this.store.emit(store);
	}
}
