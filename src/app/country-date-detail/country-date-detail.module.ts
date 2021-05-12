import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CountryDateDetailPageRoutingModule } from './country-date-detail-routing.module';

import { CountryDateDetailPage } from './country-date-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CountryDateDetailPageRoutingModule
  ],
  declarations: [CountryDateDetailPage]
})
export class CountryDateDetailPageModule {}
