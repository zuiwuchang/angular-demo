import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'layout',
    loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: 'flexbox',
    loadChildren: () => import('./flexbox/flexbox.module').then(m => m.FlexboxModule),
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then(m => m.GridModule),
  },
  {
    path: 'background',
    loadChildren: () => import('./background/background.module').then(m => m.BackgroundModule),
  },
  {
    path: 'border',
    loadChildren: () => import('./border/border.module').then(m => m.BorderModule),
  },
  {
    path: 'space',
    loadChildren: () => import('./space/space.module').then(m => m.SpaceModule),
  },
  {
    path: 'size',
    loadChildren: () => import('./size/size.module').then(m => m.SizeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeflexRoutingModule { }
