import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypographyRoutingModule } from './typography-routing.module';
import { HomeComponent } from './home/home.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { FontWeightComponent } from './font-weight/font-weight.component';
import { FontStyleComponent } from './font-style/font-style.component';
import { TextColorComponent } from './text-color/text-color.component';
import { TextAlignComponent } from './text-align/text-align.component';
import { TextDecorationComponent } from './text-decoration/text-decoration.component';
import { TextOverflowComponent } from './text-overflow/text-overflow.component';
import { TextTransformComponent } from './text-transform/text-transform.component';
import { LineComponent } from './line/line.component';
import { WhitespaceComponent } from './whitespace/whitespace.component';
import { ListComponent } from './list/list.component';
import { VerticalComponent } from './vertical/vertical.component';


@NgModule({
  declarations: [
    HomeComponent,
    FontSizeComponent,
    FontWeightComponent,
    FontStyleComponent,
    TextColorComponent,
    TextAlignComponent,
    TextDecorationComponent,
    TextOverflowComponent,
    TextTransformComponent,
    LineComponent,
    WhitespaceComponent,
    ListComponent,
    VerticalComponent
  ],
  imports: [
    CommonModule,
    TypographyRoutingModule
  ]
})
export class TypographyModule { }
