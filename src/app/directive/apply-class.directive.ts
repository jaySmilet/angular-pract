import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[applyClass]',
})
export class ApplyClassDirective implements OnInit {
  // @HostBinding('class') class: string;
  @HostBinding('class') get class() {
    return 'dynamic';
  }

  ngOnInit() {
    // this.class = 'dynamic';
  }
}

// Source:- https://www.tektutorialshub.com/angular/hostbinding-and-hostlistener-in-angular/