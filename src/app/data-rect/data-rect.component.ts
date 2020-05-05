import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../track-service.service';

@Component({
  selector: 'app-data-rect',
  templateUrl: './data-rect.component.html',
  styleUrls: ['./data-rect.component.css']
})
export class DataRectComponent implements OnInit {
shipments:any=[] 
clients :any=[]
employees :any=[]
users :any=[]
type
check
  constructor(private service:TrackServiceService) 
   { 
     this.service.user.subscribe(res=>{
      this.type=res
      if(this.type==="Admin"){
        this.check=true
      }
      else{
        this.check=false
      }
     })
   }

  ngOnInit() {
    this.service.getShipments().subscribe(res=>{
      this.shipments=res
    })
    this.service.getAllClients().subscribe(res=>{
      this.clients=res
    })
    this.service.getEmployees().subscribe(res=>{
      this.employees=res
    })
    this.service.getAllUsers().subscribe(res=>{
      this.users=res
    })

  }

}
