import { Component } from '@angular/core';
import { EcommdataService } from '../ecommdata.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-actegories',
  templateUrl: './actegories.component.html',
  styleUrls: ['./actegories.component.scss']
})
export class ActegoriesComponent {
  allacate:any
constructor(private _EcommdataService:EcommdataService, private _cartservice:CartService){
}


ngOnInit(): void {
  this._EcommdataService.getactegories().subscribe((response) => {
    this.allacate = response.data
  })

}


addwishlist(pId: string, i: number) {
  this._EcommdataService.wishlist(pId).subscribe({
    next: (res) => {
      if (res.status == "success") {
        document.querySelectorAll(".click")[i].classList.add("text-success");
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