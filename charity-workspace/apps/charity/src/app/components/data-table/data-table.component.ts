import { Component, Input } from '@angular/core';
import { Card, Client } from '../../interfaces/interfaces';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { FoundCardModalComponent } from '../found-card-modal/found-card-modal.component';
import { FoundClientModalComponent } from '../found-client-modal/found-client-modal.component';
import { SearchModalComponent } from '../search-modal/search-modal.component';

@Component({
	selector: 'app-data-table',
	templateUrl: './data-table.component.html',
	styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent {
	@Input() data: Card[] | Client[];
	@Input() dataKeys: string[];
	@Input() dataType: string;
	bsModalRef?: BsModalRef;
	constructor(private modalService: BsModalService) {}

	openSearchModal(): void {
		const initialState: ModalOptions = {
			class: 'modal-dialog-centered',
			animated: true
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
