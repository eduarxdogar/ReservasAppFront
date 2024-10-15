
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaComponent } from './reservas/nueva/nueva.component';
import { ListarComponent } from './reservas/listar/listar.component';
import { CancelarComponent } from './reservas/cancelar/cancelar.component';
import { ModificarComponent } from './reservas/modificar/modificar.component';

const routes: Routes = [
  { path: 'reservas/nueva', component: NuevaComponent },
  { path: 'reservas/listar', component: ListarComponent },
  { path: 'reservas/cancelar', component: CancelarComponent },
  { path: 'reservas/modificar', component: ModificarComponent },
  { path: '', redirectTo: '/reservas/listar', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
