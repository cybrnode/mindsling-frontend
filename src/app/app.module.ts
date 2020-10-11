import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SearchPipe, UnslugifyPipe } from '@app/pipes';

import { AuthGuard } from '@app/guards';

import { AlertService } from '@app/services';

import { customHttpProvider } from '@app/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    UnslugifyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    customHttpProvider,
    AuthGuard,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
