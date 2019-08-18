import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {

  newOrder: Order= new Order();

  constructor() { }

  ngOnInit() {
  }

}
