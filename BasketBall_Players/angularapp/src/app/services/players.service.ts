import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, scheduled } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  public apiBaseurl = "https://8080-cabbaacddbbb307795438daadeafcadfone.premiumproject.examly.io/api"

  constructor(private httpclient: HttpClient) { }
 
  httpOptions = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }

  getplayers(): Observable<any[]>
  {
    return this.httpclient.get<any>(`${PlayersService['apiURL']} + /players`)
  }

  // getStatuses(): Observable<any[]>
  // {
  //   return this.httpclient.get<any>(`${ScheduleService['apiBaseUrl']}/laundry/status`)

  // }

  // getSchedules(): Observable<any[]>
  // {
  //   return this.httpclient.get<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedules`)

  // }

  // createSchedule(scheduleData:any): Observable<any[]>
  // {
  //   return this.httpclient.post<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/add`, scheduleData, this.httpOptions)

  // }

  // updateSchedule(scheduleId:number, statusId:number): Observable<any[]>
  // {
  //   return this.httpclient.put<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/update/${scheduleId}/${statusId}`, scheduleId+statusId, this.httpOptions)

  // }
  
  // deleteSchedule(scheduleId:number)
  // {
  //   return this.httpclient.delete<any>(`${ScheduleService['apiBaseUrl']}/laundry/schedule/delete/${scheduleId}`,this.httpOptions)

  // }

}








// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Player } from '../models/player';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class PlayersService {
// public apiURL="https://8080-ffbabdadc307818048dccbfcadeone.premiumproject.examly.io/api"
//   constructor(private httpclient:HttpClient) { }
// getPlayers():Observable<any[]>
// {
//   return this.httpclient.get<any[]>(this.apiURL+"/players")
// }
// getPlayer(id:number):Observable<any>
// {
//   return this.httpclient.get<any>(this.apiURL)
// }
// createPlayer(player:Player):Observable<Player>
// {
//   return this.httpclient.post<Player>(this.apiURL,player)
// }

// updatePlayer(id:number,player:Player):Observable<void>
// {
//   return this.httpclient.put<void>(this.apiURL,player);
// }

// deletePlayer(id:number):Observable<void>
// {
//   return this.httpclient.delete<void>(this.apiURL)
// }

// }
