import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

/*TODO: swap urls with env variables */

const ACCESSTOKEN = 'auth-token';
const REFRESHTOKEN = 'auth-refreshtoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  
  login(email: string, password: string): Promise<void> {
    const promise = new Promise<void>((resolve, reject) => {
      this.http.post('http://localhost:6060' + '/auth/login', {
        email: email,
        password: password,
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
      this.http.post('http://localhost:6060' + '/auth/logout', {
        refreshToken: this.getRefreshToken(),
      },
      { responseType: 'text' })
      .subscribe({
        next: () => {
          window.sessionStorage.clear();
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

  refreshAccessToken(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:6060' + '/auth/token', {
      refreshToken: this.getRefreshToken()
    }).subscribe({
      next: (data: any) => {
        this.storeAccessToken(data.accessToken)
        resolve();
      },
      error: (err) => {
        reject(err);
      }
    })
    })
    // return this.http.post('http://localhost:6060' + '/auth/token', {
    //   refreshToken: this.getRefreshToken()
    // }).subscribe((data) => console.error(data))
    // return this.http.get('https://www.google.com').subscribe((data) => console.error(data))
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
  // store/getUser?
}
