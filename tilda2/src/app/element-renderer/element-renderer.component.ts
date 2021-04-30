import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageElement } from '../entities/page';

@Component({
  selector: 'app-element-renderer',
  templateUrl: './element-renderer.component.html',
  styleUrls: ['./element-renderer.component.css']
})
export class ElementRendererComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() element: PageElement
  @Output() selectElement = new EventEmitter<PageElement>()

  onElementClick(event: MouseEvent){
    event.stopPropagation();
    this.selectElement.emit(this.element);
  }
  isText(e: string | PageElement): e is string {
    return typeof e === 'string'
  }

}
