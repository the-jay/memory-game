// Counts

let moves = 0;
let wins = 0;
let flipped = false;
let curCard = '';


// Shuffle
function shuffleCards() {
	let cardList = document.querySelectorAll('.card');
	for (i = 0; i < cardList.length; i++) { 
		let card = cardList[i];
		let pos = Math.floor(Math.random() * 12); 
		card.style.order=pos;
		card.addEventListener('click', flipCard);
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
		}
		else {
			setTimeout(clearFlip, 2000);
			function clearFlip() {
				let wrong = document.querySelectorAll('.show');
				for (i = 0; i < wrong.length; i++) { 
					let card = wrong[i];
					card.classList.remove("show")
				}
			}
			flipped = false;
		}
	}
}


// Win


let moves =+ 1;
let wins =+ 1;

//Init

