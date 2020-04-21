//Activity 2: JavaScript Variables, Alerts, Prompts, and Conditionals:
//--------------------------------------

// 1. Grab a user input using a prompt() and store it in a variable.   
var yourName = prompt('enter your name');

//.2. Add a conditional statement where if the variable's length is greater than 4, we alert the user that their name is greater than four characters.   
function alert() {
    if (yourName > 4) {
        alert("your name is too long!");
    } else if (yourName < 4) {
        //3. Otherwise, alert that their name is less than four characters.
        alert("hey your name is too easy!");
    }
};