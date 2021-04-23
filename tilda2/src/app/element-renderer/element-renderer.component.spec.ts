import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementRendererComponent } from './element-renderer.component';

describe('ElementRendererComponent', () => {
  let component: ElementRendererComponent;
  let fixture: ComponentFixture<ElementRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
