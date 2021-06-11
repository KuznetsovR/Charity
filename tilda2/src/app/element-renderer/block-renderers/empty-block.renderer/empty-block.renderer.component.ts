import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-empty-block-renderer',
  templateUrl: './empty-block.renderer.component.html',
  styleUrls: ['./empty-block.renderer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyBlockRendererComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }

}
