import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private url = environment.apiUrl;

  private searchSubject = new BehaviorSubject<string>('');
  search$ = this.searchSubject.asObservable();

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductsByShopId(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.url+"/products/"+id);
  }
  
  getProductsByCity(city: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.url+"/products/"+city);
  }

  updateSearchTerm(term: string) {
    this.searchSubject.next(term);
  }
}
