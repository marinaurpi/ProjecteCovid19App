import { CountryDetailPage } from './../country-detail/country-detail.page';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{


  public summaryData: Array<any>;
  public summaryDataSearch: Array<any>;

  constructor(public modalController: ModalController, private dades: DadesService, private router: Router) {}

  ngOnInit() {

    
    this.dades.dadesSummary().subscribe(
    (data: any) => {
      // recollim les dades i les guardem a la propietat totals
      this.summaryData = data.Countries;
      this.summaryDataSearch = this.summaryData;
      // llistem les dades a la cònsola per veure què hem rebut
      console.log(this.summaryData);
      }
      )
  }

  goWorldInformation(){
    this.router.navigate(['/world-summary-today']);
  }

  formatDate(timestamp){
    var x=new Date(timestamp);
    var dd = x.getDate();
    var mm = x.getMonth()+1;
    var yy = x.getFullYear();
    return dd +"-" + mm+"-" + yy;
 }

 async goCountryDetail(country){
    console.log(country);
    const modal = await this.modalController.create({
      component: CountryDetailPage,
      componentProps: { country: country}
    });
    return await modal.present();
 }

  initializeItems(){
    this.summaryDataSearch=this.summaryData;
  }

  getItems(ev: any){
    this.initializeItems();
    let val=ev.target.value;
    if(val &&  val.trim() !=''){

      this.summaryDataSearch=this.summaryDataSearch.filter((country)=>{
        return (country.Country.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }

}
