import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackServiceService } from '../track-service.service';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnDestroy {
   token;
   collapse=true
   public admin;
   
  constructor( private secondService:TrackServiceService ) 
  {
   
  }

  ngOnDestroy() {
  
  }


   logout(){
      localStorage.token="";
     localStorage.type="";
     this.token=localStorage.token;
    this.secondService.changeUser(localStorage.type)
   }

}
