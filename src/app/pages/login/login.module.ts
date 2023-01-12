import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { LandingHeaderModule } from '../../shared/landing_header/landing_header.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LandingHeaderModule],
  exports: [LoginComponent]
})
export class LoginModule {}