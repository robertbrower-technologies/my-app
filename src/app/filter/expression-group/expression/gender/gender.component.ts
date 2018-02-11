import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../option';

@Component({
  selector: 'gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  options: Array<Option> = [
    { text: 'male', value: 'male' },
    { text: 'female', value: 'female' }
  ];

  private _value: string;
  
  get value(): string {
    return this._value;
  }

  @Input()
  set value(value: string) {
    if (this._value != value) {
      this._value = value;
      console.log(`GenderComponent::set value(${JSON.stringify(this._value)})`);
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
    console.log(`GenderComponent::genderChanged(${JSON.stringify(event)})`);
    this.valueChange.emit(this.value);
  }

}
