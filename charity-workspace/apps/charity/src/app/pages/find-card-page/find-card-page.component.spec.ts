import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '../../interfaces/interfaces';
import { STORES } from '../../constants/sections';
import { FindCardPageComponent } from './find-card-page.component';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('FindCardPageComponent', () => {
	let component: FindCardPageComponent;
	let fixture: ComponentFixture<FindCardPageComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [FindCardPageComponent]
		});
		fixture = TestBed.createComponent(FindCardPageComponent);
		component = fixture.componentInstance;
	});

	it('can load instance', () => {
		expect(component).toBeTruthy();
	});

	it(`stores has default value`, () => {
		expect(component.stores).toEqual(STORES);
	});
});
