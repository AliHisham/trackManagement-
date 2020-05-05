import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TrackServiceService } from '../track-service.service';

@Component({
  selector: 'app-clients-reports',
  templateUrl: './clients-reports.component.html',
  styleUrls: ['./clients-reports.component.css']
})
export class ClientsReportsComponent implements OnInit {
  public cityy=[
    {value:"Cairo"},
    {value:"Tanta"},
    {value:"Mansoura"},
    {value:"Alexandria"},
  ]
  clients
  groupOfClients=[]
  email=false
  phone=false
  both=false
  table=false
  display=false
  printtt
  displayedColumns: string[] = ['name', 'email', 'phone' ];
  constructor(private service:TrackServiceService) { }

  ngOnInit() {
  }
 
  generate(city:NgModel){
    this.service.getAllClients().subscribe(res=>{
      this.clients=res;
      this.groupOfClients=this.clients.filter(x=>x.city==city.value)
      
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
