import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-world-summary-today',
  templateUrl: './world-summary-today.page.html',
  styleUrls: ['./world-summary-today.page.scss'],
})
export class WorldSummaryTodayPage implements OnInit {

  public worldSummary: any={};

  constructor(private navCtrl: NavController, private dades: DadesService) { }

  ngOnInit() {
    this.dades.dadesWorldTotals().subscribe(
      (data: any) => {
        // recollim les dades i les guardem a la propietat totals
        this.worldSummary = data;
        // llistem les dades a la cònsola per veure què hem rebut
        console.log(this.worldSummary);
        }
        )
  }

  goBack(){
    this.navCtrl.back();
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
