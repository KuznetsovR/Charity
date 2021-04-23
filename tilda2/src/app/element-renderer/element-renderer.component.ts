import { Component, Input, OnInit } from '@angular/core';
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

  isText(e: string | PageElement): e is string {
    return typeof e === 'string'
  }

}
