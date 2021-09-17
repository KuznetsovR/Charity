import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { SECTIONS } from '../../constants/sections';
import { MainPageComponent } from './main-page.component';
import { jest } from '@jest/globals';


describe('MainPageComponent', () => {
	let component: MainPageComponent;
	let fixture: ComponentFixture<MainPageComponent>;

	beforeEach(() => {
		const bsModalServiceStub = () => ({
			show: (getCardModalComponent, object) => ({})
		});
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [MainPageComponent],
			providers: [{ provide: BsModalService, useFactory: bsModalServiceStub }]
		});
		fixture = TestBed.createComponent(MainPageComponent);
		component = fixture.componentInstance;
	});

	it('can load instance', () => {
		expect(component).toBeTruthy();
	});

	it(`sections has default value`, () => {
		expect(component.sections).toEqual(SECTIONS);
	});

	describe('openModal', () => {
		it('makes expected calls', () => {
			const bsModalServiceStub: BsModalService = fixture.debugElement.injector.get(BsModalService);
			jest.spyOn(bsModalServiceStub, 'show');
			component.openModal();
			expect(bsModalServiceStub.show).toHaveBeenCalled();
		});
	});
});
