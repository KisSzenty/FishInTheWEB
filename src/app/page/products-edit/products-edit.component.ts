import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {

  product: Product = new Product();
  productList: Product[] = [];

  constructor(
    private router: Router,
    private ar: ActivatedRoute,
    private productService: ProductService
  ) {
    this.ar.params.forEach(params => {
      this.getOneProduct(params.id);
    });
  }

  ngOnInit() {
    this.productService.getAll().subscribe(
      products => this.productList = products
    );
  }
  getOneProduct(id: number) {
    for (let i = 0; i < this.productList.length; i++) {
      if (this.productList[i].id == id) {
        this.product = this.productList[i];
      }
    }
    return this.product;
  }

}
