// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  CURRENT_VERSION: "0.20.25",
  hostingName: "MCoC Library",
  icon: "pulse",
  init_page: "heroes", 
  firebase: {
    apiKey: "AIzaSyA31kEoKrz0R4AkwyFJTq95ayH-qeBzPBY",
    authDomain: "mcoc-lib.firebaseapp.com",
    databaseURL: "https://mcoc-lib.firebaseio.com",
    projectId: "mcoc-lib",
    storageBucket: "mcoc-lib.appspot.com",
    messagingSenderId: "755579088753",
    appId: "1:755579088753:web:5d90dfd8bdd2e2f41250d0",
    measurementId: "G-9HBZ29D6G3"
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
