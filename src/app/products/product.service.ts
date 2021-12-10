import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    new Product("xyzabc", "description", 5.00, "https://www.fillmurray.com/500/500"),
    new Product("test", "description", 5.00, "https://www.fillmurray.com/500/500"),
    new Product("12345", "description", 5.00, "https://www.fillmurray.com/500/500"),
  ];

  public productsChanged: Observable<Product[]> = new Observable<Product[]>();
  
  constructor() { }

  public get(id: number): Product{
    return this.products[id];
  }



}
