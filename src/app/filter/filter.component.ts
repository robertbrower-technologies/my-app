import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from './filter';
import { ExpressionGroup } from './expression-group/expression-group';

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
    //this.filterChange.emit(this._filter);
    this.selectedIndex = 0;
    console.log(`FilterComponent::set filter(${JSON.stringify(this._filter)})`);
  }

  @Output() filterChange = new EventEmitter<Filter>();

  private _fields: Array<string>;
  
  get fields(): Array<string> {
    return this._fields;
  }

  @Input()
  set fields(value: Array<string>) {
    this._fields = value;
    console.log(`FilterComponent::set fields(${JSON.stringify(this._fields)})`);
  }

  @Output() deleteClick = new EventEmitter();

  @Output() saveClick = new EventEmitter();

  selectedIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  nameChanged() {
    this.filterChange.emit(this._filter);
  }

  deleteClicked() {
    this.deleteClick.emit();
  }

  saveClicked() {
    this.saveClick.emit();
  }

  deleteExpressionGroup(index: number) {
    this.filter.expressionGroups.splice(index, 1);
    this.selectedIndex = -1;
    this.filterChange.emit(this._filter);
  }

  addExpressionGroup() {
    this.filter.expressionGroups.push(
      {
        expressions: [
          {
            field: undefined,
            operator: undefined,
            value: undefined }
          ]
      }
    );

    this.selectedIndex = this.filter.expressionGroups.length - 1;
    this.filterChange.emit(this._filter);
  }

  expressionGroupClicked(index: number) {
    this.selectedIndex = index;
  }

  expressionGroupChanged(grp: ExpressionGroup) {
    console.log(`FilterComponent::expressionGroupChanged(${JSON.stringify(grp)})`);
    this.filterChange.emit(this._filter);
  }

}
