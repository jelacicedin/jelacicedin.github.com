/**
 * Load and display a random quote from assets/quotes/quotes.txt
 */

async function loadRandomQuote() {
  try {
    const response = await fetch('/assets/quotes/quotes.txt');
    const text = await response.text();

    // Split into paragraphs (double newlines)
    const blocks = text.split(/\n\n+/).filter(block => block.trim().length > 0);
    const quotes = [];

    for (let block of blocks) {
      block = block.trim();

      // Skip if doesn't start with a quote
      if (!block.startsWith('"')) {
        continue;
      }

      // Find the last occurrence of " followed by a dash and attribution
      // This handles multi-line quotes where the attribution is on the last line
      const lastQuoteIndex = block.lastIndexOf('"');
      if (lastQuoteIndex <= 0) continue;

      // Get the text after the last quote (should contain attribution)
      const afterQuote = block.substring(lastQuoteIndex + 1).trim();

      // Match: optional whitespace, dash (– or -), whitespace, then author
      const attributionMatch = afterQuote.match(/^[\s]*(–|—|-)\s*(.+)$/m);

      if (attributionMatch) {
        const quoteText = block.substring(0, lastQuoteIndex + 1);
        const dash = attributionMatch[1];
        const author = attributionMatch[2].trim();

        // Validate quote
        if (
          quoteText.length > 10 &&
          quoteText.length < 2000 &&
          author.length > 2
        ) {
          quotes.push({
            text: quoteText,
            attribution: `${dash} ${author}`,
          });
        }
      }
    }

    // Remove duplicates
    const seen = new Set();
    const uniqueQuotes = quotes.filter(q => {
      if (seen.has(q.text)) {
        return false;
      }
      seen.add(q.text);
      return true;
    });

    console.log(`Found ${uniqueQuotes.length} unique quotes`);

    if (uniqueQuotes.length > 0) {
      // Select a random quote
      const randomIndex = Math.floor(Math.random() * uniqueQuotes.length);
      const selectedQuote = uniqueQuotes[randomIndex];

      // Display the quote
      const quoteElement = document.getElementById('random-quote');
      if (quoteElement) {
        // Escape HTML entities and preserve line breaks
        const escaped = document
          .createElement('div')
          .appendChild(document.createTextNode(selectedQuote.text))
          .parentNode.innerHTML;
        const formattedText = escaped.replace(/\n/g, '<br>');

        quoteElement.innerHTML = `
          <blockquote>
            <p>${formattedText}</p>
            <p>${selectedQuote.attribution}</p>
          </blockquote>
        `;
      }
    } else {
      console.warn('No valid quotes found');
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


