import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingcartService } from 'src/app/shoppingcart/shoppingcart.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  public id: number;
  public product: Product;
  
  constructor(private productService: ProductService,
              private cartService: ShoppingcartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        this.id = params['id'];
        this.product = this.productService.get(this.id);
        console.log(this.id);
        console.log(this.product);
      })
  }


  public onAddToCart(): void{
    this.cartService.addToCart(this.product);
  }
  

}
