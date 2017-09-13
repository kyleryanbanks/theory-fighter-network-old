// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  /* Firebase Config */
  firebase: {
    apiKey: 'AIzaSyBE4l_CwpQy1w1m-9i9bMd8_UhH5nYK9RE',
    authDomain: 'theoryfighternetwork.firebaseapp.com',
    databaseURL: 'https://theoryfighternetwork.firebaseio.com',
    projectId: 'theoryfighternetwork',
    storageBucket: 'theoryfighternetwork.appspot.com',
    messagingSenderId: '596030064632'
  }
}
