import { Component } from '@angular/core';
import {Product} from '../../common/product';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product.service';
import {CartService} from '../../services/cart.service';
import {CartItem} from '../../common/cart-item';

@Component({
  selector: 'app-product-details',
  standalone: false,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  product: Product = new Product();

  constructor(private productService: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    })
  }

  private handleProductDetails() {

    // get the "id" param string. convert string to a number using the "+" symbol
    const theProductId: number = +this.route.snapshot.paramMap.get('id')!;


    this.productService.getProduct(theProductId).subscribe(
      data => {
        this.product = data;
      }
    )
  }

  addToCart() {
    console.log('add to cart: ' + this.product.name);
    const theCartItem = new CartItem(this.product);
    this.cartService.addToCart(theCartItem);
  }
}
