import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa el archivo de routing
import { AppComponent } from './app.component';

import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './features/public/home/home.component';
import { HeaderComponent } from './features/public/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
