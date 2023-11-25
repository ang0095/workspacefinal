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

  getPackages()
  {
    return this.httpclient.get<any>(`${ScheduleService['apiBaseUrl']}/laundry/packages`)
  }

  getStatuses()
  {
    return this.httpclient.get<any>(`${ScheduleService['apiBaseUrl']}/laundry/status`)

  }

  getSchedules()
  {
    return this.httpclient.get<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedules`)

  }

  createSchedule(scheduleData:any)
  {
    return this.httpclient.post<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/add`)

  }

  updateSchedule(scheduleId:number, statusId:number)
  {
    return this.httpclient.put<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/update/${scheduleId}/${statusId}`)

  }
  

}
