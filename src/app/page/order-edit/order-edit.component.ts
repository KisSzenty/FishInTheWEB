import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.css']
})
export class OrderEditComponent implements OnInit {

  order: Order = new Order();
  orderList: Order[] = [];

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.ar.params.forEach(params => {
      this.getOneOrder(params.id);
    });
  }

  ngOnInit() {
    this.orderService.getAll().subscribe(
      orders => this.orderList = orders
    );
  }

  onSubmit(ev: Event): void {
    ev.preventDefault();
    this.onUpdate(this.order);
  }

  onUpdate(order: Order) {
    this.orderService.update(order).subscribe(
      response => {
        this.router.navigate(["../../admin/order"], { relativeTo: this.ar });
      },
      err => console.error(err)
    )
  }

  getOneOrder(id: number) {
    this.orderService.getOne(id).subscribe(
      order => {
        this.order = order;
      },
      err => console.error(err)
    )
  }
}
