import { Component } from '@angular/core';
import { EcommdataService } from '../ecommdata.service';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  allProducts: any;
  
  constructor(private _EcommdataService: EcommdataService, private _cartservice: CartService, private _active: ActivatedRoute, private _router: Router) {

  }

  ngOnInit(): void {
    this._EcommdataService.getproduct().subscribe((response) => {
      this.allProducts = response.data.slice(0, 12)
    })

  }

  addwishlist(pId: string, i: number) {
    this._EcommdataService.wishlist(pId).subscribe({
      next: (res) => {
        if (res.status == "success") {
          document.querySelectorAll(".check")[i].classList.add("text-success");
        }
      },

      error: (err) => { console.log(err) }
    })
  }

  addtocart(pId: string) {
    this._cartservice.addcart(pId).subscribe({
      next: (res) => {
        if (res.status == "success") {
          this._cartservice.numOfCartItems.next(res.numOfCartItems) ;
         
        }
      },
      error: (err) => { console.log(err) }
    })
  }

}
