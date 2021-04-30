import { Component, OnInit } from '@angular/core';
import { EXAMPLE_PAGE } from '../entities/mock';
import { Page, PageElement } from '../entities/page';
import { ActiveElementService } from '../services/active-element.service';

@Component({
  selector: 'app-page-renderer',
  templateUrl: './page-renderer.component.html',
  styleUrls: ['./page-renderer.component.css']
})
export class PageRendererComponent implements OnInit {

  constructor(private activeElementService: ActiveElementService) { }

  onSelectElement(el: PageElement){
    this.activeElementService.selectElement(el);
  }

  ngOnInit(): void {
  }

  page: Page = EXAMPLE_PAGE;
}
