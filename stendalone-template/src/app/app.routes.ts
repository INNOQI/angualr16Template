import { Routes } from '@angular/router';
import { inject } from '@angular/core';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [
  {
    path: 'app',
    component: MainComponent,
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full',
  },
];

