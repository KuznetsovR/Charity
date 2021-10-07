import { Component, OnInit } from '@angular/core';
import { API_PATH } from '../../constants/api-path';

@Component({
	selector: 'app-barcode-modal',
	templateUrl: './barcode-modal.component.html',
	styleUrls: ['./barcode-modal.component.scss']
})
export class BarcodeModalComponent implements OnInit {
	dataIsAvailable = false;
	barcodeUrl: string;
	storeId: number;
	ngOnInit(): void {
		this.barcodeUrl = `${API_PATH}/code?shop=${this.storeId}`;
	}
}
