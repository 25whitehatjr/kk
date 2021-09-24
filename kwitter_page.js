//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name")

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = messge_data ['name'];
message = messgae_data['message']
like = message_data ['like']
name_with_tag = "<h4>" + name + "<img class = 'user_tick' src = 'tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warning id =" + firebase_message_id + "value =" + like + "onclick = 'updateLike(this_id)'>";
spam_with_tag = "<span class = 'glyphicon-thumbs-up'> Like:" + like + "</span></button></hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send(){
      message = document.getElementById("message").value
      firebase.database().ref(room_name).push({
            name: user_name,
            message1: message,
            like: 0
      })
      document.getElementById("message").value = ""
}

function updateLike (message_id)
{
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firesbase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}