import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TextBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-text-block-renderer',
  templateUrl: './text-block.renderer.component.html',
  styleUrls: ['./text-block.renderer.component.scss']
})
export class TextBlockRendererComponent implements OnInit {
  @Input() block: TextBlock;
  @Input() isEditing: boolean;
  @Output() selectElement = new EventEmitter<TextBlock>()
  @Output() save = new EventEmitter<string>()
  @Output() cancel = new EventEmitter<void>()


  constructor() { }

  onElementClick(event: MouseEvent){
    event.stopPropagation();
    this.selectElement.emit(this.block);
  }
  ngOnInit(): void {
  }
  onSave(content: string){
    this.save.emit(content)
  }
  onCancel(){
    this.cancel.emit()
  }
}
