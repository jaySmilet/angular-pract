import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  btnClick(event): void {
    console.log(event);
  }

  myEvent(event) {
    console.log('From home-' + event);
  }
}
