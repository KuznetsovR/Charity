import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { STORES } from '../../constants/sections';
import { GetCardModalComponent } from './get-card-modal.component';
import { jest } from '@jest/globals';


describe('GetCardModalComponent', () => {
	let component: GetCardModalComponent;
	let fixture: ComponentFixture<GetCardModalComponent>;

	beforeEach(() => {
		const bsModalRefStub = () => ({ hide: () => ({}) });
		const bsModalServiceStub = () => ({
			show: (barcodeModalComponent, object) => ({})
		});
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [GetCardModalComponent],
			providers: [
				{ provide: BsModalRef, useFactory: bsModalRefStub },
				{ provide: BsModalService, useFactory: bsModalServiceStub }
			]
		});
		fixture = TestBed.createComponent(GetCardModalComponent);
		component = fixture.componentInstance;
	});

	it('can load instance', () => {
		expect(component).toBeTruthy();
	});

	it(`stores has default value`, () => {
		expect(component.stores).toEqual(STORES);
	});

	describe('getCard', () => {
		it('makes expected calls', () => {
			const bsModalRefStub: BsModalRef = fixture.debugElement.injector.get(BsModalRef);
			const bsModalServiceStub: BsModalService = fixture.debugElement.injector.get(BsModalService);
			// jest.spyOn(bsModalServiceStub, 'show').mockImplementation(() => Promise.resolve());
			// correct method, but idk what fn to throw in mockImplementation and is it needed at all
			jest.spyOn(bsModalRefStub, 'hide');
			jest.spyOn(bsModalServiceStub, 'show');
			component.getCard();
			expect(bsModalRefStub.hide).toHaveBeenCalled();
			expect(bsModalServiceStub.show).toHaveBeenCalled();
		});
	});
});
