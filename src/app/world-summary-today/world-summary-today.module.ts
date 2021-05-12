import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldSummaryTodayPageRoutingModule } from './world-summary-today-routing.module';

import { WorldSummaryTodayPage } from './world-summary-today.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldSummaryTodayPageRoutingModule
  ],
  declarations: [WorldSummaryTodayPage]
})
export class WorldSummaryTodayPageModule {}
