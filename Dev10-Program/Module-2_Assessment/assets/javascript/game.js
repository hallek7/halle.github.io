var countryNames = ["Mexico", "US", "Egypt", "Ethiopia", "Jordan", "Haiti", "Canada", "Morocco", "England", "South Africa"];
var totalGuesses = 8; // number of tries
var userGuess = []; // letters the user guessed
var randomPick; // array number the machine choose randomly
var wordGuessed = []; // This will be the word we actually build to match the current word
var guessLeft = 0; // How many tries the player has left
var finishedGame = false; // Flag for 'press any key to try again'     
var wins = 0; // # of wins
var losses = 0; //# of losses


// start the game
function startGame() {
    guessLeft = totalGuesses;
    //take  random number from countries  array
    randomPick = Math.floor(Math.random() * (countryNames.length));
    mc0+
    0
    //query the table data images 
    if (countryNames[randomPick] == countryNames[0]) {
        $('.hint').html("<img src='../images/SoCal.jpg' width='300'/>");

    } else if (countryNames[randomPick] == countryNames[1]) {

    }
    if (countryNames[randomPick] == countryNames[2]) {
        $('.hint').html("<img src='../images/bike.jpg' width='300'/>");

    } else if (countryNames[randomPick] == countryNames[3]) {

    }
    if (countryNames[randomPick] == countryNames[4]) {
        $('.hint').html("<img src='../images/hiWay.jpg' width='300'/>");

    } else if (countryNames[randomPick] == countryNames[5]) {

    }
    if (countryNames[randomPick] == countryNames[6]) {
        $('.hint').html("<img src='../images/house.jpg' width='300'/>");
        //query the table data images 

    } else if (countryNames[randomPick] == countryNames[7]) {

    }
    if (countryNames[randomPick] == countryNames[8]) {
        $('.hint').html("<img src='../images/city.jpg' width='300'/>");

    } else if (countryNames[randomPick] == countryNames[9]) {

    } else($('.hint').text('None of The Above'));

    // Clear out arrays
    userGuess = [];
    wordGuessed = [];

    //build the word with blanks
    for (var i = 0; i < countryNames[randomPick].length; i++) {
        wordGuessed.push("_"); // prints guessed words  from DOM
        //grab id from DOM, winner,loser and title pressKeyToRetry
        document.getElmentById("pressKeyToRetry").style.cssText = "display:none";
        document.getElmentById("loser").style.cssText = "display:none";
        document.getElmentById("winner").style.cssText = "display:none";
        // refresh  the current page
        refreshScreen();
    };

    //  Update and display on the HTML Page using 2nd function 
    function refreshScreen() {
        document.getElementById("gamewins").innerHTML = wins;
        document.getElementById("gameLosses").innerHTML = losses;
        //whatever word user enters 
        var wordGuss = ""; // users guess 
        for (var i = 0; i < wordGuessed.length; i++) {
            // if  user picks the right letter 
            wordGuss += wordGuessed[i];
        }

        //update guesses, word, and letters entered
        document.getElementById("currentWord").innerHTML = wordGuss;
        document.getElementById("guessLeft").innerHTML = guessLeft;
        document.getElementById("userGuess").innerHTML = userGuess;
    };

    //compare letters entered to the word being guessed 
    function evaluateGuess(letter) {
        var position = [];
        for (var i = 0; i < countryNames[randomPick].length; i++);
        if (countryNames[randomPick][i] === letter) {
            position.push(i)

        }
        // when user reached max guess letter decrement 
        if (position <= 0) {
            guessLeft--;

        } else {
            for (var i = 0; i < position.length; i++) {
                wordGuessed[position[i]] = letter;
            }
        }
    };
    console.log(123)
        //check if all letters have been entered.

    function checkWins() {
        if (wordGuesse.indexOf("_") == -1) {
            // if guessed word is corrrect then 
            document.getElementById("winner").style.cssText = "display:block";
            document.getElementById("pressKeyToRetry").style.cssText = "display:block";
            wins++; // increment towards the end of the word 
            finishedGame = true; // and user wins 
        }
    };

    //check if the user is out of guesses
    function checkLoss() {
        if (guessLeft <= 0) {
            document.getElementById("loser").style.cssText = "display:block";
            document.getElementById("pressKeyToRetry").style.cssText = "display:block";
            losses++;
            finishedGame = true;

        }
    };

    // make guesses
    function makeGuesses(letter) {
        if (guessLeft > 0) {
            // check if the letter has been used before 
            if (userGuess.indexOf(letter) === -1) {
                // print user guess 
                userGuess.push(letter);
                evaluateGuess(letter);
            }

        }
    };
    // Event listener when user hits a key 
    document.onkeydown = function(event) {
        //if the game is finished, restart it.
        if (finishedGame) {
            restartGame();
            finishedGame = false;
        } else // Check to make sure a-z was pressed.
        {
            if (event.keyCode >= 65 && event.keyCode < 90) {
                keySound.play();
                makeGuess(event.key.toUpperCase());
                refreshScreen();
                checkWin();
                checkLoss();
            }
        }
    };


}; //close main function