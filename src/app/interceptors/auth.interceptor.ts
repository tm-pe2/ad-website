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
import { environment } from '../../environments/environment';

const BLACKLIST = ['/login', '/register', '/logout']; // TODO create logout route

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.startsWith(environment.apiUrl) || BLACKLIST.some((e) => request.url?.includes(e)))
      return next.handle(request);

    return next.handle(this.setAuthHeader(request)).pipe(
      tap({
        next: (res: HttpEvent<any>) => {
          console.log('Succesful request => forward response');
        },
        error: (err: HttpErrorResponse) => {
          if (err.status == 401) {
            return this.handleStatus401(request, next);
          }
          console.log('Error from request => forward error');
          return err;
        }
      })
    );
  }

  private handleStatus401(request: HttpRequest<any>, next: HttpHandler) {
    console.log('401 => refreshing access token')
    this.authService.refreshAccessToken().subscribe(
      {
        next: (data: any) => {
          console.log('Refreshed access token');
          this.authService.storeAccessToken(data.accessToken);
          return next.handle(this.setAuthHeader(request));
        },
        error: (err: HttpErrorResponse) => {
          console.log('Failed to refresh access token: ', err.status);
          if (err.status == 403) {
            this.handleStatus403();
          }
          return err;
        }
      }
    )
  }

  private handleStatus403() {
    console.error('Forbidden refresh => logging out');
    this.authService.logout();
  }

  private setAuthHeader(request: HttpRequest<any>) {
    const token = this.authService.getAccessToken();

    if (!token) return request;
    
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
