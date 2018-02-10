import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericComparisionComponent } from './numeric-comparision.component';

describe('NumericComparisionComponent', () => {
  let component: NumericComparisionComponent;
  let fixture: ComponentFixture<NumericComparisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericComparisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
