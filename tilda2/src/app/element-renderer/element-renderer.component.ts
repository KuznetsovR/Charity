import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockType, ElementBlock } from '../entities/blocks';


@Component({
  selector: 'app-element-renderer',
  templateUrl: './element-renderer.component.html',
  styleUrls: ['./element-renderer.component.css']
})
export class ElementRendererComponent implements OnInit {
  @Input() element: ElementBlock
  @Output() selectElement = new EventEmitter<{block: ElementBlock, id:string}>()
  BlockType = BlockType  
  constructor() { }

  ngOnInit(): void {
  }

  onSelectElement(block: ElementBlock, id = ''){
    this.selectElement.emit({block, id: `${this.element.id}-${id}`});
  }
  isText(e: string | ElementBlock): e is string {
    return typeof e === 'string'
  }

}
