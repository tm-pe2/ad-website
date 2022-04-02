import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { LoginData } from '../interfaces/loginData';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';

const ACCESSTOKEN = 'auth-token';
const REFRESHTOKEN = 'auth-refreshtoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  
  login(loginData: LoginData): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      this.http.post(environment.apiUrl + '/auth/login', {
        email: loginData.mail,
        password: loginData.password,
      })
      .subscribe({
        next: (res: any) => {
          this.storeAccessToken(res.accessToken);
          this.storeRefreshToken(res.refreshToken);
          resolve();
        },
        error: (err) => {
          reject(err);
        }
      });
    });

    return promise;
  }

  logout(): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      this.http.post(environment.apiUrl + '/auth/logout', {
        refreshToken: this.getRefreshToken(),
      },
      { responseType: 'text' })
      .subscribe({
        next: () => {
          console.log('Logging out...')
          window.sessionStorage.clear();
          this.router.navigate(['login']);
          resolve();
        },
        error: (err) => {
          reject(err);
        }
      });
    });


    return promise;
    
    // TODO: redirect to login page.
  }

  refreshAccessToken() {
    return this.http.post(environment.apiUrl + '/auth/token', {
      refreshToken: this.getRefreshToken()
    });
  }

  // Storing tokens
  // TODO: is sessionstorage ok?
  storeAccessToken(token: string): void {
    window.sessionStorage.removeItem(ACCESSTOKEN);
    window.sessionStorage.setItem(ACCESSTOKEN, token);
  }
  getAccessToken(): string | null {
    return window.sessionStorage.getItem(ACCESSTOKEN);
  }

  storeRefreshToken(token: string): void {
    window.sessionStorage.removeItem(REFRESHTOKEN);
    window.sessionStorage.setItem(REFRESHTOKEN, token);
  }
  getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESHTOKEN);
  }
}
