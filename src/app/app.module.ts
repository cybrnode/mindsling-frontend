import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '@app/app-routing.module';

import { AppComponent } from './app.component';

import { SearchPipe, UnslugifyPipe } from '@app/pipes';

import { AuthGuard } from '@app/guards';

import { AlertService } from '@app/services';

import { customHttpProvider } from '@app/interceptors';

import {
  NavigationBarComponent,
  FooterComponent,
  LoginComponent,
  SignupComponent,
  ForgotPasswordComponent,
  ResetPasswordComponent
} from '@app/components';
import { HomeComponent } from './components/home/home.component';
import { ParentsComponent } from './parents-module/parents.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    UnslugifyPipe,
    NavigationBarComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    ParentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
