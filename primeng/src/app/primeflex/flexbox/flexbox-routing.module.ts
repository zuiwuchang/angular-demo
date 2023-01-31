import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlignContentAroundComponent } from './align-content-around/align-content-around.component';
import { AlignContentBetweenComponent } from './align-content-between/align-content-between.component';
import { AlignContentCenterComponent } from './align-content-center/align-content-center.component';
import { AlignContentEndComponent } from './align-content-end/align-content-end.component';
import { AlignContentEvenlyComponent } from './align-content-evenly/align-content-evenly.component';
import { AlignContentStartComponent } from './align-content-start/align-content-start.component';
import { AlignItemsBaselineComponent } from './align-items-baseline/align-items-baseline.component';
import { AlignItemsCenterComponent } from './align-items-center/align-items-center.component';
import { AlignItemsEndComponent } from './align-items-end/align-items-end.component';
import { AlignItemsStartComponent } from './align-items-start/align-items-start.component';
import { AlignItemsStretchComponent } from './align-items-stretch/align-items-stretch.component';
import { AlignSelfAutoComponent } from './align-self-auto/align-self-auto.component';
import { AlignSelfBaselineComponent } from './align-self-baseline/align-self-baseline.component';
import { AlignSelfCenterComponent } from './align-self-center/align-self-center.component';
import { AlignSelfEndComponent } from './align-self-end/align-self-end.component';
import { AlignSelfStartComponent } from './align-self-start/align-self-start.component';
import { AlignSelfStretchComponent } from './align-self-stretch/align-self-stretch.component';
import { DirectionColumnReverseComponent } from './direction-column-reverse/direction-column-reverse.component';
import { DirectionColumnComponent } from './direction-column/direction-column.component';
import { DirectionRowReverseComponent } from './direction-row-reverse/direction-row-reverse.component';
import { DirectionRowComponent } from './direction-row/direction-row.component';
import { FlexAutoComponent } from './flex-auto/flex-auto.component';
import { FlexGrowComponent } from './flex-grow/flex-grow.component';
import { FlexInitialComponent } from './flex-initial/flex-initial.component';
import { FlexNoneComponent } from './flex-none/flex-none.component';
import { FlexShrinkComponent } from './flex-shrink/flex-shrink.component';
import { FlexV1Component } from './flex-v1/flex-v1.component';
import { GapComponent } from './gap/gap.component';
import { HomeComponent } from './home/home.component';
import { JustifyContentAroundComponent } from './justify-content-around/justify-content-around.component';
import { JustifyContentBetweenComponent } from './justify-content-between/justify-content-between.component';
import { JustifyContentCenterComponent } from './justify-content-center/justify-content-center.component';
import { JustifyContentEndComponent } from './justify-content-end/justify-content-end.component';
import { JustifyContentEvenlyComponent } from './justify-content-evenly/justify-content-evenly.component';
import { JustifyContentStartComponent } from './justify-content-start/justify-content-start.component';
import { OrderComponent } from './order/order.component';
import { WrapNowrapComponent } from './wrap-nowrap/wrap-nowrap.component';
import { WrapWrapReverseComponent } from './wrap-wrap-reverse/wrap-wrap-reverse.component';
import { WrapWrapComponent } from './wrap-wrap/wrap-wrap.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'direction/row',
    component: DirectionRowComponent,
  },
  {
    path: 'direction/row-reverse',
    component: DirectionRowReverseComponent,
  },
  {
    path: 'direction/column',
    component: DirectionColumnComponent,
  },
  {
    path: 'direction/column-reverse',
    component: DirectionColumnReverseComponent,
  },
  {
    path: 'wrap/wrap',
    component: WrapWrapComponent,
  },
  {
    path: 'wrap/wrap-reverse',
    component: WrapWrapReverseComponent,
  },
  {
    path: 'wrap/nowrap',
    component: WrapNowrapComponent,
  },
  {
    path: 'flex/grow',
    component: FlexGrowComponent,
  },
  {
    path: 'flex/shrink',
    component: FlexShrinkComponent,
  },
  {
    path: 'flex/1',
    component: FlexV1Component,
  },
  {
    path: 'flex/auto',
    component: FlexAutoComponent,
  },
  {
    path: 'flex/initial',
    component: FlexInitialComponent,
  },
  {
    path: 'flex/none',
    component: FlexNoneComponent,
  },
  {
    path: 'gap',
    component: GapComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'justify-content/start',
    component: JustifyContentStartComponent,
  },
  {
    path: 'justify-content/end',
    component: JustifyContentEndComponent,
  },
  {
    path: 'justify-content/center',
    component: JustifyContentCenterComponent,
  },
  {
    path: 'justify-content/between',
    component: JustifyContentBetweenComponent,
  },
  {
    path: 'justify-content/around',
    component: JustifyContentAroundComponent,
  },
  {
    path: 'justify-content/evenly',
    component: JustifyContentEvenlyComponent,
  },
  {
    path: 'align-content/start',
    component: AlignContentStartComponent,
  },
  {
    path: 'align-content/end',
    component: AlignContentEndComponent,
  },
  {
    path: 'align-content/center',
    component: AlignContentCenterComponent,
  },
  {
    path: 'align-content/between',
    component: AlignContentBetweenComponent,
  },
  {
    path: 'align-content/around',
    component: AlignContentAroundComponent,
  },
  {
    path: 'align-content/evenly',
    component: AlignContentEvenlyComponent,
  },
  {
    path: 'align-items/stretch',
    component: AlignItemsStretchComponent,
  },
  {
    path: 'align-items/start',
    component: AlignItemsStartComponent,
  },
  {
    path: 'align-items/center',
    component: AlignItemsCenterComponent,
  },
  {
    path: 'align-items/end',
    component: AlignItemsEndComponent,
  },
  {
    path: 'align-items/baseline',
    component: AlignItemsBaselineComponent,
  },
  {
    path: 'align-self/auto',
    component: AlignSelfAutoComponent,
  },
  {
    path: 'align-self/stretch',
    component: AlignSelfStretchComponent,
  },
  {
    path: 'align-self/start',
    component: AlignSelfStartComponent,
  },
  {
    path: 'align-self/end',
    component: AlignSelfEndComponent,
  },
  {
    path: 'align-self/center',
    component: AlignSelfCenterComponent,
  },
  {
    path: 'align-self/baseline',
    component: AlignSelfBaselineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexboxRoutingModule { }
