import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Importa el archivo de routing
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/public/shared/header/header.component';
import { HomeComponent } from './components/public/home/home.component';

@NgModule({
  declarations: [
    AppComponent, // Declara el componente principal
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Importa el módulo de enrutamiento
  ],
  providers: [],
  bootstrap: [AppComponent] // Indica que este es el componente raíz
})
export class AppModule { }
