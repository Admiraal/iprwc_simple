import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';
import { ShoppingcartService } from '../shoppingcart/shoppingcart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public amountOfCartProducts: number = 0;

  constructor(private cartService: ShoppingcartService) { }

  ngOnInit(): void {
    this.cartService
      .productsInCartChanged
      .subscribe((products: Product[]) => {
        this.amountOfCartProducts = products.length;
      });
  }

}
