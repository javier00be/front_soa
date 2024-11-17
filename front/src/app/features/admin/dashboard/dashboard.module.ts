import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from '../shared/sidebar/sidebar.module'; // Importar SidebarModule
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SidebarModule, // Asegúrate de importar SidebarModule
  ],
})
export class DashboardModule {}
