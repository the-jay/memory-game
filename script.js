// Counts

let moves = 0;
let wins = 0;


// Shuffle
function shuffleCards() {
	let cardList = document.querySelectorAll('.card');
	for (i = 0; i < cardList.length; i++) { 
		let card = cardList[i];
		let pos = Math.floor(Math.random() * 12); 
		//card.classList.add(" flex-"+pos);	
		card.style.order=pos;
	}
	return; 
}

// Flip


// Win


//Init

