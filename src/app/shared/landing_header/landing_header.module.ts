import { NgModule } from "@angular/core";
import { LandingHeaderComponent } from "./landing_header.component";
import { CartQuantityChangerComponent } from '../cart-quantity-changer/cart-quantity-changer.component';

@NgModule({
  declarations: [LandingHeaderComponent, CartQuantityChangerComponent],
  exports: [LandingHeaderComponent]
})
export class LandingHeaderModule {}