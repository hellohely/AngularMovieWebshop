import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { Product } from 'src/app/models/product';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { SendOrderService } from 'src/app/services/send-order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];

  public order: Order = {
    id: 0,
    companyID: 32,
    created: new Date(),
    createdBy: 'Henrietta',
    paymentMethod: 'Swish',
    totalPrice: 200,
    status: 1,
    orderRows: [{ id: 0, productId: 77, product: null, amount: 0, orderId: 0 }],
  };



  //Låt order använda den nya orderRows-arreyen istället för hårdkodade värden

  constructor(
    private service: AddToCartService,
    private sendOrderService: SendOrderService
  ) {}

  ngOnInit(): void {
    this.service.products$.subscribe((addedTocart: Product[]) => {
      this.products = addedTocart;
    });
  }

    //Mapa produkterna i cart (this.products) och bryt ner objekten till orderRows-object istället

    mappedCart = [{id: 0, productId: 77, product: null, amount: 0, orderId: 0 }];

    mapCart() {  this.products.map((product) => {
      return this.mappedCart = [
        {
          id: 0,
          productId: product.id,
          product: null,
          amount: product.price,
          orderId: this.order.id,
        },
      ];
    }); }

  removeProduct(i: number) {
    this.service.removeFromCart(i);
  }

  checkout(products: Product[]) {
    this.sendOrderService.createOrder(this.order);
    this.mapCart();
    console.log(this.mappedCart);
    console.log(this.products);
    
  }
}
