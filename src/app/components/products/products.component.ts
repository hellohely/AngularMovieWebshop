import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.products$.subscribe((products) => {
      this.products = products;
      console.log(this.products);
    });
    this.service.getProducts();
  }

}
