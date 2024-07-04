import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Shop } from '../../interfaces/shop';
import { RatingPipe } from '../../pipes/rating.pipe';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, RouterLink, RatingPipe],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  @Input () shop!: Shop 
  @Output() myEvent = new EventEmitter<string>;

}
