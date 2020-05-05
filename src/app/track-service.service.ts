import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackServiceService {
client;
info
loggedUser
userManagment = new BehaviorSubject<string>(localStorage.type)
user=this.userManagment.asObservable()

  constructor(private Http:HttpClient , private router:Router) { 
  }
  createEmployees(data){
    return this.Http.post(environment.EmployeeApi,data)
  }
  getEmployees(){
    return this.Http.get(environment.EmployeeApi)
  }
  updateEmployees(id , body){
    return this.Http.put(environment.EmployeeApi2+id ,body)
  }
  deleteEmployees(id){
    return this.Http.delete(environment.EmployeeApi2+id)
  }
  createClients(body){
    return this.Http.post(environment.clientApi,body)
  }
 
  getAllClients(){
    return this.Http.get(environment.clientApi)
  }
   updateClients(id,body){
     return this.Http.put(environment.clientApi2+id,body)
   }
   getLocationForOneClient(id){
     return this.Http.get(environment.clientApi2+id)
   }
   deleteClient(id){
     return this.Http.delete(environment.clientApi2+id) 
   }
   createShipment(body){
    return this.Http.post(environment.shipmentApi , body)
   }
   getShipments(){
     return this.Http.get(environment.shipmentApi)
   }
   getLocationofShipment(id){
     return this.Http.get(environment.shipmentApi2+id)
   }
   UpdateShipment(id,body){
    return this.Http.put(environment.shipmentApi2+id,body)
  }
  deleteShipment(id){
    return this.Http.delete(environment.shipmentApi2+id)
  }
  signUp(info){
   return  this.Http.post(environment.creatApi , info)
  
}
login(body){
 return this.Http.post(environment.loginApi ,body)
  
}

changeUser(user){
 this.userManagment.next(user)
}
getAllUsers(){
  return this.Http.get(environment.usersApi)
}
paginationShipments(size:number, page:number){
  
  return this.Http.get(environment.shipmentPaginationApi + size +"/" +page)
}
paginationClients(size:number , page:number){
  return this.Http.get(environment.clientPagination + size + "/" + page)
}
paginationEmployees(size:number , page:number){
  return this.Http.get(environment.employeePagination + size + "/" + page)
}
shipmentSearch(body:string){
 return this.Http.post(environment.shipmentSearch , body)
}
  
}
