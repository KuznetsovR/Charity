import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-barcode-modal',
	templateUrl: './barcode-modal.component.html',
	styleUrls: ['./barcode-modal.component.scss']
})
export class BarcodeModalComponent implements OnInit {
	dataIsAvailable = false;
	barcodeUrl: string;
	ngOnInit(): void {
		this.barcodeUrl = 'http://4799-82-151-196-167.ngrok.io/code?shop=1';
	}
}
