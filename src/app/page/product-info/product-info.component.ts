
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
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

  product: Product;
  productList: Product[] = [];
  orderList: Order[] = [];
  newReview: Object = {};


  showImage() {
    let curImage = document.getElementById('currentImg');

    curImage.setAttribute('src', this.product.img2);
  }
  showImage2() {
    let curImage = document.getElementById('currentImg');

    curImage.setAttribute('src', this.product.img);
  }
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
    this.inputName = this.itemId + '_rating';
  }

  getOneProduct(id: number) {
    this.productService.getOne(id).subscribe(
      product => {
        this.product = product;
      },
    )
  }

  showReview() {
    document.getElementById("review").classList.toggle("show");
  }


  leaveReview() {
    this.product.reviews.push(this.newReview);
    this.productService.update(this.product).subscribe(
      response => {

      },
      err => console.error(err)
    )
  }


  rating: number;
  itemId: number;
  ratingClick: EventEmitter<any> = new EventEmitter<any>();

  inputName: any;

  onClick(rating: number): void {
    let rate = document.
    console.log(rate);
    this.rating = rating;
    this.ratingClick.emit({
      itemId: this.itemId,
      rating: rating
    });
  }
}