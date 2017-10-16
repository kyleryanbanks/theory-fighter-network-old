// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyBOvDsfawM4naBU7-ZepVbY_jOf42CA9sY',
    authDomain: 'theoryfighternetwork-test.firebaseapp.com',
    databaseURL: 'https://theoryfighternetwork-test.firebaseio.com',
    projectId: 'theoryfighternetwork-test',
    storageBucket: 'theoryfighternetwork-test.appspot.com',
    messagingSenderId: '572871523153'
  }
}
