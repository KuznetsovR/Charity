import { Component } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Store } from '../../interfaces/interfaces';
import { STORES } from '../../constants/sections';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BarcodeModalComponent } from '../barcode-modal/barcode-modal.component';

@Component({
	selector: 'app-get-card-modal',
	templateUrl: './get-card-modal.component.html',
	styleUrls: ['./get-card-modal.component.scss'],
	providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class GetCardModalComponent {
	selectedStore: Store | null = null;
	stores = STORES;

	constructor(private modalService: BsModalService, public bsModalRef: BsModalRef) {}

	selectStore(store: Store): void {
		this.selectedStore = store;
	}
	async getCard(): Promise<void> {
		this.bsModalRef.hide();
		const initialState: ModalOptions = {
			initialState: {
				class: 'modal-lg modal-dialog-centered'
			}
		};
		this.bsModalRef = this.modalService.show(BarcodeModalComponent, initialState);
	}
}
