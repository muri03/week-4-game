$(document).ready(function() {
    // Variable created for crystals and functions
    var red = green = blue = yellow = win = lose = targetScore = yourScore = 0;
    var flagRed = flagGreen = flagBlue = flagYellow = false;

    // Displays the random number on Target Score(id on Html)
    targetScore = generateRandomNumber(12, 150);
    $("#target-score").text(targetScore);
    //event to generate random number, function generateRandomNumber is called. Also to retain such 
    // generatedRandomNumber until either at the end of the game or whenever the webpage resets.
    $('#red').on('click', function() {
        if (!flagRed) {
            red = generateRandomNumber(1, 15);
            flagRed = true;
            yourScore = yourScore + red;
            $("#your-score").text(yourScore);

        }
        // Condition that if your score matches the target score, function youWin is invoke.
        yourScore = yourScore + red;
        $("#your-score").text(yourScore);
        if (yourScore === targetScore) {
            youWin();
        }
        // Condition that if your score goes over the target score, function youLose is invoke.
        else if (yourScore > targetScore) {
            youLose();
        }
    });
    // The same conditions should apply for the rest of the crystals below.

    $('#green').on('click', function() {
        if (!flagGreen) {
            green = generateRandomNumber(1, 15);
            flagGreen = true;
            yourScore = yourScore + green;
            $("#your-score").text(yourScore);

        }
        yourScore = yourScore + green;
        $("#your-score").text(yourScore);
        if (yourScore === targetScore) {
            youWin();
        } else if (yourScore > targetScore) {
            youLose();
        }
    });
    $('#blue').on('click', function() {
        if (!flagBlue) {
            blue = generateRandomNumber(1, 15);
            flagBlue = true;
            yourScore = yourScore + blue;
            $("#your-score").text(yourScore);

        }
        yourScore = yourScore + blue;
        $("#your-score").text(yourScore);
        if (yourScore === targetScore) {
            youWin();
        } else if (yourScore > targetScore) {
            youLose();
        }
    });
    $('#yellow').on('click', function() {
        if (!flagYellow) {
            yellow = generateRandomNumber(1, 15);
            flagYellow = true;
            yourScore = yourScore + yellow;
            $("#your-score").text(yourScore);

        }
        yourScore = yourScore + yellow;
        $("#your-score").text(yourScore);
        if (yourScore === targetScore) {
            youWin();
        } else if (yourScore > targetScore) {
            youLose();
        }
    });
    // Function on picking random number
    function generateRandomNumber(min, max) {
        var temp = Math.floor(Math.random() * (max - min) + min);
        return temp;
    }
    // Function that if Your score matches target score; result is you "you win" alert and resets
    // the game.
    function youWin() {
        alert("You Win!");
        $("#win").text(++win);
        reset();
    }

    // Function that if Your score goes to the target score log; result is you "you lose" alert
    // and resets the game.
    function youLose() {
        alert("You Lose!");
        $("#lose").text(++lose);
        reset();
    }
    // Function to reset the generatedRandomNumber, yourScore, and targetScore
    // everytime the results are created.
    function reset() {
        red = green = blue = yellow = targetScore = yourScore = 0;
        flagRed = flagGreen = flagBlue = flagYellow = false;
        targetScore = generateRandomNumber(12, 150);
        $("#target-score").text(targetScore);
        $("#your-score").text(yourScore);
    }

});