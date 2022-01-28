import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FoundCardModalComponent } from '../found-card-modal/found-card-modal.component';
import { FoundClientModalComponent } from '../found-client-modal/found-client-modal.component';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { Card } from 'src/app/interfaces/card.entity';
import { Client } from 'src/app/interfaces/client.entity';
import { HistoryAction } from '../../interfaces/historyAction';
import { getClientsList } from '../../state/actions/clients.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app-state';
import { ApiService } from '../../services/api.service';
import { getCardList } from '../../state/actions/cards.actions';

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnChanges {
	@Input() data: Card[] | Client[] | HistoryAction[];
	@Input() dataKeys: string[];
	@Input() dataType: string;
	@Input() forOneUser: boolean;
	isStateInitial = true;
	searchFiltersApplied = false;
	bsModalRef?: BsModalRef;
	constructor(private modalService: BsModalService, private store: Store<AppState>, private apiService: ApiService) {}
	openSearchModal(): void {
		const initialState: ModalOptions = {
			class: 'modal-dialog-centered',
			animated: true,
			initialState: {
				dataType: this.dataType
			}
		};
		this.bsModalRef = this.modalService.show(SearchModalComponent, initialState);
	}
	ngOnChanges(changes: SimpleChanges): void {
		if (!changes.data.isFirstChange()) {
			this.isStateInitial = false;
		}
		this.searchFiltersApplied = Object.keys(this.apiService.lastParams).length !== 0;
	}

	openModal(data: Card | Client): void {
		const initialState: ModalOptions = {
			class: 'modal-dialog-centered',
			animated: true,
			initialState: {
				data
			}
		};
		switch (this.dataType) {
			case 'card':
				this.bsModalRef = this.modalService.show(FoundCardModalComponent, initialState);
				break;
			case 'client':
				this.bsModalRef = this.modalService.show(FoundClientModalComponent, initialState);
				break;
			default:
				throw new Error('Unknown data type');
		}
	}
	clearFilters(): void {
		switch (this.dataType) {
			case 'card':
				this.store.dispatch(getCardList({ parameters: {}, setNewParams: true }));
				break;
			case 'client':
				this.store.dispatch(getClientsList({ parameters: {}, setNewParams: true }));
				break;
			default:
				throw new Error('Unknown data type');
		}
	}
}
