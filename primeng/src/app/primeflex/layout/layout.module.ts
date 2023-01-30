import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputTextareaModule } from 'primeng/inputtextarea';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { HideComponent } from './hide/hide.component';
import { BlockComponent } from './block/block.component';
import { InlineComponent } from './inline/inline.component';
import { InlineBlockComponent } from './inline-block/inline-block.component';
import { FlexComponent } from './flex/flex.component';
import { InlineFlexComponent } from './inline-flex/inline-flex.component';
import { ResponsiveComponent } from './responsive/responsive.component';
import { OverflowAutoComponent } from './overflow-auto/overflow-auto.component';
import { OverflowHiddenComponent } from './overflow-hidden/overflow-hidden.component';
import { OverflowVisibleComponent } from './overflow-visible/overflow-visible.component';
import { OverflowScrollComponent } from './overflow-scroll/overflow-scroll.component';
import { PositionStaticComponent } from './position-static/position-static.component';
import { PositionFixedComponent } from './position-fixed/position-fixed.component';
import { PositionRelativeComponent } from './position-relative/position-relative.component';
import { PositionAbsoluteComponent } from './position-absolute/position-absolute.component';
import { PositionStickyComponent } from './position-sticky/position-sticky.component';
import { PositionTrblComponent } from './position-trbl/position-trbl.component';
import { ZComponent } from './z/z.component';


@NgModule({
  declarations: [
    HomeComponent,
    HideComponent,
    BlockComponent,
    InlineComponent,
    InlineBlockComponent,
    FlexComponent,
    InlineFlexComponent,
    ResponsiveComponent,
    OverflowAutoComponent,
    OverflowHiddenComponent,
    OverflowVisibleComponent,
    OverflowScrollComponent,
    PositionStaticComponent,
    PositionFixedComponent,
    PositionRelativeComponent,
    PositionAbsoluteComponent,
    PositionStickyComponent,
    PositionTrblComponent,
    ZComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextareaModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
