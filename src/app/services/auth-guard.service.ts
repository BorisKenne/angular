import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthService } from './auth.service';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;


  constructor(private autService:AuthService,private router:Router) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):Observable<boolean>|Promise<boolean>|boolean{
    if(this.autService.istAuth){
      return true;
    }
    else{
      this.router.navigate(['/auth']);
    }
  }
}
