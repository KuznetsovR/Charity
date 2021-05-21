import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageBlock } from 'src/app/entities/blocks';

@Component({
  selector: 'app-img-renderer',
  templateUrl: './img-renderer.component.html',
  styleUrls: ['./img-renderer.component.scss']
})
export class ImgRendererComponent implements OnInit {
  @Input() block: ImageBlock
  @Output() selectElement = new EventEmitter<ImageBlock>()
  constructor() { }

  ngOnInit(): void {
  }
  onElementClick(event: MouseEvent){
    event.stopPropagation();
    this.selectElement.emit(this.block);
  }
}
