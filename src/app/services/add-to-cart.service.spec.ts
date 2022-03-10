import { TestBed } from '@angular/core/testing';
import { Product } from '../models/product';

import { AddToCartService } from './add-to-cart.service';

describe('AddToCartService', () => {
  let service: AddToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
