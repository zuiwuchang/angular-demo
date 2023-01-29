import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { HideComponent } from './hide/hide.component';
import { BlockComponent } from './block/block.component';
import { InlineComponent } from './inline/inline.component';
import { InlineBlockComponent } from './inline-block/inline-block.component';
import { FlexComponent } from './flex/flex.component';
import { InlineFlexComponent } from './inline-flex/inline-flex.component';


@NgModule({
  declarations: [
    HomeComponent,
    HideComponent,
    BlockComponent,
    InlineComponent,
    InlineBlockComponent,
    FlexComponent,
    InlineFlexComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
