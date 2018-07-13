
 console.log(firebase);
    // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkEaQ570SNaZwfeT1_qgKOURZewYfFfeE",
    authDomain: "train-schedule-130f4.firebaseapp.com",
    databaseURL: "https://train-schedule-130f4.firebaseio.com",
    projectId: "train-schedule-130f4",
    storageBucket: "train-schedule-130f4.appspot.com",
    messagingSenderId: "665918206451"
  };
  firebase.initializeApp(config);
 
	// 1. Link to Firebase
	var database = firebase.database();

	// 2. Button for adding Trains
	$("#addTrainBtn").on("click", function(){
		// when user clicks run function above 
		
		// Grab user input from html and assign to variables
		var trainName = $("#trainNameInput").val().trim();
		var lineName = $("#lineInput").val().trim();
    var destination = $("#destinationInput").val().trim();
        // First Time (pushed back 10 year to make sure it comes before current time)

		var trainTimeInput = moment($("#trainTimeInput").val().trim(), "HH:mm").subtract(10, "years").format("X");;
		var frequencyInput = $("#frequencyInput").val().trim();

		// Test for variables entered
		console.log(trainName);
		console.log(lineName);
		console.log(destination);
		console.log(trainTimeInput);
		console.log(frequencyInput);

		// Creates local "temporary" object for holding train data
		// Will push this to firebase
		var newTrain = { // = 
			name:  trainName,
			line: lineName,
			destination: destination,
			trainTime: trainTimeInput,
			frequency: frequencyInput,
		}

		// pushing trainInfo to Firebase
		database.ref().push(newTrain);

		// clear text-boxes
		$("#trainNameInput").val("");
		$("#lineInput").val("");
		$("#destinationInput").val("");
		$("#trainInput").val("");
		$("#frequencyInput").val("");

		// Prevents page from refreshing
		return false;
	});

	database.ref().on("child_added", function(childSnapshot, prevChildKey){

		console.log(childSnapshot.val());

		// assign firebase variables to snapshots.
		var firebaseName = childSnapshot.val().name;
		var firebaseLine = childSnapshot.val().line;
		var firebaseDestination = childSnapshot.val().destination;
		var firebaseTrainTimeInput = childSnapshot.val().trainTime;
		var firebaseFrequency = childSnapshot.val().frequency;
		
		var diffTime = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes");
		var timeRemainder = moment().diff(moment.unix(firebaseTrainTimeInput), "minutes") % firebaseFrequency ;
		var minutes = firebaseFrequency - timeRemainder;

		var nextTrainArrival = moment().add(minutes, "m").format("hh:mm A"); 
		
		// Test for correct times and info
		console.log(minutes);
		console.log(nextTrainArrival);
		console.log(moment().format("hh:mm A"));
		console.log(nextTrainArrival);
		console.log(moment().format("X"));

		// Append train info to table on page
		$("#trainTable > tbody").append("<tr><td>" + firebaseName + "</td><td>" + firebaseLine + "</td><td>"+ firebaseDestination + "</td><td>" + firebaseFrequency + " mins" + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");

	}); 