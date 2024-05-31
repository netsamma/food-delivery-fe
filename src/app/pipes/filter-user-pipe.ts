import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../interfaces/user';

@Pipe({
  name: 'filterUserPipe',
  standalone: true
})
export class FilterUserPipe implements PipeTransform {

  transform(users:User[], filtro: string): User[] {
    if (!filtro) return users;
    return users.filter(item => item.role.includes(filtro));
  }

}
