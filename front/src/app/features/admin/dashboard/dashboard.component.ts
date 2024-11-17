import { Component } from '@angular/core';
import {ViewService} from "../../../shared/view.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  selectedView: string = 'estadistica';

  constructor(private viewService: ViewService) {
    this.viewService.currentView$.subscribe(view => {
      this.selectedView = view;
    });
  }
}
