import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() currentView!: string; // Recibe la vista actual desde el componente padre
  @Output() viewChange = new EventEmitter<string>(); // Emite el evento de cambio de vista

  changeView(view: string) {
    this.viewChange.emit(view);
  }
}
