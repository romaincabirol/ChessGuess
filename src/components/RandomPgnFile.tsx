import { useState, useEffect } from 'react';

// TEMPORARY Fetching a list of URLs from a backend service
export const fetchPgnUrls = async () => {
  let urls = [];
  console.log('let urls')
  const baseUrl = import.meta.env.VITE_BASE_URL || 'http://localhost:3000/'; 
  console.log('base url is ' + baseUrl)
  for (let i = 1; i <= 100; i++) {
    urls.push(`${baseUrl}game_${i}.pgn`);
  }
  return urls;
};

const RandomPgnFile = () => {
  const [pgnUrl, setPgnUrl] = useState('');

  useEffect(() => {
    const selectRandomPgnUrl = async () => {
      const urls = await fetchPgnUrls();
      const randomIndex = Math.floor(Math.random() * urls.length);
      setPgnUrl(urls[randomIndex]);
    };

    selectRandomPgnUrl();
  }, []);

  return (
    <div>
      {pgnUrl && (
        <div>
          <h2>Random PGN File</h2>
          <p>URL: {pgnUrl}</p>
          <a href={pgnUrl} download>Download PGN File</a>
        </div>
      )}
    </div>
  );
};

export default RandomPgnFile;