import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/public/home/home.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  // Lazy load para el módulo tienda y sus rutas
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },


  // Lazy load para el módulo de autenticación
  {path: 'auth',
    loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
