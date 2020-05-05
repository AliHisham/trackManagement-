import { Component, OnInit } from '@angular/core';
import { TrackServiceService } from '../track-service.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
users
password
u
displayedColumns: string[] = ['name', 'email', 'type' ];
  constructor(private service:TrackServiceService) { }

  ngOnInit() {
     this.service.getAllUsers().subscribe(res=>{
       this.users= res 
     })
  }

}
