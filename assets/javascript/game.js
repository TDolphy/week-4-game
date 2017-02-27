


$(document).ready(function(){

//Start with declaring global variables to be used such as wins, 
//losses, current score
// Generate the numbers
	var goalScore = Math.floor((Math.random() * 102) + 19);
	var crystal1 = Math.floor((Math.random() * 12) + 1);
	var crystal2 = Math.floor((Math.random() * 12) + 1);
	var crystal3 = Math.floor((Math.random() * 12) + 1);
	var crystal4 = Math.floor((Math.random() * 12) + 1);
	
	var losses = 0;
	var wins = 0;
	var playerScore = 0;
	var winStreak = 0;


	$("#goalScore").html("The winning total is: " + goalScore);

	$("#losses").html("Number of losses: " + losses);

	$("#wins").html("Number of wins: " + wins);

	$("#crystal1").click(function(){
		newScore(crystal1);
	})

	$("#crystal2").click(function(){
		newScore(crystal2);
	})

	$("#crystal3").click(function(){
		newScore(crystal3);
	})

	$("#crystal4").click(function(){
		newScore(crystal4);
	})

// function to reset all values (restart game)
	function reset(){
		goalScore = Math.floor((Math.random() * 102) + 19);
		$("#goalScore").html("The winning total is: " + goalScore);
		crystal1 = Math.floor((Math.random() * 12) + 1);
		crystal2 = Math.floor((Math.random() * 12) + 1);
		crystal3 = Math.floor((Math.random() * 12) + 1);
		crystal4 = Math.floor((Math.random() * 12) + 1);
		playerScore = 0;
		$("#currentScore").html("Your current total is: " + playerScore);
	}

// function to add score to total and check if game won/lost
	function newScore(crystal){
		playerScore += crystal;
		$("#currentScore").empty();
		$("#currentScore").append("Your current total is: " + playerScore);

		if (playerScore > goalScore){
			losses++;
			$("#losses").html("Number of losses: " + losses);
			alert("You've lost!");
			reset();
		}
		else if (playerScore === goalScore){
			wins++;
			$("#wins").html("Number of wins: " + wins);
			alert("You've won!");
			reset();
		}
	}

})
