import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BlogItemComponent {
  @Input() post: any
  @ViewChild('input', {static: false}) inputRef: ElementRef
  @ViewChild('btn', {static: false}) btnRef: ElementRef
  @ContentChild('info', {static: true}) infoRef: ElementRef
  constructor() { }
  
  focus(){
    console.log(this.btnRef)
    this.inputRef.nativeElement.focus()
    this.btnRef.nativeElement.textContent = "AHAHAHAHA"
  }
}
