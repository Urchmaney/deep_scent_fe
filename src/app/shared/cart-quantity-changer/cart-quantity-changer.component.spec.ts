import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartQuantityChangerComponent } from './cart-quantity-changer.component';

describe('CartQuantityChangerComponent', () => {
  let component: CartQuantityChangerComponent;
  let fixture: ComponentFixture<CartQuantityChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartQuantityChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartQuantityChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
