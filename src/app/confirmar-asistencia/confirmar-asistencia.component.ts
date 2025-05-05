import { Component, Output, EventEmitter, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FirestoreService } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirmar-asistencia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './confirmar-asistencia.component.html',
  styleUrls: ['./confirmar-asistencia.component.css']
})
export class ConfirmarAsistenciaComponent {
  private firestore = inject(FirestoreService);
  private fb = inject(FormBuilder);

  @Output() closed = new EventEmitter<void>();
  mostrarModal = false; // Control interno del modal
  mostrarExito = false;
  enviando = false;

  // Formulario reactivo
  formulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    invitados: [1, [Validators.required, Validators.min(1), Validators.max(20)]],
    telefono: ['', [Validators.pattern(/^[0-9]{10}$/)]],
    mensaje: ['']
  });

  // Método para cerrar el modal
  onClose() {
    this.mostrarModal = false;
    this.closed.emit();
    this.resetFormulario();
  }

  async enviarConfirmacion() {
    if (this.formulario.invalid) {
      this.marcarErrores();
      return;
    }

    this.enviando = true;

    try {
      const datos = {
        nombre: this.formulario.value.nombre ?? '',
        invitados: Number(this.formulario.value.invitados),
        telefono: this.formulario.value.telefono ?? undefined,
        mensaje: this.formulario.value.mensaje ?? undefined,
        fecha: new Date().toISOString()
      };

      await this.firestore.saveConfirmation(datos);
      this.mostrarFeedbackExito();
    } catch (error) {
      this.mostrarError(error);
    } finally {
      this.enviando = false;
    }
  }

  private resetFormulario(): void {
    this.formulario.reset({ invitados: 1 });
    this.mostrarExito = false;
  }

  private marcarErrores(): void {
    Object.values(this.formulario.controls).forEach(control => {
      control.markAsTouched();
    });
  }

  private mostrarFeedbackExito(): void {
    this.mostrarExito = true;
    setTimeout(() => {
      this.onClose();
    }, 3000);
  }

  private mostrarError(error: unknown): void {
    console.error('Error:', error);
    alert('Ocurrió un error al enviar. Por favor intenta nuevamente.');
  }

  // Método para abrir el modal desde el padre si es necesario
  abrirModal() {
    this.mostrarModal = true;
  }
}