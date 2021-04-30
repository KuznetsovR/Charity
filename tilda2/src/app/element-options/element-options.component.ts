import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActiveElementService } from '../services/active-element.service';

@Component({
  selector: 'app-element-options',
  templateUrl: './element-options.component.html',
  styleUrls: ['./element-options.component.css']
})
export class ElementOptionsComponent implements OnInit {

  constructor(private activeElementService: ActiveElementService) { }
  tag$: Observable<string>


  ngOnInit(): void {
    this.tag$ = this.activeElementService.activeElement$.pipe(
      map((el) => el && el.tag)
    )
  }

}
