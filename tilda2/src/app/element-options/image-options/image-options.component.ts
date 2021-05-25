import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { ImageBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-image-options',
  templateUrl: './image-options.component.html',
  styleUrls: ['./image-options.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageOptionsComponent implements OnInit {
  @Input() block: ImageBlock;
  @Output() optionsChange = new EventEmitter<ImageBlock>()
  constructor() { }

  ngOnInit(): void {
  }
  onSourceChange(event: Event){
    const src = (event.target as HTMLInputElement).value
    this.optionsChange.emit({
      ...this.block,
      src
    })
  }
  onAltChange(event: Event){
    const alt = (event.target as HTMLInputElement).value
    this.optionsChange.emit({
      ...this.block,
      alt
    })
  }
  onWidthChange(event: Event){
    const width = (event.target as HTMLInputElement).value
    this.optionsChange.emit({
      ...this.block,
      width
    })
  }
  onHeightChange(event: Event){
    const height = (event.target as HTMLInputElement).value
    this.optionsChange.emit({
      ...this.block,
      height
    })
  }
}
