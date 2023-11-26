import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class PositionsService {
 
  public apiBaseurl = "https://8080-cabbaacddbbb307795438daadeafcadfone.premiumproject.examly.io/api"

  constructor(private httpclient: HttpClient) { }
 
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
 
  getPositions(): Observable<any>
  {
    return this.httpclient.get<any>(`${PositionsService['apiBaseUrl']}/positions`)
  }
  // getStatuses():Observable<any>
  // {
  //   return this.httpclient.get<any>(`${ScheduleService['apiBaseUrl']}/laundry/status`)
  // }
  // getSchedules():Observable<any>
  // {
  //   return this.httpclient.get<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedules`)
  // }
 
  // createSchedule(scheduledata:any):Observable<any>
  // {
  //   return this.httpclient.post<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/add`,scheduledata, this.httpOptions)
  // }
 
  // updateSchedule(scheduleId:number,statusId:number):Observable<UserSchedule>
  // {
  //   return this.httpclient.put<UserSchedule>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/update/${scheduleId}/${statusId}`,this.httpOptions)
  // }    
 
  // deleteSchedule(scheduleId:number):Observable<any>
  // {
  //   return this.httpclient.delete<UserSchedule>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/delete/${scheduleId}`)
  // }
}
