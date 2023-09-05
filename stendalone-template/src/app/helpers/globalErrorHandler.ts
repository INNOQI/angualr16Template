import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { ErrorObject } from './types';
import { HttpService } from '../services/http.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  currentUrl: string = '';

  constructor(private httpService: HttpService) {
    this.httpService.currentUrl$.subscribe(async (currentUrl: string) => {
      this.currentUrl = currentUrl;
    });
  }

  handleError(error: Error): void {
    const errorObject: ErrorObject = {
      error: error,
      url: this.currentUrl,
    };
    console.log(errorObject);
    this.httpService.setAlert(error.message);
    this.httpService.sendError(errorObject);
  }
}
