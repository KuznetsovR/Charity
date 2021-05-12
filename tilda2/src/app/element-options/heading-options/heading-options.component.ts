import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeadingBlock, HeadingLevel } from 'src/app/entities/blocks';

@Component({
  selector: 'app-heading-options',
  templateUrl: './heading-options.component.html',
  styleUrls: ['./heading-options.component.css']
})
export class HeadingOptionsComponent implements OnInit {
  @Input() block: HeadingBlock
  @Output() optionsChange = new EventEmitter<HeadingBlock>()
  constructor() { }

  onLevelChange(event: Event) {
    const level = (event.target as HTMLInputElement).valueAsNumber as HeadingLevel;
    if (level === this.block.level) return;
    this.optionsChange.emit({
      ...this.block,
      level
    })
  }

  ngOnInit(): void {
  }

}
