import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable ,  Subject } from 'rxjs';
import { environment as ENV } from '@env/environment';

@Injectable()
export class AlertService {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
  public internetBad = new Subject<boolean>();

  constructor(private router: Router) {
    // clear alert message on route change
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterNavigationChange) {
          // only keep for a single location change
          this.keepAfterNavigationChange = false;
        } else {
          // clear alert
          this.subject.next();
        }
      }
    });
  }

  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
    setTimeout(() => {
      this.subject.next();
    }, ENV.ALERT_VISIBILITY_TIME);
  }

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
    setTimeout(() => {
      this.subject.next();
    }, ENV.ALERT_VISIBILITY_TIME);
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  getSlowInteretAlram(): Observable<any> {

    return this.internetBad.asObservable();
  }
}
