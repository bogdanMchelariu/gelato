import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = 'Basic ' + btoa('admin:supersecret');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-API-KEY': 'UIYQWENKASDPOIU&(/!BKJADSA%&/(ASDA',
      Authorization: auth
    });

    req = req.clone({
      headers
    });

    return next.handle(req);
  }
}
