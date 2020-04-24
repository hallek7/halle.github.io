// set up variables 
var countryNames = ["Mexico", "US", "Egypt", "Ethiopia", "Jordan", "Haiti", "Canada", "Morocco", "England", "South Africa"];
var totalGuesses = 8; // number of tries
var randomPick; // array number the machine choose randomly
var wordGuessed = []; // This will be the word we actually build to match the current word
var allGuesses = [];
// var wordGuess = "";
var guessLeft = 8; // How many tries the player has left
var finishedGame = false; // Flag for 'press any key to try again'     
var wins = 0; // # of wins
var losses = 0; //# of losses

//
function refreshScreen() {
    document.getElementById("gameWins").innerHTML = wins;
    document.getElementById("gameLosses").innerHTML = losses;
    //whatever word user enters 

    var guessedWordTxt = ""; // users guess 
    for (var i = 0; i < guessedWordTxt.length; i++) {
        // if  user picks the right letter 
        wordGuess += wordGuessed[i];
    }

    //update guesses, word, and letters entered
    document.getElementById("currentWord").innerHTML = wordGuessed.join('');
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("userGuess").innerHTML = allGuesses.join(' , ');
};

function restartGame() {
    countryNames = ["Mexico", "US", "Egypt", "Ethiopia", "Jordan", "Haiti", "Canada", "Morocco", "England", "South Africa"];
    totalGuesses = 8; // number of tries
    // var userGuess = []; // letters the user guessed
    wordGuessed = []; // This will be the word we actually build to match the current word
    allGuesses = [];
    // var wordGuess = "";
    guessLeft = 8; // How many tries the player has left
    finishedGame = false; // Flag for 'press any key to try again'   
    startGame()

}
// start the game
function startGame() {
    // $(document).keypress(function(event) {

    //     refreshScreen();
    //})
    function makeGuess(letter) {

        var actual = countryNames[randomPick]
        var result = wordGuessed
        var foundLetter = false;

        if (allGuesses.includes(letter)) {
            return
        } else {
            allGuesses.push(letter)
        }

        for (var i = 0; i < actual.length; i++) {
            if (event.key.toLowerCase() === actual[i].toLowerCase()) {
                foundLetter = true
                if (i === 0) {

                    result[i] = event.key.toUpperCase()
                } else {
                    result[i] = event.key.toLowerCase()
                }
            }
        }

        if (!foundLetter) {
            if (guessLeft === 0) {
                restartGame()
            } else {
                guessLeft--;

            }
        }



    }


    guessLeft = totalGuesses;
    //take  random number from country  array
    randomPick = Math.floor(Math.random() * (countryNames.length));


    //query the table data images 
    if (countryNames[randomPick] == countryNames[0]) {
        $('.hint').html("<img src='./assets/images/SoCal.jpg' width='300'/>");

    } else if (countryNames[randomPick] == countryNames[1]) {
        $('.hint').html("<img src='./assets/images/hiWay.jpg' width='300'/>");

    } else if (countryNames[randomPick] == countryNames[2]) {
        $('.hint').html("<img src='./assets/images/LA.jpg' width='300'/>");

    } else if (countryNames[randomPick] == countryNames[3]) {
        $('.hint').html("<img src='./assets/images/car.jpg' width='300'/>");
    } else if (countryNames[randomPick] == countryNames[4]) {
        $('.hint').html("<img src='./assets/images/sky.jpg' width='300'/>")

    } else if (countryNames[randomPick] == countryNames[5]) {
        $('.hint').html("<img src='./assets/images/utah.jpg' width='300'/>");

    } else if (countryNames[randomPick] == countryNames[6]) {
        $('.hint').html("<img src='./assets/images/house.jpg' width='300'/>");

    } else if (countryNames[randomPick] == countryNames[7]) {
        $('.hint').html("<img src='./assets/images/egypt.jpg' width='300'/>");
    } else if (countryNames[randomPick] == countryNames[8]) {
        $('.hint').html("<img src='./assets/images/shore.jpg' width='300'/>");

    } else if (countryNames[randomPick] == countryNames[9]) {
        $('.hint').html("<img src='./assets/images/homes.jpg' width='300'/>");

    } else {
        $('.hint').text('None of The Above');
    }

    // Clear out arrays
    userGuess = [];
    wordGuessed = [];


    //  Update and display on the HTML Page using 2nd function 

    //build the word with blanks
    for (var i = 0; i < countryNames[randomPick].length; i++) {
        wordGuessed.push("_"); // prints guessed words  from DOM
        //grab id from DOM, winner,loser and title pressKeyToRetry
        document.getElementById("pressKeyToRetry").style.cssText = "display:none";
        document.getElementById("loser").style.cssText = "display:none";
        document.getElementById("winner").style.cssText = "display:none";
        // refresh  the current page
        refreshScreen();
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

    //check if all letters have been entered.

    function checkWin() {

        if (wordGuessed.indexOf("_") == -1) {
            // if guessed word is corrrect then 
            document.getElementById("winner").style.cssText = "display:block";
            document.getElementById("pressKeyToRetry").style.cssText = "display:block";
            wins++; // increment towards the end of the word 

            $('.hint').text('You Won!!!')
                // wins++;
            finishedGame = true; // and user wins 
        }
    };

    //check if the user is out of guesses
    function checkLoss() {
        if (guessLeft <= 0) {
            document.getElementById("loser").style.cssText = "display:block";
            document.getElementById("pressKeyToRetry").style.cssText = "display:block";
            $('.hint').text('None of The Above')
            losses++;
            finishedGame = true;

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
                // keySound.play();
                makeGuess(event.key.toUpperCase());
                refreshScreen();
                checkWin();
                checkLoss();
            }
        }
    };
}; //close main function