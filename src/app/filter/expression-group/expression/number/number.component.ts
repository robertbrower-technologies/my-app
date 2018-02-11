import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  private _value: number;
  
  get value(): number {
    return this._value;
  }

  @Input()
  set value(value: number) {
    if (this._value != value) {
      this._value = value;
      console.log(`NumberComponent::set value(${JSON.stringify(this._value)})`);
    }
  }

  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
    if (!(typeof this.value == 'number')) {
      setTimeout(() => {
        this.value = 0;
        this.valueChanged(null);
      });
      
    }
  }

  valueChanged(event: any) {
    console.log(`NumberComponent::valueChanged(${JSON.stringify(event)})`);
    this.valueChange.emit(this.value);
  }

}
