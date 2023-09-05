// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.

import { ProductionMode } from 'src/app/helpers/constants';

// The list of file replacements can be found in `angular.json`.
export const environment = {
  production: false,
};
// export const API_URL = 'http://localhost:5000/api';
export const API_URL = ProductionMode
  ? // ? 'https://takdinapi.2bebalance.com/api'
    'http://34.165.93.43/api'
  : 'http://localhost:5000/api'; // -production
