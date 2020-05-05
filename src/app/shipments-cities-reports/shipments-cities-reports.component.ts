import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../track-service.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-shipments-cities-reports',
  templateUrl: './shipments-cities-reports.component.html',
  styleUrls: ['./shipments-cities-reports.component.css']
})
export class ShipmentsCitiesReportsComponent implements OnInit {
  public cityy=[
    {value:"Cairo"},
    {value:"Tanta"},
    {value:"Mansoura"},
    {value:"Alexandria"},
  ]
  shipments
  groupOFshipments=[]
  table=false
  display=false
  printtt
  displayedColumns: string[] = ['senderCity', 'receiverCity', 'oEmployee', ' destinationEmployee' , 'shipmentNumber' , 'shipmentStatus' ];
  constructor(private service :TrackServiceService) { }

  ngOnInit() {
  }
create(city:NgModel){
  this.service.getShipments().subscribe(res=>{
   this.shipments=res
   this.groupOFshipments=this.shipments.filter(group=>group.senderCity==city.value ||group.receiverCity==city.value)
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
}
}
