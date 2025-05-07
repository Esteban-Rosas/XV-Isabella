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
    const url = 'https://maps.app.goo.gl/9qTrv2t5frB8oY238';
    window.open(url, '_blank');
  }

  toggleModal() {
    this.mostrarModalConfirmacion = !this.mostrarModalConfirmacion;
  }
  abrirMapaCeremonia() {
    const url = 'https://www.google.com/maps/dir//Cl+15+%2315,+Pasto,+Nari%C3%B1o/@1.2180142,-77.2811393,3100m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x8e2ed480473f8215:0xf3a48526882928d9!2m2!1d-77.2850971!2d1.2181871?entry=ttu';
    window.open(url, '_blank');
  }
  
}