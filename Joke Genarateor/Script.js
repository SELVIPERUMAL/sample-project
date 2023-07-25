function generate(){
	const jokes=["What dose a house wear? Address.",
		"You heard the rumor going around about butter?never mind, I should't spread it.",
		"Why did the teddy bear say no to dessert? because it was stuffed",
		"Why did the cookie go to the doctor? It was feeling crummy."

		];
	let jokeDisplay = document.getElementById('joke');
	let randomJokes= Math.floor(Math.random()*8);
	jokeDisplay.innerHTML= `"${jokes [randomJokes]}"`;
}
