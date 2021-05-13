import { Component, OnInit } from '@angular/core';
import { BlockType } from '../entities/blocks';
import { GridBlockClass, HeadingBlockClass, ImageBlockClass, ListBlockClass, TextBlockClass } from '../entities/classes';
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
        const textBlock = new TextBlockClass('0002', 'sss', BlockType.Text)
        //this.pageService.setItem(block, path);              dynamic id
        console.log(textBlock);
        return textBlock;
      case 2:
        const headingBlock = new HeadingBlockClass('0002', 'sss', 1, BlockType.Heading)
        console.log(headingBlock)
        return headingBlock;
      case 3:
        const imageBlock = new ImageBlockClass('0002', 'src', 'alt', BlockType.Image)
        console.log(imageBlock)
        return imageBlock;
      case 4:
        const listBlock = new ListBlockClass('0002', false, 'pathToMarker', BlockType.List)
        console.log(listBlock)
        return listBlock;
      case 5:
        const gridBlock = new GridBlockClass('0002', 5, 2, BlockType.Grid)
        console.log(gridBlock)
        return gridBlock;
    }
  }
}
