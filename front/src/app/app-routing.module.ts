import { NgModule } from '@angular/core';
import { HomeComponent } from './components/public/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Ruta por defecto
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Ruta home
  { path: 'home', component: HomeComponent },

  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
    // loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule)
  },

  // Módulo de administración
  {
    path: 'admin',
    loadChildren: () => import('./components/admin/admin.module').then(m => m.AdminModule)
  },

  // Ruta wildcard - SIEMPRE al final
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
