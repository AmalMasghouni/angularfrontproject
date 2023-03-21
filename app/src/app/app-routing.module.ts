import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Home/home-page/home-page.component';
import { ChangerMdpComponent } from './web/changer-mdp/changer-mdp.component';
import { ForgotPasswordComponent } from './web/forgot-password/forgot-password.component';
import { LoginComponent } from './web/login/login.component';
import { RegisterComponent } from './web/register/register.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'mot-de-passe-oublie',component:ForgotPasswordComponent},
  {path:'home',component:HomePageComponent},
  {path:'changer-mdp',component:ChangerMdpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
