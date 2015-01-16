


function numberGame() {

	confirm("Let's play a game. You need to guess a number between 1 and 10.")
	

	var win = false;
	var score = 0;

	do {
			console.log(score);
			var generatedNumber = Math.ceil(Math.random() * 100);
			console.log(generatedNumber);
			win = false;
			var number = prompt("Now try and guess the number I've picked! I'll tell you if your too low or too high or correct!");
			var loopCount = 1;

			if (isNaN(number)) {
				console.log(number);
				throw "You did not enter a number";
			}

		do {

			if (number == generatedNumber) {
				confirm("You guessed right! Yaaaaaaay");
				win = true;
				score++;
			}
			else if (number > generatedNumber) {
				confirm("Too high!");
				loopCount++;
				number = prompt("Guess again");
			}
			else {
				confirm("Too low!");
				loopCount++;
				number = prompt("Guess again");
			}
			if(loopCount == 1){
				score = 1000;
			}

		} while (win !== true);

	} while (confirm("Would you like to play again?"));

	return score;
}




$( document ).ready(function() {

	$('#score-box').append(numberGame());
	
});