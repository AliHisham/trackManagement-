import { Component, OnInit, TemplateRef } from '@angular/core';
import { TrackServiceService } from '../track-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients;
  modalRef: BsModalRef;
  lat = 30.0444;
 lng = 31.2357;
 id
 client
 displayedColumns: string[] = ['name', 'phone', 'email',  'Actions' ];
 clientsPerPage=5
 currentPage=1 
 AllClients:any=[]
 show=false
 message
  constructor(private Service:TrackServiceService,private modalService: BsModalService ,private Http:HttpClient, private route:ActivatedRoute) 
   {
      
   }
  
  ngOnInit() {
    
    this.Service.paginationClients(this.clientsPerPage, this.currentPage).subscribe(res=>{
      this.clients=res;
      console.log(this.clients)
    } , err=>{
          this.message=err.error.message
          this.show=true
    })
    this.Service.getAllClients().subscribe(res=>{
      this.AllClients=res
    })
  }
  openModal(template: TemplateRef<any> , id) {
    this.modalRef = this.modalService.show(template);
    this.Service.getLocationForOneClient(id).subscribe(res=>{
      this.client=res
      this.lat=this.client.lat;
      this.lng=this.client.lng;
    })

  }
  delete(id){
    this.Service.deleteClient(id).subscribe(res=>{
      this.ngOnInit()
    })
  }
  onchange(event:PageEvent){
    this.currentPage=event.pageIndex + 1;
    this.Service.paginationClients(this.clientsPerPage , this.currentPage).subscribe(res=>{
      this.clients=res
    })
  }
}
