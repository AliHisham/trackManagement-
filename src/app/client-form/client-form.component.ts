import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackServiceService } from '../track-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
 clientForm:FormGroup
 check;
 id;
 client
 lat = 30.0444;
 lng = 31.2357;
type=[
  {value:"Sender"},
  {value:"Receiver"}
];
city=[
  {value:"Cairo"},
  {value:"Tanta"},
  {value:"Mansoura"},
  {value:"Alexandria"},
]
  constructor(private service:TrackServiceService, private route:ActivatedRoute,private Http:HttpClient , private snackBar:MatSnackBar, private router:Router ) {
    this.route.paramMap.subscribe((res:ParamMap)=>{
      if(res.has("id")){
        this.check="edit"
        this.id=res.get("id")
        this.Http.get(environment.clientApi2+this.id).subscribe(res=>{
          this.client=res;
          this.lat=this.client.lat;
          this.lng= this.client.lng;
        })
      }
      else{
        this.check="create"
      }
      

     
    })
   }

  hide=true
  ngOnInit() {
    this.clientForm= new FormGroup({
      "name":new FormControl("",Validators.required),
      "type":new FormControl("",Validators.required),
      "phone":new FormControl("",[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      "email":new FormControl("",[Validators.required,Validators.email]),
      "city":new FormControl("",Validators.required),
      "lng":new FormControl(""),
      "lat":new FormControl(""),
    })
   
  }
  currentLocation(event){
    this.lat=event.coords.lat;
    this.lng=event.coords.lng;
  }
  save(message,action){
    if(this.check==="edit"){
      this.service.updateClients(this.id,this.clientForm.value).subscribe(res=>{
        this.router.navigate(['/clients'])
      })
      this.snackBar.open(message,action,{
        duration:3000
      })
    }
    else{
      this.service.createClients(this.clientForm.value).subscribe(res=>{
        this.router.navigate(['/clients'])
      })
      this.snackBar.open(message,action,{
        duration:3000
      })
    }
    
   
  }
  

}
