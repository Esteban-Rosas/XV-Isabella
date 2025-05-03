import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';

@Component({
  selector: 'app-reloj',
  standalone: true,
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit, OnDestroy {
  fechaFiesta: Date = new Date('2025-05-24T00:00:00');
  dias: number = 0;
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;
  private intervalo: any;
  isFixed: boolean = false;

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
      this.dias = 0;
      this.horas = 0;
      this.minutos = 0;
      this.segundos = 0;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const relojElement = document.querySelector('.reloj-container');
    if (relojElement) {
      const rect = relojElement.getBoundingClientRect();
      this.isFixed = rect.top <= 0; // Fija el reloj cuando llega al tope
    }
  }
}