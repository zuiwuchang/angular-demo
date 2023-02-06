import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationsComponent } from './animations/animations.component';
import { DelayComponent } from './delay/delay.component';
import { DurationComponent } from './duration/duration.component';
import { FillComponent } from './fill/fill.component';
import { HomeComponent } from './home/home.component';
import { IterationComponent } from './iteration/iteration.component';
import { TimingComponent } from './timing/timing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'animations',
    component: AnimationsComponent,
  },
  {
    path: 'iteration-count',
    component: IterationComponent,
  },
  {
    path: 'fill',
    component: FillComponent,
  },
  {
    path: 'duration',
    component: DurationComponent,
  },
  {
    path: 'timing',
    component: TimingComponent,
  },
  {
    path: 'delay',
    component: DelayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimationsRoutingModule { }
