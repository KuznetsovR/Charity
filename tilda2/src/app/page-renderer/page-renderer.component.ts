import { Component, OnInit } from '@angular/core';
import { ElementBlock } from '../entities/blocks';
import { Page } from '../entities/page';
import { ActiveElementService } from '../services/active-element.service';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-page-renderer',
  templateUrl: './page-renderer.component.html',
  styleUrls: ['./page-renderer.component.css']
})
export class PageRendererComponent implements OnInit {
  page: Page;

  constructor(private activeElementService: ActiveElementService,
    private pageService: PageService
    ) { }

  onSelectElement(el: ElementBlock){
    this.activeElementService.selectElement(el);
  }
  ngOnInit(): void {
    this.pageService.page$.subscribe((page) => {this.page = page})
  }

}
