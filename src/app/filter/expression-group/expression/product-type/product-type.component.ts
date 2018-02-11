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
    if (this._value != value) {
      this._value = value;
      console.log(`ProductTypeComponent::set value(${JSON.stringify(this._value)})`);
    }
  }

  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!this.options.find( opt => opt.value == this.value)) {
      setTimeout(() => {
        this.value = this.options[0].value;
        this.valueChanged(null);
      });
    }
  }

  valueChanged(event: any) {
    console.log(`ProductTypeComponent::valueChanged(${JSON.stringify(event)})`);
    this.valueChange.emit(this.value);
  }

}
