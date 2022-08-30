import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-ng-temp-child',
  templateUrl: './ng-temp-child.component.html',
  styleUrls: ['./ng-temp-child.component.css'],
})
export class NgTempChildComponent implements OnInit {
  @Input() customTemplate: TemplateRef<HTMLElement>;
  constructor() {}

  ngOnInit() {}
}
