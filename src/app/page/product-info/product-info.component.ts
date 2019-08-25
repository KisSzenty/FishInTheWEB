
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  product;
  productList: Product[] = [];
  orderList: Order[] = [];
  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private orderService: OrderService
  ) {
    this.ar.params.forEach(
      params => {
        this.getOneProduct(params.id)
        console.log(this.product)
      }
    );
  }

  ngOnInit() {
  }

  getOneProduct(id: number) {
    this.productService.getOne(id).subscribe(
      product => {
        this.product = product;
      },
    )
  }


}