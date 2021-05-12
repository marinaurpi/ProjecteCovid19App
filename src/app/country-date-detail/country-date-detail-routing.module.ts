import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CountryDateDetailPage } from './country-date-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CountryDateDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CountryDateDetailPageRoutingModule {}
