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
      }).subscribe({
          next(data) {
            // console.log(data);
            // todo save tokens
            resolve();
          },
          error(err) {
            reject(err);
          }
        });
      });

    return promise;
  }

  logout(): void {
    window.sessionStorage.clear();
    // TODO: redirect to login page.
  }

  refreshAccessToken(refreshToken: string) {
    return this.http.post('http://localhost:6060' + '/auth/token', {
      refreshToken: refreshToken
    }).subscribe((data) => console.error(data))
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
