import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[applyClass]',
})
export class ApplyClassDirective implements OnInit {
  @HostBinding('class') class: string;

  ngOnInit() {
    this.class = 'dynamic';
  }
}
