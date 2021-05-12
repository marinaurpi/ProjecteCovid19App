import { Component, OnInit } from '@angular/core';
import { ModalController,NavParams } from '@ionic/angular';

@Component({
  selector: 'app-world-summary',
  templateUrl: './world-summary.page.html',
  styleUrls: ['./world-summary.page.scss'],
})
export class WorldSummaryPage implements OnInit {

  information: any;

  constructor(public navParams: NavParams, public modalController: ModalController) { }

  ngOnInit() {
    this.information=this.navParams.get("dateInformation");
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

 formatTime(timestamp){
  var x=new Date(timestamp);
  var hours = x.getHours();
  var minutes = x.getMinutes();
  var seconds = x.getSeconds();
  return hours +":" + minutes+":" + seconds;
  
 }

}
