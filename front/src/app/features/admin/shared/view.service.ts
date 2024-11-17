import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Servicio disponible globalmente
})
export class ViewService {
  private currentViewSubject = new BehaviorSubject<string>('estadistica'); // Vista inicial
  currentView$ = this.currentViewSubject.asObservable(); // Observable para suscribirse

  // Cambiar la vista actual
  changeView(view: string): void {
    this.currentViewSubject.next(view);
  }
}
