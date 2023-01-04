import { Component } from "@angular/core";

@Component({
  selector: 'landing-page-header',
  templateUrl: './landing_header.component.html'
})
export class LandingHeaderComponent {
  hamburgerClick() {
    console.log('Clicking');
  }
}