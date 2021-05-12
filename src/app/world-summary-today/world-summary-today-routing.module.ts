import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldSummaryTodayPage } from './world-summary-today.page';

const routes: Routes = [
  {
    path: '',
    component: WorldSummaryTodayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorldSummaryTodayPageRoutingModule {}
