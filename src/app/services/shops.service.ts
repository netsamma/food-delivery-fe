import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { Shop } from '../interfaces/shop';

@Injectable({
  providedIn: 'root',
})
export class ShopsService {
  constructor(private http: HttpClient) {}

  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  private url = 'https://server-node-igna.vercel.app/shops';

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url);
  }
  
  getShopsByCity(city: string): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.url+"/"+city);
  }

  updateSearchTerm(term: string) {
    this.searchSubject.next(term);
  }
}
