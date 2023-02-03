import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeightComponent } from './height/height.component';
import { HomeComponent } from './home/home.component';
import { MaxHeightComponent } from './max-height/max-height.component';
import { MaxWidthComponent } from './max-width/max-width.component';
import { MinHeightComponent } from './min-height/min-height.component';
import { MinWidthComponent } from './min-width/min-width.component';
import { WidthComponent } from './width/width.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'width',
    component: WidthComponent,
  },
  {
    path: 'min-width',
    component: MinWidthComponent,
  },
  {
    path: 'max-width',
    component: MaxWidthComponent,
  },
  {
    path: 'height',
    component: HeightComponent,
  },
  {
    path: 'min-height',
    component: MinHeightComponent,
  },
  {
    path: 'max-height',
    component: MaxHeightComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SizeRoutingModule { }
