$(document).ready(function() {
    var countryNames = ["france", "italy", "egypt", "ethiopia", "south africa", "turkey", "us", "england", "germany", "greece", "mexico", "india", "jordan", "morocco", "spain", "brazil", "ecuador"];
    const maxGuess = 10;
    var pauseGame = false;
    var guessedLetters = [];
    var guessedWord = [];
    var wordMatch = "";
    var numOfGuess = "";
    var wins = 0;

    resetGame();

    // Wait for key press
    document.onkeypress = function(event) {
        // Make sure key pressed is an alpha character

        if (isAlpha(event.key) && !pauseGame) {
            checkForLetter(event.key.toUpperCase());
        }
    }


    // Check if letter is in word & process
    function checkForLetter(letter) {

        var foundLetter = false;

        // Search string for letter

        for (var i = 0, j = wordMatch.length; i < j; i++) {

            if (letter.toLowerCase() === wordMatch[i]) {

                guessedWord[i] = letter;
                foundLetter = true;

                // If guessing word matches random word
                if (guessedWord.join("").toLowerCase() === wordMatch) {
                    // Increment # of wins
                    wins++;
                    pauseGame = true;
                    updateDisplay();
                    setTimeout(resetGame, 5000);
                }
            }
        }

        if (!foundLetter) {


            // Check if inccorrect guess is already on the list
            if (!guessedLetters.includes(letter)) {
                // Add incorrect letter to guessed letter list
                guessedLetters.push(letter)
                    // Decrement the number of remaining guesses
                numOfGuess--;
            }
            if (numOfGuess === 0) {

                // Display the answer/word before reseting game
                guessedWord = wordMatch.split()
                pauseGame = true;
                setTimeout(resetGame, 5000)
            }
        }

        updateDisplay()

    }
    // Check in keypressed is between A-Z or a-z
    function isAlpha(ch) {
        return /^[A-Z]$/i.test(ch);
    }

    function resetGame() {
        numOfGuess = maxGuess;
        pauseGame = false;

        // Get a new word
        wordMatch = countryNames[Math.floor(Math.random() * countryNames.length)]

        // Reset word arrays
        guessedLetters = []
        guessedWord = []

        // Reset the guessed word
        for (var i = 0, j = wordMatch.length; i < j; i++) {
            // Put a space instead of an underscore between multi word "words"
            if (wordMatch[i] === " ") {
                guessedWord.push(" ")
            } else {
                guessedWord.push("_")
            }
        }
        // Update the Display
        updateDisplay();
    }

    function updateDisplay() {
        document.getElementById("totalWins").innerText = wins;
        document.getElementById("currentWord").innerText = guessedWord.join("").toLowerCase();
        document.getElementById("guessesLeft").innerText = numOfGuess;
        document.getElementById("guessedLetters").innerText = guessedLetters.join(" ");
    }

});