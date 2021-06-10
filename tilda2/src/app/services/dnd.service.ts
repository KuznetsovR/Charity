import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ElementBlock, GridBlock, HeadingBlock, ImageBlock, SectionBlock, TextBlock } from '../entities/blocks';
import { PageService } from './page.service';

@Injectable({
  providedIn: 'root'
})
export class DndService {
  private _draggedBlock$ = new BehaviorSubject<TextBlock | HeadingBlock | ImageBlock | GridBlock | SectionBlock>(null)
  public dragActive$ = this._draggedBlock$.pipe(map(Boolean))
  constructor(
    private pageService: PageService
  ) { }

  drag(el: TextBlock | HeadingBlock | ImageBlock | GridBlock | SectionBlock){
    this._draggedBlock$.next(el)
  }
  drop(path: number[]){
    this.pageService.addElement(this._draggedBlock$.value, path)
  }
  dragend(){
    this._draggedBlock$.next(null)
  }
  get draggedBlock$(): Observable<ElementBlock>{
    return this._draggedBlock$
  }
}
