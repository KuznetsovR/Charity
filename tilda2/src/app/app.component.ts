import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'tilda2';
  drop(event: CdkDragDrop<number[]>) {
    console.log(event)
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
