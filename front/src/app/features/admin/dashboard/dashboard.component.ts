import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  selectedView: string = 'estadistica'; // Vista inicial

  changeView(view: string) {
    this.selectedView = view; // Actualiza la vista seleccionada
  }
}
