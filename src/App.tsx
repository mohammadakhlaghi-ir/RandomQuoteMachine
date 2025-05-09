import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/styles/Theme.css";
import { quotes } from "./data/Quotes";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const App: React.FC = () => {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(random);
  };

  return (
    <>
      <div id="quote-box">
        <p id="text">"{quote.text}"</p>
        <p id="author">- {quote.author}</p>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text="${quote.text}" - ${quote.author}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "10px" }}
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/sharing/share-offsite/?url=https://exampleUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
          <button id="new-quote" onClick={getRandomQuote}>
            New Quote
          </button>
        </div>
      </div>
      <a className="by" target="_blank" href="https://mohammadakhlaghi.ir">
        by Mohammad Akhlaghi
      </a>
    </>
  );
};

export default App;
