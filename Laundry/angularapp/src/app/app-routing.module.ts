import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // {path : '/laundry/schedule/add', component : ScheduleFormComponent},
  {path :'login' , component: LoginComponent}
  // {path : '/laundry/schedule/', component : ScheduleFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
