import { Component, Input, OnInit } from '@angular/core';
import { TextBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-text-block-renderer',
  templateUrl: './text-block.renderer.component.html',
  styleUrls: ['./text-block.renderer.component.css']
})
export class TextBlockRendererComponent implements OnInit {
  @Input() block: TextBlock;
  constructor() { }

  ngOnInit(): void {
  }

}
