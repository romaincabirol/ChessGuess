import { useState, useEffect } from 'react';
import "./App.css";
import Pgnviewer from "./components/Pgnviewer";
import { fetchPgnUrls } from "./components/RandomPgnFile"; // Import the function

function App() {
  const [pgnData, setPgnData] = useState('');

  useEffect(() => {
    const loadRandomPgnData = async () => {
      const urls = await fetchPgnUrls();
      const randomIndex = Math.floor(Math.random() * urls.length);
      const randomUrl = urls[randomIndex];
      try {
        const response = await fetch(randomUrl);
        if (response.ok) {
          const textData = await response.text();
          setPgnData(textData);
        } else {
          console.error('Failed to fetch PGN data');
        }
      } catch (error) {
        console.error('Error fetching PGN data:', error);
      }
    };

    loadRandomPgnData();
  }, []);

  return (
    <div>
      <img src={"./src/assets/react.svg"} className="App-logo" alt="logo" />
      {pgnData && <Pgnviewer pgn={pgnData} />}
    </div>
  );
}

export default App;
