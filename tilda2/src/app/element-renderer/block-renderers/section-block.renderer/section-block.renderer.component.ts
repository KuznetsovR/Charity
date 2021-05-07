import { Component, Input, OnInit } from '@angular/core';
import { SectionBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-section-block-renderer',
  templateUrl: './section-block.renderer.component.html',
  styleUrls: ['./section-block.renderer.component.css']
})
export class SectionBlockRendererComponent implements OnInit {
  @Input() block: SectionBlock;

  constructor() { }

  ngOnInit(): void {
  }

}
