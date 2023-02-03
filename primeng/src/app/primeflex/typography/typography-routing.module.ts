import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontSizeComponent } from './font-size/font-size.component';
import { FontStyleComponent } from './font-style/font-style.component';
import { FontWeightComponent } from './font-weight/font-weight.component';
import { HomeComponent } from './home/home.component';
import { LineComponent } from './line/line.component';
import { ListComponent } from './list/list.component';
import { TextAlignComponent } from './text-align/text-align.component';
import { TextColorComponent } from './text-color/text-color.component';
import { TextDecorationComponent } from './text-decoration/text-decoration.component';
import { TextOverflowComponent } from './text-overflow/text-overflow.component';
import { TextTransformComponent } from './text-transform/text-transform.component';
import { VerticalComponent } from './vertical/vertical.component';
import { WhitespaceComponent } from './whitespace/whitespace.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: "font-size",
    component: FontSizeComponent,
  },
  {
    path: "font-weight",
    component: FontWeightComponent,
  },
  {
    path: "font-style",
    component: FontStyleComponent,
  },
  {
    path: "text-color",
    component: TextColorComponent,
  },
  {
    path: "text-align",
    component: TextAlignComponent,
  },
  {
    path: "text-decoration",
    component: TextDecorationComponent,
  },
  {
    path: "text-overflow",
    component: TextOverflowComponent,
  },
  {
    path: "text-transform",
    component: TextTransformComponent,
  },
  {
    path: 'line-height',
    component: LineComponent,
  },
  {
    path: 'whitespace',
    component: WhitespaceComponent,
  },
  {
    path: 'list-style',
    component: ListComponent,
  },
  {
    path: 'vertical-align',
    component: VerticalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypographyRoutingModule { }
