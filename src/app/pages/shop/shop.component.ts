import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { CartServiceService } from '../../services/cart.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {

  products$ : Observable<Product[]>
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(afs: AngularFirestore, private cartService: CartServiceService, private toastr: ToastrService) {
    this.productsCollection = afs.collection<Product>('producta');
    this.products$ = this.productsCollection.valueChanges();
  }

  addProductToCart(product: Product) {
    this.cartService.addProductToCart(product);
  }

  showSuccess() {
    this.toastr.success('Successfully added to cart');
  }
}
