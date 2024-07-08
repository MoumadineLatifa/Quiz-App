import React, { useState, useEffect } from 'react';

const Jokes = () => {
  const [joke, setJoke] = useState('');
  const [punchline, setPunchline] = useState('');

  const fetchJoke = () => {
    fetch('https://official-joke-api.appspot.com/jokes/random')
      .then((response) => response.json())
      .then((data) => {
        setJoke(data.setup);
        setPunchline(data.punchline);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h1>Joke of the Day</h1>
      <p>{joke}</p>
      <p><em>{punchline}</em></p>
      <button onClick={fetchJoke}>New Joke</button>
    </div>
  );
};

export default Jokes;
