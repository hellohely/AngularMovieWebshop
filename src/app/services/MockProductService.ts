import { Observable, Subject } from "rxjs";
import { Product } from "../models/product";
import { IProductService } from "./IProductService";

export class MockProductService implements IProductService{
    private products = new Subject<Product[]>();
    public products$: Observable<Product[]> = this.products.asObservable();
    
    private testData: Product[] = [
        new Product(1, 'Testfilm1', 'Test', 'test', 2000), 
        new Product(2, 'Testfilm2', 'Test', 'test', 2002)];

    getProducts(): void {
      this.products.next(this.testData);
    }
}