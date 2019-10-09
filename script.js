// Counts

let moves = 0;
let wins = 0;
let flipped = false;
let curCard = '';

// Shuffle
function shuffleCards() {
	moves = 0;
	wins = 0;
	let cardList = document.querySelectorAll('.card');
	for (i = 0; i < cardList.length; i++) { 
		let card = cardList[i];
		let pos = Math.floor(Math.random() * 12); 
		card.classList.remove('found','show')
		card.style.order=pos;
		card.addEventListener('click', flipCard);
		document.getElementById('moves').innerHTML = "Trekk: "+moves;
	}
	return; 
}

// Flip

function flipCard() {
	this.classList.add('show');
	if (!flipped) {  
		curCard = this.classList[1];
		flipped = true;
	}
	else {
		if (this.classList[1] === curCard) {
			let correct = document.querySelectorAll('.'+curCard);
			correct[0].classList.add('found');
			correct[1].classList.add('found');
			flipped = false;
			moves += 1;
			wins += 1;
			checkWin();
		}
		else {
			setTimeout(clearFlip, 1000);
			flipped = false;
			moves += 1;
		}
		document.getElementById('moves').innerHTML = "Trekk: "+moves;
	}
	return; 
}


function clearFlip() {
	let wrong = document.querySelectorAll('.show');
	for (i = 0; i < wrong.length; i++) { 
		let card = wrong[i];
		card.classList.remove("show")
	}
}
// Win
	
function checkWin() {
	console.log(wins);
	if (wins === 6) {
		if (moves === 6) {
		alert('Du klarte det på første forsøk. Du er enten synsk eller en juksemaker');
		}
		else {
		alert('Gratulerer! Du brukte '+moves+' trekk for å vinne. Prøv igjen for å slå den');
		}
	}
	return; 
}

//Init

