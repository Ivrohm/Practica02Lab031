import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../clientes.service';//componente agregado
import { Cliente, Grupo } from '../cliente.model';//agregamos modelos

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {
  cliente: Cliente =
  {
    id: 0,
    nombre: '',
    curp: '',
    direccion: '',
    sexo: 0,
  };
  grupos: Grupo[] = [];

  constructor(private clientesService: ClientesService) { }//inyectamos

  ngOnInit(): void {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void{
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();

  }

}
