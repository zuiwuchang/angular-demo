import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './color/color.component';
import { HomeComponent } from './home/home.component';
import { RadiusComponent } from './radius/radius.component';
import { StyleComponent } from './style/style.component';
import { WidthComponent } from './width/width.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'color',
    component: ColorComponent,
  },
  {
    path: 'radius',
    component: RadiusComponent,
  },
  {
    path: 'width',
    component: WidthComponent,
  },
  {
    path: 'style',
    component: StyleComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BorderRoutingModule { }
