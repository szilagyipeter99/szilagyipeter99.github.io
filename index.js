(function() {
  var firebaseConfig = {
    apiKey: "AIzaSyA1IPZNERth-9khmAFA6rs1gWTEfRmO-9o",
    authDomain: "anzsa-16db0.firebaseapp.com",
    databaseURL: "https://anzsa-16db0.firebaseio.com",
    projectId: "anzsa-16db0",
    storageBucket: "anzsa-16db0.appspot.com",
    messagingSenderId: "852891616306",
    appId: "1:852891616306:web:8ae9d4661c2e0b6a3e282b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
})();

const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

const auth = firebase.auth();
const database = firebase.database();

var email;
var password;

okBtn.addEventListener('click', e => {
  email = emailField.value;
  password = passwordField.value;
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('Sikeres belépés');
      $('#exampleModal').modal('toggle');
    })
    .catch(error => {
      console.error(error);
      $("#hibasadat").css("visibility", "visible");
    })
});


var quests = [];
var corrects = [];
var as = [];
var bs = [];
var cs = [];
var ds = [];
var es = [];


function go() {
  database.ref('/').once("value").then(function(snapshot) {
    var theKey = (snapshot.val() && snapshot.val().questions) || 'Anonymous';
    document.getElementById("kerdesekdiv").innerHTML = "";
    for (x in theKey) {

      database.ref('/questions/' + x).once("value").then(function(snapshot) {
        var szöveg = (snapshot.val() && snapshot.val().szöveg) || 'Anonymous';
        quests.push(szöveg);
      });

      database.ref('/questions/' + x).once("value").then(function(snapshot) {
        var corr = (snapshot.val() && snapshot.val().corr) || 'Anonymous';
        corrs.push(szöveg);
      });

      database.ref('/questions/' + x).once("value").then(function(snapshot) {
        var A = (snapshot.val() && snapshot.val().A) || 'Anonymous';
        as.push(A);
      });

      database.ref('/questions/' + x).once("value").then(function(snapshot) {
        var B = (snapshot.val() && snapshot.val().B) || 'Anonymous';
        bs.push(B);
      });

      database.ref('/questions/' + x).once("value").then(function(snapshot) {
        var C = (snapshot.val() && snapshot.val().C) || 'Anonymous';
        cs.push(C);
      });

      database.ref('/questions/' + x).once("value").then(function(snapshot) {
        var D = (snapshot.val() && snapshot.val().D) || 'Anonymous';
        ds.push(D);
      });

      database.ref('/questions/' + x).once("value").then(function(snapshot) {
        var E = (snapshot.val() && snapshot.val().E) || 'Anonymous';
        es.push(E);
      });

    }
    console.log(quests);
    console.log(cs);
  });
}
