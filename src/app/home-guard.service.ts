import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeGuardService implements CanActivate {

  constructor(private router:Router) { }
  canActivate():any{
   if(localStorage.token!=="" && localStorage.type=="Admin" || localStorage.token!=="" && localStorage.type=="User" || localStorage.token!=="" && localStorage.type=="Client"){
    return true
   }
   else{
    this.router.navigate[("")]
    return false
    
   }
  }
}
