import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { FormComponent } from './form.component';
import { FoundCardModalComponent } from '../found-card-modal/found-card-modal.component';

describe('FormComponent', () => {
	let component: FormComponent;
	let fixture: ComponentFixture<FormComponent>;

	beforeEach(() => {
		const apiServiceStub = () => ({
			postRequest: (path, reqBody) => ({}),
			getRequest: (path) => ({ then: () => ({}) }),
			deleteRequest: (path, reqBody) => ({})
		});
		const bsModalServiceStub = () => ({
			show: (foundCardModalComponent, initialState) => ({})
		});
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [FormComponent],
			providers: [
				{ provide: ApiService, useFactory: apiServiceStub },
				{ provide: BsModalService, useFactory: bsModalServiceStub }
			]
		});
		fixture = TestBed.createComponent(FormComponent);
		component = fixture.componentInstance;
	});

	it('can load instance', () => {
		expect(component).toBeTruthy();
	});

	describe('selectStore', () => {
		it('can select store', () => {
			expect(component.selectedStore).toEqual({
				name: 'Карусель',
				image: 'https://logosklad.ru/photo/logos/578/1532440894.jpg'
			});
		});
	});
	describe('ngOnInit', () => {
		it('can select store', () => {
			component.formInputs = ['cardNumber', 'passportNumber', 'name', 'reason'];
			component.ngOnInit();
			expect(Object.keys(component.findCardDataForm.controls)).toEqual(component.formInputs);
		});
	});

	describe('onSubmit', () => {
		it('makes expected calls', () => {
			const apiServiceStub: ApiService = fixture.debugElement.injector.get(ApiService);
			const bsModalServiceStub: BsModalService = fixture.debugElement.injector.get(BsModalService);

			jest.spyOn(apiServiceStub, 'postRequest');
			apiServiceStub.postRequest('somePath', {});

			jest.spyOn(apiServiceStub, 'getRequest');
			apiServiceStub.getRequest('somePath');

			jest.spyOn(apiServiceStub, 'deleteRequest');
			apiServiceStub.deleteRequest('somePath', {});

			jest.spyOn(bsModalServiceStub, 'show');
			bsModalServiceStub.show(FoundCardModalComponent);

			component.onSubmit();
			expect(apiServiceStub.postRequest).toHaveBeenCalled();
			expect(apiServiceStub.getRequest).toHaveBeenCalled();
			expect(apiServiceStub.deleteRequest).toHaveBeenCalled();
			expect(bsModalServiceStub.show).toHaveBeenCalled();
		});
	});
});
