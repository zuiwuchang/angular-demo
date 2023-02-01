import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorMainComponent } from './color-main/color-main.component';
import { ColorPseudoComponent } from './color-pseudo/color-pseudo.component';
import { ColorThemeComponent } from './color-theme/color-theme.component';
import { HomeComponent } from './home/home.component';
import { PositionComponent } from './position/position.component';
import { RepeatNoRepeatComponent } from './repeat-no-repeat/repeat-no-repeat.component';
import { RepeatRepeatComponent } from './repeat-repeat/repeat-repeat.component';
import { RepeatRoundComponent } from './repeat-round/repeat-round.component';
import { RepeatSpaceComponent } from './repeat-space/repeat-space.component';
import { RepeatXComponent } from './repeat-x/repeat-x.component';
import { RepeatYComponent } from './repeat-y/repeat-y.component';
import { SizeAutoComponent } from './size-auto/size-auto.component';
import { SizeContainComponent } from './size-contain/size-contain.component';
import { SizeCoverComponent } from './size-cover/size-cover.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'color/main',
    component: ColorMainComponent,
  },
  {
    path: 'color/pseudo',
    component: ColorPseudoComponent,
  },
  {
    path: 'color/theme',
    component: ColorThemeComponent,
  },
  {
    path: 'repeat/repeat',
    component: RepeatRepeatComponent,
  },
  {
    path: 'repeat/no',
    component: RepeatNoRepeatComponent,
  },
  {
    path: 'repeat/x',
    component: RepeatXComponent,
  },
  {
    path: 'repeat/y',
    component: RepeatYComponent,
  },
  {
    path: 'repeat/round',
    component: RepeatRoundComponent,
  },
  {
    path: 'repeat/space',
    component: RepeatSpaceComponent,
  },
  {
    path: 'size/auto',
    component: SizeAutoComponent,
  },
  {
    path: 'size/cover',
    component: SizeCoverComponent,
  },
  {
    path: 'size/contain',
    component: SizeContainComponent,
  },
  {
    path: 'position',
    component: PositionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackgroundRoutingModule { }
