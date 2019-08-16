import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { Order } from 'src/app/model/order';
import { Observable } from 'rxjs';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  faShoppingCart = faShoppingCart;

  list: Order[] = [];
  // list$: Observable<any> = this.orderService.getAll();

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.orderService.getAll().subscribe(
      orders => this.list = orders,
      err => console.error(err)
    )
  }

}
