import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './shared/product/product.module';
import { LandingModule } from './pages/landing/landing.module';
import { LandingHeaderModule } from './shared/landing_header/landing_header.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    LandingModule,
    LandingHeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
