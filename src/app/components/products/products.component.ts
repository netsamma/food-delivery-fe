import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { ProductComponent } from '../product/product.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ProductComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: Product[] = [];
  filtro: string = '';
  shopId?: number;
  id!: number;

  constructor(private route: ActivatedRoute, private productService: ProductsService) {}

  ngOnInit() {
    this.shopId = +this.route.snapshot.parent?.paramMap.get('id')!;  
    // Usa l'operatore "!" per indicare a TypeScript che il valore non sarà null
    if (this.shopId!=null) {
      this.productService.getProductsByShopId(this.shopId).subscribe((data) => {
        console.log(data);
        this.products = data;
        this.filteredProducts = data;
      });
    } else {
      console.error('shopId non valido');
    }

    this.productService.search$.subscribe(term => {
      this.filteredProducts = this.products.filter(product => 
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    });
  }

  handleEvent(event: string) {
    console.log(event);
  }
}
