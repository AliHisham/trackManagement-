import { Component, OnDestroy, OnInit } from '@angular/core';
//import {MatFormFieldModule} from '@angular/material/form-field';
import { TheServiceService } from './the-service.service';
import { TrackServiceService } from './track-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnDestroy  {
  title = 'mean';
  group:any=[];
  state
 public nav
 check=false
 subscription:Subscription
 admin
 name

 deleteStorage

  
  
  constructor(private service:TrackServiceService , private route:ActivatedRoute , private router:Router){
 this.subscription= this.service.user.subscribe(res=>{
    this.nav=res 
    if(this.nav ==="Admin" || this.nav==="User"){
      this.check=true
    }
    else{
      this.check=false
    }
 
  })

  
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

   }
 


