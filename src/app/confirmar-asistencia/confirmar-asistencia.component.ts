import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmar-asistencia',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './confirmar-asistencia.component.html',
  styleUrls: ['./confirmar-asistencia.component.css'],
})
export class ConfirmarAsistenciaComponent {
  mostrarModal: boolean = false;
  formularioAsistencia: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formularioAsistencia = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      invitados: [
        1,
        [Validators.required, Validators.min(1), Validators.max(20)],
      ],
    });
  }

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.formularioAsistencia.reset({ invitados: 1 });
  }

  enviarConfirmacion() {
    if (this.formularioAsistencia.valid) {
      const datos = {
        nombre: this.formularioAsistencia.value.nombre,
        invitados: this.formularioAsistencia.value.invitados,
        fecha: new Date().toISOString(),
      };
      console.log('Datos enviados:', datos);
      // Aquí iría la lógica para guardar en Drive/API
      alert('¡Confirmación exitosa!');
      this.cerrarModal();
    }
  }
}
