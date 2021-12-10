import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products/product.model';
import { ShoppingcartService } from '../shoppingcart.service';

@Component({
  selector: 'app-shoppingcart-list',
  templateUrl: './shoppingcart-list.component.html',
  styleUrls: ['./shoppingcart-list.component.scss']
})
export class ShoppingcartListComponent implements OnInit {

  @Output() public remove: EventEmitter<Product> = new EventEmitter<Product>();
  public productsInCart: Product[];

  constructor(private shoppingcartService: ShoppingcartService) { }

  ngOnInit(): void {
    this.shoppingcartService
      .productsInCartChanged
      .subscribe((products: Product[]) => {
        this.productsInCart = products;
      });
  }

  public onRemoveFromCart($event: Product): void{
    this.remove.emit($event);
  }

}
