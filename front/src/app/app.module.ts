import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa el archivo de routing
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/public/shared/header/header.component';
import { HomeComponent } from './components/public/home/home.component';
import {CoreModule} from "./core/core.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent, // Declara el componente principal
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, // Importa el módulo de enrutamiento
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent] // Indica que este es el componente raíz
})
export class AppModule { }
