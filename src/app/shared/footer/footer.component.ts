import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  faCoffee = faCoffee;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;

  constructor() { }

  ngOnInit(): void {
  }

}
