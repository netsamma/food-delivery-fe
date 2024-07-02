import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart-item';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cartItems: CartItem[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(): void {

    this.cartItems = this.cartService.getCartItems();
    //console.log(this.cartService.getCartItems())
  }


}
