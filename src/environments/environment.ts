// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ALERT_VISIBILITY_TIME: 2000,
  offlineError: 'No Internet Available',
  server403Error: 'You need admin access to perform this action',
  testResult404Error: 'Data not found',
  server503Error: 'We are running maintenance on our servers.Our services will be back soon. Please Contact Support at support@mindsling.com',
  server500Error: 'The request was valid but some error was encountered at our end. Please Contact Support at support@mindsling.com',
  EMAIL_REGEX: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$',
  storeNames: {
    appState: 'appState'
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
