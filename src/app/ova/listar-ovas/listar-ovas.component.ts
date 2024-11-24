import { Component } from '@angular/core';
import { Ova } from '../model/ova';
import { OvaService } from '../service/ova.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-ovas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-ovas.component.html',
  styleUrls: ['./listar-ovas.component.css']
})
export class ListarOvasComponent {

  ovas: Ova[];

  constructor(private ovaService: OvaService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerOvas();
  }

  /**
   * Método para redirigir al formulario de edición de un OVA.
   * @param id - ID del OVA a editar.
   */
  editarOva(id: number) {
    this.router.navigate(['editar-ova', id]);
  }

  /**
   * Método para obtener la lista de OVAs desde el servicio.
   */
  private obtenerOvas() {
    this.ovaService.obtenerListaDeOvas().subscribe(dato => {
      this.ovas = dato;
    });
  }

  /**
   * Método para eliminar un OVA y actualizar la lista.
   * @param id - ID del OVA a eliminar.
   */
  eliminarOva(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Confirma si deseas eliminar este OVA",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimínalo',
      cancelButtonText: 'No, cancelar',
      buttonsStyling: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.ovaService.eliminarOva(id).subscribe(() => {
          this.obtenerOvas();
          Swal.fire(
            'Eliminado',
            'El OVA ha sido eliminado con éxito',
            'success'
          );
        });
      }
    });
  }

  /**
   * Método para mostrar los detalles de un OVA.
   * @param id - ID del OVA a mostrar.
   */
  verDetallesDelOva(id: number) {
    this.router.navigate(['detalle-ova', id]);
  }
}
