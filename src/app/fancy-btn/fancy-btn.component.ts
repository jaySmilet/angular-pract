import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fancy-btn',
  templateUrl: './fancy-btn.component.html',
  styleUrls: ['./fancy-btn.component.css']
})
export class FancyBtnComponent implements OnInit {

  @Output() someEvent:EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  raiseSomeEvent(){
    this.someEvent.emit('data');
  }
}