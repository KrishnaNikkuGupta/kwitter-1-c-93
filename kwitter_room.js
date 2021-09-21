
const firebaseConfig = {
      apiKey: "AIzaSyCb0iNHYVOYRgI8vbuDlP2rlS55KquOlZI",
      authDomain: "kwitter-bffad.firebaseapp.com",
      databaseURL: "https://kwitter-bffad-default-rtdb.firebaseio.com",
      projectId: "kwitter-bffad",
      storageBucket: "kwitter-bffad.appspot.com",
      messagingSenderId: "1068152045207",
      appId: "1:1068152045207:web:e33fd75bcb0832a8f5f3d2"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
