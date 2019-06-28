import { Component,Input, OnInit } from '@angular/core';
import { getRenderedText } from '@angular/core/src/render3';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: String;
  @Input() appareilStatus:String;
  @Input() indexOfAppareil: number;
  @Input() id:number;
  constructor(private appareilService:AppareilService) { }

  ngOnInit() {
  }

  getStatus(){
    return this.appareilStatus;
  }
  getColor(){
    if(this.appareilStatus==="allumé")
    {return "green";}
    else{
      return "red";
    }
  }
  onSwitchOn(){
  this.appareilService.switchOnOne(this.indexOfAppareil);
  }
  onSwitchOff(){
    this.appareilService.switchOffOne(this.indexOfAppareil);
    }

}
