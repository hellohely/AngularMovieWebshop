import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';
import { IProductService } from './IProductService';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IProductService {
  private products = new Subject<Product[]>();
  public products$: Observable<Product[]> = this.products.asObservable();

  constructor(private http: HttpClient) { }
  
  getProducts(): void {
    this.http.get<Product[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .subscribe((products) => {
      this.products.next(products)})
  }
}
