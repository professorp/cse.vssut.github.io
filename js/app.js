

 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDdP1PLU-5clc-6W5xoKxXDBXJXN5b1t0c",
    authDomain: "csewebsite-bb32e.firebaseapp.com",
    databaseURL: "https://csewebsite-bb32e.firebaseio.com",
    projectId: "csewebsite-bb32e",
    storageBucket: "csewebsite-bb32e.appspot.com",
    messagingSenderId: "259102024545"
  };
  firebase.initializeApp(config);
    
     // Get a reference to the database service
 
 var database = firebase.database();
 var ref = database.ref('news');
 
  //firebase.database().ref('news/').on('value',function(snapshot) {
         //   snapshot.forEach(function(snapshot) {
                      
                 
              //   var childData = snapshot.val();   
               //  var keys = Object.keys('news');
                    
    // for (var i = 0 ; i < keys.length; i++) {
            
        //var k = keys[i];
          
  //  var name_val = snapshot.val().Head;
  //   console.log(name_val);
  //  var id_val =  snapshot.val().Body;
  //  console.log(id_val);
     
   
    
    // });
           
//});
ref.on('value',getdata);
function getdata(data) {
    var news = data.val();
    var keys = Object.keys(news);
    
    for (var i = 0 ; i < keys.length; i++) {
            
        var k = keys[i];
 
       
        var Head = news[k].Head;
        var Body = news[k].Body;
        var Date = news[k].Date;
        
        var x = 'head' + i;
        var y = 'text' + i;
        var z = 'dat' + i;
        
          document.getElementById(x).innerHTML = Body;
         document.getElementById(y).innerHTML = Head;
         document.getElementById(z).innerHTML = Date;
       
                

} 
}