import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GridRoutingModule } from './grid-routing.module';
import { HomeComponent } from './home/home.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { GridCols12Component } from './grid-cols12/grid-cols12.component';
import { GridMultiLineComponent } from './grid-multi-line/grid-multi-line.component';
import { GridFixedComponent } from './grid-fixed/grid-fixed.component';
import { GridOffsetComponent } from './grid-offset/grid-offset.component';
import { GridNestedComponent } from './grid-nested/grid-nested.component';
import { FormVerticalComponent } from './form-vertical/form-vertical.component';
import { FormHorizontalComponent } from './form-horizontal/form-horizontal.component';
import { FormInlineComponent } from './form-inline/form-inline.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormRadiobuttonComponent } from './form-radiobutton/form-radiobutton.component';
import { FormHelpTextComponent } from './form-help-text/form-help-text.component';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';


@NgModule({
  declarations: [
    HomeComponent,
    GridSystemComponent,
    GridCols12Component,
    GridMultiLineComponent,
    GridFixedComponent,
    GridOffsetComponent,
    GridNestedComponent,
    FormVerticalComponent,
    FormHorizontalComponent,
    FormInlineComponent,
    FormCheckboxComponent,
    FormRadiobuttonComponent,
    FormHelpTextComponent,
    FormAdvancedComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule
  ]
})
export class GridModule { }
