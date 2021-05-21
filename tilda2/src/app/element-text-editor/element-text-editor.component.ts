import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ContentChange } from 'ngx-quill';

@Component({
  selector: 'app-element-text-editor',
  templateUrl: './element-text-editor.component.html',
  styleUrls: ['./element-text-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementTextEditorComponent implements OnInit {
  @Input() sourceText: string;
  @Input() isHeading = false;
  @Output() save = new EventEmitter<string>()
  @Output() cancel = new EventEmitter<void>()
  content = '';
  constructor() { }

  ngOnInit(): void {
  }

  onContentChanged(event: ContentChange){
    this.content = event.html
    console.log(this.content)
  }
  onSave(event: MouseEvent){
    event.stopPropagation()
    this.save.emit(this.content)
  }
  onCancel(event: MouseEvent){
    event.stopPropagation()
    this.cancel.emit()
  }
}
