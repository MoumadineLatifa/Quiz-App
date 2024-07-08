import React, { useState, useEffect } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div>
      <h1>Quote of the day</h1>
      <p>''{quote}''</p>
      <h4><em>--{author}</em></h4>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default Quotes;
