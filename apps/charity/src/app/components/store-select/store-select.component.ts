import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Store } from 'src/app/interfaces/store.entity';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-store-select',
	templateUrl: './store-select.component.html',
	styleUrls: ['./store-select.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreSelectComponent implements OnInit, OnDestroy {
	@Input() selectedStore: Store | null = null;
	@Output() store = new EventEmitter<Store>();
	stores: Store[];
	storesSubscription: Subscription;
	constructor(private apiService: ApiService) {}
	ngOnInit(): void {
		this.storesSubscription = this.apiService
			.getRequest('user/shop')
			.subscribe((stores: Store[]) => (this.stores = stores));
	}
	ngOnDestroy(): void {
		this.storesSubscription.unsubscribe();
	}

	selectStore(store: Store): void {
		this.selectedStore = store;
		this.store.emit(store);
	}
}
