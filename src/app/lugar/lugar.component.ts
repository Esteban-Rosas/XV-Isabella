import { Component, HostListener } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lugar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent {
  // Datos del evento simplificados
  eventos = [
    { 
      emoji: '⛪',
      hora: '3:00 PM', 
      actividad: 'Ceremonia Religiosa', 
      lugar: 'Iglesia San Sebastián\nCalle 5 #10-20, Pasto' 
    },
    { 
      emoji: '🎉',
      hora: '7:00 PM', 
      actividad: 'Fiesta de XV Años', 
      lugar: 'Salón El Mirador\nCra 10 #20-30, Pasto' 
    }
  ];

  // Animación de la línea de tiempo
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const progressBar = document.querySelector('.timeline-progress') as HTMLElement;
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (progressBar) {
      const scrollPosition = window.scrollY;
      const timelineHeight = (document.querySelector('.timeline-items') as HTMLElement)?.clientHeight || 0;
      const progress = (scrollPosition / timelineHeight) * 100;
      progressBar.style.height = `${Math.min(progress, 100)}%`;
    }

    timelineItems.forEach((item) => {
      const htmlItem = item as HTMLElement;
      const rect = htmlItem.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.75) {
        htmlItem.classList.add('active');
      }
    });
  }
}