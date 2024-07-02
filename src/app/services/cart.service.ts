import { Injectable, signal } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSignal = signal<CartItem[]>([])

  get cartItems() {
    return this.cartItemsSignal();
    return null;
  }

  addToCart(product: Product) {    
    const existingItem = this.cartItemsSignal().find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItemsSignal.update(cartItems => [...cartItems, { product, quantity: 1 }]);
    }
    console.log(this.cartItemsSignal());
  }
  
  getCartItems(){
    return this.cartItemsSignal()
  }

  constructor() { }
}
