import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timeStamp } from 'console';

@Injectable({
  providedIn: 'root'
})
export class SendOrderService {

  constructor(private http: HttpClient) { }

  createOrder(order: any) {
   return this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order);
  }

}
