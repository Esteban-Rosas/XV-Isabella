import { Component } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { RelojComponent } from './reloj/reloj.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { InvitacionComponent } from './invitacion/invitacion.component';
import { LugarComponent } from './lugar/lugar.component'; // Importa el nuevo componente

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InicioComponent, RelojComponent, MensajeComponent, InvitacionComponent, LugarComponent], // Agrega InvitacionComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'xv-isabela';
  
}