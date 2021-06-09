import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { DndService } from '../services/dnd.service';

@Component({
  selector: 'app-drop-area',
  templateUrl: './drop-area.component.html',
  styleUrls: ['./drop-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropAreaComponent implements OnInit {
  @Output() blockDrop = new EventEmitter<void>()
  constructor(
    readonly dndService: DndService
  ) { }

  ngOnInit(): void {
  }
  onDrop(){
    this.blockDrop.emit()
    // this.dndService.drop()
  }
}
