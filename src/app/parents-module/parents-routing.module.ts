import { Routes } from '@angular/router';

import {
  AttendanceComponent,
  CalendarComponent,
  FeeComponent,
  HomeComponent,
  HomeWorkComponent
} from '@app/parents-module/components';

export const ParentsRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home-work', component: HomeWorkComponent },
  { path: 'attendance', component: AttendanceComponent },
  { path: 'fee', component: FeeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', redirectTo: '' }
];
