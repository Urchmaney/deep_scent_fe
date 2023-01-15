import { Component } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartServiceService } from '../../services/cart_service/cart-service.service';

@Component({
  selector: 'landing-page',
  templateUrl: "./landing.component.html",
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  products$ : Observable<Product[]>
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(afs: AngularFirestore, private cartService: CartServiceService) {
    this.productsCollection = afs.collection<Product>('producta');
    this.products$ = this.productsCollection.valueChanges();
    // const fireCollection = collection(firestore, 'producta');
    // this.products$ = collectionData(fireCollection);
  }

  addProductToCart(product: Product) {
    this.cartService.addProductToCart(product);
  }

}