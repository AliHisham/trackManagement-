import { NgModel, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TrackServiceService } from '../track-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { PageEvent, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {
shipments:any=[]
dataSource =new MatTableDataSource();
modalRef: BsModalRef;
lat = 30.0444;
lng = 31.2357;
shipment;
totalShipments;
AllShipments:any=[]
shipmentsPerPage=5
currentPage=1
message
show=false
filter:FormGroup
displayedColumns: string[] = ['shipmentNumber', 'oEmployee', 'destinationEmployee', ' shipmentStatus' , 'Actions' ];
  constructor(private service:TrackServiceService,private modalService: BsModalService) {
    this.filter = new FormGroup({
      "shipmentNumber": new FormControl("")
    })
   }

  ngOnInit() {
  this.service.paginationShipments(this.shipmentsPerPage, this.currentPage).subscribe(res=>{
    this.shipments=res
    this.dataSource =new MatTableDataSource(this.shipments);
  } , err=>{
     this.message=err.error.message
     this.show=true
  })
   this.service.getShipments().subscribe(res=>{
     this.AllShipments=res
   })
  }
  openModal(template: TemplateRef<any> , id) {
    this.modalRef = this.modalService.show(template);
    this.service.getLocationofShipment(id).subscribe(res=>{
      this.shipment=res
      this.lat=this.shipment.Lat;
      this.lng=this.shipment.lng;
    }  , err=>{
      this.message=err.error.message
      this.show=true
    })
  }
  delete(id){
    this.service.deleteShipment(id).subscribe(res=>{
      this.ngOnInit()
    })
  }
  onchange(event:PageEvent){
    this.currentPage=event.pageIndex + 1
    this.service.paginationShipments(this.shipmentsPerPage , this.currentPage).subscribe(res=>{
      this.shipments=res
      this.dataSource =new MatTableDataSource(this.shipments);
    })
  }
  
}
