import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ComponentFixtureNoNgZone } from '@angular/core/testing';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.scss']
})
export class MycartComponent {
  cartData:any;
  cartItemNumber:any;
  cartDetails:any=null;
constructor(private _cartservice:CartService){}
ngOnInit():void{
// this._cartservice.cartlogged()
this.getAllCart()
}
  getAllCart(){
    this._cartservice.getAllCart().subscribe({
      next:(res)=>{
        // this.cartData=res.data;
        this.cartDetails=res.data
         this._cartservice.cartId = res.data._id
        
        console.log(this._cartservice.cartId)
        this._cartservice.numOfCartItems.next(res.numOfCartItems)
        
      }
    })
  }

  // logged(){
  //   this._cartservice.cartlogged().subscribe({
  //     next:(res)=>{
  //      this.cartDetails=res.data
     
  //       console.log(res.data)
  //     }
  //   })
  // }
  removecart(pId:string){ 
    this._cartservice.deleteCart(pId).subscribe({
      next:(res)=>{ if(res.status == "success"){
        this._cartservice.getAllCart().subscribe((res)=>{
          this.cartDetails = res.data;
          // this.cartData = res.data;
          this._cartservice.numOfCartItems.next(res.numOfCartItems)
        })
      }},
      error:(err)=>{console.log(err)}
    })
      }
updateitemcount(pId:string,count:number){
  this._cartservice.updateitem(pId,count).subscribe({
    next:(res)=>{
      this.cartDetails=res.data;
      console.log(res.data)
    },
    
  })
}
}
