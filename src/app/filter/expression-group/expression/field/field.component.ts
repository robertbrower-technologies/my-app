import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  private _options: Array<string>;

  get options(): Array<string> {
    return this._options;
  }

  @Input()
  set options(value: Array<string>) {
    this._options = value;
    console.log(`FieldComponent::set options(${JSON.stringify(this._options)})`);
  }

  private _value: string;
  
  get value(): string {
    return this._value;
  }

  @Input()
  set value(value: string) {
    if (this._value != value) {
      this._value = value;
      console.log(`FieldComponent::set value(${JSON.stringify(this._value)})`);
    }
  }

  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.options.indexOf(this.value) == -1) {
      setTimeout(() => {
        this.value = this.options[0];
        this.valueChanged(null);
      });
    }
  }

  valueChanged(event: any) {
    console.log(`FieldComponent::fieldChanged(${JSON.stringify(event)})`);
    this.valueChange.emit(this.value);
  }

}
