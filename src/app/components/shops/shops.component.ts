import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, signal, Signal, computed, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Shop } from '../../interfaces/shop';
import { ShopComponent } from '../shop/shop.component';
import { ShopsService } from '../../services/shops.service';
import { SearchInputComponent } from '../search-input/search-input.component';

@Component({
  selector: 'app-shops',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, ShopComponent, SearchInputComponent],
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
})
export class ShopsComponent implements OnInit {
  shops = signal<Shop[]>([]);
  searchQuery = signal<string>('');

  constructor(private shopsService: ShopsService) {}

  ngOnInit() {
    // Carica i negozi all'inizializzazione
    this.shopsService.getShops().subscribe((data) => {
      this.shops.set(data);
    });
  }

  // Aggiorna negozi quando cambia la stringa di ricerca
  filteredShops = computed(() => {
    const sq = this.searchQuery();
    return this.shops().filter(shop => 
      shop.denominazione.toLowerCase().includes(sq.toLowerCase())
    );
  });

  onSearchChange(searchQuery: string) {
    this.searchQuery.set(searchQuery);
  }
}
