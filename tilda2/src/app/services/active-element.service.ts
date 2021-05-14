import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElementBlock } from '../entities/blocks';

@Injectable({
  providedIn: 'root'
})
export class ActiveElementService {

  constructor() { }
  private _activeElement$ = new BehaviorSubject<ElementBlock>(null);
  private _path: number[] = [];
  
  selectElement(el : ElementBlock, path: number[]){
    this._path = path;
    this._activeElement$.next(el)
  }
  get path(){
    return this._path;
  }
  get activeElement$(): Observable<ElementBlock>{
    return this._activeElement$
  }
}
