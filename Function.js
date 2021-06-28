// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkMEYcNrIQ_xettYo5nVYFNbDVBkg2VKo",
  authDomain: "advikaapp-b364f.firebaseapp.com",
  databaseURL: "https://advikaapp-b364f.firebaseio.com",
  projectId: "advikaapp-b364f",
  storageBucket: "advikaapp-b364f.appspot.com",
  messagingSenderId: "296391529154",
  appId: "1:296391529154:web:99823191bf6c744643215b"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
  window.location = "Kwitter_room.html";
    username = document.getElementById("user_name").value;
    firebase.database().ref("/").child(username).update({ purpose: "addingUser" });
    localStorage.setItem("UserName", username);
}