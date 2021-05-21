import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ElementBlock } from '../entities/blocks';

@Injectable({
  providedIn: 'root'
})
export class ActiveElementService {
  constructor() { }
  private _canActivate$ = new BehaviorSubject(true);
  private _activeElement$ = new BehaviorSubject<ElementBlock>(null);
  private _path: number[] = [];
  
  selectElement(el : ElementBlock, path: number[]){
    if (!this._canActivate$.value) return;
    this._path = path;
    this._activeElement$.next(el)
  }
  deselectElement(){
    this.selectElement(null, null)
  }
  blockActivation(){
    this._canActivate$.next(false)
  }
  unblockActivation(){
    this._canActivate$.next(true)
  }
  get path(){
    return this._path;
  }
  get activeElement$(): Observable<ElementBlock>{
    return this._activeElement$
  }
}
