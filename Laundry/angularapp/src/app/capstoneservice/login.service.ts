import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'`
})
export class LoginService {

  public apiBaseurl = "https://8080-dbfddbbbfbdfefabcaaaceeafebecebbffdafdefabcc.premiumproject.examly.io/api/User"

  constructor(private httpclient: HttpClient, private route:Router) 
  { 

  }
 
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  register(userObj:any)           // sends post request to register a new user
  {
    return  this.httpclient.post<any>(`${this.apiBaseurl}/register`,userObj, this.httpOptions);
  }

  login(loginObj:any)             // sends a post request to authenticate a user
  {
    return  this.httpclient.post<any>(`${this.apiBaseurl}/authenticate`,loginObj, this.httpOptions);

  }

  logOut()                       // clears the local storage & navigates to login page
  {
    localStorage.clear();
    this.route.navigate(['login'])
  }

  storeToken(tokenValue:string) // stores the authentication token in the local storage
  {
    localStorage.setItem('token', tokenValue)
    // setTimeout( ()=> {
    //   alert("Session logged out!");
    //   this.logOut();
    // },10000);
  }

  getToken()                   // retrieves the authentication token from the local storage
  {
    return localStorage.getItem('token')
  }

  getallUsers():Observable<any> // sends a get request to retrieve all users
  {
    return this.httpclient.get<any>(`${this.apiBaseurl}`)
  }

  // resetPassword(email: string, newPassword: string): Observable<any> {
  //   const resetPasswordData = { email, newPassword }; 
  //   return this.httpclient.put<any>(`${this.apiBaseurl}/resetpassword`, resetPasswordData, this.httpOptions);
  // }

  getUserObj(email:any):Observable<any>  // sends a get request to retrieve user info based on email
  {
    // console.log('inservice'+email)
    return this.httpclient.get<any>(`${this.apiBaseurl}/getUserObj/`+ email)
  }

  reset(resetObj:any)          // sends a put request to update the user's password
  {
    return this.httpclient.put<any>(`${this.apiBaseurl}/updatePassword`, resetObj, this.httpOptions);
  }

  isLoggedIn(): boolean       // checks if the user is logegd in by verifying the presence of an authentication token in the local storage
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
