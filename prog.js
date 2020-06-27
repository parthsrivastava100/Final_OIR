new Vue({
    el:'#prog',
    data() {
      return {     
        arr:[],
        brr:[],
        crr:[]    
      }
    },
    mounted() {
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
          thiss=this;
          var db = firebase.firestore();
          db.collection('OIR-STUDENTS').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                var a=(doc.data().title);
                var b=(doc.data().content);
                var t=false;
               var ou={a,b,t};
     
                thiss.arr.push(ou);
            })
          })
          db.collection('OIR-2').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                var c=(doc.data().title);
                var d=(doc.data().content);
                var e=(doc.data().deadline);
                var t=false;
               var bu={c,d,e,t};
              
                thiss.brr.push(bu);
            })
          })
          db.collection('cov').get().then(function(querySnapshot){
            querySnapshot.forEach(function(doc){
                var c=(doc.data().title);
                var d=(doc.data().description);
                var e=(doc.data().deadline);
                var t=false;
               var bu={c,d,e,t};
              
                thiss.crr.push(bu);
            })
          })
    }
})