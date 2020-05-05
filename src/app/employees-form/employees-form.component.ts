import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackServiceService } from '../track-service.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {
  employeeForm:FormGroup
  id;
  employees:any=[]
  public employee  
  public object;
  public check
  constructor(private Service:TrackServiceService , private route:ActivatedRoute , private snackBar:MatSnackBar , private router:Router) {
     this.route.paramMap.subscribe((res:ParamMap)=>{
       if(res.has("id")){
          this.check="edit"
          this.id=res.get('id');
          this.Service.getEmployees().subscribe(result=>{
            this.employees=result
            this.employees.filter(x=>x._id ===this.id)
            this.employee=this.employees.filter(x=>x._id ===this.id)
            this.object=this.employee[0];
          })
       }
       else{
         this.check="create"
       }
     
     })
    
   }

  ngOnInit() {
    this.employeeForm=new FormGroup({
      "name": new FormControl("",Validators.required),
      "phone":new FormControl("",[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
      "email":new FormControl(""),
      "address":new FormControl("")
    })
  }
  save(message , action){
     if(this.check==="create"){
       this.Service.createEmployees(this.employeeForm.value).subscribe(res=>{
         this.router.navigate(["/employee"])
       })
       this.snackBar.open(message , action , {duration:3000})
     }
     else{
       this.Service.updateEmployees(this.id,this.employeeForm.value).subscribe(result=>{
         this.router.navigate(["/employee"])
       })
       this.snackBar.open(message , action , {duration:3000})
     }
  }

}
