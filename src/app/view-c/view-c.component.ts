import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ViewChComponent } from './view-ch/view-ch.component';

@Component({
  selector: 'app-view-c',
  templateUrl: './view-c.component.html',
  styleUrls: ['./view-c.component.css'],
})
export class ViewCComponent implements OnInit, AfterViewInit {
  @ViewChild(ViewChComponent, { static: false }) child: ViewChComponent;
  // @ViewChild('usingChildTemRef', { static: true }) child: ViewChComponent;
  @ViewChild('tempRef', { static: false }) tempRef: ElementRef;
  // @ViewChild('nameInput',{static:false}) nameVar;
  showCounter: true;
  constructor() {}

  ngOnInit() {}

  increment() {
    this.child.increment();
    console.log(this.child);
  }

  decrement() {
    this.child.decrement();
  }

  ngAfterViewInit() {
    console.log(this.tempRef.nativeElement.value);
  }
}
