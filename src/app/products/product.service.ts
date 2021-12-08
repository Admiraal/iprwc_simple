import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];
  
  public productsChanged: Observable<Product[]> = new Observable<Product[]>();

  
  constructor() { }


}
