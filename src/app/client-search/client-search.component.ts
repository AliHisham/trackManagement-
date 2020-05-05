import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { TrackServiceService } from '../track-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {
search:FormGroup
shipment
show=false
object
table:any=[]

 modalRef: BsModalRef;
 check;

  constructor(private service:TrackServiceService , private modalService: BsModalService) { }

  ngOnInit() {
    this.search= new FormGroup({
      "shipmentNumber" : new FormControl("" , Validators.required)
    })
  }
 find(search:FormGroup){
   this.service.shipmentSearch(search.value).subscribe(res=>{
     this.shipment=res
     console.log(this.shipment)
     if(this.shipment==null){
       this.check=true
     }
     else{
       this.check=false
     }
     

   } , err=>{
   })
   this.show=true
 }
 openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template);
}
logout(){
  localStorage.token="";
  localStorage.type="";
  this.service.changeUser(localStorage.type)
}
}
