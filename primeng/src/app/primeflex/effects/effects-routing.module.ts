import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElevationComponent } from './elevation/elevation.component';
import { HomeComponent } from './home/home.component';
import { OpacityComponent } from './opacity/opacity.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'elevation',
    component: ElevationComponent,
  },
  {
    path: 'opacity',
    component: OpacityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffectsRoutingModule { }
