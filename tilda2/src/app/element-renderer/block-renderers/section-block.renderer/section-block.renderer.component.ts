import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElementBlock, SectionBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-section-block-renderer',
  templateUrl: './section-block.renderer.component.html',
  styleUrls: ['./section-block.renderer.component.css']
})
export class SectionBlockRendererComponent implements OnInit {
  @Input() block: SectionBlock;
  @Output() selectElement = new EventEmitter<{block: ElementBlock, path: number[]}>()

  constructor() { }

  onElementClick(event: MouseEvent){
    event.stopPropagation();
    this.selectElement.emit({block: this.block, path: []});
  }
  onChildClick(block: ElementBlock, path: number[], index: number){
    this.selectElement.emit({block, path: [index, ...path]});
  }
  ngOnInit(): void {
  }

}
