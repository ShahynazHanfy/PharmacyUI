// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  
  Drug: 'http://localhost:51563/api/drugs/',
  Thera: 'http://localhost:51563/api/drugs/thera',
  TheraSub: 'http://localhost:51563/api/drugs/therasub',
  Forms: 'http://localhost:51563/api/drugs/forms',
  Firm: 'http://localhost:51563/api/drugs/firms',
  Unit: 'http://localhost:51563/api/drugs/unit',
  ROAD: 'http://localhost:51563/api/drugs/ROAD',
  Country: 'http://localhost:51563/api/drugs/country',
  therasubBYgroup: 'http://localhost:51563/api/drugs/therasubBYgroup/',
  category:'http://localhost:51563/api/Categories/', 
  login:'http://localhost:51563/api/AuthenticateController',
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
