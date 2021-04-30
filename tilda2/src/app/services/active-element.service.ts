import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PageElement } from '../entities/page';

@Injectable({
  providedIn: 'root'
})
export class ActiveElementService {

  constructor() { }
  activeElement$ = new BehaviorSubject<PageElement>(null)

  selectElement(el : PageElement){
    this.activeElement$.next(el)
  }
}
