import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonRoutingModule } from './button-routing.module';

import { ButtonModule as PButtonModule } from 'primeng/button';

import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    HomeComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    PButtonModule,
    ButtonRoutingModule
  ]
})
export class ButtonModule { }
