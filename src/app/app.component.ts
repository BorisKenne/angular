import { Component, OnInit, OnDestroy } from '@angular/core';
import { resolve, reject } from 'q';
import { AppareilService } from './services/appareil.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Subscription } from 'rxjs/Rx';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnDestroy {
  secondes:number;
  counterSubscription: Subscription;
  constructor(){} 
  ngOnInit(){
    const counter=Observable.interval(1000);
    this.counterSubscription=counter.subscribe(
      (value:number)=>{ this.secondes=value;}
    );
    /*
    counter.subscribe(
      (value:number)=>{ this.secondes=value;},
      (error:any)=>{console.log('une erreure de l observable');},
      ()=>{console.log('observable est terminé');}
    );
    */
  }
  ngOnDestroy(){
    this.counterSubscription.unsubscribe();
  }
}
