import { Component, ViewChild } from '@angular/core';
import { ConfirmarAsistenciaComponent } from '../confirmar-asistencia/confirmar-asistencia.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lugar',
  standalone: true,
  imports: [
    CommonModule,
    ConfirmarAsistenciaComponent
  ],
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent {
  @ViewChild(ConfirmarAsistenciaComponent)
  confirmarAsistencia!: ConfirmarAsistenciaComponent;

  // Añade este método que falta
  abrirMapa() {
    const url = 'https://maps.google.com/?q=Salón+de+eventos+y+Restaurante+EL+MIRADOR';
    window.open(url, '_blank');
  }

  abrirModalConfirmacion() {
    this.confirmarAsistencia?.abrirModal();
  }
}