import { WorldSummaryPage } from './../world-summary/world-summary.page';
import { Component, OnInit } from '@angular/core';
import { DadesService } from '../services/dades.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  public dadesTotal: Array<any>;

  public dia1: any = "";
  public dia2: any = "";

  constructor(private dades: DadesService, public modalController: ModalController, private router: Router) {}

  ngOnInit() {
    console.log(this.dia1)
    this.dades.dadesWIP(this.dia1, this.dia2).subscribe(
      (data: Array<any>) => {
        this.dadesTotal = data;
        console.log(this.dadesTotal);
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

 formatTime(timestamp){
  var x=new Date(timestamp);
  var hours = x.getHours();
  var minutes = x.getMinutes();
  var seconds = x.getSeconds();
  return hours +":" + minutes+":" + seconds;
  
 }

  onSelectChange() {
    this.dades.dadesWIP(this.dia1, this.dia2).subscribe(
      (data: Array<any>) => {
        this.dadesTotal = data;
        console.log(this.dadesTotal);
      }
    )
  }

  async goWorldSummary(date){
    console.log(date);
    const modal = await this.modalController.create({
      component: WorldSummaryPage,
      componentProps: { dateInformation: date}
    });
    return await modal.present();
 }
}
