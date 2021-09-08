import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string 
  @HostBinding('style.color') colorOf = null
  constructor(private elementRef: ElementRef, private r: Renderer2) {
    r.setStyle(elementRef.nativeElement, "color", null)
  }
  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log(event);
  }
  @HostListener('mouseover', ['$event']) onOver() {
    this.colorOf = this.color
  }
  @HostListener('mouseout', ['$event']) onOut() {
    this.colorOf = null
  }
}
