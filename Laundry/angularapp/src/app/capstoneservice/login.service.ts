import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public apiBaseurl = "https://8080-dbfddbbbfbdfefabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/User/authenticate"

  constructor(private httpclient: HttpClient) 
  { 

  }
 
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  getCourses(): Observable<any[]>
  {
    return this.httpclient.get<any>(`${LoginService['apiBaseUrl']}`)
  }

  

  

}
