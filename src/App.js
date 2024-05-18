import React, { useState } from 'react';
import './App.css';

function App() {
  const [timestamp, setTimestamp] = useState('');

  const getCurrentTimestamp = () => {
    const now = new Date();
    const currentTimestamp = now.toISOString();
    setTimestamp(currentTimestamp);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(timestamp).then(() => {
      alert('Timestamp copied to clipboard!');
    }).catch(err => {
      alert('Failed to copy timestamp: ', err);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Timestamp</h1>
        <button onClick={getCurrentTimestamp}>Get Current Timestamp</button>
        {timestamp && (
          <div>
            <p>{timestamp}</p>
            <button onClick={copyToClipboard}>Copy to Clipboard</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
