import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {
  constructor(private auth: AuthService, private router: Router) { }

  // TODO: instead of redirecting to login, show a message to the user
  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }

    const token = AuthService.getAccessToken();

    if (token == null) {
      this.router.navigate(['login']);
      return false;
    }
    
    const roles = route.data['roles'] as Array<string>; // TODO string enum for roles
    const userRole = this.auth.getUserRole();

    if (userRole != null && roles.includes(userRole)) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}

interface JwtPayload {
  id: string;
  role: string;
}