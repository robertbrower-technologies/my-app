import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../option';

@Component({
  selector: 'numeric-comparision',
  templateUrl: './numeric-comparision.component.html',
  styleUrls: ['./numeric-comparision.component.css']
})
export class NumericComparisionComponent implements OnInit {

  options: Array<Option> = [
    { text: '=', value: 'eq' },
    { text: '!=', value: 'neq' },
    { text: '<', value: 'lt' },
    { text: '<=', value: 'lteq' },
    { text: '>', value: 'gt' },
    { text: '>=', value: 'gteq' }
  ];

  private _value: string;
  
  get value(): string {
    return this._value;
  }

  @Input()
  set value(value: string) {
    this._value = value;
    this.valueChange.emit(this._value);
  }

  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.options.find( opt => opt.value == this.value)) {
      setTimeout(() => this.value = this.options[0].value);
    }
  }

}
