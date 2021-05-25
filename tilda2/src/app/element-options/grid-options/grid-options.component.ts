import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { GridBlock, ImageBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-grid-options',
  templateUrl: './grid-options.component.html',
  styleUrls: ['./grid-options.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GridOptionsComponent implements OnInit {
  @Input() block: GridBlock
  @Output() optionsChange = new EventEmitter<GridBlock>()

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsChange(event: Event){
    const cols = (event.target as HTMLInputElement).valueAsNumber
    this.optionsChange.emit({
      ...this.block,
      cols
    })
  }
  onRowsChange(event: Event){
    const rows = (event.target as HTMLInputElement).valueAsNumber
    this.optionsChange.emit({
      ...this.block,
      rows
    })
  }
}
