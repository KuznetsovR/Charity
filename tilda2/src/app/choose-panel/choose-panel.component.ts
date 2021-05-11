import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-panel',
  templateUrl: './choose-panel.component.html',
  styleUrls: ['./choose-panel.component.css']
})
export class ChoosePanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectElement(type){
    console.log({
      type: type,
      options:{
        
      }
    })
  }
}
