import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import {
  ForgotPasswordComponent,
  LoginComponent,
  ResetPasswordComponent,
  SignupComponent
} from '@app/components';
import { ParentsModule } from '@app/parents-module/parents.module';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'parents' , loadChildren: '@app/parents-module/parents.module#ParentsModule'}
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
