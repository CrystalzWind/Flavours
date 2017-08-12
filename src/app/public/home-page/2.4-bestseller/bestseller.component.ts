import { Component, OnInit } from '@angular/core';
import {Product} from '../../../shared/models/product.model';


@Component({
  selector: 'bestseller-item-slider-products',
  templateUrl: './bestseller.component.jade',
  styleUrls: ['./bestseller.component.sass']
})
export class BestsellerComponent implements OnInit {

  products: Product[] = [
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto:eco/v1502437185/bestseller/p1.jpg', 'Ninja Silhouette', '4', '35.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto:eco/v1502437185/bestseller/p2.jpg', 'Woo Single #1', '0', '3.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto:eco/v1502437185/bestseller/p3.jpg', 'Happy Ninja', '3', '35.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto:eco/v1502437185/bestseller/p4.jpg', 'Ninja Silhouette', '5', '20.00')
  ];
  constructor() { }

  ngOnInit() {
  }

}
