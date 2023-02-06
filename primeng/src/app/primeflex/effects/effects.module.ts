import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EffectsRoutingModule } from './effects-routing.module';
import { HomeComponent } from './home/home.component';
import { ElevationComponent } from './elevation/elevation.component';
import { OpacityComponent } from './opacity/opacity.component';


@NgModule({
  declarations: [
    HomeComponent,
    ElevationComponent,
    OpacityComponent
  ],
  imports: [
    CommonModule,
    EffectsRoutingModule
  ]
})
export class EffectsModule { }
