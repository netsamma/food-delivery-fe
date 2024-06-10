import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Shop } from '../../interfaces/shop';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  @Input () shop!: Shop 
  @Output() myEvent = new EventEmitter<string>;


emitEvent() {
  this.myEvent.emit(this.shop.denominazione);
}
}
