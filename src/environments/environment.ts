// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAbSHzrH80mQGyMx77N2wYTKUn9eEMO1w0',
    authDomain: 'npc-galore.firebaseapp.com',
    databaseURL: 'https://npc-galore.firebaseio.com',
    projectId: 'npc-galore',
    storageBucket: 'npc-galore.appspot.com',
    messagingSenderId: '598700832051'
  }
};
