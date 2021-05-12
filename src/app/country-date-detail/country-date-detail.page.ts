import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-country-date-detail',
  templateUrl: './country-date-detail.page.html',
  styleUrls: ['./country-date-detail.page.scss'],
})
export class CountryDateDetailPage implements OnInit {

  countryDate: any;

  constructor(public navParams: NavParams, public modalController: ModalController) { }

  ngOnInit() {
    this.countryDate=this.navParams.get("countryDate");
  }

  dismiss() {
    this.modalController.dismiss();
  }
  
  formatDate(timestamp){
    var x=new Date(timestamp);
    var dd = x.getDate();
    var mm = x.getMonth()+1;
    var yy = x.getFullYear();
    return dd +"-" + mm+"-" + yy;
 }
}
