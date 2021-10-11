import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FoundClientModalComponent } from './found-client-modal.component';

describe('FoundClientModalComponent', () => {
	let component: FoundClientModalComponent;
	let fixture: ComponentFixture<FoundClientModalComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [FoundClientModalComponent]
		});
		fixture = TestBed.createComponent(FoundClientModalComponent);
		component = fixture.componentInstance;
	});

	it('can load instance', () => {
		expect(component).toBeTruthy();
	});
});
