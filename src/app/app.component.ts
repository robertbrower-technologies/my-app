import { Component } from '@angular/core';
import { Filter } from './filter/filter';
import { MockFilters } from './mock-filters';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private _fields: Array<string> = [
    'productType',
    'gender',
    'price'
  ];
  
  get fields(): Array<string> {
    return this._fields;
  }
  
  filters: Array<Filter> = MockFilters;

  _filter: Filter;

  get filter(): Filter {
    return this._filter;
  }

  set filter(value: Filter) {
    this._filter = value;
  }
    
  selectedIndex: number;

  filterClicked(index: number) {
    this.selectedIndex = index;
    this.filter = this.filters[index];
  }

  addFilterClicked() {
    this.filters.push(
      {
        name: '',
        expressionGroups: []
      }
    );

    this.selectedIndex = this.filters.length - 1;
    this.filter = this.filters[this.selectedIndex];
  }

  deleteFilterClicked() {
    this.filters.splice(this.selectedIndex, 1);
    this.filter = null;
    this.selectedIndex = -1;
  }

}
