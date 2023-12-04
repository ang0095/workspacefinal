import { Component, OnInit } from '@angular/core';
import { LoginService } from '../capstoneservice/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:LoginService) { }

  users:any[] =[];
  ngOnInit(): void 
  {
    
  }

  getallUsers():void
  {
    this.http.getallUsers().subscribe(r => this.users=r)
  }

  
  

  logout()
  {
    this.http.logOut();
  }

}
