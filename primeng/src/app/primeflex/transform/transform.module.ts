import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformRoutingModule } from './transform-routing.module';
import { TranslateComponent } from './translate/translate.component';
import { OriginComponent } from './origin/origin.component';
import { RotateComponent } from './rotate/rotate.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    TranslateComponent,
    OriginComponent,
    RotateComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TransformRoutingModule
  ]
})
export class TransformModule { }
