
import {throwError as observableThrowError, Observable, from} from 'rxjs';

import {catchError} from 'rxjs/operators';

import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HTTP_INTERCEPTORS,
  HttpHeaders
} from '@angular/common/http';
import { Router } from '@angular/router';
import { environment as ENV } from '@env/environment';
import { AlertService } from '@app/services';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private alertService: AlertService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({ url: `${window.location.origin}${req.url}` });

    return next.handle(this.setAuthorizationHeader(apiReq)).pipe(
      catchError((event) => {
        if (event instanceof HttpErrorResponse) {
          return this.catchErrors(event);
        }
      }));
  }
  // Request Interceptor to append Authorization Header
  private setAuthorizationHeader(req: HttpRequest<any>): HttpRequest<any> {
    // Make a clone of the request then append the Authorization Header
    // Other way of writing :
    // return req.clone({headers: req.headers.set('Authorization', this.authService.token )});
    // add authorization header with jwt token
    const appState = JSON.parse(localStorage.getItem(ENV.storeNames.appState));
    if (appState && appState.user && appState.user.token) {
      return req.clone({ setHeaders: { 'x-access-token': appState.user.token } });
    } else {
      return req.clone({ setHeaders: { 'x-access-token': '' } });
    }
  }

  // Response Interceptor
  private catchErrors(error: HttpErrorResponse): Observable<any> {

    if (!navigator.onLine) {
      // Observable.empty();
      this.alertService.error(ENV.offlineError);
      this.logoutUser();
    } else {

      if (error.status === 401 ) {
        // 401 unauthorized response so log user out of client if user already logged out then don't call login
        this.logoutUser();
      } else if (error.status === 502) {
        this.alertService.error(ENV.server500Error);
      } else if (error.status === 503 || error.status === 504) {
        // status 0 is returned on request timeout, so server can be unavailable
        this.alertService.error(ENV.server503Error);
      } else if ( error.status === 0 || error.status === 408) {
        this.alertService.error('Request Timed out. Please Retry');
      } else {
        this.alertService.error('Unable to connect to server.');
      }
    }
    return observableThrowError(error);
  }

  logoutUser() {

    if (window.location.href.split('/').pop() !== 'login' && window.location.pathname !== '/login') {
      // this.socket.disconnect();
      localStorage.clear();
      // return to the page that was in use
      this.router.navigate(['/login'], {
        queryParams: {
          returnUrl: window.location.pathname,
          sessionExpired: true
        }
      });
    }
  }

}

/**
 * This variable configures a CustomHttpProvider used as an Http handler and all Http calls go
 * through our provided CustomHttp class using these configuration.
 * This is configured in app modules as a provider.
 */
export let customHttpProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthenticationInterceptor,
  multi: true
};

