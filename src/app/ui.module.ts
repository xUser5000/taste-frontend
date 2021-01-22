import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { LandingComponent } from './ui/landing/landing.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';

const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" }
];

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [LandingComponent, LoginComponent, RegisterComponent]
})
export class UiModule { }
