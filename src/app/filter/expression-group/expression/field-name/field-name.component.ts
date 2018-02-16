import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'field-name',
  templateUrl: './field-name.component.html',
  styleUrls: ['./field-name.component.css']
})
export class FieldNameComponent implements OnInit {

  private _options: Array<string>;

  get options(): Array<string> {
    return this._options;
  }

  @Input()
  set options(value: Array<string>) {
    this._options = value;
    console.log(`FieldNameComponent::set options(${JSON.stringify(this._options)})`);
  }

  private _value: string;
  
  get value(): string {
    return this._value;
  }

  @Input()
  set value(value: string) {
    if (this._value != value) {
      this._value = value;
      console.log(`FieldNameComponent::set value(${JSON.stringify(this._value)})`);
    }
  }

  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (this.options.indexOf(this.value) == -1) {
      setTimeout(() => {
        this.value = this.options[0];
        this.valueChanged(this.value);
      });
    }
  }

  valueChanged(event: any) {
    console.log(`FieldNameComponent::valueChanged(${JSON.stringify(event)})`);
    this.valueChange.emit(this.value);
  }

}
