import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // {path : '/laundry/schedule/add', component : ScheduleFormComponent},
  // {path : '/laundry/schedule/', component : ScheduleFormComponent}
  {path :'login' , component: LoginComponent},
  {path :'register' , component: RegisterComponent},
  {path :'dashboard' , component: DashboardComponent, canActivate:[AuthGuard]},


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
