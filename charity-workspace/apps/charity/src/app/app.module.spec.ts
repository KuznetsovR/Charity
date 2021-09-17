import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('AppModule', () => {
	let pipe: AppModule;

	beforeEach(() => {
		TestBed.configureTestingModule({ providers: [AppModule] });
		pipe = TestBed.inject(AppModule);
	});

	it('can load instance', () => {
		expect(pipe).toBeTruthy();
	});
});
