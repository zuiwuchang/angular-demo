import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OriginComponent } from './origin/origin.component';
import { RotateComponent } from './rotate/rotate.component';
import { TranslateComponent } from './translate/translate.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'translate',
    component: TranslateComponent,
  },
  {
    path: 'origin',
    component: OriginComponent,
  },
  {
    path: 'rotate',
    component: RotateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransformRoutingModule { }
