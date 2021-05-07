import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { BlockType, ElementBlock } from '../entities/blocks';
import { ActiveElementService } from '../services/active-element.service';

@Component({
  selector: 'app-element-options',
  templateUrl: './element-options.component.html',
  styleUrls: ['./element-options.component.css']
})
export class ElementOptionsComponent implements OnInit {

  element: ElementBlock;
  constructor(private activeElementService: ActiveElementService) { }
  BlockType = BlockType
  ngOnInit(): void {
    this.activeElementService.activeElement$.subscribe((element) => this.element = element)
  }

}
