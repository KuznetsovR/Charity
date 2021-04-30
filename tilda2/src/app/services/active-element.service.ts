import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageElement } from '../entities/page';

@Injectable({
  providedIn: 'root'
})
export class ActiveElementService {

  constructor() { }
  private _activeElement$ = new BehaviorSubject<PageElement>(null);
  selectElement(el : PageElement){
    this._activeElement$.next(el)
  }
  get activeElement$(): Observable<PageElement>{
    return this._activeElement$
  }
}
