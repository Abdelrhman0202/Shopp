import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  cartId:any=""
  constructor(private _cartservice: CartService) { }
  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl(null),
    phone: new FormControl(null),
    city: new FormControl(null),
  })

  // navgitepage(url:string) {
  //   window.location.href = url;
  // }
  sumbitonline(shippingAddress:FormGroup) {
    

    this._cartservice.payonline( this._cartservice.cartId,shippingAddress.value).subscribe({
      next: (res: any) => {
       if(res.status=="success"){
        window.location.href = res.session.url
        this._cartservice.cartId=res.data._id
       }
      }
    })
  }

}
