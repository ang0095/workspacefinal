import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionsService {

  public apiURL="https://8080-ffbabdadc307818048dccbfcadeone.premiumproject.examly.io/api"
  constructor(private httpclient:HttpClient) { }
  
  getPositions():Observable<any[]>
  {
    return this.httpclient.get<any[]>(this.apiURL+"/positions");
  }
}
