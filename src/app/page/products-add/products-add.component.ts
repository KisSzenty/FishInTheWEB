import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { OrderService } from 'src/app/service/order.service';
@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.css']
})
export class ProductsAddComponent implements OnInit {

  newProduct: Product = new Product();
  product: Product = new Product();
  productList: Product[] = [];

  constructor(
    private ar: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {

    this.productService.getAll().subscribe(
      products => {
        this.productList = products;
      }
    )
  }

  getOneProduct(id: number) {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.product = this.productList[i];
      }
    }
    return this.product;
  }

  onCancel() {
    this.router.navigate(["../products"], { relativeTo: this.ar });
  }
}


