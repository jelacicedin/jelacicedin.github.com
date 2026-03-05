/**
 * Load and display a random quote from assets/quotes/quotes.txt
 */

async function loadRandomQuote() {
  try {
    const response = await fetch('/assets/quotes/quotes.txt');
    const text = await response.text();

    // Parse quotes - filter out lines that are just descriptions or metadata
    const lines = text.split('\n');
    const quotes = [];
    let currentQuote = '';
    let currentAttribution = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();

      // Check if this is a quote (starts with ")
      if (line.startsWith('"')) {
        currentQuote = line;

        // Look for the attribution line (starts with --)
        if (i + 1 < lines.length) {
          const nextLine = lines[i + 1].trim();
          if (nextLine.startsWith('--') || nextLine.startsWith('– ')) {
            currentAttribution = nextLine;
            // Store the complete quote with attribution
            quotes.push({
              text: currentQuote,
              attribution: currentAttribution,
            });
          }
        }
      }
    }

    // Filter out any quotes that look like descriptions (too long, no quotes)
    const filteredQuotes = quotes.filter((q) => {
      // Skip if quote text is extremely long (likely a description)
      return q.text.length < 500 && q.text.startsWith('"');
    });

    if (filteredQuotes.length > 0) {
      // Select a random quote
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      const selectedQuote = filteredQuotes[randomIndex];

      // Display the quote
      const quoteElement = document.getElementById('random-quote');
      if (quoteElement) {
        quoteElement.innerHTML = `
          <blockquote>
            <p>${selectedQuote.text}</p>
            <p>${selectedQuote.attribution}</p>
          </blockquote>
        `;
      }
    }
  } catch (error) {
    console.error('Error loading quotes:', error);
  }
}

// Load quote when the page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadRandomQuote);
} else {
  loadRandomQuote();
}
