import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAdvancedComponent } from './form-advanced/form-advanced.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormHelpTextComponent } from './form-help-text/form-help-text.component';
import { FormHorizontalComponent } from './form-horizontal/form-horizontal.component';
import { FormInlineComponent } from './form-inline/form-inline.component';
import { FormRadiobuttonComponent } from './form-radiobutton/form-radiobutton.component';
import { FormVerticalComponent } from './form-vertical/form-vertical.component';
import { GridCols12Component } from './grid-cols12/grid-cols12.component';
import { GridFixedComponent } from './grid-fixed/grid-fixed.component';
import { GridMultiLineComponent } from './grid-multi-line/grid-multi-line.component';
import { GridNestedComponent } from './grid-nested/grid-nested.component';
import { GridOffsetComponent } from './grid-offset/grid-offset.component';
import { GridSystemComponent } from './grid-system/grid-system.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'grid/system',
    component: GridSystemComponent,
  },
  {
    path: 'grid/12',
    component: GridCols12Component,
  },
  {
    path: 'grid/multiLine',
    component: GridMultiLineComponent,
  },
  {
    path: 'grid/fixed',
    component: GridFixedComponent,
  },
  {
    path: 'grid/offset',
    component: GridOffsetComponent,
  },
  {
    path: 'grid/nested',
    component: GridNestedComponent,
  },
  {
    path: 'form/vertical',
    component: FormVerticalComponent,
  },
  {
    path: 'form/horizontal',
    component: FormHorizontalComponent,
  },
  {
    path: 'form/inline',
    component: FormInlineComponent,
  },
  {
    path: 'form/checkbox',
    component: FormCheckboxComponent,
  },
  {
    path: 'form/radiobutton',
    component: FormRadiobuttonComponent,
  },
  {
    path: 'form/help-text',
    component: FormHelpTextComponent,
  },
  {
    path: 'form/advanced',
    component: FormAdvancedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridRoutingModule { }
