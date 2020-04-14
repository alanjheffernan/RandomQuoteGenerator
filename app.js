let quoteText = document.getElementById('quoteText');
let quoteAuthor = document.getElementById('quoteAuthor');
let quoteGenerator = document.getElementById('newQuoteButton');

let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let forismaticQuote = `${proxyUrl}https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;

window.onload = function () {
      this.getQuote(forismaticQuote);
}

quoteGenerator.addEventListener("click", changeQuote);

function changeQuote() {
    
    let apiResponse = getQuote(forismaticQuote);
    console.log(apiResponse);
    if(apiResponse == null){
        getStaticQuote();
    }
}

function getQuote(url) {
    fetch(forismaticQuote)
        .then(response => {
            if(response.status >= 200 && response.status <= 299){
            return response.json();
        }else {
            throw Error(response.statusText);
        }
        })
        .then(data => {
            quoteText.textContent = data.quoteText;
            quoteAuthor.textContent = "- " + data.quoteAuthor;
        })
        .catch(err => {
            console.log(err);
        });
}

function getStaticQuote(){
        let randomNumber = Math.floor(Math.random() * Math.floor(quoteArray.length));
        quoteText.textContent = quoteArray[randomNumber].quote;
        quoteAuthor.textContent = quoteArray[randomNumber].author;

}