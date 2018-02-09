import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  private _fields: Array<string>;

  get fields(): Array<string> {
    return this._fields;
  }

  @Input()
  set fields(value: Array<string>) {
    this._fields = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
