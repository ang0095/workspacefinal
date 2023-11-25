import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule-service.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  
  schedules:any[];
  packageOptions:any[];
  statusOptions:any[];
  scheduleId:number;
  statusId:number;


  sample :{id:1, statusId:1}

  sampleSchedule:{id:1}

  
  constructor(private s:ScheduleService) { }

  updateStatus(sample)
  {
    this.s.updateSchedule(this.scheduleId, this.statusId).subscribe(r =>this.statusId = 1 )
  }


  deleteSchedule(sampleSchedule)
  {
   this.s.deleteSchedule(this.scheduleId).subscribe(res=> this.schedules = [])
  }


  ngOnInit(): void {

    this.s.getSchedules().subscribe(r => this.schedules=r)
    this.s.getPackages().subscribe(r=>this.packageOptions=r)
    this.s.getStatuses().subscribe(r=>this.statusOptions=r)

    
   
  }

  
}
