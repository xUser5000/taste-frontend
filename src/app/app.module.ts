import { NgModule } from '@angular/core';

import { UiModule } from './ui.module';
import { AppComponent } from './app.component';
import { ServiceModule } from './service/service.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UiModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
