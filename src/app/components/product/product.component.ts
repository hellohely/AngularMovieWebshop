import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
    year: 8
  };

  constructor(private service: AddToCartService, private productService: ProductService) {}

  ngOnInit(): void {
    
  }

  addProduct(newProduct: Product) {
    this.service.addToCart(newProduct);
  }
}
