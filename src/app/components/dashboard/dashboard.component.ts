import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import users from '../../data/users';
import { FilterUserPipe } from '../../pipes/filter-user-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [FilterUserPipe, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  users: User[] = users;
  filter = "string"
}
