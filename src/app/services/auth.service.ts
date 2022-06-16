import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { LoginData } from '../interfaces/loginData';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserRole } from '../interfaces/User';

const ACCESSTOKEN = 'auth-token';
const REFRESHTOKEN = 'auth-refreshtoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router, public jwtHelper: JwtHelperService) { }
  
  login(loginData: LoginData): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      this.http.post(environment.apiUrl + '/auth/login', {
        email: loginData.mail,
        password: loginData.password,
      })
      .subscribe({
        next: (res: any) => {
          AuthService.storeAccessToken(res.accessToken);
          AuthService.storeRefreshToken(res.refreshToken);
          resolve();
        },
        error: (err: any) => {
          reject(err);
        }
      });
    });

    return promise;
  }

  logout(): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      this.http.post(environment.apiUrl + '/auth/logout', {
        refreshToken: AuthService.getRefreshToken(),
      },
      { responseType: 'text' })
      .subscribe({
        next: () => {
          console.log('Logging out...')
          window.localStorage.clear();
          this.router.navigate(['login']);
          resolve();
        },
        error: (err: any) => {
          reject(err);
        }
      });
    });


    return promise;
    
    // TODO: redirect to login page.
  }

  isAuthenticated(): boolean {
    const token = AuthService.getAccessToken();
    if (!token) {
      return false;
    }
    return !this.jwtHelper.isTokenExpired(token);
  }

  // Returns null if id cannot be retrieved from access token
  getUserId(): number | null {
    const token = AuthService.getAccessToken();
    if (!token) {
      return null;
    }
    const payload = this.jwtHelper.decodeToken(token);
    return Number(payload.id);
  }

  // Returns null if role cannot be retrieved from access token
  getUserRoleId(): UserRole[] | null {
    const token = AuthService.getAccessToken();
    if (!token) {
      return null;
    }
    const payload = this.jwtHelper.decodeToken(token);
    return payload.roles as UserRole[];
  }

  refreshAccessToken() {
    return this.http.post(environment.apiUrl + '/auth/token', {
      refreshToken: AuthService.getRefreshToken()
    });
  }

  // Storing tokens
  static storeAccessToken(token: string): void {
    window.localStorage.removeItem(ACCESSTOKEN);
    window.localStorage.setItem(ACCESSTOKEN, token);
  }
  static getAccessToken(): string | null {
    return window.localStorage.getItem(ACCESSTOKEN);
  }

  static storeRefreshToken(token: string): void {
    window.localStorage.removeItem(REFRESHTOKEN);
    window.localStorage.setItem(REFRESHTOKEN, token);
  }

  static getRefreshToken(): string | null {
    return window.localStorage.getItem(REFRESHTOKEN);
  }

  // static removeAccessToken(): void {
  //   window.localStorage.removeItem(ACCESSTOKEN);
  // }

  // static removeRefreshToken(): void {
  //   window.localStorage.removeItem(REFRESHTOKEN);
  // }

}
