import { Directive, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective implements OnInit {
  @HostBinding('style.border') border: string;

  constructor() {}

  ngOnInit() {
    this.border = '3px solid green';
  }
}
