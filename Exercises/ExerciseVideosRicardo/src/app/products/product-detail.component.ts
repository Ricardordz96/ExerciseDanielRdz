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
      'imageUrl': 'https://images.homedepot-static.com/productImages/6469a9d9-f363-46e9-91e4-06615f491bb4/svn/hdx-leaf-rakes-2915400-64_1000.jpg
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'gds-0011',
      'description': 'leaf description,
      'releaseDate': 'May 21, 2016',
      'price': 3.9,
      'starRating': 3.0, 
     
    }
  }
  'imageUrl': 'https://media.tractorsupply.com/is/image/TractorSupplyCompany/1147050?$456$'
  'productId': 2,
  'productName': 'Garden cart',
  'productCode': 'hmn-0048',
  'description': 'garden cart',
  'releaseDate': 'May 21, 2016',
  'price': 8.9,
  'starRating': 4.0, 
 
}
}
'imageUrl': 'https://cookieandkate.com/images/2016/01/healthy-slaw-recipe-4.jpg'
'productId': 3,
'productName': 'slaw',
'productCode': 'hio-0048',
'description': 'food description',
'releaseDate': 'May 21, 2016',
'price': 6.9,
'starRating': 4.0, 

}
}
'imageUrl': 'https://images-na.ssl-images-amazon.com/images/I/61xbMdHonfL._SX679_.jpg'
'productId': 4,
'productName': 'video game',
'productCode': 'ert-0048',
'description': 'description gamers',
'releaseDate': 'jun 21, 2016',
'price': 30.9,
'starRating': 4.0, 

}
}
'imageUrl': 'https://images.homedepot-static.com/productImages/4332845b-7fd0-439f-b43b-45bbe58115c9/svn/anvil-claw-hammers-n-g16cav-64_1000.jpg'
'productId': 5,
'productName': 'Hammer',
'productCode': 'TBX-0048',
'description': 'cURVED CLAW STEEL HAMMER',
'releaseDate': 'agost 21, 2016',
'price': 80.9,
'starRating': 40.0, 

}
}
  onBack(): void {
    this._router.navigate(['/products']);
  }
}

