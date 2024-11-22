import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarOvasComponent } from './ova/editar-ovas/editar-ovas.component';
import { ListarOvasComponent } from './ova/listar-ovas/listar-ovas.component';
import { CrearOvaComponent } from './ova/crear-ova/crear-ova.component';
import { DetalleOvaComponent } from './ova/detalle-ova/detalle-ova.component';


@NgModule({
  declarations: [
    AppComponent,


    ListarOvasComponent,
    EditarOvasComponent,
    CrearOvaComponent,
    DetalleOvaComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
