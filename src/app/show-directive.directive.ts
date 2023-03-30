import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShowDirective]',
})
export class ShowDirectiveDirective {
  constructor(private el: ElementRef) {}

  private highlight(color: string, fontSize: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.fontSize = fontSize;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red', '20px');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('initial', 'initial');
  }
}
