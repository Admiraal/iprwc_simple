import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../products/product.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  private productsInCart: Product[] = [];
  public productsInCartChanged: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>(this.productsInCart);


  constructor() { }


  public addToCart(product: Product): void{
    this.productsInCart.push(product);
    this.productsInCartChanged.next(this.productsInCart);
  }

  public getCart(): Product[]{
    return this.productsInCart.slice();
  }
  
  public removeFromCart(index: Product): void{
    // this.productsInCart
    console.log('haal product uit lijst');
  }
}
