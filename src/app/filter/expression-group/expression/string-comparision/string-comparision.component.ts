import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../option';

@Component({
  selector: 'string-comparision',
  templateUrl: './string-comparision.component.html',
  styleUrls: ['./string-comparision.component.css']
})
export class StringComparisionComponent implements OnInit {

  options: Array<Option> = [
    { text: '=', value: 'eq' },
    { text: '!=', value: 'neq' }
  ];

  private _value: string;
  
  get value(): string {
    return this._value;
  }

  @Input()
  set value(value: string) {
    if (this._value != value) {
      this._value = value;
      console.log(`StringComparisionComponent::set value(${JSON.stringify(this._value)})`);
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
    console.log(`StringComparisionComponent::valueChanged(${JSON.stringify(event)})`);
    this.valueChange.emit(this.value);
  }

}
