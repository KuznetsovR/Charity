import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingBlock.RendererComponent } from './heading-block.renderer.component';

describe('HeadingBlock.RendererComponent', () => {
  let component: HeadingBlock.RendererComponent;
  let fixture: ComponentFixture<HeadingBlock.RendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadingBlock.RendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingBlock.RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
