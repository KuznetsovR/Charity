import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '../../interfaces/interfaces';
import { STORES } from '../../constants/sections';
import { RemovePageComponent } from './remove-page.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

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
