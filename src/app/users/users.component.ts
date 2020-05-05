import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackServiceService } from '../track-service.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
usersForm:FormGroup
type=[
  {value:"Admin"},
  {value:"User"},
  {value:"Client"}
]
hide = true;
error = false 
warning
message;
  constructor(private service :TrackServiceService, private snackBar: MatSnackBar , private router:Router ) { }

  ngOnInit() {
    this.usersForm= new FormGroup({
      "name": new  FormControl('',Validators.required),
      "type":new FormControl('',Validators.required),
      "email": new FormControl('',[Validators.required,Validators.email]),
      "password":new FormControl('',Validators.required)
      
    })
  }
  create(message , action){
    this.service.signUp(this.usersForm.value).subscribe(res=>{
      this.snackBar.open(message,action,{duration:3000})
      this.usersForm.reset()
      this.router.navigate(['/usersList'])
    } , err=>{
      this.warning=err
      console.log(this.warning.error , "aaa")
      this.message=this.warning.error.message
      this.error=true
    })
  
  }
  close(){
    this.error=false
  }

}
