import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexboxRoutingModule } from './flexbox-routing.module';
import { HomeComponent } from './home/home.component';
import { DirectionRowComponent } from './direction-row/direction-row.component';
import { DirectionRowReverseComponent } from './direction-row-reverse/direction-row-reverse.component';
import { DirectionColumnComponent } from './direction-column/direction-column.component';
import { DirectionColumnReverseComponent } from './direction-column-reverse/direction-column-reverse.component';
import { WrapWrapComponent } from './wrap-wrap/wrap-wrap.component';
import { WrapWrapReverseComponent } from './wrap-wrap-reverse/wrap-wrap-reverse.component';
import { WrapNowrapComponent } from './wrap-nowrap/wrap-nowrap.component';
import { FlexAutoComponent } from './flex-auto/flex-auto.component';
import { FlexV1Component } from './flex-v1/flex-v1.component';
import { FlexInitialComponent } from './flex-initial/flex-initial.component';
import { FlexNoneComponent } from './flex-none/flex-none.component';
import { FlexGrowComponent } from './flex-grow/flex-grow.component';
import { FlexShrinkComponent } from './flex-shrink/flex-shrink.component';
import { GapComponent } from './gap/gap.component';
import { OrderComponent } from './order/order.component';
import { JustifyContentStartComponent } from './justify-content-start/justify-content-start.component';
import { JustifyContentEndComponent } from './justify-content-end/justify-content-end.component';
import { JustifyContentCenterComponent } from './justify-content-center/justify-content-center.component';
import { JustifyContentBetweenComponent } from './justify-content-between/justify-content-between.component';
import { JustifyContentAroundComponent } from './justify-content-around/justify-content-around.component';
import { JustifyContentEvenlyComponent } from './justify-content-evenly/justify-content-evenly.component';
import { AlignContentEvenlyComponent } from './align-content-evenly/align-content-evenly.component';
import { AlignContentAroundComponent } from './align-content-around/align-content-around.component';
import { AlignContentBetweenComponent } from './align-content-between/align-content-between.component';
import { AlignContentCenterComponent } from './align-content-center/align-content-center.component';
import { AlignContentEndComponent } from './align-content-end/align-content-end.component';
import { AlignContentStartComponent } from './align-content-start/align-content-start.component';
import { AlignItemsStretchComponent } from './align-items-stretch/align-items-stretch.component';
import { AlignItemsStartComponent } from './align-items-start/align-items-start.component';
import { AlignItemsCenterComponent } from './align-items-center/align-items-center.component';
import { AlignItemsEndComponent } from './align-items-end/align-items-end.component';
import { AlignItemsBaselineComponent } from './align-items-baseline/align-items-baseline.component';
import { AlignSelfAutoComponent } from './align-self-auto/align-self-auto.component';
import { AlignSelfStartComponent } from './align-self-start/align-self-start.component';
import { AlignSelfCenterComponent } from './align-self-center/align-self-center.component';
import { AlignSelfEndComponent } from './align-self-end/align-self-end.component';
import { AlignSelfStretchComponent } from './align-self-stretch/align-self-stretch.component';
import { AlignSelfBaselineComponent } from './align-self-baseline/align-self-baseline.component';


@NgModule({
  declarations: [
    HomeComponent,
    DirectionRowComponent,
    DirectionRowReverseComponent,
    DirectionColumnComponent,
    DirectionColumnReverseComponent,
    WrapWrapComponent,
    WrapWrapReverseComponent,
    WrapNowrapComponent,
    FlexAutoComponent,
    FlexV1Component,
    FlexInitialComponent,
    FlexNoneComponent,
    FlexGrowComponent,
    FlexShrinkComponent,
    GapComponent,
    OrderComponent,
    JustifyContentStartComponent,
    JustifyContentEndComponent,
    JustifyContentCenterComponent,
    JustifyContentBetweenComponent,
    JustifyContentAroundComponent,
    JustifyContentEvenlyComponent,
    AlignContentEvenlyComponent,
    AlignContentAroundComponent,
    AlignContentBetweenComponent,
    AlignContentCenterComponent,
    AlignContentEndComponent,
    AlignContentStartComponent,
    AlignItemsStretchComponent,
    AlignItemsStartComponent,
    AlignItemsCenterComponent,
    AlignItemsEndComponent,
    AlignItemsBaselineComponent,
    AlignSelfAutoComponent,
    AlignSelfStartComponent,
    AlignSelfCenterComponent,
    AlignSelfEndComponent,
    AlignSelfStretchComponent,
    AlignSelfBaselineComponent
  ],
  imports: [
    CommonModule,
    FlexboxRoutingModule
  ]
})
export class FlexboxModule { }
