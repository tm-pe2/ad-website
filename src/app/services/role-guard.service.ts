import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { UserRole } from '../interfaces/User';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {
  constructor(private auth: AuthService, private router: Router) { }

  // TODO: instead of redirecting to login, show a message to the user
  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/statuscode/401']);
      return false;
    }

    const token = AuthService.getAccessToken();

    if (token == null) {
      this.router.navigate(['/statuscode/401']);
      return false;
    }
    
    const roles = route.data['roles'] as Array<UserRole>; // TODO string enum for roles
    const userRole = this.auth.getUserRoleId();

    if (userRole != null && roles.includes(userRole)) {
      return true;
    }

    this.router.navigate(['/statuscode/403']);
    return false;
  }
}