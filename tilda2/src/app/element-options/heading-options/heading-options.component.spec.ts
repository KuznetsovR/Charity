import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingOptionsComponent } from './heading-options.component';

describe('HeadingOptionsComponent', () => {
  let component: HeadingOptionsComponent;
  let fixture: ComponentFixture<HeadingOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
