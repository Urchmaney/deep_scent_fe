import { Component, OnInit } from "@angular/core";
import { CartServiceService } from '../../services/cart_service/cart-service.service';
import { Product } from '../../models/product';

@Component({
  selector: 'landing-page-header',
  templateUrl: './landing_header.component.html',
  styleUrls: ['./landing_header.component.scss']
})
export class LandingHeaderComponent {
  cartProducts;

  constructor(private cartService: CartServiceService) {
    this.cartProducts = cartService.myData$;
  }

  ngOnInit() {
    this.cartService.getCartProducts();
  }

  cartIsNotEmpty() {
    return !this.cartService.isCartEmpty();
  }

  clearCart() {
    this.cartService.clearCart();
  }

  // cartProducts() : Product[] {
  //   console.log(this.cartProducts());
  //   return this.cartProducts();
  // }
}