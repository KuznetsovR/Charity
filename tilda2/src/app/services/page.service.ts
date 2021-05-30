import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElementBlock, GridBlock, HeadingBlock, ImageBlock, isGridBlock, isSectionBlock, SectionBlock, TextBlock } from '../entities/blocks';
import { SectionBlockClass } from '../entities/classes';
import { EXAMPLE_PAGE } from '../entities/mock';
import { Page } from '../entities/page';
import { ActiveElementService } from './active-element.service';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor(private activeElementService: ActiveElementService) { }

  private _page$ = new BehaviorSubject<Page>(EXAMPLE_PAGE);

  selectElement(el: Page) {
    this._page$.next(el)
  }

  get page$(): Observable<Page> {
    return this._page$
  }

  setItem() {
    console.log("123");
  }

  changeBlock(block: ElementBlock) {
    const path = this.activeElementService.path;
    const sections = this._page$.value.sections;
    let parent: ElementBlock[] = sections;
    for (let index of path) {
      const child: ElementBlock = parent[index];
      if (isSectionBlock(child) || (isGridBlock(child) && index===path.length-1)) {
        parent = child.children;
      } else {
        parent[index] = block;
        this.activeElementService.selectElement(block, path)
      }
    }
  }
  deleteBlock() {
    const path = this.activeElementService.path;
    const sections = this._page$.value.sections;
    let parent: ElementBlock[] = sections;
    console.log(path)
    const lastIndex = path[path.length - 1]

    for(let index of path.slice(0, path.length-1)){
      const child: ElementBlock = parent[index];
      if (isSectionBlock(child)){
        parent = child.children;
      }
    } 
    parent.splice(lastIndex, 1)
    this.activeElementService.deselectElement();
  }
  appendElement(block: (TextBlock | HeadingBlock | ImageBlock | GridBlock | SectionBlock)) {
    console.log(block)
    if (isSectionBlock(block)) {
      this._page$.next({
        ...this._page$.value,
        sections: this._page$.value.sections.concat(block)
      })
      console.log(this._page$.value)
    } else {
      const sections = this._page$.value.sections.slice();
      const section = sections[sections.length - 1];
      sections[sections.length - 1] = new SectionBlockClass(section.id, section.children.concat(block))
      this._page$.next({
        ...this._page$.value,
        sections
      })
    }
  }
}
