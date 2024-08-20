const quotes = [
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Get busy living or get busy dying.", author: "Stephen King" },
    { text: "You have within you right now, everything you need to deal with whatever the world can throw at you.", author: "Brian Tracy" }
];

const colors = [
    'radial-gradient(circle, rgba(255, 204, 204, 0.8), rgba(255, 204, 204, 0))',
    'radial-gradient(circle, rgba(204, 255, 204, 0.8), rgba(204, 255, 204, 0))',
    'radial-gradient(circle, rgba(204, 204, 255, 0.8), rgba(204, 204, 255, 0))',
    'radial-gradient(circle, rgba(255, 255, 204, 0.8), rgba(255, 255, 204, 0))',
    'radial-gradient(circle, rgba(255, 204, 255, 0.8), rgba(255, 204, 255, 0))'
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function displayQuote() {
    const { text, author } = getRandomQuote();
    document.getElementById('quote-text').textContent = `"${text}"`;
    document.getElementById('quote-author').textContent = `— ${author}`;
    document.querySelector('.quote-background').style.background = getRandomColor();
}

function shareQuote() {
    const quoteText = document.getElementById('quote-text').textContent;
    const tweet = encodeURIComponent(quoteText);
    const url = `https://twitter.com/intent/tweet?text=${tweet}`;
    window.open(url, '_blank');
}

// Initialize the app with a random quote
displayQuote();

// Add event listeners
document.getElementById('new-quote').addEventListener('click', displayQuote);
document.getElementById('share-quote').addEventListener('click', shareQuote);
