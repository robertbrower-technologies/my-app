import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Expression } from './expression';

@Component({
  selector: 'expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit {

  private _expression: Expression;
  
  get expression() {
    return this._expression;
  }

  @Input()
  set expression(value:Expression) {
    this._expression = value;
  }

  private _fields: Array<string>;
  
  get fields(): Array<string> {
    return this._fields;
  }

  @Input()
  set fields(value: Array<string>) {
    this._fields = value;
  }

  @Output() deleteClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteClicked(id: number) {
    this.deleteClick.emit(id);
  }

}
