import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ElementOptionsComponent } from '../element-options/element-options.component';
import { BlockType, ElementBlock } from '../entities/blocks';
import { ActiveElementService } from '../services/active-element.service';
import { PageService } from '../services/page.service';


@Component({
  selector: 'app-element-renderer',
  templateUrl: './element-renderer.component.html',
  styleUrls: ['./element-renderer.component.css']
})
export class ElementRendererComponent implements OnInit {
  @Input() element: ElementBlock
  @Output() selectElement = new EventEmitter<{ block: ElementBlock, path: number[] }>()
  BlockType = BlockType
  isActive$: Observable<boolean>;
  constructor(private activeElementService: ActiveElementService,
     private pageService: PageService,
     private elementOptions: ElementOptionsComponent) { }

  ngOnInit(): void {
    this.isActive$ = this.activeElementService.activeElement$.pipe(map((el) => this.element === el));
  }

  onSelectElement(block: ElementBlock, path: number[] = []) {
    this.selectElement.emit({ block, path });
  }
  isText(e: string | ElementBlock): e is string {
    return typeof e === 'string'
  }

  get isEditable() {
    return [BlockType.Text, BlockType.Heading, BlockType.List].includes(this.element.type)
  }
  onDelete() {
    this.pageService.deleteBlock()
  }
  //delete eventlistener
}
