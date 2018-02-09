import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Filter } from '../filter/filter';

@Component({
  selector: 'filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.css']
})
export class FilterListComponent implements OnInit {

  private _filters: Array<Filter>;
  
  get filters(): Array<Filter> {
    return this._filters;
  }

  @Input()
  set filters(value: Array<Filter>) {
    this._filters = value;
  }

  private _selectedIndex: number;
  
  get selectedIndex(): number {
    return this._selectedIndex;
  }

  @Input()
  set selectedIndex(value: number) {
    this._selectedIndex = value;
  }

  @Output() filterClick = new EventEmitter<number>();

  @Output() addClick = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  addClicked() {
    this.addClick.emit();
  }

  filterClicked(index: number) {
    this.selectedIndex = index;
    this.filterClick.emit(index);
  }

}
