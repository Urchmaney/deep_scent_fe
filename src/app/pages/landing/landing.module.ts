import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LandingComponent } from "./landing.component";
import { ProductModule } from '../../shared/product/product.module';
import { LandingHeaderModule } from '../../shared/landing_header/landing_header.module';
import { FooterComponent } from '../../shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LandingComponent, FooterComponent],
  imports: [ProductModule, LandingHeaderModule, FontAwesomeModule, CommonModule],
  exports: [LandingComponent],
})
export class LandingModule {}