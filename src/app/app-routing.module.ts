import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './main/main.component';
import { authGuard } from './auth.guard';
import { authChildGuard } from './auth-child.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthChoiceComponent } from './auth-choice/auth-choice.component';

const routes: Routes = [
  // Default page (Login / Signup choice)
  { path: '', component: AuthChoiceComponent },

  // Auth pages
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },

  // Home page (after login/signup)
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },

  // Optional: redirect unknown routes
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
