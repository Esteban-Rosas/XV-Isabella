import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {
  fechaFiesta: Date = new Date('2025-05-21T00:00:00'); // Fecha de la fiesta
  dias: number = 0;
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;
  private intervalo: any;

  ngOnInit(): void {
    this.actualizarContador();
    this.intervalo = setInterval(() => this.actualizarContador(), 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  actualizarContador(): void {
    const ahora = new Date();
    const diferencia = this.fechaFiesta.getTime() - ahora.getTime();

    if (diferencia > 0) {
      this.dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
      this.horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
      this.segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    } else {
      // Si la fecha ya pasó, mostrará 0
      this.dias = 0;
      this.horas = 0;
      this.minutos = 0;
      this.segundos = 0;
    }
  }

  // Método para hacer scroll al componente "mensaje"
  scrollToMensaje(): void {
    const mensajeSection = document.querySelector('app-mensaje'); // Selecciona el componente mensaje
    if (mensajeSection) {
      mensajeSection.scrollIntoView({ behavior: 'smooth' }); // Scroll suave
    }
  }
    
}
