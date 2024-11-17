import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module'; // Importación del routing
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent, // Declara los componentes compartidos
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, // Importa el módulo de enrutamiento
  ],
})
export class AdminModule {}
