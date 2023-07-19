//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyByXiCAdP1HMJ61wl1cnxrKJBNNQwTp-E4",
      authDomain: "kwitter-9ddf7.firebaseapp.com",
      databaseURL: "https://kwitter-9ddf7-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ddf7",
      storageBucket: "kwitter-9ddf7.appspot.com",
      messagingSenderId: "435458200503",
      appId: "1:435458200503:web:6d2e93ecfdd6988f760e32"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  });

  document.getElementById("msg").value = "";
}