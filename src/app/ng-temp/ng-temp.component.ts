import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-ng-temp',
  templateUrl: './ng-temp.component.html',
  styleUrls: ['./ng-temp.component.css'],
})
export class NgTempComponent implements OnInit, AfterViewInit {
  @ViewChild('parentTemplate') myTemplate: TemplateRef<HTMLElement>;
  @ViewChild('sayHelloTemplate', { read: TemplateRef })
  sayHelloTemplate: TemplateRef<any>;
  selected;

  constructor(private vref: ViewContainerRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    console.log(this.myTemplate);
    console.log(this.vref.createEmbeddedView(this.sayHelloTemplate));
  }
}

// Sources:-https://www.tektutorialshub.com/angular/ngtemplateoutlet-in-angular/
// Sources:-https://www.tektutorialshub.com/angular/ng-template-in-angular/
