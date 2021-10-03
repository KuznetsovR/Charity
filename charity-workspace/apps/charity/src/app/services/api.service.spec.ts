import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

describe('ApiService', () => {
	let service: ApiService;

	beforeEach(() => {
		const routerStub = () => ({ navigate: (array) => ({}) });
		TestBed.configureTestingModule({
			providers: [ApiService, { provide: Router, useFactory: routerStub }]
		});
		service = TestBed.inject(ApiService);
	});

	it('can load instance', () => {
		expect(service).toBeTruthy();
	});
});
