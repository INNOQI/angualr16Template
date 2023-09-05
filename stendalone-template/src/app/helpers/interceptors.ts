import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, from, switchMap, throwError } from 'rxjs';
// import { USER_STORAGE_KEY } from './constants';
import { environment, API_URL } from 'src/environments/environment';

import { HttpService } from '../services/http.service';

export const LoadingInterceptor: HttpInterceptorFn = (req, next) => {
  const httpService = inject(HttpService);
  httpService.setLoading(true);
  // console.log('*******show**********');

  return next(req).pipe(
    finalize(() => {
      // console.log('********hide************');
      httpService.setLoading(false);
    })
  );
};

export const ErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: any) => {
      //decide how to treat error
      if ([400].indexOf(err.status) !== -1) {
        // router.navigate(['/home/error']);
      }
      if ([401].indexOf(err.status) !== -1) {
        // router.navigate(['/home/access']);
        // authService.signOut();
      }
      if ([403].indexOf(err.status) !== -1) {
        //  403 Forbidden response returned from api
        // authService.signOut();
      }
      if ([404].indexOf(err.status) !== -1) {
        // router.navigate(['/home/notfound']);
      }
      if ([500].indexOf(err.status) !== -1) {
        // router.navigate(['/home/server']);
      }

      const error = err.error;
      return throwError(() => error);
    })
  );
};

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req);
};
