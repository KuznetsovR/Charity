import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlockType, ElementBlock } from '../entities/blocks';


@Component({
  selector: 'app-element-renderer',
  templateUrl: './element-renderer.component.html',
  styleUrls: ['./element-renderer.component.css']
})
export class ElementRendererComponent implements OnInit {
  @Input() element: ElementBlock
  @Output() selectElement = new EventEmitter<{block: ElementBlock, path:number[]}>()
  BlockType = BlockType  
  constructor() { }

  ngOnInit(): void {
  }

  onSelectElement(block: ElementBlock, path: number[]=[]){
    this.selectElement.emit({block, path});
  }
  isText(e: string | ElementBlock): e is string {
    return typeof e === 'string'
  }

}
