import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dropped-panel',
  templateUrl: './dropped-panel.component.html',
  styleUrls: ['./dropped-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DroppedPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  drop(event: CdkDragDrop<number[]>) {
    console.log('=====>', event)
    //   if (event.previousContainer === event.container) {
    //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    //   } else {
    //     transferArrayItem(event.previousContainer.data,
    //       event.container.data,
    //       event.previousIndex,
    //       event.currentIndex);
    //   }
  }
}
