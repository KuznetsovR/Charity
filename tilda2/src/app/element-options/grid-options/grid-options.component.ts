import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { GridBlock, ImageBlock } from 'src/app/entities/blocks';
import { TextBlockClass } from 'src/app/entities/classes';

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

  onColumnsChange(event: Event) {
    const cols = (event.target as HTMLInputElement).valueAsNumber
    const children = this.block.children.slice()
    if (cols === this.block.cols + 1) {
      let i = 0;
      while (i < this.block.rows) {
        children.push(new TextBlockClass('0000', 'asd'))
        i++
      }

      this.optionsChange.emit({
        ...this.block,
        cols,
        children
      })
    }
    if (cols === this.block.cols - 1) {
      let i = 0;
      while (i < this.block.rows) {
        children.pop()
        console.log(children)
        i++
      }

      this.optionsChange.emit({
        ...this.block,
        cols,
        children
      })
    }

  }
  onRowsChange(event: Event) {
    const rows = (event.target as HTMLInputElement).valueAsNumber
    const children = this.block.children.slice()
    if (rows === this.block.rows + 1) {
      let i = 0;
      console.log(children)
      while (i < this.block.cols) {
        children.push(new TextBlockClass('0000', 'asd'))
        i++
      }
      console.log(children)

      this.optionsChange.emit({
        ...this.block,
        rows,
        children
      })
    }
    if (rows === this.block.rows - 1) {
      let i = 0;
      while (i < this.block.cols) {
        children.pop()
        console.log(children)
        i++
      }

      this.optionsChange.emit({
        ...this.block,
        rows,
        children
      })
    }

  }
}
