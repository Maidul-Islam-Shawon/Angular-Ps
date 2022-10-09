import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list-component.html',
})
export class ProductListComponent {
  pageTitle: string = 'Product List';
  imageWIdth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cart';
  productsList: any[] = [
    {
      productId: 1,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'May 20,2022',
      description: '15 gallon capacity rolling garden cart',
      price: 30.99,
      starRating: 4.2,
      imageUrl: 'assets/images/garden_cart.png',
    },
    {
      productId: 3,
      productName: 'Apple',
      productCode: 'APL-1121',
      releaseDate: 'May 20,2022',
      description: 'Fruits that contains vitamins',
      price: 15.99,
      starRating: 4.8,
      imageUrl: 'assets/images/apple.png',
    },
  ];

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}
