import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldSummaryPage } from './world-summary.page';

const routes: Routes = [
  {
    path: '',
    component: WorldSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorldSummaryPageRoutingModule {}
