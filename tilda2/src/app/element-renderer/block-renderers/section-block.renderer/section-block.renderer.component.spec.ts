import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlock.RendererComponent } from './section-block.renderer.component';

describe('SectionBlock.RendererComponent', () => {
  let component: SectionBlock.RendererComponent;
  let fixture: ComponentFixture<SectionBlock.RendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlock.RendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlock.RendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
