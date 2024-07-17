import { Component, effect, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart-item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems: CartItem[] = [];
  cartCount: number = 0;
  spedizione: number = 5;
  cartProductTotal: number = 0;
  cartProductsTotal: number = 0;

  constructor(private cartService: CartService){
    effect(() => {
      this.cartItems = this.cartService.getCartItems();
      this.cartCount = this.cartService.getCartItems().length;
      this.cartProductTotal = this.cartService.cartProductTotal();
      this.cartProductsTotal = this.cartService.cartProductsTotal();

    });
  }

  ngOnInit(): void {
  }

  incrementQuantity(productId: number) {
    this.cartService.incrementQuantity(productId)
  }


}
