import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { EXAMPLE_PAGE } from '../entities/mock';
import { Page } from '../entities/page';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { }
  private _page$ = new BehaviorSubject<Page>(EXAMPLE_PAGE);
  selectElement(el : Page){
    this._page$.next(el)
  }
  get page$(): Observable<Page>{
    return this._page$
  }
}
