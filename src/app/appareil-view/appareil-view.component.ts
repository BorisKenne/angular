import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth=true;
  lastUpdate=new Promise(
    (resolve,reject)=>{
      const date=new Date();
      setTimeout(
        ()=>{resolve(date)},2000
      )
    }
  );

  constructor(private appareilService: AppareilService){
    setTimeout(
      ()=>{
        this.isAuth=false
      },4000);
   
  }
  ngOnInit() {
    //this.appareils=this.appareilService.appareils;
    this.appareilSubscription=this.appareilService.appareilSubject.subscribe(
      (appareils:any[])=>{this.appareils=appareils;}
    );
    this.appareilService.emitAppareilsSubject();

  }
  onAllumer(){
    console.log("debut on allume tout");
    this.appareilService.switchOnAll();
    console.log("fin on allume tout");
  }
  onEteindre(){
    console.log("début on éteindre tout");
    this.appareilService.switchOffAll();
    console.log("Fin on éteindre tout");
  }
appareils:any[];
appareilSubscription:Subscription;




}
