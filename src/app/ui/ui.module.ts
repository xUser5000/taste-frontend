import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from "@angular/material/menu";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';

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
import { HomeComponent } from './private/page/home/home.component';
import { FavoritesComponent } from './private/page/favorites/favorites.component';
import { UploadComponent } from './private/page/upload/upload.component';
import { SongCardComponent } from './private/util/song-card/song-card.component';
import { SongGridComponent } from './private/util/song-grid/song-grid.component';

/**
 * Routes of the entire application
 */
const routes: Routes = [
  { path: "landing", component: LandingComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "private",
    component: PrivateComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "favorites", component: FavoritesComponent },
      { path: "upload", component: UploadComponent },
      { path: "**", redirectTo: "home" }
    ]
  },
  { path: "404", component: NotFoundComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "**", redirectTo: "404" }
];

@NgModule({
  imports: [
    BrowserModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
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
    AvatarComponent,
    HomeComponent,
    FavoritesComponent,
    UploadComponent,
    SongCardComponent,
    SongGridComponent
  ]
})
export class UiModule { }
