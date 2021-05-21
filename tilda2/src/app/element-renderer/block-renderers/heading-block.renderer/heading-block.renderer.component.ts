import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeadingBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-heading-block-renderer',
  templateUrl: './heading-block.renderer.component.html',
  styleUrls: ['./heading-block.renderer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadingBlockRendererComponent implements OnInit {
  @Input() block: HeadingBlock;
  @Output() selectElement = new EventEmitter<HeadingBlock>()

  constructor() { }

  onElementClick(event: MouseEvent){
    event.stopPropagation();
    this.selectElement.emit(this.block);
  }
  ngOnInit(): void {
  }

}
