import { Component, OnInit } from '@angular/core';
import { TheServiceService } from '../the-service.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TrackServiceService } from '../track-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  loggedUser
  error
  show=false 
  hide=true
  
  constructor(private service:TrackServiceService , private router:Router) { }

  ngOnInit() {
    this.loginForm= new FormGroup({
      "email":new FormControl('' ,[Validators.required, Validators.email]),
      "password":new FormControl('', Validators.required)
    })
  }

  
  Login(){
    this.service.login(this.loginForm.value).subscribe(res=>{
      this.loggedUser=res
      localStorage.setItem("token" , this.loggedUser.token)
      localStorage.setItem("type", this.loggedUser.type)
      localStorage.setItem("name", this.loggedUser.name)
     this.router.navigate(["/home"])
     this.service.changeUser(localStorage.type)
   
    
  } , err=>{
      this.error=err.error.message
      this.show=true

  })
  }
 close(){
   this.show=false
 }
}
