import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BlockType, ElementBlock, isSectionBlock } from '../entities/blocks';
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

  changeBlock(block: ElementBlock){
    const path = this.activeElementService.path;
    const arr = path.split('-');
    arr.pop();
    const sections = this._page$.value.sections;
    let parent: ElementBlock[] = sections;
    for(let id of arr){
      const index = parent.findIndex((e) => e.id === id)
      const child: ElementBlock = parent[index];
      if (isSectionBlock(child)){
        parent = child.children;
      }else{
        parent[index] = block;
      }
    }
  }
}
