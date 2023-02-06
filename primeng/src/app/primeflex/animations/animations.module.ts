import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationsRoutingModule } from './animations-routing.module';
import { HomeComponent } from './home/home.component';
import { AnimationsComponent } from './animations/animations.component';
import { DurationComponent } from './duration/duration.component';
import { DelayComponent } from './delay/delay.component';
import { IterationComponent } from './iteration/iteration.component';
import { TimingComponent } from './timing/timing.component';
import { FillComponent } from './fill/fill.component';


@NgModule({
  declarations: [
    HomeComponent,
    AnimationsComponent,
    DurationComponent,
    DelayComponent,
    IterationComponent,
    TimingComponent,
    FillComponent
  ],
  imports: [
    CommonModule,
    AnimationsRoutingModule
  ]
})
export class AnimationsModule { }
