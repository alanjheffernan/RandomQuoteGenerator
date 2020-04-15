let quoteText = document.getElementById('quoteText');
let quoteAuthor = document.getElementById('quoteAuthor');
let quoteGenerator = document.getElementById('newQuoteButton');

let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let forismaticQuote = `${proxyUrl}https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`;

quoteGenerator.addEventListener("click", getQuote);

function printQuote(data) {
    if (data != null) {
        quoteText.textContent = data.quoteText;
        if (data.quoteAuthor == "") {
            quoteAuthor.textContent = "- Anonymous"
        } else {
            quoteAuthor.textContent = "- " + data.quoteAuthor;
        }
    } else {
        getStaticQuote();
    }
}


    function getQuote(url) {
        fetch(forismaticQuote)
            .then(response => {
                if (response.status >= 200 && response.status <= 299) {
                    console.log(response);
                    return response.json();
                } 
            })
            .then(data => {
                printQuote(data);
            });
    }

    function getStaticQuote() {
        let randomNumber = Math.floor(Math.random() * Math.floor(quoteArray.length));
        quoteText.textContent = quoteArray[randomNumber].quote;
        quoteAuthor.textContent = "- " + quoteArray[randomNumber].author;
    }

    const quoteArray = [
        {
            quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
            author: "Mahatma Gandhi"
        },
        {
            quote: "That which does not kill us makes us stronger.",
            author: "Friedrich Nietzsche"
        },
        {
            quote: "Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.",
            author: "Bernard M. Baruch"
        },
        {
            quote: "We must not allow other people’s limited perceptions to define us.",
            author: "Virginia Satir"
        },
        {
            quote: "Do what you can, with what you have, where you are.",
            author: "Theodore Roosevelt"
        },
        {
            quote: "Be yourself; everyone else is already taken.",
            author: "Oscar Wilde"
        },
        {
            quote: "This above all: to thine own self be true.",
            author: "William Shakespeare"
        },
        {
            quote: "If you cannot do great things, do small things in a great way.",
            author: "Napoleon Hill"
        },
        {
            quote: "I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
            author: "Maya Angelou"
        },
    ]