import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from './filter';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private _filter: Filter;
  
  get filter() {
    return this._filter;
  }

  @Input()
  set filter(value: Filter) {
    this._filter = value;
  }

  private _fields: Array<string>;
  
  get fields(): Array<string> {
    return this._fields;
  }

  @Input()
  set fields(value: Array<string>) {
    this._fields = value;
  }

  @Output() deleteClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteClicked() {
    this.deleteClick.emit();
  }

  deleteExpression(id: number) {
    let index = this.filter.expressions.findIndex(exp => exp.id == id);
    if (index > -1) {
      this.filter.expressions.splice(index, 1);
    }
  }

  addExpression() {
    this.filter.expressions.push({
       id: 1,
       expressions: []
    });
  }

}
