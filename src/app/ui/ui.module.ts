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
import { MatMenuModule } from "@angular/material/menu";

import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivateComponent } from './private/private.component';
import { TopNavComponent } from './private/util/top-nav/top-nav.component';
import { SideNavComponent } from './private/util/side-nav/side-nav.component';
import { AvatarComponent } from './private/util/avatar/avatar.component';


const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "private", component: PrivateComponent },
  { path: "404", component: NotFoundComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "**", redirectTo: "404" }
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
    MatMenuModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    NotFoundComponent,
    PrivateComponent,
    TopNavComponent,
    SideNavComponent,
    AvatarComponent
  ]
})
export class UiModule { }
