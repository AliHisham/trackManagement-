import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { TheServiceService } from './the-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private Http :HttpClient , private service:TheServiceService , private router:Router) { 
    
  }

  canActivate():any{
    if(localStorage.token!=="" && localStorage.type=="Admin" || localStorage.token!=="" && localStorage.type=="User"  ){
      
      return true
      
    }
    else{
      this.router.navigate[("")]
      return false
      
    }
  }
}
