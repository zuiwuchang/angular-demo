import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelayComponent } from './delay/delay.component';
import { DurationComponent } from './duration/duration.component';
import { HomeComponent } from './home/home.component';
import { PropertyComponent } from './property/property.component';
import { TimingComponent } from './timing/timing.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'property',
    component: PropertyComponent,
  },
  {
    path: 'duration',
    component: DurationComponent,
  },
  {
    path: 'timing-function',
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
export class TransitionRoutingModule { }
