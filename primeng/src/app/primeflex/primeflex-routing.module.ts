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
  {
    path: 'typography',
    loadChildren: () => import('./typography/typography.module').then(m => m.TypographyModule),
  },
  {
    path: 'effects',
    loadChildren: () => import('./effects/effects.module').then(m => m.EffectsModule),
  },
  {
    path: 'transition',
    loadChildren: () => import('./transition/transition.module').then(m => m.TransitionModule),
  },
  {
    path: 'animations',
    loadChildren: () => import('./animations/animations.module').then(m => m.AnimationsModule),
  },
  {
    path: 'transform',
    loadChildren: () => import('./transform/transform.module').then(m => m.TransformModule),
  },
  {
    path: 'interactivity',
    loadChildren: () => import('./interactivity/interactivity.module').then(m => m.InteractivityModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrimeflexRoutingModule { }
