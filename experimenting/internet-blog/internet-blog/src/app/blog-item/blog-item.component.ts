import { Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit, OnChanges {
  @Input() post: any
  @ViewChild('input', {static: false})inputRef: ElementRef
  @ContentChild('info', {static: true}) infoRef: ElementRef
  constructor() { }
  ngOnChanges(changes: SimpleChanges){
    console.log('NgOnChanges', changes);
  }
  ngOnInit(): void {
    console.log('NgOnInit =============================================>');
  }
  
  focus(){
    this.inputRef.nativeElement.focus()
  }
}
