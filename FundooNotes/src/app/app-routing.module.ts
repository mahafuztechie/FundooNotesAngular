import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpassComponent } from './components/forgetpass/forgetpass.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { ResetpassComponent } from './components/resetpass/resetpass.component';

const routes: Routes = [
  {path:'register', component: RegisterationComponent},
  {path:'login', component: LoginComponent},
  {path:'forgetpassword', component: ForgetpassComponent},
  {path:'resetpassword', component: ResetpassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
