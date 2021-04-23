import { Component, OnInit } from '@angular/core';
import { EXAMPLE_PAGE } from '../entities/mock';
import { Page } from '../entities/page';

@Component({
  selector: 'app-page-renderer',
  templateUrl: './page-renderer.component.html',
  styleUrls: ['./page-renderer.component.css']
})
export class PageRendererComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  page: Page = EXAMPLE_PAGE;
}
