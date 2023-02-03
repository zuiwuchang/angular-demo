import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SizeRoutingModule } from './size-routing.module';
import { HomeComponent } from './home/home.component';
import { WidthComponent } from './width/width.component';
import { MinWidthComponent } from './min-width/min-width.component';
import { MaxWidthComponent } from './max-width/max-width.component';
import { HeightComponent } from './height/height.component';
import { MinHeightComponent } from './min-height/min-height.component';
import { MaxHeightComponent } from './max-height/max-height.component';


@NgModule({
  declarations: [
    HomeComponent,
    WidthComponent,
    MinWidthComponent,
    MaxWidthComponent,
    HeightComponent,
    MinHeightComponent,
    MaxHeightComponent,
  ],
  imports: [
    CommonModule,
    SizeRoutingModule
  ]
})
export class SizeModule { }
