
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Successfully added to cart');
  }

  ngOnInit(): void {
  }

}
