import { Component, OnInit } from '@angular/core';
import { TabRow } from '../model/tab-row';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css'],
})
export class DynamicTableComponent implements OnInit {
  rows: TabRow[] = [];
  constructor() {}
  ngOnInit() {}
  addRow() {
    this.rows.push(new TabRow());
  }
  deleteRow(index: any) {
    this.rows.splice(index, 1);
  }

  submit() {
    console.log(this.rows);
  }
}

// Source:-https://phpforever.com/angular/add-and-remove-table-row-dynamically-in-angular/
