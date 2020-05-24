 async function fn1(){
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
      var db = firebase.firestore();
      
   try{
     const head=[];
     const body=[];
     var k=0;
     const querySnapshot=await db.collection('OIR-STUDENTS').get();
     querySnapshot.forEach(function(doc){
       head[k]=doc.data().title;
       body[k]=doc.data().content;
       k++;
     });
     const content={head,body};
     return content;
   }
   catch(err)
   {
     console.log(err);
   }
    }