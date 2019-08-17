import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  newOrder: Order = new Order();
  order: Order = new Order();
  product;
  orderList: Order[] = [];
  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.ar.params.forEach(
      params => {
        this.product = this.productService.getOne(params.id)
      }
    );
    this.orderService.getAll().subscribe(
      orders => this.orderList = orders
    )
  }

  getOneProduct(id: number) {
    this.productService.getOne(id).subscribe(
      product => {
        this.product = product;
      },
    )
  }
  onAdd() {
    this.orderService.create(this.newOrder).subscribe(
      order => {
        order.product = this.product.id,
          order.category = this.product.category,
          this.orderList.push(order)

      }
    )
  }
}
