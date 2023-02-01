import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackgroundRoutingModule } from './background-routing.module';
import { HomeComponent } from './home/home.component';
import { ColorMainComponent } from './color-main/color-main.component';
import { ColorPseudoComponent } from './color-pseudo/color-pseudo.component';
import { ColorThemeComponent } from './color-theme/color-theme.component';
import { RepeatRepeatComponent } from './repeat-repeat/repeat-repeat.component';
import { RepeatNoRepeatComponent } from './repeat-no-repeat/repeat-no-repeat.component';
import { RepeatXComponent } from './repeat-x/repeat-x.component';
import { RepeatYComponent } from './repeat-y/repeat-y.component';
import { RepeatRoundComponent } from './repeat-round/repeat-round.component';
import { RepeatSpaceComponent } from './repeat-space/repeat-space.component';
import { SizeAutoComponent } from './size-auto/size-auto.component';
import { SizeCoverComponent } from './size-cover/size-cover.component';
import { SizeContainComponent } from './size-contain/size-contain.component';
import { PositionComponent } from './position/position.component';


@NgModule({
  declarations: [
    HomeComponent,
    ColorMainComponent,
    ColorPseudoComponent,
    ColorThemeComponent,
    RepeatRepeatComponent,
    RepeatNoRepeatComponent,
    RepeatXComponent,
    RepeatYComponent,
    RepeatRoundComponent,
    RepeatSpaceComponent,
    SizeAutoComponent,
    SizeCoverComponent,
    SizeContainComponent,
    PositionComponent,
  ],
  imports: [
    CommonModule,
    BackgroundRoutingModule
  ]
})
export class BackgroundModule { }
