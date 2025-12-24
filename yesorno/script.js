


let questions = 1;


function start() {
	document.getElementById("question").textContent = "Are you playing the game Yes or No?";
}

function nextquestion() {
	questions += 1;
	if (questions > 1){document.getElementById("question").textContent = "Is your mom at home?";}
	if (questions > 2){document.getElementById("question").textContent = "Will you gonna mess up the house?"}
	if (questions > 3){document.getElementById("question").textContent = "Are you still a kid?";}
	if (questions > 4){document.getElementById("question").textContent = "You found a coin dropped on the street. Will you collect it?";}
	if (questions > 5){document.getElementById("question").textContent = "When teacher gives you homework, will you work on it?";}
	if (questions > 6){document.getElementById("question").textContent = "Is it good to slap back him after he slaps you?";}
	if (questions > 7){document.getElementById("question").textContent = "Do you love your parents?";}
	if (questions > 8){document.getElementById("question").textContent = "You're a kid and you don't know where your parents at. Will you find a security nearby for help?";}
	if (questions > 9){document.getElementById("question").textContent = "When your mom makes jokes for you, will you insult her only once?";}
	if (questions > 10){document.getElementById("question").textContent = "You like it when it's raining french fries outside.";}
	if (questions > 11){document.getElementById("question").textContent = "You found a strange big hole on the street.🕳️ Will you jump inside the hole?";}
	if (questions > 12){document.getElementById("question").textContent = "Do you hate for having a crush?";}
	if (questions > 13){document.getElementById("question").textContent = "When you're a programmer but you're busy and someone invites you to their restaurant. Will you accept them?";}
	if (questions > 14){document.getElementById("question").textContent = "You don't like it when your teacher is making fun of you. Will you scold and yell her?";}
	if (questions > 15){document.getElementById("question").textContent = "When someone shows you finger heart, will you yell at her to stop doing that?";}
	if (questions > 16){document.getElementById("question").textContent = "Your school is holding a fast food party. Will you come?";}
	if (questions > 17){document.getElementById("question").textContent = "Your mom wanted to teach you how to drive. Will you accept her opinion?";}
	if (questions > 18){document.getElementById("question").textContent = "Do you like sushi with pizza?";}
	if (questions > 19){document.getElementById("question").textContent = "You win the real lottery and it's not a scam. Will you get very excited for it?";}
	if (questions > 20){document.getElementById("question").textContent = "Thank you for playing!";}
}

