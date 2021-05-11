import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlockType } from '../entities/blocks';
import { EXAMPLE_PAGE } from '../entities/mock';
import { Page } from '../entities/page';
import { ActiveElementService } from './active-element.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private activeElementService: ActiveElementService) { }

  private _page$ = new BehaviorSubject<Page>(EXAMPLE_PAGE);

  selectElement(el : Page){
    this._page$.next(el)
  }

  get page$(): Observable<Page>{
    return this._page$
  }

  changeBlock(block){
    const path = this.activeElementService.path;
  }
}
