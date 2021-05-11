import { Component, OnInit } from '@angular/core';
import { BlockType, ElementBlock } from '../entities/blocks';
import { ActiveElementService } from '../services/active-element.service';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-element-options',
  templateUrl: './element-options.component.html',
  styleUrls: ['./element-options.component.css']
})
export class ElementOptionsComponent implements OnInit {

  element: ElementBlock;
  constructor(private activeElementService: ActiveElementService,
    private pageService: PageService) { }

  BlockType = BlockType
  ngOnInit(): void {
    this.activeElementService.activeElement$.subscribe((element) => this.element = element)
    this.pageService.changeBlock(this.element)
  }

}
