import { Directive, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective implements OnInit {
  @HostBinding('style.border') border: string;

  constructor() {}

  ngOnInit() {
    this.border = '3px solid green';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.border = '3px solid red';
    console.log('mouse over');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.border = '3px solid pink';
    console.log('mouse leave');
  }
}

// Source:- https://www.tektutorialshub.com/angular/hostbinding-and-hostlistener-in-angular/
