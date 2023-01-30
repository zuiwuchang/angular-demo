import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexboxRoutingModule } from './flexbox-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FlexboxRoutingModule
  ]
})
export class FlexboxModule { }
