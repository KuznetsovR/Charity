import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { STORES } from '../../constants/sections';
import { AddPageComponent } from './add-page.component';

describe('AddPageComponent', () => {
	let component: AddPageComponent;
	let fixture: ComponentFixture<AddPageComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [AddPageComponent]
		});
		fixture = TestBed.createComponent(AddPageComponent);
		component = fixture.componentInstance;
	});

	it('can load instance', () => {
		expect(component).toBeTruthy();
	});

	it(`stores has default value`, () => {
		expect(component.stores).toEqual(STORES);
	});
});
