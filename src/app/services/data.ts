import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  doc,
  collectionData,
  docData,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item {
  id?: string,
  name: string,
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c949f71 (eu não tenho a menor ideia doque vai acontecer)
  especie?: string,
  raca?: string,
  idade?: number,
  obsadd?: string,
  createdAt?: number,
}
export interface Item2 {
  id?: string,
  name: string,
  experiencia?: string,
  especial?: string,
  telefone?: number,
<<<<<<< HEAD
=======
  description: string,
>>>>>>> b3d5e06 (engraçado né? como as coisas funcionam...)
=======
>>>>>>> c949f71 (eu não tenho a menor ideia doque vai acontecer)
  createdAt?: number,
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

constructor(private firestore: Firestore){}

getItems(): Observable<Item[]> {
<<<<<<< HEAD
<<<<<<< HEAD
  const itemsCollectionRef = collection(this.firestore, 'items'); // <-- corrected
=======
  const itemsCollectionRef = collection(this.firestore, 'items');
>>>>>>> b3d5e06 (engraçado né? como as coisas funcionam...)
=======
  const itemsCollectionRef = collection(this.firestore, 'items'); // <-- corrected
>>>>>>> c949f71 (eu não tenho a menor ideia doque vai acontecer)
  const q = query(itemsCollectionRef, orderBy('createdAt', 'desc'));
  return collectionData(q, { idField: 'id' }) as Observable<Item[]>;
}
getItem(id: string): Observable<Item | undefined>{
  const itemDocRef = doc(this.firestore, `items/${id}`);
  return docData(itemDocRef, { idField: 'id' }) as Observable<Item |undefined>;
}
addItem(item: Item) {
  const itemsCollectionRef = collection(this.firestore, 'items');
  return addDoc(itemsCollectionRef, { ...item, createdAt: Date.now() });
}
updateItem(item: Item ){
  const itemDocRef = doc(this.firestore, `items/${item.id}`);
<<<<<<< HEAD
<<<<<<< HEAD
  return updateDoc(itemDocRef, { name: item.name, especie: item.especie, raca: item.raca, idade: item.idade, obsadd: item.obsadd,} );
=======
  return updateDoc(itemDocRef, { name: item.name, description: item.description });
>>>>>>> b3d5e06 (engraçado né? como as coisas funcionam...)
=======
  return updateDoc(itemDocRef, { name: item.name, especie: item.especie, raca: item.raca, idade: item.idade, obsadd: item.obsadd,} );
>>>>>>> c949f71 (eu não tenho a menor ideia doque vai acontecer)
}
deleteItem(id: string){
  const itemDocRef = doc(this.firestore, `items/${id}`);
  return deleteDoc(itemDocRef);
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> c949f71 (eu não tenho a menor ideia doque vai acontecer)
getItems2(): Observable<Item2[]> {
  const items2CollectionRef = collection(this.firestore, 'items2');
  const q = query(items2CollectionRef, orderBy('createdAt', 'desc'));
  return collectionData(q, { idField: 'id' }) as Observable<Item2[]>;
<<<<<<< HEAD
}

getItem2(id: string): Observable<Item2 | undefined> {
  const itemDocRef = doc(this.firestore, `items2/${id}`);
  return docData(itemDocRef, { idField: 'id' }) as Observable<Item2 | undefined>;
}

addItem2(item: Item2) {
  const items2CollectionRef = collection(this.firestore, 'items2');
  return addDoc(items2CollectionRef, { ...item, createdAt: Date.now() });
}

updateItem2(item: Item2) {
  const itemDocRef = doc(this.firestore, `items2/${item.id}`);
  return updateDoc(itemDocRef, {name: item.name, experiencia: item.experiencia, especial: item.especial, telefone: item.telefone
    });
  }

  deleteItem2(id: string) {
    const itemDocRef = doc(this.firestore, `items2/${id}`);
    return deleteDoc(itemDocRef);
  }
=======
>>>>>>> b3d5e06 (engraçado né? como as coisas funcionam...)
=======
>>>>>>> c949f71 (eu não tenho a menor ideia doque vai acontecer)
}

getItem2(id: string): Observable<Item2 | undefined> {
  const itemDocRef = doc(this.firestore, `items2/${id}`);
  return docData(itemDocRef, { idField: 'id' }) as Observable<Item2 | undefined>;
}

addItem2(item: Item2) {
  const items2CollectionRef = collection(this.firestore, 'items2');
  return addDoc(items2CollectionRef, { ...item, createdAt: Date.now() });
}

updateItem2(item: Item2) {
  const itemDocRef = doc(this.firestore, `items2/${item.id}`);
  return updateDoc(itemDocRef, {name: item.name, experiencia: item.experiencia, especial: item.especial, telefone: item.telefone
    });
  }

  deleteItem2(id: string) {
    const itemDocRef = doc(this.firestore, `items2/${id}`);
    return deleteDoc(itemDocRef);
  }
}