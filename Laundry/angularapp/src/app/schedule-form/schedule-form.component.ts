import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ScheduleService } from '../services/schedule-service.service';
 
@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
 items:any[]

  constructor(private fb:FormBuilder,private ss:ScheduleService) 
  { 

  }
  
  
  onSubmit(){
  }
 
  ngOnInit(): void 
  {

  }
    
  
  }


 

