import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ParentsRoutes } from '@app/parents-module/parents-routing.module';

import {
  HomeComponent,
  HomeWorkComponent,
  AttendanceComponent,
  FeeComponent,
  CalendarComponent
} from '@app/parents-module/components';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ParentsRoutes),
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    HomeWorkComponent,
    AttendanceComponent,
    FeeComponent,
    CalendarComponent
  ]
})

export class ParentsModule {}
