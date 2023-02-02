import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { PaddingComponent } from './padding/padding.component';
import { MarginComponent } from './margin/margin.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    PaddingComponent,
    MarginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SpaceRoutingModule
  ]
})
export class SpaceModule { }
