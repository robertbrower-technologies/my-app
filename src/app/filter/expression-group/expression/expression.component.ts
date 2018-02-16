import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { Expression } from './expression';
import { ExpressionTemplateDirective } from './expression-template.directive';

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
    console.log(`ExpressionComponent::set expression(${JSON.stringify(this._expression)})`);
  }

  @Output() expressionChange = new EventEmitter<Expression>();

  private _fields: Array<string>;
  
  get fields(): Array<string> {
    return this._fields;
  }

  @Input()
  set fields(value: Array<string>) {
    this._fields = value;
    console.log(`ExpressionComponent::set fields(${JSON.stringify(this._fields)})`);
  }

  @Output() deleteClick = new EventEmitter();

  private _expressionTemplate: ExpressionTemplateDirective;

  get expressionTemplate() {
    return this._expressionTemplate;
  }
  
  @Input()
  set expressionTemplate(value: ExpressionTemplateDirective) {
    this._expressionTemplate = value;
    // console.log(`ExpressionComponent::set expressionTemplate(${JSON.stringify(this._expressionTemplate)})`);
  };
  
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.scrollIntoView();
  }

  deleteClicked() {
    this.deleteClick.emit();
  }

  fieldChanged(event: any) {
    console.log(`ExpressionComponent::fieldChanged(${JSON.stringify(event)})`);
    this.expressionChange.emit(this._expression);
  }

  operatorChanged(event: any) {
    console.log(`ExpressionComponent::operatorChanged(${JSON.stringify(event)})`);
    this.expressionChange.emit(this._expression);
  }

  valueChanged(event: any) {
    console.log(`ExpressionComponent::valueChanged(${JSON.stringify(event)})`);
    this.expressionChange.emit(this._expression);
  }

}
