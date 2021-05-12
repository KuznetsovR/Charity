import { Component, OnInit } from '@angular/core';
import { BlockType, TextBlock } from '../entities/blocks';

@Component({
  selector: 'app-choose-panel',
  templateUrl: './choose-panel.component.html',
  styleUrls: ['./choose-panel.component.css']
})
export class ChoosePanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectElement(type: BlockType){
    // pageService.addBlock(type)
    // switch (type) {
    //   case 1:
    //     console.log(BlockType[0])
    //     break
    //   case 2:
    //     console.log(BlockType)
    //     break
    // }
    console.log(BlockType[type-1])
  }
}
