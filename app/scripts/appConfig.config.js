(function () {
  angular
    .module('app')
    .config(['firebase', AppConfig]);

  function AppConfig (firebase) {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCmrecm2X2JzL0gk92-KL-KQDhAwCnrl38",
      authDomain: "blocitoff-a18fc.firebaseapp.com",
      databaseURL: "https://blocitoff-a18fc.firebaseio.com",
      storageBucket: "blocitoff-a18fc.appspot.com",
      messagingSenderId: "80891638944"
    };
    firebase.initializeApp(config);

  }
})();