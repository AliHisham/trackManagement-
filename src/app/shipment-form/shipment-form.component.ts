import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackServiceService } from '../track-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-shipment-form',
  templateUrl: './shipment-form.component.html',
  styleUrls: ['./shipment-form.component.css']
})

export class ShipmentFormComponent  implements  OnInit {

 lat = 30.0444;
 lng = 31.2357;
 location=[];
 hide=true;
 shipmentForm:FormGroup
 employees;
 clients
 senders
 receivers
 check
 id
 shipment
 date;
 date2
 city=[
  {value:"Cairo"},
  {value:"Tanta"},
  {value:"Mansoura"},
  {value:"Alexandria"},
]
method=[
  {value:"Cash on Delivery"},
  {value:"paid"}
]
status=[
  {value:"On-Hold"},
  {value:"Delivered"},
  {value:"Returned"},
  {value:"Canceled"}
]
durationInSeconds = 5;
model
  constructor(private service:TrackServiceService ,private Http:HttpClient ,private route:ActivatedRoute, private snackBar: MatSnackBar , private router:Router) {
    this.service.getEmployees().subscribe(res=>{
      this.employees=res;
    });
    this.service.getAllClients().subscribe(res=>{
      this.clients=res;
      console.log(this.clients)
      this.senders=this.clients.filter(x=>x.type==="Sender")
      this.receivers=this.clients.filter(x=>x.type==="Receiver")
    })
    this.route.paramMap.subscribe((res:ParamMap)=>{
      if(res.has('id')){
        this.check="edit"
        this.id=res.get("id")
        this.Http.get(environment.shipmentApi2+this.id).subscribe(res=>{
          this.shipment=res
          this.date=this.shipment.datePicker
          this.date2=this.shipment.datePicker2
          this.lat=this.shipment.Lat;
          this.lng=this.shipment.lng
        })
      }
      else{
        this.check="create"
      }
    })
   }

 ngOnInit(){
    this.shipmentForm=new FormGroup({
      "senderName": new FormControl("" , Validators.required),
      "senderCity": new FormControl("", Validators.required ),
      "senderAddress":new FormControl("", Validators.required),
      "senderPhone":new FormControl("", [Validators.required , Validators.minLength(11),Validators.maxLength(11)]),
      "receiverName":new FormControl("", Validators.required),
      "receiverCity":new FormControl("", Validators.required),
      "receiverAddress":new FormControl("", Validators.required),
      "receiverPhone": new FormControl ("",[Validators.required , Validators.minLength(11),Validators.maxLength(11)]),
      "shipmentNumber": new FormControl ("", Validators.required),
      "servicePrice":new FormControl ("",Validators.required),
      "paymentMethod":new FormControl ("",Validators.required ),
      "oEmployee":new FormControl ("",Validators.required),
      "datePicker":new FormControl ("",Validators.required),
      "shipmentType":new FormControl (""),
      "serviceWeight":new FormControl ("",Validators.required),
      "ConsignmentValue":new FormControl ("",Validators.required),
      "destinationEmployee": new FormControl ("",Validators.required),
      "datePicker2":new FormControl ("",Validators.required),
      "ShipmentLocation":new FormControl ("",Validators.required),
      "shipmentStatus":new FormControl ("",Validators.required),
      "lng":new FormControl (""),
      "Lat":new FormControl (""),
    })
 }
 currentLocation(event){
   this.lat=event.coords.lat;
   this.lng=event.coords.lng;
 }

 submit(message,action){
   if(this.check==="create"){
    this.service.createShipment(this.shipmentForm.value).subscribe(res=>{
      console.log(res);
      this.router.navigate(['/shipment'])
     })
    
    this.snackBar.open(message,action,{
      duration:3000
    })
   
   }
  else{
    this.service.UpdateShipment(this.id,this.shipmentForm.value).subscribe(res=>{
      console.log(res)
      this.router.navigate(['/shipment'])
    })
   this.snackBar.open(message,action,{
     duration:3000
   })
   
  }
 }
 
}

