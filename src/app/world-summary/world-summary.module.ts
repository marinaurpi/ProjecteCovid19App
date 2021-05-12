import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldSummaryPageRoutingModule } from './world-summary-routing.module';

import { WorldSummaryPage } from './world-summary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldSummaryPageRoutingModule
  ],
  declarations: [WorldSummaryPage]
})
export class WorldSummaryPageModule {}
