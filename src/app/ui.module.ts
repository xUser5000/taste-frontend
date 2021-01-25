import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { LandingComponent } from './ui/landing/landing.component';
import { LoginComponent } from './ui/login/login.component';
import { RegisterComponent } from './ui/register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" }
];

@NgModule({
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [LandingComponent, LoginComponent, RegisterComponent]
})
export class UiModule { }
