import { Component, OnInit } from '@angular/core';
import { BlockType, TextBlock, TextBlockClass } from '../entities/blocks';
import { EXAMPLE_PAGE } from '../entities/mock';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-choose-panel',
  templateUrl: './choose-panel.component.html',
  styleUrls: ['./choose-panel.component.css']
})
export class ChoosePanelComponent implements OnInit {

  constructor(
    private pageService: PageService
  ) { }

  ngOnInit(): void {
  }

  selectElement(type: BlockType){
    // pageService.addBlock(type)
    switch (type) {
      case 1:
        const block = new TextBlockClass('0002', 'sss', BlockType.Text)

        //this.pageService.setItem(block, node);
        console.log(block, EXAMPLE_PAGE);



        return block;
      case 2:
        console.log(BlockType)
        break
    }
  }
}
