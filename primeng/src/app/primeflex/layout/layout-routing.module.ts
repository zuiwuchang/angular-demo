import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockComponent } from './block/block.component';
import { FlexComponent } from './flex/flex.component';
import { HideComponent } from './hide/hide.component';
import { HomeComponent } from './home/home.component';
import { InlineBlockComponent } from './inline-block/inline-block.component';
import { InlineFlexComponent } from './inline-flex/inline-flex.component';
import { InlineComponent } from './inline/inline.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hide',
    component: HideComponent,
  },
  {
    path: 'block',
    component: BlockComponent,
  },
  {
    path: 'inline',
    component: InlineComponent,
  },
  {
    path: 'inline-block',
    component: InlineBlockComponent,
  },
  {
    path: 'flex',
    component: FlexComponent,
  },
  {
    path: 'inline-flex',
    component: InlineFlexComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
