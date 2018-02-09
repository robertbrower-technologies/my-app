import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompoundExpression } from './compound-expression';

@Component({
  selector: 'compound-expression',
  templateUrl: './compound-expression.component.html',
  styleUrls: ['./compound-expression.component.css']
})
export class CompoundExpressionComponent implements OnInit {

  private _expression: CompoundExpression;
  
  get expression() {
    return this._expression;
  }

  @Input()
  set expression(value: CompoundExpression) {
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

  @Output() deleteClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deleteClicked(id: number) {
    this.deleteClick.emit(id);
  }

  deleteExpression(id: number) {
    let index = this.expression.expressions.findIndex(exp => exp.id == id);
    if (index > -1) {
      this.expression.expressions.splice(index, 1);
    }
  }

  addClicked() {
    this.expression.expressions.push({
      id: this.expression.expressions.length,
      field: 'productType',
      operator: 'eq',
      value: ''
    });
  }

}
