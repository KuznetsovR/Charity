import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FoundCardModalComponent } from '../found-card-modal/found-card-modal.component';
import { FoundClientModalComponent } from '../found-client-modal/found-client-modal.component';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { Observable } from 'rxjs';
import { Card } from 'src/app/interfaces/card.entity';
import { Client } from 'src/app/interfaces/client.entity';
import { HistoryAction } from '../../interfaces/historyAction';

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent {
	@Input() data: Observable<Card[]> | Observable<Client[]> | Observable<HistoryAction[]>;
	@Input() dataKeys: string[];
	@Input() dataType: string;
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

	openModal(data: Card | Client): void {
		const initialState: ModalOptions = {
			class: 'modal-dialog-centered',
			animated: true,
			initialState: {
				data
			}
		};
		this.dataType === 'card'
			? (this.bsModalRef = this.modalService.show(FoundCardModalComponent, initialState))
			: (this.bsModalRef = this.modalService.show(FoundClientModalComponent, initialState));
	}
}
