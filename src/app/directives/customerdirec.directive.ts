import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomerdirec]'
})
export class CustomerdirecDirective {
@HostBinding ('style.backgroundColor') bg = 'red';
  constructor() { }
@HostListener ('mouseenter') mouseenter() {
    this.bg = 'yellow';
}

@HostListener ('mouseleave') mouseleave(){
    this.bg = 'red';
}
}
