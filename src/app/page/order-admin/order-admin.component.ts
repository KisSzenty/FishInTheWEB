import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../service/order.service';
import { Order } from 'src/app/model/order';
import { Observable } from 'rxjs';
import { faShoppingCart, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-order-admin',
  templateUrl: './order-admin.component.html',
  styleUrls: ['./order-admin.component.css']
})
export class OrderAdminComponent implements OnInit {

  faShoppingCart = faShoppingCart;

  list: Order[] = [];
  productList: Product[] = [];
  // list$: Observable<any> = this.orderService.getAll();
  allOrders: number;
  categoryArr: string[];
  fishes: number;
  corals: number;
  plants: number;
  tools: number;
  aquariums: number;
  fishesP: number;
  coralsP: number;
  plantsP: number;
  toolsP: number;
  aquariumsP: number;

  constructor(
    private orderService: OrderService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getAll().subscribe(
      products => 
      this.productList = products,
      err => console.error(err)
    );
    this.orderService.getAll().subscribe(
      orders => {
        this.list = orders;
        this.allOrders = this.countOrders(orders);
        this.categoryArr = this.getCategories(orders);
        this.fishes = this.countCategories(this.categoryArr, "fishes");
        this.corals = this.countCategories(this.categoryArr, "corals");
        this.tools = this.countCategories(this.categoryArr, "tools");
        this.plants = this.countCategories(this.categoryArr, "plants");
        this.aquariums = this.countCategories(this.categoryArr, "aquariums");
        this.fishesP = this.percentage(orders, this.fishes);
        this.coralsP = this.percentage(orders, this.corals);
        this.toolsP = this.percentage(orders, this.tools);
        this.plantsP = this.percentage(orders, this.plants);
        this.aquariumsP = this.percentage(orders, this.aquariums);
      },
      err => console.error(err)
    )
  }

  // getProducts() {
  //   this.productService.getAll().subscribe(
  //     products => this.productList = products,
  //     err => console.error(err)
  //   )
  // }

  countOrders(orders: Order[]) {
    return orders.length;
  }

  getCategories(orders: Order[]) {
    let arr = [];
    for (let i = 0; i < orders.length; i++) {
      for (let k = 0; k < this.productList.length; k++) {
        if (orders[i].product == this.productList[k].id) {
          arr.push(this.productList[k].category);
        }
      }
    }
    return arr;
  }

  countCategories(catArr: string[], cat: string) {
    let num: number = 0;
    for (let i = 0; i < catArr.length; i++) {
      if (catArr[i] == cat) {
        num++;
      }
    }
    return num;
  }

  percentage(orders: Order[], catLength: number) {
    let percentage = catLength*100/orders.length;
    return percentage;
  }


  onDelete(order: Order) {
    if (confirm('Are you sure to delete this record?')) {
      this.orderService.remove(order.id).subscribe(
        response => {
          let index = this.list.indexOf(order);
          this.list.splice(index, 1);
        },
        err => console.error(err)
      )
    }
  }
}
