import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../track-service.service';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.css']
})
export class UserButtonComponent implements OnInit  {
type
check
  constructor(private service:TrackServiceService) 
   {
     this.service.user.subscribe(res=>{
       this.type = res 
       if(this.type==="Admin"){
         this.check=true
       }
       else{
         this.check=false
       }
     })
   }

  ngOnInit() {
  
  }
  

}
