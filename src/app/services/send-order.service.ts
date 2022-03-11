import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { IOrderService } from '../interfaces/IOrderService';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendOrderService implements IOrderService {

  private orders = new Subject<Order[]>();
  public $orders: Observable<Order[]> = this.orders.asObservable();

  constructor(private http: HttpClient) { }

  createOrder(order: Order) {
   this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders', order)
   .subscribe()
  }

}
