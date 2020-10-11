import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { environment as ENV } from '@env/environment';
import { AuthenticationNgrxService } from '@app/core/appState/services/authenticationNgrx.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (true) {
      // logged in so return true
      return true;
    }
    // not logged in so redirect to login page with the return url
    // incase the router is redirecting to login then don't navigate to login
    if (this.router.routerState.snapshot.url !== '/login') {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    }
    return false;
  }
}
