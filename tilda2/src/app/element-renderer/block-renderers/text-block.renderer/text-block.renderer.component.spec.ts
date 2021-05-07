import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextBlock.RendererComponent } from './text-block.renderer.component';

describe('TextBlock.RendererComponent', () => {
  let component: TextBlock.RendererComponent;
  let fixture: ComponentFixture<TextBlock.RendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextBlock.RendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextBlock.RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
