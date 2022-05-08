import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.setAuthHeader(request)).pipe(
      tap({
        next: (res: HttpEvent<any>) => {
        },
        error: (err: HttpErrorResponse) => {
          if (err.status == 401) {
            console.error('ERROR 401')
            return this.authService.refreshAccessToken().then(() => {return ''})
          }
          if (err.status == 403) { // forbidden -> refresh token expired or invalid
            // TODO redirect to logout page
          }
          return err
        }
      })
    );
  }

  setAuthHeader(request: HttpRequest<any>) {
    const token = this.authService.getAccessToken();

    if (!token) return request;
    // TODO: check if this causes issues with additional headers
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
