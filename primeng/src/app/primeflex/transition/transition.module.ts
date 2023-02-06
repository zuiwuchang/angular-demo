import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransitionRoutingModule } from './transition-routing.module';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { DurationComponent } from './duration/duration.component';
import { TimingComponent } from './timing/timing.component';
import { DelayComponent } from './delay/delay.component';


@NgModule({
  declarations: [
    HomeComponent,
    PropertyComponent,
    DurationComponent,
    TimingComponent,
    DelayComponent
  ],
  imports: [
    CommonModule,
    TransitionRoutingModule
  ]
})
export class TransitionModule { }
