function fn1()
{
    var firebaseConfig = {
        apiKey: "AIzaSyB-j1oCi8sCDQxozidb3UwKjdPlX4PCMhA",
        authDomain: "oir-iitk.firebaseapp.com",
        databaseURL: "https://oir-iitk.firebaseio.com",
        projectId: "oir-iitk",
        storageBucket: "oir-iitk.appspot.com",
        messagingSenderId: "465941261513",
        appId: "1:465941261513:web:37a025ef4f40dd27f2f118",
        measurementId: "G-HKKQKTPJ2R"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
var fname=document.getElementById("fname").value;
var lname=document.getElementById("lname").value;
var phone=document.getElementById("phone").value;
var email=document.getElementById("email").value;
var sub=document.getElementById("sub").value;
var mess=document.getElementById("mess").value;
var db = firebase.firestore();
db.collection("messages").doc(String(fname+" "+lname)).collection("mails").doc().set({

    name:fname+" "+lname,
    email:email,
    phone:phone,
    subject:sub,
    message:mess,
})
.then(function(){
    console.log("Data written successfully");
})
.catch(function(error){
    console.log(error);
}); 

var bd={
name:fname+" "+lname,
email:email,
phone:phone,
sub:sub,
mess:mess
};
ur=`https://us-central1-mailer-64d8d.cloudfunctions.net/sendMail5?fname=${fname}&lname=${lname}&phone=${phone}&sub=${sub}&mess=${mess}`;

fetch(ur)
.then((response) => {
  alert('Email Sent');
})
.catch((error) => {
  alert('Error');
})

}