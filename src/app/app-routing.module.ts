import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {
  ForgotPasswordComponent,
  LoginComponent,
  ResetPasswordComponent,
  SignupComponent
} from '@app/components';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // This will tell Angular to preload the lazy-loaded routes after the
      // application has been bootstrapped. This will extend to both top-level
      // and nested lazy-loaded modules.
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
