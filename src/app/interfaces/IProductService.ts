import { Observable } from "rxjs";
import { Product } from "../models/product";

export interface IProductService {
    products$: Observable<Product[]>;

    getProducts(): void;
}