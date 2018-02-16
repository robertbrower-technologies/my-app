import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FilterListItemComponent } from './filter-list/filter-list-item/filter-list-item.component';
import { ExpressionGroupComponent } from './filter/expression-group/expression-group.component';
import { ExpressionComponent } from './filter/expression-group/expression/expression.component';
import { FieldNameComponent } from './filter/expression-group/expression/field-name/field-name.component';
import { StringComparisionComponent } from './filter/expression-group/expression/string-comparision/string-comparision.component';
import { NumericComparisionComponent } from './filter/expression-group/expression/numeric-comparision/numeric-comparision.component';
import { ProductTypeComponent } from './filter/expression-group/expression/product-type/product-type.component';
import { GenderComponent } from './filter/expression-group/expression/gender/gender.component';
import { NumberComponent } from './filter/expression-group/expression/number/number.component';
import { ExpressionTemplateDirective } from './filter/expression-group/expression/expression-template.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    FilterListComponent,
    FilterListItemComponent,
    ExpressionGroupComponent,
    ExpressionComponent,
    StringComparisionComponent,
    NumericComparisionComponent,
    FieldNameComponent,
    ProductTypeComponent,
    GenderComponent,
    NumberComponent,
    ExpressionTemplateDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
