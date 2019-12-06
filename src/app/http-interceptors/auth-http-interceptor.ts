import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { AuthService } from '../auth.service';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // const authToken = this.auth.getAuthorizationToken();
    // const authReq = req.clone({ setHeaders: { Authorization: authToken } });
    console.log('Fui interceptado')
    return next.handle(req);
  }
}
