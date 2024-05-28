import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product';
// import items from '../data/products';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgFor, NgIf, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {

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
}
