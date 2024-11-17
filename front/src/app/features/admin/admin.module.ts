import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarModule } from '../../shared/sidebar/sidebar.module';
import {HeaderComponent} from "../../shared/header/header.component";

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class AdminModule { }
