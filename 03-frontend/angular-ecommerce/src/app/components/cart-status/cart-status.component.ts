import {Component} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  standalone: false,
  templateUrl: './cart-status.component.html',
  styleUrl: './cart-status.component.css'
})
export class CartStatusComponent {

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private CartService: CartService) {
  }

  ngOnInit() {
    this.updateCartStatus();
  }

  updateCartStatus() {

    // subscribe to the cart TotalPrice
    this.CartService.totalPrice.subscribe(
      data => this.totalPrice = data
    )

    // subscribe to the cart totalQuantity
    this.CartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    )


  }
}
