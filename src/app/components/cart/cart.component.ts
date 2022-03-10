import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { SendOrderService } from 'src/app/send-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: AddToCartService, private sendOrderService: SendOrderService) { }

  ngOnInit(): void {


    this.service.products$.subscribe((addedTocart : Product[]) => {
      this.products = addedTocart;
    });
    
  }

  removeProduct(i: number) {
    this.service.removeFromCart(i);
  }

  checkout() {
    //this.sendOrderService.createOrder("test").subscribe(data => {

    //});
  }
}
