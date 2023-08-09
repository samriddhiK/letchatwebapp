//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyAuN7r5gr6R9nolb_O2FxPonZRhF8sIGpI",
  authDomain: "kwitter-bb1bb.firebaseapp.com",
  databaseURL: "https://kwitter-bb1bb-default-rtdb.firebaseio.com",
  projectId: "kwitter-bb1bb",
  storageBucket: "kwitter-bb1bb.appspot.com",
  messagingSenderId: "2766210457",
  appId: "1:2766210457:web:9d6b2b6cfdfbaca581bf08",
  measurementId: "G-GY19FJ0LEJ"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
   Room_names = childKey;
   console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
});
});

}

getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

