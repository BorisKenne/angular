import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
authStatus:boolean;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
    this.authStatus=this.authService.istAuth;
  }
onSignIn(){
  this.authService.onSignIn().then(
     ()=>{console.log('connexion reussie');
     this.authStatus=this.authService.istAuth;
     this.router.navigate(['appareils']);
    }
    )
}
onSignOut(){
  this.authService.signOut();
  this.authStatus=this.authService.istAuth;
}
}
