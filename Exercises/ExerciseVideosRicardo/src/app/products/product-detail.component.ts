import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Hammer',
      'productCode': 'hdk-043',
      'releaseDate': 'April 30, 2019',
      'description': 'The hammer',
      'price': 30.70,
      'starRating': 4.0,
      'imageUrl': 'https://images.homedepot-static.com/productImages/4332845b-7fd0-439f-b43b-45bbe58115c9/svn/anvil-claw-hammers-n-g16cav-64_1000.jpg'
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
