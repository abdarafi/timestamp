import React, { useEffect, useState } from 'react';
import './App.css';
import { format } from 'date-fns';

function App() {
  const [timestamps, setTimestamps] = useState({});

  useEffect(() => {
    const now = new Date();
    const formattedTimestamps = {
      ISO: now.toISOString(),
      UTC: now.toUTCString(),
      Local: now.toLocaleString(),
      'Unix Timestamp': now.getTime().toString(),
      'Year-Month-Day': format(now, 'yyyy-MM-dd'),
      'Day/Month/Year': format(now, 'dd/MM/yyyy'),
      'Month Day, Year': format(now, 'MMMM d, yyyy'),
      'Hour:Minute:Second': format(now, 'HH:mm:ss'),
      'Hour:Minute AM/PM': format(now, 'hh:mm a'),
    };
    setTimestamps(formattedTimestamps);
  }, []);

  const copyToClipboard = (timestamp) => {
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
        <div className="timestamp-list">
          {Object.entries(timestamps).map(([format, value]) => (
            <div key={format} className="timestamp-item">
              <p>{format}: {value}</p>
              <button onClick={() => copyToClipboard(value)}>Copy</button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
