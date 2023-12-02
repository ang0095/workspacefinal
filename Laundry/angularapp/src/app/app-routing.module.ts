import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { StudashComponent } from './studash/studash.component';
import { OffdashComponent } from './offdash/offdash.component';
import { OthGuard } from './guards/oth.guard';
import { AOthGuard } from './guards/oth2.guard';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
// import { ResetComponent } from './reset/reset.component';

const routes: Routes = [
  // {path : '/laundry/schedule/add', component : ScheduleFormComponent},
  // {path : '/laundry/schedule/', component : ScheduleFormComponent}
  {path :'', component:LoginComponent},
  {path :'login' , component: LoginComponent},
  {path :'register' , component: RegisterComponent},
  {path :'dashboard' , component: DashboardComponent, canActivate:[AuthGuard]},
  {path :'studash' , component: StudashComponent, canActivate:[OthGuard]},
  {path :'offdash' , component: OffdashComponent, canActivate:[AOthGuard]},
  {path :'forget' , component: ForgetpasswordComponent},
  // {path :'reset' , component: ResetComponent},




  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
