import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [
    SidebarComponent, // Declara el componente principal del módulo
  ],
  imports: [
    CommonModule,
    SidebarRoutingModule, // Importa el enrutamiento del sidebar
  ],
})
export class SidebarModule {}
