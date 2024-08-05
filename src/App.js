import React, { useState } from 'react';
import { API } from 'aws-amplify';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const apiName = 'myApi'; // Nome dell'API definito in aws-exports.js
    const path = '/enqueue'; // Path dell'endpoint API

    const myInit = {
      body: { message },
      headers: { 'Content-Type': 'application/json' },
    };

    try {
      const result = await API.post(apiName, path, myInit);
      setResponse(result);
    } catch (err) {
      setError(err.message || 'Errore sconosciuto');
    }
  };

  return (
    <div className="App">
      <h1>Invia Messaggio</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Inserisci il tuo messaggio"
        />
        <button type="submit">Invia</button>
      </form>
      {response && (
        <div>
          <h2>Risposta:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
      {error && (
        <div>
          <h2>Errore:</h2>
          <pre>{error}</pre>
        </div>
      )}
    </div>
  );
}

export default App;

