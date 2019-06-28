import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {

 appareilSubject=new Subject<any[]>();
  constructor() { }
 private  appareils=[
    {
      id:1,
      name:"Ordinateur",
      status:"allumé"
    },
    {
      id:2,
      name:"Télévision",
      status:"éteint"
    },
    {
      id:3,
      name:"Machine à laver",
      status:"éteint"
    }
  ];
  emitAppareilsSubject(){
    this.appareilSubject.next(this.appareils.slice());
  }
  getAppareilById(id:number){
    const appareil=this.appareils.find(
      (appareilObject)=>{
        return appareilObject.id===id;
      }
      );
      this.emitAppareilsSubject();
      return appareil;
  }
  switchOnAll(){
    console.log('On all from apparels services');
    for(let appareil of this.appareils){
        appareil.status='allumé'
    }
    this.emitAppareilsSubject();
  }
switchOffAll(){
    console.log('off all from apparels services');
    for(let appareil of this.appareils){
        appareil.status='éteint'
    }
    this.emitAppareilsSubject();
 }
 switchOnOne(index:number){
this.appareils[index].status='allumé';
this.emitAppareilsSubject();
 }
 switchOffOne(index:number){
  this.appareils[index].status='éteint';
  this.emitAppareilsSubject();
   }
}
