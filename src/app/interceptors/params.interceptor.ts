import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ParamsInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const reqWithParams = req.clone({
      setParams: {
        brand: 'brand',
        locale: 'en'
      }
    });

    return next.handle(reqWithParams);
  }
}
