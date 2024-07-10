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
      this.cartItemsSignal.update(cartItems => cartItems.map(item =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      this.cartItemsSignal.update(cartItems => [...cartItems, { product, quantity: 1 }]);
    }
  }
  
  getCartItems(){
    return this.cartItemsSignal()
  }

  getCartCount(){
    return this.cartItemsSignal().reduce((count, item) => {
      return count + item.quantity;
    }, 0);
  }


  constructor() { }
}
