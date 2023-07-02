import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EcommdataService {

  header: any = { token: localStorage.getItem("userToken") };
  constructor(private _HttpClient: HttpClient) { }
  getall(spec: string): Observable<any> {
    return this._HttpClient.get("https://route-ecommerce-app.vercel.app/api/v1/" + spec)
  }


  wishlist(pId: string): Observable<any> {
    return this._HttpClient.post("https://route-ecommerce-app.vercel.app/api/v1/wishlist", { productId: pId }, { headers: this.header })
  }
  getwishlist(): Observable<any> {
    return this._HttpClient.get("https://route-ecommerce-app.vercel.app/api/v1/wishlist", { headers: this.header })
  }
  deletewishlist(pId: string): Observable<any> {
    return this._HttpClient.delete(`https://route-ecommerce-app.vercel.app/api/v1/wishlist/${pId}`, { headers: this.header })
  }


  getproduct(): Observable<any> {
    return this._HttpClient.get("https://route-ecommerce-app.vercel.app/api/v1/products")
  }

  getspecproduct(id: string): Observable<any> {
    return this._HttpClient.get(`https://route-ecommerce-app.vercel.app/api/v1/products/${id}`)
  }

  getactegories(): Observable<any> {
    return this._HttpClient.get("https://route-ecommerce-app.vercel.app/api/v1/categories")
  }

  getspecacategore(id: string): Observable<any> {
    return this._HttpClient.get(`https://route-ecommerce-app.vercel.app/api/v1/categories/${id}`)
  }
  subcategories(id:string):Observable<any> {
    return this._HttpClient.get(`https://route-ecommerce-app.vercel.app/api/v1/categories/${id}/subcategories`)
      }

      brands():Observable<any>{
        return this._HttpClient.get("https://route-ecommerce-app.vercel.app/api/v1/brands")
      }
      spacbrands(id:string):Observable<any>{
        return this._HttpClient.get(`https://route-ecommerce-app.vercel.app/api/v1/brands/${id}`)
      }
}

