import { TestBed } from '@angular/core/testing';
import { AppRoutingModule } from './app-routing.module';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('AppRoutingModule', () => {
	let pipe: AppRoutingModule;

	beforeEach(() => {
		TestBed.configureTestingModule({ providers: [AppRoutingModule] });
		pipe = TestBed.inject(AppRoutingModule);
	});

	it('can load instance', () => {
		expect(pipe).toBeTruthy();
	});
});
