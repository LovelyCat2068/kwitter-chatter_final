function logout_button(){
    window.location = "index.html";
  
    localStorage.removeItem("UserName");
    localStorage.removeItem("roomName");
  }

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

var user_name = localStorage.getItem("UserName");
var room_name = localStorage.getItem("roomName");

function send(){
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });
  document.getElementById("msg").value = "";
}