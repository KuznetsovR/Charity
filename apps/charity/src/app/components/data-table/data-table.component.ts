import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FoundCardModalComponent } from '../found-card-modal/found-card-modal.component';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { Card } from 'src/app/interfaces/card.entity';
import { Client } from 'src/app/interfaces/client.entity';
import { HistoryAction } from '../../interfaces/historyAction';
import { getClientsList } from '../../state/actions/clients.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app-state';
import { ApiService } from '../../services/api.service';
import { getCardList } from '../../state/actions/cards.actions';
import { getHistory } from '../../state/actions/history.actions';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnChanges, OnInit {
	@Input() data: Card[] | Client[] | HistoryAction[];
	@Input() dataKeys: string[];
	@Input() dataType: string;
	@Input() forOneUser: boolean;
	isStateInitial = true;
	// state is initial only if there were no onChanges => it is initial only if server didnt respond
	searchFiltersApplied = false;
	bsModalRef?: BsModalRef;

	constructor(
		private modalService: BsModalService,
		private store: Store<AppState>,
		private apiService: ApiService,
		private route: ActivatedRoute,
		private router: Router
	) {}
	ngOnInit(): void {
		this.route.queryParams.pipe().subscribe((params) => {
			this.searchFiltersApplied = Object.keys(params).length !== 0;
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (!changes.data.isFirstChange()) {
			this.isStateInitial = false;
		}
	}

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

	openModal(data: Card | Client): void {
		const initialState: ModalOptions = {
			class: 'modal-dialog-centered',
			animated: true,
			initialState: {
				data
			}
		};
		this.bsModalRef = this.modalService.show(FoundCardModalComponent, initialState);
	}
	clearFilters(): void {
		switch (this.dataType) {
			case 'card':
				this.router.navigate(['/cards'], {});
				this.store.dispatch(getCardList({ parameters: {} }));
				break;
			case 'client':
				this.router.navigate(['/clients'], {});
				this.store.dispatch(getClientsList({ parameters: {} }));
				break;
			case 'history':
				this.router.navigate(['/history'], {});
				this.store.dispatch(getHistory({ parameters: {} }));
				break;
			default:
				throw new Error('Unknown data type');
		}
	}
}
