import { Component } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

interface Product {
  name: string
  imageUrl: string
}

@Component({
  selector: 'landing-page',
  templateUrl: "./landing.component.html",
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  products$ : Observable<Product[]>
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(afs: AngularFirestore) {
    this.productsCollection = afs.collection<Product>('producta');
    this.products$ = this.productsCollection.valueChanges();
    // const fireCollection = collection(firestore, 'producta');
    // this.products$ = collectionData(fireCollection);
  }
}