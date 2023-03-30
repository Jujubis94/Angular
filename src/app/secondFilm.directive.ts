import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSecondFilm]',
})
export class SecondFilmDirective {
  activeClass: boolean = false;
  
  @HostBinding('class.changeCss')

  @HostListener('mouseenter')
  mouseEnter() {
    this.activeClass = true;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.activeClass = false;
  }
}
