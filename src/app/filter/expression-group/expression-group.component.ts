import { Component, OnInit, Input, Output, EventEmitter, ElementRef, AfterViewInit } from '@angular/core';
import { ExpressionGroup } from './expression-group';
import { Expression } from './expression/expression';
import { ExpressionTemplateDirective } from './expression/expression-template.directive';

@Component({
  selector: 'expression-group',
  templateUrl: './expression-group.component.html',
  styleUrls: ['./expression-group.component.css']
})
export class ExpressionGroupComponent implements OnInit, AfterViewInit {

  private _expressionGroup: ExpressionGroup;
  
  get expressionGroup() {
    return this._expressionGroup;
  }

  @Input()
  set expressionGroup(value: ExpressionGroup) {
    this._expressionGroup = value;
    console.log(`ExpressionGroupComponent::set expressionGroup(${JSON.stringify(this._expressionGroup)})`);
  }

  @Output() expressionGroupChange = new EventEmitter<ExpressionGroup>();

  private _fields: Array<string>;
  
  get fields(): Array<string> {
    return this._fields;
  }

  @Input()
  set fields(value: Array<string>) {
    this._fields = value;
    console.log(`ExpressionGroupComponent::set fields(${JSON.stringify(this._fields)})`);
  }

  @Output() deleteClick = new EventEmitter();

  selectedIndex: number = 0;

  private _expressionTemplate: ExpressionTemplateDirective;

  get expressionTemplate() {
    return this._expressionTemplate;
  }
  
  @Input()
  set expressionTemplate(value: ExpressionTemplateDirective) {
    this._expressionTemplate = value;
    // console.log(`ExpressionGroupComponent::set expressionTemplate(${JSON.stringify(this._expressionTemplate)})`);
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

  deleteExpression(index: number) {
    this.expressionGroup.expressions.splice(index, 1);
    this.selectedIndex = -1;
    this.expressionGroupChange.emit(this._expressionGroup);
    if (this.expressionGroup.expressions.length == 0) {
      this.deleteClicked();
    }
  }

  addExpressionClicked() {
    this.expressionGroup.expressions.push(
      {
        field: undefined,
        operator: undefined,
        value: undefined
      }
    );

    this.selectedIndex = this.expressionGroup.expressions.length - 1;
    this.expressionGroupChange.emit(this._expressionGroup);
  }

  expressionClicked(index: number) {
    this.selectedIndex = index;
  }

  expressionChanged(exp: Expression) {
    console.log(`ExpressionGroupComponent::expressionChanged(${JSON.stringify(exp)})`);
    this.expressionGroupChange.emit(this._expressionGroup);
  }
}
