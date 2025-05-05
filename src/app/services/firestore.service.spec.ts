// src/app/services/firestore.service.ts
import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  updateDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Automaticamente disponible en toda la app
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // 1. Añadir documento
  async addDocument(collectionName: string, data: any): Promise<string> {
    try {
      const docRef = await addDoc(
        collection(this.firestore, collectionName), 
        {
          ...data,
          fechaCreacion: new Date().toISOString()
        }
      );
      return docRef.id; // Retorna el ID del documento creado
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  }

  // 2. Obtener colección completa (observable)
  getCollection(collectionName: string): Observable<any[]> {
    const ref = collection(this.firestore, collectionName);
    return collectionData(ref, { idField: 'id' }) as Observable<any[]>;
  }

  // 3. Actualizar documento
  async updateDocument(collectionName: string, id: string, data: any): Promise<void> {
    await updateDoc(
      doc(this.firestore, collectionName, id),
      data
    );
  }

  // 4. Eliminar documento
  async deleteDocument(collectionName: string, id: string): Promise<void> {
    await deleteDoc(doc(this.firestore, collectionName, id));
  }

  // 5. Método específico para confirmaciones (ejemplo)
  async saveConfirmation(data: {
    nombre: string;
    invitados: number;
    telefono?: string;
  }): Promise<string> {
    return this.addDocument('confirmaciones', {
      ...data,
      status: 'pendiente'
    });
  }
}