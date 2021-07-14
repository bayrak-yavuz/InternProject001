// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { APP_ID } from "@angular/core";

export const environment = {
  production: false,
  appID: 'InternProject001',
  firebaseConfig: {
    apiKey: 'AIzaSyCXrPdi82KVwzh7VyNX1QazufiAa_K6F9c',
    authDomain: 'internproject001.firebaseapp.com',
    projectId: 'internproject001',
    storageBucket: 'internproject001.appspot.com',
    messagingSenderId: '946828851723',
    appId: '1:946828851723:web:2db268b19fe11deaaf250e',    
    measurementId: 'G-FB8H5VSX9K'
  }
};

   

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
