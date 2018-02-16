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
    if (this._value != value) {
      this._value = value;
      console.log(`NumericComparisionComponent::set value(${JSON.stringify(this._value)})`);
    }
  }

  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.options.find( opt => opt.value == this.value)) {
      setTimeout(() => {
        this.value = this.options[0].value;
        this.valueChanged(this.value);
      });
    }
  }

  valueChanged(event: any) {
    console.log(`NumericComparisionComponent::valueChanged(${JSON.stringify(event)})`);
    this.valueChange.emit(this.value);
  }

}
