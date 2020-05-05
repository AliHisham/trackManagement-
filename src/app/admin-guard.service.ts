import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private router:Router  ) { }
  canActivate():any{
    if(localStorage.token!=="" && localStorage.type=="Admin"){
      return true
      
      
    }
    else(localStorage.token =="" && localStorage.type==="")
    {
      return false
    }
  }
}
