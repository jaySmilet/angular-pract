import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-ch',
  templateUrl: './view-ch.component.html',
  styleUrls: ['./view-ch.component.css'],
})
export class ViewChComponent implements OnInit {
  count: number = 0;
  constructor() {}

  ngOnInit() {}

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}
