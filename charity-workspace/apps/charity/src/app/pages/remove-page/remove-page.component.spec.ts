import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { STORES } from '../../constants/sections';
import { RemovePageComponent } from './remove-page.component';

describe('RemovePageComponent', () => {
	let component: RemovePageComponent;
	let fixture: ComponentFixture<RemovePageComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [RemovePageComponent]
		});
		fixture = TestBed.createComponent(RemovePageComponent);
		component = fixture.componentInstance;
	});

	it('can load instance', () => {
		expect(component).toBeTruthy();
	});

	it(`stores has default value`, () => {
		expect(component.stores).toEqual(STORES);
	});
});
