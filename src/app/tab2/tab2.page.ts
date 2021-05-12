import { CountryDateDetailPage } from './../country-date-detail/country-date-detail.page';
import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public countriesData: Array<any>;

  public countryData: Array<any>;

  public paisSelect: string = "Spain";

  constructor(private dades: DadesService, public modalController: ModalController, private router: Router) {

  }

  ngOnInit() {

    this.dades.dadesCountry("Spain").subscribe(
      (data: Array<any>) => {
        this.countryData = data;
        console.log(this.countryData);
      }
    )

    this.dades.dadesCountries().subscribe(
    (data: Array<any>) => {
      // recollim les dades i les guardem a la propietat totals
      this.countriesData = data;
      // llistem les dades a la cònsola per veure què hem rebut
      console.log(this.countriesData);
      }
      )
      
  }

  goWorldInformation(){
    this.router.navigate(['/world-summary-today']);
  }

  async goCountryDateDetail(countryD){
    console.log(countryD);
    const modal = await this.modalController.create({
      component: CountryDateDetailPage,
      componentProps: { countryDate: countryD}
    });
    return await modal.present();
 }

  formatDate(timestamp){
    var x=new Date(timestamp);
    var dd = x.getDate();
    var mm = x.getMonth()+1;
    var yy = x.getFullYear();
    return dd +"-" + mm+"-" + yy;
 }

 onSelectChange() {
  console.log(this.paisSelect);
  this.dades.dadesCountry(this.paisSelect).subscribe(
    (data: Array<any>) => {
      this.countryData = data;
      console.log(this.countryData);
    }
  )
}


}
