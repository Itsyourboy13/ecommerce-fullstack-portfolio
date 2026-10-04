import { Injectable } from '@angular/core';
import {CartItem} from '../common/cart-item';
import {BehaviorSubject, Subject} from 'rxjs';
import {Product} from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0.00);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  // for data that you want to persist even after you close the window you
  // will use localStorage instead of sessionStorage like the commented out line
  // storage : Storage = localStorage;
  storage: Storage = sessionStorage;

  constructor() {

    // read the data from storage
    const cartData = this.storage.getItem('cartItems');
    let data = JSON.parse(cartData);

    if (data != null) {
      this.cartItems = data;

      // compute totals based on the data that is read from storage
      this.computeCartTotals();
      }
  }

  addToCart(theCartItem: CartItem) {

    // check if we already have the item in our cart
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = new CartItem(new Product());

    if (this.cartItems.length > 0) {
    // find the item in the cart based on item id
      for (let tempCartItem of this.cartItems) {
        if (tempCartItem.id === theCartItem.id) {
          existingCartItem = tempCartItem;
          alreadyExistsInCart = true;
          break;
        }
      }
    }
    // check if we found it
    if (alreadyExistsInCart) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(theCartItem);
    }

    this.computeCartTotals();

  }

  computeCartTotals() {
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    // publish the new values ... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debugging
    this.logCartData(totalPriceValue, totalQuantityValue);

    // persist cart data
    this.persistCartItems();
  }

  persistCartItems() {
    this.storage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log('Cart Data:');
    for (let currentCartItem of this.cartItems) {
      const itemPrice = currentCartItem.quantity * currentCartItem.unitPrice;
      console.log(`Item: ${currentCartItem.name}, Total Price: ${itemPrice}, Quantity: ${currentCartItem.quantity}, unitPrice: ${currentCartItem.unitPrice}`);
    }
    console.log(`Total Price: ${totalPriceValue}, Total Quantity: ${totalQuantityValue}`);
    console.log('---------------------------------------');
  }

  decrementQuantity(theCartItem: CartItem) {
    theCartItem.quantity--;

    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    } else {
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem) {
    // get index of item in the array
    const itemIndex = this.cartItems.indexOf(theCartItem);

    // if found, remove the item from the array at the given
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }
}
