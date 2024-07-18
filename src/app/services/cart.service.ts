import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';
import { Product } from '../interfaces/product';
import { findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSignal = signal<CartItem[]>([])

  get cartItems() {
    return this.cartItemsSignal();
  }

  cartCount = computed(() => {
    return this.cartItemsSignal().reduce((count, item) => count + item.quantity, 0);
  });

  cartProductTotal = computed(() => {
    return this.cartItemsSignal().reduce((total, item) => total + item.quantity * item.product.price, 0);
  });

  cartProductsTotal = computed(()=> {
    console.log(this.cartItemsSignal);
    return this.cartItemsSignal().reduce((total, item) => total + item.quantity * item.product.price, 0);
  })

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
  
  removeProductCart(productId: number) {   
    const index = this.cartItemsSignal().findIndex(item => item.product.id == productId) 
    this.cartItemsSignal().splice(index, 1);
    this.cartItemsSignal.update(cartItems => [...cartItems]);
  }

  incrementQuantity(productId: number) {
    this.cartItemsSignal.update(cartItems =>
      cartItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  decrementQuantity(productId: number) {
    this.cartItemsSignal.update(cartItems =>
      cartItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  
  getCartItems(){
    return this.cartItemsSignal()
  }


  constructor() { }
}
