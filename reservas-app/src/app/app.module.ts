import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NuevaComponent } from './reservas/nueva/nueva.component';
import { ListarComponent } from './reservas/listar/listar.component';
import { CancelarComponent } from './reservas/cancelar/cancelar.component';
import { ModificarComponent } from './reservas/modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevaComponent,
    ListarComponent,
    CancelarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
