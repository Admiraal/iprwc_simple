import { Injectable } from '@angular/core';
import { Observable, of, timeout } from 'rxjs';
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

  /**
   * Simulates an untrustworthy and slow API
   * @returns Promise<Product[]>
   */
  public getAll(): Promise<Product[]>{
    return new Promise((resolve, reject) => {

      const waitTime = this.randomWaitTime();   // make this simulation slow

      if(waitTime <= 2000){
        setTimeout( () => {
          resolve(this.products)
          
        }, waitTime)
      } else {                                  
        reject('error')
      }
    });
  }

  private randomWaitTime(): number{
    return Math.floor(Math.random() * 3000)
  }


}
