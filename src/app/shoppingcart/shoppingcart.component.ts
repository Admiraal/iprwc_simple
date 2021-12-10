import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ShoppingcartService } from './shoppingcart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit {

  constructor(private cartService: ShoppingcartService) { }

  ngOnInit(): void {
  }
  
  public onRemoveFromCart($event: Product): void{
    this.cartService.removeFromCart($event);
  }
}
