import { Component, OnInit } from '@angular/core';
import { BlockType } from '../entities/blocks';

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
    // switch (type) {}
    console.log({
      type,
      options:{
        
      }
    })
  }
}
