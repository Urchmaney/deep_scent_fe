import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from '../local_storage/local-storage-service.service';
import { PRODUCTS_LOCAL_STORAGE_KEY } from '../../utils/constants';
import { Product } from '../../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private _myData$ = new BehaviorSubject<Product[]>([]);
  public myData$ = this._myData$.asObservable()
  
  constructor(private localStorageServie: LocalStorageServiceService) { }

  getCartProducts() {
    const products = JSON.parse(this.localStorageServie.getLocalStorageItem(PRODUCTS_LOCAL_STORAGE_KEY) || '[]');
    this._myData$.next(products);
    return products;
  }

  addProductToCart(product: Product) {
    const products = this.getCartProducts();
    const newProducts = [...products, product];
    this.saveCartProducts(newProducts);
    this._myData$.next(newProducts);
  }

  saveCartProducts(products: Product[]) {
    const stringifiedProduct = JSON.stringify(products);
    this.localStorageServie.storeItemOnLocalStorage(PRODUCTS_LOCAL_STORAGE_KEY, stringifiedProduct);
  }

  isCartEmpty() {
    return (this.localStorageServie.getLocalStorageItem(PRODUCTS_LOCAL_STORAGE_KEY) || []).length <= 0;
  }

  clearCart() {
    this.localStorageServie.storeItemOnLocalStorage(PRODUCTS_LOCAL_STORAGE_KEY, []);
    this._myData$.next([]);
  }
}
