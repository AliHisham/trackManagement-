import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackServiceService } from '../track-service.service';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 employees
 displayedColumns: string[] = ['name', 'phone', 'Actions' ];
 employeesPerPage=5
 currentPage=1
 AllEmployees:any=[]
 message;
 show=false
  constructor(private Service:TrackServiceService) { 
   
  }

  ngOnInit() {
    this.Service.paginationEmployees(this.employeesPerPage, this.currentPage).subscribe(res=>{
      this.employees=res
   } , error=>{
       this.message=error.error.message;
       this.show=true;
       
   })
   this.Service.getEmployees().subscribe(res=>{
     this.AllEmployees=res
   })
  }
  delete(id){
    this.Service.deleteEmployees(id).subscribe(res=>{
      this.ngOnInit()
    })
  }
  onchange(event:PageEvent){
   this.currentPage= event.pageIndex + 1
   this.Service.paginationEmployees(this.employeesPerPage, this.currentPage).subscribe(res=>{
     this.employees= res 
   })
  }

}
