import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public apiBaseurl = "https://8080-dbfddbbbfbdfefabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/User"

  constructor(private httpclient: HttpClient, private route:Router) 
  { 

  }
 
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  register(userObj:any)
  {
    return  this.httpclient.post<any>(`${this.apiBaseurl}/register`,userObj, this.httpOptions);
  }

  login(loginObj:any)
  {
    return  this.httpclient.post<any>(`${this.apiBaseurl}/authenticate`,loginObj, this.httpOptions);
    
  }

  logOut()
  {
    localStorage.clear();
    this.route.navigate(['login'])
  }

  storeToken(tokenValue:string)
  {
    localStorage.setItem('token', tokenValue)
  }

  getToken()
  {
    return localStorage.getItem('token')
  }

  getUserObj(email:any):Observable<any>
  {
    // console.log('inservice'+email)
    return this.httpclient.get<any>(`${this.apiBaseurl}/getUserObj/`+ email)
  }

  isLoggedIn(): boolean
  {
    return !!localStorage.getItem('token')
  }

  // roleBased(roleValue:string)
  // {
  //   localStorage.setItem("keyRole", roleValue);
       
  //       if(roleValue == "Admin")
  //       {
  //         this.route.navigate(['dashboard'])
  //       }
  //       else if(roleValue == "Student")
  //       {
  //         this.route.navigate(['studash'])
  //       }
	//       else if(roleValue == "OfficeStaff")
	//       {
	//         this.route.navigate(['offdash'])
	//       }
  // }

  // getCourses(): Observable<any[]>
  // {
  //   return this.httpclient.get<any>(`${LoginService['apiBaseUrl']}`)
  // }

  

  

}
