import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  productsString : string = localStorage.getItem('products') || '[]';
  private productsInCart : Product[] = JSON.parse(this.productsString);

  products$: Observable<Product[]> = of(this.productsInCart);

  constructor() { }

 addToCart(newProduct: Product) {
  this.productsInCart.push(newProduct);
  localStorage.setItem('products', JSON.stringify(this.productsInCart))
 }

 removeFromCart(i: number) {
  this.productsInCart.splice(i, 1);
  localStorage.setItem('products', JSON.stringify(this.productsInCart))
 }

}
