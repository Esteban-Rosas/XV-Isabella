import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  deleteDoc,
  updateDoc,
  serverTimestamp, // Añadido
  query,
  orderBy,
  where
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Confirmation {
  nombre: string;
  invitados: number;
  telefono?: string;
  status?: string;
  fechaCreacion?: any;
  fechaActualizacion?: any;
}

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(private firestore: Firestore) {}

  // 1. Método genérico para añadir documentos
  async addDocument(collectionName: string, data: any): Promise<string> {
    try {
      const docRef = await addDoc(
        collection(this.firestore, collectionName), 
        {
          ...data,
          fechaCreacion: serverTimestamp(), // Usamos el timestamp del servidor
          fechaActualizacion: serverTimestamp()
        }
      );
      return docRef.id;
    } catch (error) {
      console.error('Error adding document:', error);
      throw error;
    }
  }

  // 2. Método específico para confirmaciones (mejorado)
  async saveConfirmation(data: Confirmation): Promise<string> {
    return this.addDocument('confirmaciones', {
      ...data,
      status: data.status || 'pendiente' // Valor por defecto
    });
  }

  // 3. Obtener confirmaciones con filtros (nuevo)
  getConfirmaciones(filtro: { status?: string } = {}): Observable<Confirmation[]> {
    let q = query(
      collection(this.firestore, 'confirmaciones'),
      orderBy('fechaCreacion', 'desc')
    );

    if (filtro.status) {
      q = query(q, where('status', '==', filtro.status));
    }

    return collectionData(q, { idField: 'id' }) as Observable<Confirmation[]>;
  }

  // 4. Actualizar confirmación (específico)
  async updateConfirmation(id: string, data: Partial<Confirmation>): Promise<void> {
    await updateDoc(
      doc(this.firestore, 'confirmaciones', id),
      {
        ...data,
        fechaActualizacion: serverTimestamp()
      }
    );
  }

  // 5. Métodos genéricos (mantenidos)
  getCollection(collectionName: string): Observable<any[]> {
    const ref = collection(this.firestore, collectionName);
    return collectionData(ref, { idField: 'id' }) as Observable<any[]>;
  }

  async updateDocument(collectionName: string, id: string, data: any): Promise<void> {
    await updateDoc(
      doc(this.firestore, collectionName, id),
      {
        ...data,
        fechaActualizacion: serverTimestamp()
      }
    );
  }

  async deleteDocument(collectionName: string, id: string): Promise<void> {
    await deleteDoc(doc(this.firestore, collectionName, id));
  }
}