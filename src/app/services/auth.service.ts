import { Injectable } from '@angular/core';
import { resolve, reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(){
  }
  istAuth=false;
  onSignIn(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{this.istAuth=true;
        resolve(true);
      },2000);
    }
    );
  }
  signOut(){
    this.istAuth=false;
  }
}
