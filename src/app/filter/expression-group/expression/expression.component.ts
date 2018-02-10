import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { Expression } from './expression';

@Component({
  selector: 'expression',
  templateUrl: './expression.component.html',
  styleUrls: ['./expression.component.css']
})
export class ExpressionComponent implements OnInit, AfterViewInit {

  private _expression: Expression;
  
  get expression() {
    return this._expression;
  }

  @Input()
  set expression(value:Expression) {
    this._expression = value;
    this.expressionChange.emit(this._expression);
  }

  @Output() expressionChange = new EventEmitter<Expression>();

  private _fields: Array<string>;
  
  get fields(): Array<string> {
    return this._fields;
  }

  @Input()
  set fields(value: Array<string>) {
    this._fields = value;
  }

  @Output() deleteClick = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.scrollIntoView();
  }

  deleteClicked() {
    this.deleteClick.emit();
  }

  expressionChanged() {
    console.log('expressionChanged()');
    this.expressionChange.emit(this._expression);
  }

}
