import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { successCartToastMsg } from 'src/app/utils/constants';
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
    this.products$ = this.productsCollection.valueChanges({ idField: 'id'});
  }

  addProductToCart(product: Product) {
    product.quantity = 1;
    this.cartService.addProductToCart(product);
    this.showSuccess(successCartToastMsg(product.name))
  }

  showSuccess(msg: string) {
    this.toastr.success(msg);
  }
}
