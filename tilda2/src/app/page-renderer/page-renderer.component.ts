import { Component, OnInit } from '@angular/core';
import { ElementBlock } from '../entities/blocks';
import { Page } from '../entities/page';
import { ActiveElementService } from '../services/active-element.service';
import { DndService } from '../services/dnd.service';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-page-renderer',
  templateUrl: './page-renderer.component.html',
  styleUrls: ['./page-renderer.component.scss']
})
export class PageRendererComponent implements OnInit {
  page: Page;

  constructor(private activeElementService: ActiveElementService,
    private pageService: PageService,
    private dndService: DndService
    ) { }

  onSelectElement(block: ElementBlock, path: number[], index: number){
    this.activeElementService.selectElement(block, [index, ...path]);
  }
  onBlockDrop(index: number, path: number[]){
    this.dndService.drop([index, ...path])
  }
  ngOnInit(): void {
    this.pageService.page$.subscribe((page) => {
      console.log("Page", page);
      this.page = page;
    })
  }

}
