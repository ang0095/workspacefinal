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
  scheduleForm=this.fb.group({
      fullName:[''],
      mobileNumber:[''],
      email:[''],
      address:[''],
      area:[''],
      pincode:[''],
      pickupDay:[''],
      pickupTimeSlot:[''],
      packageId:['']
  })
  
  onSubmit(){

  }
 
  ngOnInit(): void 
  {

  }

  loadpkg():void{
    this.ss.getPackages().subscribe((data)=>this.items=data)
  }
    
  
  }


 

