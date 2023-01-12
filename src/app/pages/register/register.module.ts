import { NgModule } from "@angular/core";
import { LandingHeaderModule } from '../../shared/landing_header/landing_header.module'
import { RegisterComponent} from './register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [LandingHeaderModule],
  exports: [RegisterComponent]
})
export class RegisterModule {}