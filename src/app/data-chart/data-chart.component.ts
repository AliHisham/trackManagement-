import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { TrackServiceService } from '../track-service.service';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-data-chart',
  templateUrl: './data-chart.component.html',
  styleUrls: ['./data-chart.component.css']
})
export class DataChartComponent implements OnInit {
  
shipments
delivered=[]
returned=[]
onHold=[]
received
Total=[]

  constructor(private service:TrackServiceService) {
    this.service.getShipments().subscribe(res=>{
      this.shipments=res;
     this.shipments.filter(x=>x.shipmentStatus==="Delivered")
     this.delivered=this.shipments.filter(x=>x.shipmentStatus==="Delivered")
     this.returned=this.shipments.filter(x=>x.shipmentStatus==="Returned")
     this.onHold=this.shipments.filter(x=>x.shipmentStatus==="On-Hold")
     this.Total.push(this.delivered.length , this.returned.length , this.onHold.length)

     this.pieChartOptions={
      responsive: true,
      legend: {
        position: 'top',
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return label;
          },
        },
      }
    };
     this.pieChartLabels=['delivered', 'RETURNED', 'ON-HOLD']
     this.pieChartData=[...this.Total]
     this.pieChartType='pie'
     this.pieChartLegend=true
     this.pieChartColors=[
      {
        backgroundColor: ['#3f51b5', , '#B0BBBF' , '#61ABFF'],
      },
     ]
   
     })
   }
 
 
  ngOnInit() {
  

  }

  public pieChartOptions: ChartOptions 

  public pieChartLabels: Label[] 
  public pieChartData: number[] 
  public pieChartType: ChartType 
  public pieChartLegend 
 // public pieChartPlugins = [pluginDataLabels];
  public pieChartColors 
    
  

}
