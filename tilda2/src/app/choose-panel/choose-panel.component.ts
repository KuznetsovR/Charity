import { Component, OnInit } from '@angular/core';
import { BlockType } from '../entities/blocks';
import { GridBlockClass, HeadingBlockClass, ImageBlockClass, ListBlockClass, SectionBlockClass, TextBlockClass } from '../entities/classes';
import { PageService } from '../services/page.service';

@Component({
  selector: 'app-choose-panel',
  templateUrl: './choose-panel.component.html',
  styleUrls: ['./choose-panel.component.scss']
})
export class ChoosePanelComponent implements OnInit {
  BlockType = BlockType;
  constructor(
    private pageService: PageService
  ) { }

  ngOnInit(): void {
  }

  selectElement(type: BlockType){
    // pageService.addBlock(type)
    switch (type) {
      case BlockType.Text:
        const textBlock = new TextBlockClass('0002', 'sss')
        //this.pageService.setItem(block, path);              dynamic id
        this.pageService.appendElement(textBlock)
        return
      case BlockType.Heading:
        const headingBlock = new HeadingBlockClass('0002', 'sss', 1)
        this.pageService.appendElement(headingBlock)
        return
      case BlockType.Image:
        const imageBlock = new ImageBlockClass('0002', 'https://cdn.icon-icons.com/icons2/2699/PNG/512/angular_logo_icon_169595.png', 'alt')
        this.pageService.appendElement(imageBlock)
        return
      case BlockType.List:
        const listBlock = new ListBlockClass('0002', false, 'pathToMarker')
        this.pageService.appendElement(listBlock)
        return
      case BlockType.Grid:
        const gridBlock = new GridBlockClass('0002', 5, 2)
        this.pageService.appendElement(gridBlock)
        return
      case BlockType.Section:
        const sectionsBlock = new SectionBlockClass('0002', [])
        this.pageService.appendElement(sectionsBlock)
        return
    }
  }
}
