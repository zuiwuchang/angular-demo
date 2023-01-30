import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { FlexComponent } from './flex/flex.component';
import { HideComponent } from './hide/hide.component';
import { HomeComponent } from './home/home.component';
import { InlineBlockComponent } from './inline-block/inline-block.component';
import { InlineFlexComponent } from './inline-flex/inline-flex.component';
import { InlineComponent } from './inline/inline.component';
import { OverflowAutoComponent } from './overflow-auto/overflow-auto.component';
import { OverflowHiddenComponent } from './overflow-hidden/overflow-hidden.component';
import { OverflowScrollComponent } from './overflow-scroll/overflow-scroll.component';
import { OverflowVisibleComponent } from './overflow-visible/overflow-visible.component';
import { PositionAbsoluteComponent } from './position-absolute/position-absolute.component';
import { PositionFixedComponent } from './position-fixed/position-fixed.component';
import { PositionRelativeComponent } from './position-relative/position-relative.component';
import { PositionStaticComponent } from './position-static/position-static.component';
import { PositionStickyComponent } from './position-sticky/position-sticky.component';
import { PositionTrblComponent } from './position-trbl/position-trbl.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { ZComponent } from './z/z.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hide',
    component: HideComponent,
  },
  {
    path: 'block',
    component: BlockComponent,
  },
  {
    path: 'inline',
    component: InlineComponent,
  },
  {
    path: 'inline-block',
    component: InlineBlockComponent,
  },
  {
    path: 'flex',
    component: FlexComponent,
  },
  {
    path: 'inline-flex',
    component: InlineFlexComponent,
  },
  {
    path: 'responsive',
    component: ResponsiveComponent,
  },
  {
    path: 'overflow/auto',
    component: OverflowAutoComponent,
  },
  {
    path: 'overflow/hidden',
    component: OverflowHiddenComponent,
  },
  {
    path: 'overflow/visible',
    component: OverflowVisibleComponent,
  },
  {
    path: 'overflow/scroll',
    component: OverflowScrollComponent,
  },
  {
    path: 'position/static',
    component: PositionStaticComponent,
  },
  {
    path: 'position/fixed',
    component: PositionFixedComponent,
  },
  {
    path: 'position/relative',
    component: PositionRelativeComponent,
  },
  {
    path: 'position/absolute',
    component: PositionAbsoluteComponent,
  },
  {
    path: 'position/sticky',
    component: PositionStickyComponent,
  },
  {
    path: 'position/trbl',
    component: PositionTrblComponent,
  },
  {
    path: 'z',
    component: ZComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
