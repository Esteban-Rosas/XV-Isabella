import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sugerir-musica',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sugerir-musica.component.html',
  styleUrls: ['./sugerir-musica.component.css']
})
export class SugerirMusicaComponent {
  abrirModal() {
    // Aquí puedes emitir un evento o abrir un modal
    alert('¡Abrir formulario de sugerencia de música!');
  }
}
