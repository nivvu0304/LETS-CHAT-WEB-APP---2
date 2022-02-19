var firebaseConfig = {
  apiKey: "AIzaSyAd_MhHWlNd5Dv0DICdo1WS14lTEAcRsZw",
  authDomain: "letschatwebapp-8f35c.firebaseapp.com",
  databaseURL: "https://letschatwebapp-8f35c-default-rtdb.firebaseio.com",
  projectId: "letschatwebapp-8f35c",
  storageBucket: "letschatwebapp-8f35c.appspot.com",
  messagingSenderId: "598567942221",
  appId: "1:598567942221:web:e33c23816b5ade07e2c404"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome to FastChat, " + user_name + "!";

  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem('room_name', name);
window.location = "page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html"
}
