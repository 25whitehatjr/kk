
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBK5lbEp4r-UgQP8TZRenAVjWuFwiBY9JI",
      authDomain: "kwitter-app-bd589.firebaseapp.com",
      databaseURL: "https://kwitter-app-bd589-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-bd589",
      storageBucket: "kwitter-app-bd589.appspot.com",
      messagingSenderId: "628948367112",
      appId: "1:628948367112:web:cebd7071aac0f9ffc01ebd"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name")

      document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

      function addRoom(){
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose: "adding room names"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
      }
function getData()
 {firebase.database().ref("/").on('value', function(snapshot)
  {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class= 'room_name' id=" + Room_names + "onclick= 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
