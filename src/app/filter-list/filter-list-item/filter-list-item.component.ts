import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { Filter } from '../../filter/filter';

@Component({
  selector: 'filter-list-item',
  templateUrl: './filter-list-item.component.html',
  styleUrls: ['./filter-list-item.component.css']
})
export class FilterListItemComponent implements OnInit, AfterViewInit {

  private _filter: Filter;
  
  get filter() {
    return this._filter;
  }

  @Input()
  set filter(value: Filter) {
    this._filter = value;
  }

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.scrollIntoView();
  }

}
