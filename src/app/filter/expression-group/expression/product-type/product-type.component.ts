import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../option';

@Component({
  selector: 'product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.css']
})
export class ProductTypeComponent implements OnInit {

  options: Array<Option> = [
    { text: 'hats', value: 'hats' },
    { text: 'shirts', value: 'shirts' },
    { text: 'shoes', value: 'shoes' }
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
