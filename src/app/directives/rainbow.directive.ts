import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  tableau = [
    'blue',
    'green',
    'yellow'
  ];

  @HostBinding ('style.borderColor') bd ;
  @HostBinding  ('style.color') color ;
  constructor() { }
 @HostListener ('keypress') changeColor() {
    const index = Math.floor( Math.random() * (this.tableau.length - 1));
    this.bd = this.tableau[index];
    this.color = this.tableau[index];
 }
}
