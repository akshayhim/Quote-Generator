const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
// const newQuoteBtn = document.getElementById('new-quote');


function chanValues(response) {
	let result = Object.entries(response);
	let quoteContent = result[2];
	let newQuote = quoteContent[1];
	quoteText.textContent = newQuote;

	//============= Author
	let a = result[4];
	let b = a[1];
	let test = Object.entries(b);
	let c = test[1];
	let d = c[1]
	authorText.textContent = d;
}



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cea85f1ec5mshc9a84a0fcffad59p17cfa7jsn50429b04a103',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};

fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
.then(response => response.json())
.then(response => {
	chanValues(response)
})
.catch(err => console.error(err));

function tweetQuote() {
	const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
	window.open(twitterUrl, '_blank')
}

// Event Listeners
// newQuoteBtn.addEventListener('click', chanValues(response));

twitterBtn.addEventListener('click', tweetQuote);

