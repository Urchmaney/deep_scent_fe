import { NgModule } from "@angular/core";
import { LandingComponent } from "./landing.component";
import { ProductModule } from '../../shared/product/product.module';
import { LandingHeaderModule } from '../../shared/landing_header/landing_header.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [ProductModule, LandingHeaderModule],
  exports: [LandingComponent],
})
export class LandingModule {}