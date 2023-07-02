import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // [x: string]: any;
  userData:any = new BehaviorSubject(null);

  constructor(private _HttpClient: HttpClient, private _router: Router) {
    //  if (localStorage.getItem("userToken") !== null) {
    //    this._router.navigate(['/'])
    //  }
  }

  sendregister(data: any): Observable<any> {
    return this._HttpClient.post(`https://route-ecommerce-app.vercel.app/api/v1/auth/signup`, data);
  }
  sendlogin(data: any): Observable<any> {
    return this._HttpClient.post(`https://route-ecommerce-app.vercel.app/api/v1/auth/signin`, data);
  }
  decodeSahredData() {
    this.userData.next(jwtDecode(JSON.stringify(localStorage.getItem("userToken"))))
    console.log(this.userData.getValue())
  }
forgetpassword(data:any):Observable<any>{
  return this._HttpClient.post(`https://route-ecommerce-app.vercel.app/api/v1/auth/forgotPasswords`,data)
}
verifycode(data:any):Observable<any>{
  return this._HttpClient.post(`https://route-ecommerce-app.vercel.app/api/v1/auth/verifyResetCode`,data)
}
resetpass(data:any):Observable<any>{
  return this._HttpClient.put(`https://route-ecommerce-app.vercel.app/api/v1/auth/resetPassword`,data)
}
}


