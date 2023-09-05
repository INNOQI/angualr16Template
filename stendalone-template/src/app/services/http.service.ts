import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ErrorObject,
  Lawyer,
  EmbeddingRequest,
} from '../helpers/types';
// import { API_URL } from '../helpers/constants';
import {
  BehaviorSubject,
  Observable,
  filter,
  lastValueFrom,
  take,
  tap,
} from 'rxjs';
import { ConnectionService } from 'ng-connection-service';
import { environment, API_URL } from 'src/environments/environment';
import { Router, RouterEvent, Event } from '@angular/router';
// import { USER_STORAGE_KEY } from '../helpers/constants';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  isClickRegBtn: boolean = false;
  internetConnectionStatus$ = new BehaviorSubject<boolean>(true);
  alert$ = new BehaviorSubject<string>('');
  loading$ = new BehaviorSubject<boolean>(false);
  previousUrl$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  currentUrl$: BehaviorSubject<string> = new BehaviorSubject<string>('');
 
  constructor(
    private router: Router,
    private http: HttpClient,
    private connectionService: ConnectionService
  ) {
    this.connectionService.monitor().subscribe((isConnected) => {
      if (!isConnected.hasInternetAccess) {
        if (this.internetConnectionStatus$.getValue()) {
        }
      } else {
        if (!this.internetConnectionStatus$.getValue()) {
          this.internetConnectionStatus$.next(true);
        }
      }
    });

    router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent))
      .subscribe((e: RouterEvent) => {
        const currentUrlSubject = this.currentUrl$.getValue();
        if (currentUrlSubject !== e.url) {
          this.previousUrl$.next(currentUrlSubject);
          this.currentUrl$.next(e.url);
        }
      });
  }

  getLawyers(): Promise<Lawyer[]> {
    console.log('all-lawyers');

    return lastValueFrom(this.http.get<Lawyer[]>(`${API_URL}/lawyers`));
  }

  setLoading(show: boolean) {
    this.loading$.next(show);
  }

  setAlert(message: string) {
    this.alert$.next(message);
  }

  sendError(err: ErrorObject) {}
}
