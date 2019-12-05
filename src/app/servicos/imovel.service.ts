import { Injectable } from '@angular/core';
import { Imovel } from '../interfaces/imovel';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  private listaImoveis: AngularFirestoreCollection<Imovel>;

  constructor(private afs: AngularFirestore) 
  { 
    this.listaImoveis = this.afs.collection<Imovel>('Imoveis',  ref => ref.orderBy('valor', 'asc'));
  }

  getImoveis() {
    return this.listaImoveis.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, ...data };
        });
      })
    );
  }

  addImovel(imovel: Imovel) {
    return this.listaImoveis.add(imovel);
  }

  getImovel(id: string) {
    return this.listaImoveis.doc<Imovel>(id).valueChanges();
  }

  updateImovel(id: string, imovel: Imovel) {
    return this.listaImoveis.doc<Imovel>(id).update(imovel);
  }

  deleteImovel(id: string) {
    return this.listaImoveis.doc(id).delete();
  }

}
