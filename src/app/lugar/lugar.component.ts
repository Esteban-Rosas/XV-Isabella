import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmarAsistenciaComponent } from '../confirmar-asistencia/confirmar-asistencia.component';

@Component({
  selector: 'app-lugar',
  standalone: true,
  imports: [CommonModule, ConfirmarAsistenciaComponent],
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent {
  mostrarModalConfirmacion = false;

  abrirMapa() {
    const url = 'https://maps.google.com/?q=Salón+de+eventos+y+Restaurante+EL+MIRADOR';
    window.open(url, '_blank');
  }

  toggleModal() {
    this.mostrarModalConfirmacion = !this.mostrarModalConfirmacion;
  }
}