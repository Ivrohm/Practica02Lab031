import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesService } from './clientes.service';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { FormsModule } from '@angular/forms';
import { ListadoClienteComponent } from './listado-cliente/listado-cliente.component';


@NgModule({
  declarations: [AltaClienteComponent, ListadoClienteComponent],

  imports: [
    CommonModule,
    FormsModule

  ],
  providers: [ClientesService],
  exports:[AltaClienteComponent,  ListadoClienteComponent]
})
export class ClientesModule { }
