// import * as firebase from 'firebase';
import app from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: "1:697591076278:web:f5f3076097b1c051c05d17",
    measurementId: "G-W22G4WR464"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
    }}
  export default Firebase;