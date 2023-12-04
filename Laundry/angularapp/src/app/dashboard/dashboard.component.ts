import { Component, OnInit } from '@angular/core';
import { LoginService } from '../capstoneservice/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private http:LoginService) { }
  username:string | null = null;
  users:any[] =[];
  ngOnInit(): void 
  {
    this.username = localStorage.getItem('keyUsername')
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
