import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../track-service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-shipments-clients-report',
  templateUrl: './shipments-clients-report.component.html',
  styleUrls: ['./shipments-clients-report.component.css']
})
export class ShipmentsClientsReportComponent implements OnInit {
clients
groupOfClients
shipments
groupOfShipments=[]
table=false
display=false
printtt
printt=document.getElementById("print");
  constructor(private service:TrackServiceService) { }

  ngOnInit() {
    this.service.getAllClients().subscribe(res=>{
     this.clients=res
    })
   
  }
  generate(client:NgModel){
    this.service.getShipments().subscribe(res=>{
      this.shipments=res
      this.groupOfShipments=this.shipments.filter(x=>x.senderName==client.value ||x.receiverName==client.value)
    })
   this.display=true
 
   this.table=true
  }
  print(printt="printtt")
  {
    var printContent = document.getElementById(printt);
    var WinPrint = window.open('', '', 'width=900,height=650');
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    //WinPrint.close();

  }

}
