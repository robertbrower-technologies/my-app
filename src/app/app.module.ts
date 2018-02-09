import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FilterListItemComponent } from './filter-list/filter-list-item/filter-list-item.component';
import { CompoundExpressionComponent } from './filter/compound-expression/compound-expression.component';
import { ExpressionComponent } from './filter/compound-expression/expression/expression.component';
import { StringComparisionComponent } from './filter/compound-expression/expression/string-comparision/string-comparision.component';
import { NumericComparisionComponent } from './filter/compound-expression/expression/numeric-comparision/numeric-comparision.component';
import { FieldComponent } from './filter/compound-expression/expression/field/field.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterListComponent,
    FilterListItemComponent,
    CompoundExpressionComponent,
    ExpressionComponent,
    StringComparisionComponent,
    NumericComparisionComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
