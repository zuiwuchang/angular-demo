import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppearanceComponent } from './appearance/appearance.component';
import { CursorComponent } from './cursor/cursor.component';
import { HomeComponent } from './home/home.component';
import { OutlineComponent } from './outline/outline.component';
import { PointerComponent } from './pointer/pointer.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'appearance',
    component: AppearanceComponent,
  },
  {
    path: 'cursor',
    component: CursorComponent,
  },
  {
    path: 'outline',
    component: OutlineComponent,
  },
  {
    path: 'pointer-events',
    component: PointerComponent,
  },
  {
    path: 'user-select',
    component: SelectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InteractivityRoutingModule { }
