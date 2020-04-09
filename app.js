//Add parameters

let quoteText = document.getElementById('quoteText');
let quoteAuthor = document.getElementById('quoteAuthor');
let quoteGenerator = document.getElementById('newQuoteButton');

let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let inspireUrl = `${proxyUrl}https://quotes.rest/qod?category=inspire`;
let forismaticQuote = `${proxyUrl}https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;
//Find ramdon quote generator and call and retrieve response
window.onload = function() {
   //  this.getQuote(forismaticQuote);
}

function alertWindow(){
    alert("1234456");
    console.log("dgdfgddf")
}


function getQuote(url){
fetch(forismaticQuote)
.then(response => {
    return response.json();
})
.then(data => {
    console.log(data);
    console.log(data.quoteText);

    quoteText.textContent = data.quoteText;
    quoteAuthor.textContent = "- " + data.quoteAuthor;
});
}

function changeQuote() {
    alert(proxyUrl);
}

function changeQuote2() {
    getQuote(forismaticQuote);
}


quoteGenerator.addEventListener("click", changeQuote);