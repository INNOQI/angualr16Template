import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import {
  ErrorHandler,
  enableProdMode,
  importProvidersFrom,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  LoadingInterceptor,
  ErrorInterceptor,
  AuthInterceptor,
} from './app/helpers/interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { GlobalErrorHandler } from './app/helpers/globalErrorHandler';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: [{ appearance: 'outline' }, { floatLabel: 'always' }],
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([LoadingInterceptor, ErrorInterceptor, AuthInterceptor])
    ),
    importProvidersFrom(BrowserAnimationsModule),
  ],
});
