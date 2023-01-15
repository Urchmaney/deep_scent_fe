import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LandingHeaderComponent } from "./landing_header.component";
import { CartQuantityChangerComponent } from '../cart-quantity-changer/cart-quantity-changer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LandingHeaderComponent, CartQuantityChangerComponent],
  exports: [LandingHeaderComponent]
})
export class LandingHeaderModule {}