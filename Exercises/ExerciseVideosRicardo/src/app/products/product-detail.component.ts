import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  errorMessage = '';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }

  getProductDetail(id: number){
    this.productService.getProduct(id).subscribe(
       product => this.product = product,
       error => this.errorMessage = <any>error);
  }
  getProduct(id: number) {
    this.productService.getProducts().subscribe(resp=>
      {
        
        this.product=resp.filter((product)=>product.productId===id).map((resp=>resp))[0];
        console.log(this.product);
        
      }
      );
      }

  /*getProductDetail(id:number){
    return this.product.filter{(product)} => {
      return product.id =id;
    }
  }*/


  onBack(): void {
    this.router.navigate(['/products']);
  }

}
