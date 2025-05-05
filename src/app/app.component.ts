import { Component } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';
import { RelojComponent } from './reloj/reloj.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { InvitacionComponent } from './invitacion/invitacion.component';
import { LugarComponent } from './lugar/lugar.component'; // Importa el nuevo componente
import { ConfirmarAsistenciaComponent } from './confirmar-asistencia/confirmar-asistencia.component';
import { SugerirMusicaComponent } from './sugerir-musica/sugerir-musica.component'; // Importa el nuevo componente
import { InstagramHashtagComponent } from './instagram-hashtag/instagram-hashtag.component';  // Importa el nuevo componente
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InicioComponent, RelojComponent, MensajeComponent, InvitacionComponent, LugarComponent,SugerirMusicaComponent, InstagramHashtagComponent], // Agrega InvitacionComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'xv-isabela';
  
}