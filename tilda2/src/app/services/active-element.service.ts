import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElementBlock } from '../entities/blocks';

@Injectable({
  providedIn: 'root'
})
export class ActiveElementService {

  constructor() { }
  private _activeElement$ = new BehaviorSubject<ElementBlock>(null);
  selectElement(el : ElementBlock){
    this._activeElement$.next(el)
  }
  get activeElement$(): Observable<ElementBlock>{
    return this._activeElement$
  }
}
