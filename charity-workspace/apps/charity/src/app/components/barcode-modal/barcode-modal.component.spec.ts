import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BarcodeModalComponent } from './barcode-modal.component';


describe('BarcodeModalComponent', () => {
	let component: BarcodeModalComponent;
	let fixture: ComponentFixture<BarcodeModalComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [BarcodeModalComponent]
		});
		fixture = TestBed.createComponent(BarcodeModalComponent);
		component = fixture.componentInstance;
	});

	it('can load instance', () => {
		expect(component).toBeTruthy();
	});
});
