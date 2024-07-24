import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import users from '../../data/users';
import { FilterUserPipe } from '../../pipes/filter-user-pipe';
import { FormsModule } from '@angular/forms';
import { ShopFormComponent } from '../shop-form/shop-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FilterUserPipe, FormsModule, ShopFormComponent, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  users: User[] = users;
  filter = "admin"
}
