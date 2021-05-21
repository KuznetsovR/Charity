import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-text-block-renderer',
  templateUrl: './text-block.renderer.component.html',
  styleUrls: ['./text-block.renderer.component.scss']
})
export class TextBlockRendererComponent implements OnInit {
  @Input() block: TextBlock;
  @Output() selectElement = new EventEmitter<TextBlock>()

  constructor() { }

  onElementClick(event: MouseEvent){
    event.stopPropagation();
    this.selectElement.emit(this.block);
  }
  
  ngOnInit(): void {
  }

}
