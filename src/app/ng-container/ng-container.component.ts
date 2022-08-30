import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.css'],
})
export class NgContainerComponent implements OnInit {
  items = [
    { name: 'Angular', active: true },
    { name: 'React', active: true },
    { name: 'Vue', active: false },
    { name: 'Django', active: true },
    { name: 'Laravel', active: false },
    { name: 'Sevlete', active: false },
  ];

  constructor() {}

  ngOnInit() {}
}

// Sources:- https://www.tektutorialshub.com/angular/ng-container-in-angular/
