import React, { useState } from 'react';
import { createLink } from './lib/linkGenerator';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [form, setForm] = useState({
    to: undefined,
    cc: undefined,
    subject: undefined,
    body: undefined,
  });

  const handleChange = (event) => {
    console.log(event);
    return true;
  };

  return (
    <div className="App">

      <header className="App-header">
        <p>`mailto:` link creator</p>
        <p>use this tool to create links that can be opened in your email client, and that can autopopulate fields such as to, cc, subject, and body.</p>
      </header>

      <div>
      <form onChange={handleChange}>
          <label>
            to:
            <input type="text" value={form.to} />
          </label>

          <textarea value={} />

          <input type="submit" value="shorten link" />
        </form>
      </div>

    </div>
  );
}

export default App;
