import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { GridBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-grid-block-renderer',
  templateUrl: './grid-block.renderer.component.html',
  styleUrls: ['./grid-block.renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridBlockRendererComponent implements OnInit {
  @Input() block:GridBlock
  @Output() selectElement = new EventEmitter<GridBlock>()
  constructor() { }

  ngOnInit(): void {
  }

  onSelectElement(event: MouseEvent){
    event.stopPropagation();
    this.selectElement.emit(this.block)
  }
}
