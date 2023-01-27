import { NgModule } from "@angular/core";
import { CheckoutComponent } from "./checkout.component";
import { LandingHeaderModule } from  "../../shared/landing_header/landing_header.module";

@NgModule({
  declarations: [CheckoutComponent],
  imports: [LandingHeaderModule],
  exports: [CheckoutComponent]
})
export class CheckoutModule {}