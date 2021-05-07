import { Component, Input, OnInit } from '@angular/core';
import { HeadingBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-heading-block-renderer',
  templateUrl: './heading-block.renderer.component.html',
  styleUrls: ['./heading-block.renderer.component.css']
})
export class HeadingBlockRendererComponent implements OnInit {
  @Input() block: HeadingBlock;
  constructor() { }

  ngOnInit(): void {
  }

}
