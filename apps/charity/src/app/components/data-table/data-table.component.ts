import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FoundCardModalComponent } from '../found-card-modal/found-card-modal.component';
import { FoundClientModalComponent } from '../found-client-modal/found-client-modal.component';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { Card } from 'src/app/interfaces/card.entity';
import { Client } from 'src/app/interfaces/client.entity';
import { HistoryAction } from '../../interfaces/historyAction';

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
	isStateInitial = true;
	bsModalRef?: BsModalRef;
	constructor(private modalService: BsModalService) {}
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
}
