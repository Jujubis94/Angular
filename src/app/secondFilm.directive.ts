import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSecondFilm]'
})
export class SecondFilmDirective {

  @HostBinding('class.changeCss') activeClass: boolean = false;

  @HostListener('mouseenter') mouseEnter() {
    this.activeClass = true;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.activeClass = false;
  }

}
