import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { Store } from '../../interfaces/interfaces';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { BarcodeModalComponent } from '../barcode-modal/barcode-modal.component';
import { ApiService } from '../../services/api.service';

@Component({
	selector: 'app-get-card-modal',
	templateUrl: './get-card-modal.component.html',
	styleUrls: ['./get-card-modal.component.scss'],
	providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GetCardModalComponent implements OnInit {
	selectedStore: Store | null = null;
	stores: Store[];

	constructor(private modalService: BsModalService, private bsModalRef: BsModalRef, private apiService: ApiService) {}
	async ngOnInit(): Promise<void> {
		this.stores = await this.apiService.getRequest('/shop/');
	}

	getCard(): void {
		this.bsModalRef.hide();
		const initialState: ModalOptions = {
			initialState: {
				class: 'modal-lg modal-dialog-centered',
				storeId: this.selectedStore.id
			}
		};
		this.bsModalRef = this.modalService.show(BarcodeModalComponent, initialState);
	}
	selectStore(store: Store): void {
		this.selectedStore = store;
	}
}
