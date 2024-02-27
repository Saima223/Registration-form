//<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    authDomain: "fir-integration-2dfea.firebaseapp.com",
    projectId: "fir-integration-2dfea",
    storageBucket: "fir-integration-2dfea.appspot.com",
    messagingSenderId: "162698129212",
    appId: "1:162698129212:web:645628933281b3c47f3839"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //get ref to database services
  const db = getDatabase(app);

  document.getElementById("submit").addEventListener('click', function(e){
   e.preventDefault();
   set(ref(db, 'user/' + document.getElementById("username").value),
   {

     username: document.getElementById("username").value,
     email: document.getElementById("email").value,
     password: document.getElementById("pass").value,
     ConfirmPassword: document.getElementById("conpass").value

   });
     alert("Login Sucessfull  !");
  })
//</script>