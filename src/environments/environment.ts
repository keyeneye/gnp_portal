export const environment = {
  production: false,
  baseUrl: 'https://us-central1-gnp-soycliente.cloudfunctions.net',
  validadorNeored: 'https://api-qa.oscp.gnp.com.mx/medios-contacto',

  firebaseConfig: {
    apiKey: 'AIzaSyDq7vs4RrQbnjvdYKcb_t4ai3gOb92jHFY',
    authDomain: 'gnp-soycliente.firebaseapp.com',
    databaseURL: 'https://gnp-soycliente.firebaseio.com',
    projectId: 'gnp-soycliente',
    storageBucket: 'gnp-soycliente.appspot.com',
    messagingSenderId: '816832734934',
    appId: '1:816832734934:web:5972fdaea6cabad44dcb77',
    measurementId: 'G-RSGT2LGEL4',
  },
};

/* Path De Los Endpoints RestAPI */
export const END_POINTS = {
  // LOGIN
  POST_VALIDATE_EMAIL: '/sesion/validarCorreo',

  // REGISTER
  GET_VALIDATE_EMAIL_FORMAT: '/validador/formato-emai',
  GET_VALIDATE_PHONE_FORMAT: '/validador/formato-telefono',
};
