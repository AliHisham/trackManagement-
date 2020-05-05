import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../track-service.service';
import { FormGroup, FormControl, NgForm, NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
 

  constructor(private service:TrackServiceService ,private Http:HttpClient) {
   
   }

  ngOnInit() {
  
  }
 

}
