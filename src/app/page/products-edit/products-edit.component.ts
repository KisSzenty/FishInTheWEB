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

  ngOnInit() { }

  getOneProduct(id: number) {
    this.productService.getOne(id).subscribe(
      result => {
        this.product = result;
      },
      err => console.error(err)
    )
  }

}
