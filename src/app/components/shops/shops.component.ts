import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { ProductComponent } from '../product/product.component';
// import items from '../data/products';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [ NgFor, NgIf, FormsModule, ProductComponent],
  templateUrl: './shops.component.html',
  styleUrl: './shops.component.css',
})
export class ShopsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  filtro: string = '';

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    // Carica i prodotti all'inizializzazione
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });

    this.productService.search$.subscribe(term => {
      this.filteredProducts = this.products.filter(product => 
        product.denominazione.toLowerCase().includes(term.toLowerCase())
      );
    });
  }


handleEvent(event: string) {
  console.log(event);
}
}