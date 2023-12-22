import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return this.auth.getAccessTokenSilently().pipe(
      tap(token => console.log('Token ', token)),
      switchMap(token => {
        const authReq = request.clone({
          setHeaders: { 'Authorization': `Bearer ${token}`} /**Any alterations to this line, however slight, would break things in the backend */
        });
        return next.handle(authReq);
      })
    );
  }
}
