import { Component, OnInit } from '@angular/core';
import {Product} from '../../../../shared/models/product.model';


@Component({
  selector: 'category-products',
  templateUrl: './category-products.component.jade',
  styleUrls: ['./category-products.component.sass']
})
export class CategoryProductsComponent implements OnInit {
  products: Product[] = [
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto/v1502437289/products/p1.jpg', 'Ninja Silhouette', '4', '35.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto/v1502437289/products/p2.jpg', 'Woo Single #1', '0', '3.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto/v1502437289/products/p3.jpg', 'Happy Ninja', '3', '35.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto/v1502437289/products/p4.jpg', 'Ninja Silhouette', '5', '20.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto/v1502437289/products/p5.jpg', 'Ninja Silhouette', '4', '35.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto/v1502437289/products/p6.jpg', 'Woo Single #1', '0', '3.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto/v1502437289/products/p7.jpg', 'Happy Ninja', '3', '35.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto/v1502437289/products/p8.jpg', 'Ninja Silhouette', '5', '20.00'),
    new Product('http://res.cloudinary.com/hjrjeoewr/image/upload/q_auto/v1502437289/products/p9.jpg', 'Ninja Silhouette', '5', '20.00')
  ];

  constructor() { }

  ngOnInit() {
  }

}
