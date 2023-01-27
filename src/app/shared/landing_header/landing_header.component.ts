import { Component } from "@angular/core";

@Component({
  selector: 'landing-page-header',
  templateUrl: './landing_header.component.html',
  styleUrls: ['./landing_header.component.scss']
})
export class LandingHeaderComponent {
  hamburgerClick() {
    console.log('Clicking');
  }
}