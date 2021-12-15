import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FoundCardModalComponent } from './found-card-modal.component';

describe('FoundCardModalComponent', () => {
	let component: FoundCardModalComponent;
	let fixture: ComponentFixture<FoundCardModalComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [FoundCardModalComponent]
		});
		fixture = TestBed.createComponent(FoundCardModalComponent);
		component = fixture.componentInstance;
	});

	it('can load instance', () => {
		expect(component).toBeTruthy();
	});
});
