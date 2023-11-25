import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  public apiBaseurl = "https://8080-cabbaacddbbb307795438daadeafcadfone.premiumproject.examly.io/api"

  constructor(private httpclient: HttpClient) { }
 
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  getPackages(): Observable<any[]>
  {
    return this.httpclient.get<any>(`${ScheduleService['apiBaseUrl']}/laundry/packages`)
  }

  getStatuses(): Observable<any[]>
  {
    return this.httpclient.get<any>(`${ScheduleService['apiBaseUrl']}/laundry/status`)

  }

  getSchedules(): Observable<any[]>
  {
    return this.httpclient.get<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedules`)

  }

  createSchedule(scheduleData:any): Observable<any[]>
  {
    return this.httpclient.post<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/add`, scheduleData, this.httpOptions)

  }

  updateSchedule(scheduleId:number, statusId:number): Observable<any[]>
  {
    return this.httpclient.put<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/update/${scheduleId}/${statusId}`, scheduleId+statusId, this.httpOptions)

  }
  
  deleteSchedule(scheduleId:number)
  {
    return this.httpclient.delete<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/delete/${scheduleId}`,this.httpOptions)

  }

}
