import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ElementOptionsComponent } from '../element-options/element-options.component';
import { BlockType, ElementBlock } from '../entities/blocks';
import { TextBlockClass } from '../entities/classes';
import { ActiveElementService } from '../services/active-element.service';
import { PageService } from '../services/page.service';


@Component({
  selector: 'app-element-renderer',
  templateUrl: './element-renderer.component.html',
  styleUrls: ['./element-renderer.component.scss']
})
export class ElementRendererComponent implements OnInit {
  @Input() element: ElementBlock
  @Output() selectElement = new EventEmitter<{ block: ElementBlock, path: number[] }>()
  BlockType = BlockType
  isActive$: Observable<boolean>;
  isEditing = false;
  constructor(private activeElementService: ActiveElementService,
     private pageService: PageService) { }

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
  onDelete(event: MouseEvent) {
    event.stopPropagation();
    this.pageService.deleteBlock()
  }
  onEdit(event: MouseEvent){
    event.stopPropagation();
    this.isEditing = true;
    this.activeElementService.blockActivation()
  }
  onSave(content: string){
    const element = new TextBlockClass(this.element.id, content)
    this.pageService.changeBlock(element)
    this.cancelEditing();
  }
  cancelEditing(){
    this.isEditing = false;
    this.activeElementService.unblockActivation()
  }
}
