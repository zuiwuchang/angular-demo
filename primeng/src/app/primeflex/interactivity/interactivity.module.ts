import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InteractivityRoutingModule } from './interactivity-routing.module';
import { HomeComponent } from './home/home.component';
import { SelectComponent } from './select/select.component';
import { PointerComponent } from './pointer/pointer.component';
import { OutlineComponent } from './outline/outline.component';
import { CursorComponent } from './cursor/cursor.component';
import { AppearanceComponent } from './appearance/appearance.component';


@NgModule({
  declarations: [
    HomeComponent,
    SelectComponent,
    PointerComponent,
    OutlineComponent,
    CursorComponent,
    AppearanceComponent
  ],
  imports: [
    CommonModule,
    InteractivityRoutingModule
  ]
})
export class InteractivityModule { }
