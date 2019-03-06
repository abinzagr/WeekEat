  // Initialize Firebase
  import * as firebase from "firebase";
  const config = {
    apiKey: "AIzaSyAi9iu19icyEGqqfWN8rNf_MHO-cZug2RQ",
    authDomain: "weekeat-c681a.firebaseapp.com",
    databaseURL: "https://weekeat-c681a.firebaseio.com",
    projectId: "weekeat-c681a",
    storageBucket: "weekeat-c681a.appspot.com",
    messagingSenderId: "816326724543"
  };
  

  const fire =firebase.initializeApp(config);
  export default fire;