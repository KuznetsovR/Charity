import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockType, ElementBlock } from '../entities/blocks';


@Component({
  selector: 'app-element-renderer',
  templateUrl: './element-renderer.component.html',
  styleUrls: ['./element-renderer.component.css']
})
export class ElementRendererComponent implements OnInit {
  @Input() element: ElementBlock
  @Output() selectElement = new EventEmitter<ElementBlock>()
  BlockType = BlockType  
  constructor() { }

  ngOnInit(): void {
  }

  onElementClick(event: MouseEvent){
    event.stopPropagation();
    this.selectElement.emit(this.element);
  }
  isText(e: string | ElementBlock): e is string {
    return typeof e === 'string'
  }

}
