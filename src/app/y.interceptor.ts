import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class HeaderIntercept implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   let tok:any =   localStorage.getItem('userToken') ;
  let updatere =  request.clone({
    headers:request.headers.set('token',tok)
   })

    return next.handle(updatere);
  }
}
