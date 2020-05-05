import { Component, OnInit, OnChanges } from '@angular/core';
import { TrackServiceService } from '../track-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
shipments:any=[]
deliveredShipments=[]
onholdShipments=[]
returnedShipments=[]
shipmentsNumber
clients
clientsNumber
employees
employeesNumber
users:any=[]
type;
check


  constructor(private service:TrackServiceService , private router:Router) 
   { 
    this.service.user.subscribe(res=>{
       this.type=res
       if(this.type==="Admin" || this.type==="User"){
           this.check=true
       }
       else{
         this.check=false
       }
    })
   }

  ngOnInit() {
    this.service.getShipments().subscribe(res=>{
      this.shipments=res;
      this.shipmentsNumber=this.shipments.length
      this.onholdShipments=this.shipments.filter(x=>x.shipmentStatus=="On-Hold")
      this.deliveredShipments=this.shipments.filter(x=>x.shipmentStatus=="Delivered")
      this.returnedShipments=this.shipments.filter(x=>x.shipmentStatus=="Returned")
    })
    this.service.getAllClients().subscribe(res=>{
      this.clients=res;
      this.clientsNumber=this.clients.length;
    })
    this.service.getEmployees().subscribe(res=>{
      this.employees=res;
      this.employeesNumber=this.employees.length
    })
    this.service.getAllUsers().subscribe(res=>{
      this.users=res
    })
  }
 
}
