import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ElementBlock, GridBlock } from 'src/app/entities/blocks';
import { TextBlockClass } from 'src/app/entities/classes';

@Component({
  selector: 'app-grid-block-renderer',
  templateUrl: './grid-block.renderer.component.html',
  styleUrls: ['./grid-block.renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridBlockRendererComponent implements OnInit {
  @Input() block:GridBlock
  @Output() selectElement = new EventEmitter<{block: ElementBlock, path: number[]}>()
  constructor() { }

  ngOnInit(): void {
  }

  onSelectElement(event: MouseEvent){
    event.stopPropagation();
    this.selectElement.emit({block: this.block, path: []});
  }
  onChildClick(block: ElementBlock, path: number[], index: number){
    this.selectElement.emit({block, path: [index, ...path]});
  }
}
