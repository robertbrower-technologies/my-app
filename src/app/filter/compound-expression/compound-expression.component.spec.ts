import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundExpressionComponent } from './compound-expression.component';

describe('CompoundExpressionComponent', () => {
  let component: CompoundExpressionComponent;
  let fixture: ComponentFixture<CompoundExpressionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundExpressionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundExpressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
