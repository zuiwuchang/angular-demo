import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BorderRoutingModule } from './border-routing.module';
import { HomeComponent } from './home/home.component';
import { RadiusComponent } from './radius/radius.component';
import { WidthComponent } from './width/width.component';
import { StyleComponent } from './style/style.component';
import { ColorComponent } from './color/color.component';


@NgModule({
  declarations: [
    HomeComponent,
    RadiusComponent,
    WidthComponent,
    StyleComponent,
    ColorComponent
  ],
  imports: [
    CommonModule,
    BorderRoutingModule
  ]
})
export class BorderModule { }
