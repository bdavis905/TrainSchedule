//Firebase configuration
var config = {
    apiKey: "AIzaSyBdL4z09_D3ycnwoUhnjLFYNQ52gB2MNcQ",
    authDomain: "trainschedule-2b2d8.firebaseapp.com",
    databaseURL: "https://trainschedule-2b2d8.firebaseio.com",
    projectId: "trainschedule-2b2d8",
    storageBucket: "trainschedule-2b2d8.appspot.com",
    messagingSenderId: "374546864151"
  };

  firebase.initializeApp(config);
  //test database connectivity with test
  firebase.database().ref().on("value", function(snapshot){
  	console.log(snapshot.val());
  })

  //variables

  var database = firebase.database();
  //var trainName = "";
  //var destination = "";
  //var firstTrainTime = 0;
  //var frequency = 0;



  //functions

  //$("#submit-bid").on("click", function(event) {
  //event.preventDefault();

  $("#add-train").on("click", function(event) {
  	
  	event.preventDefault();
  	alert("hey");

  	//var trainName = $("#trainInput").val().trim();
  	//var destination = $("#destinationInput").val().trim();
  	//var firstTrainTime = parseInt($("#firstTrainTimeInput").val().trim());
  	//var frequency = parseInt($("#frequencyInput").val().trim());

  	//console.log(trainName);
  	//console.log(destination);
  	//console.log(firstTrainTime);
  	//console.log(frequency);


  	//firebase.database().ref().push({
  	//	trainName:trainName,
  	//	destination:destination,
  	//	firstTrainTime:firstTrainTime,
  	//	frequency:frequency
  	//});
  });


  //Main Process


  //dubugging and exceptions