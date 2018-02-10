import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringComparisionComponent } from './string-comparision.component';

describe('StringComparisionComponent', () => {
  let component: StringComparisionComponent;
  let fixture: ComponentFixture<StringComparisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringComparisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
