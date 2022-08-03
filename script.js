
async function fetchQuotes() {
    const response = await fetch('https://zenquotes.io/api/random');
    const quotes = await response.json();
    return quotes;
}

function populateQuotes() {
    fetchQuotes().then(quotes => {
    
    var quote = document.createElement('p');
    quote.classList.add('container__quote-quote')
    var newQuote = document.createTextNode(quotes[0].q)
    
    quote.appendChild(newQuote);
    
    const currentQuoteDiv = document.getElementById('container__quote-item');
    currentQuoteDiv.appendChild(quote, currentQuoteDiv.firstChild);
    
    var author = document.createElement('p');
    author.classList.add('container__quote-author')
    var newAuthor = document.createTextNode(quotes[0].a)

    author.appendChild(newAuthor);

    const currentAuthorDiv = document.getElementById('container__quote-item');
    currentAuthorDiv.appendChild(author, currentAuthorDiv.firstChild);
    console.log(quotes[0])
    quotes; // fetched quotes
})};

populateQuotes();

document.getElementsByTagName('img')[0].addEventListener('click', handleRefreshClick)

function handleRefreshClick() {
    if (document.querySelector('.container__quote-quote').innerHTML && document.querySelector('.container__quote-author').innerHTML) {
        document.querySelector('.container__quote-quote').remove() 
        document.querySelector('.container__quote-author').remove()
        populateQuotes();
    }
}