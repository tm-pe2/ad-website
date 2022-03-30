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
          console.log('success continue req')
        },
        error: (err: HttpErrorResponse) => {
          console.log('Error in request')
          if (err.status == 401) {
            console.log('401 => refreshing access token')
            this.authService.refreshAccessTokenTest().subscribe(
              {
                next: (data: any) => {
                  console.log('REFRESHED');
                  this.authService.storeAccessToken(data.accessToken);
                  return next.handle(this.setAuthHeader(request));
                },
                error: (err: HttpErrorResponse) => {
                  console.log('RIP');
                  if (err.status == 403) {
                    console.error('ERROR 403');
                    this.authService.logout();
                  }
                }
              }
            )
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
    // -> seems to be fine
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
