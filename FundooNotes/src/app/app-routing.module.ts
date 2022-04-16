import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { ArchiveComponent } from './components/archive/archive.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { GetallnotesComponent } from './components/getallnotes/getallnotes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { ResetpassComponent } from './components/resetpass/resetpass.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'register', component: RegisterationComponent},

  {path:'',redirectTo:"/login",pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path:'forgetpassword', component: ForgetpassComponent},
  {path:'resetpassword', component: ResetpassComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthenticationGuard],
children: [
  {path:'getallnotes', component: GetallnotesComponent},
  {path:'trash', component: TrashComponent},
  {path:'archive', component: ArchiveComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
