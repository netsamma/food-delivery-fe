import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Shop } from '../../interfaces/shop';
import { ShopComponent } from '../shop/shop.component';
// import items from '../data/products';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [ NgFor, NgIf, FormsModule, ShopComponent],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css',
})
export class ShopsComponent implements OnInit {

  shops: Shop[] = [];
  filteredShops: Shop[] = [];
  filtro: string = '';

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    // Carica i prodotti all'inizializzazione
    this.productService.getProducts().subscribe((data) => {
      this.shops = data;
      this.filteredShops = data;
    });

    this.productService.search$.subscribe(term => {
      this.filteredShops = this.shops.filter(product => 
        product.denominazione.toLowerCase().includes(term.toLowerCase())
      );
    });
  }


handleEvent(event: string) {
  console.log(event);
}
}