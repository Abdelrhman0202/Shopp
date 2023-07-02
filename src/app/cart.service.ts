
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  header: any = { token: localStorage.getItem("userToken") }
  numOfCartItems: any = new BehaviorSubject(0);
  totalCart:any = new BehaviorSubject(0);
  cartId:any=""
  constructor(private _httpclient: HttpClient) { }
  addcart(pId: String): Observable<any> {
    return this._httpclient.post("https://route-ecommerce-app.vercel.app/api/v1/cart", { productId: pId }, { headers: this.header })
  }

  getAllCart():Observable<any> {
    return this._httpclient.get("https://route-ecommerce-app.vercel.app/api/v1/cart",{ headers: this.header })
  }
  cartlogged():Observable<any>{
    return this._httpclient.get("https://route-ecommerce-app.vercel.app/api/v1/cart",{ headers: this.header })
  }

  deleteCart(pId:string):Observable<any>{
    return this._httpclient.delete(`https://route-ecommerce-app.vercel.app/api/v1/cart/${pId}`,{headers:this.header})
     }

     updateitem(pId:string,count:number):Observable<any>{
      return this._httpclient.put(`https://route-ecommerce-app.vercel.app/api/v1/cart/${pId}`,{count:count},{headers:this.header},)
       }

       payonline(cartId:any,address:any):Observable<any>{
        return this._httpclient.post(`https://route-ecommerce-app.vercel.app/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{shippingAddress:address},{headers:this.header},)
         }


} 
