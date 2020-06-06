import React, { useState } from 'react';
import createLink from './lib/linkGenerator';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [body, setBody] = useState('');
  const [cc, setCC] = useState('');
  const [subject, setSubject] = useState('');
  const [to, setTo] = useState('');

  const onBodyChange = (e) => setBody(e.target.value);
  const onCCChange = (e) => setCC(e.target.value);
  const onSubjectChange = (e) => setSubject(e.target.value);
  const onToChange = (e) => setTo(e.target.value);

  const form = {
    body,
    cc,
    subject,
    to,
  };

  const link = createLink(form);

  return (
    <div className="App">

      <p>`mailto:` link creator</p>
      <p>
        use this tool to create links that can be opened in your email client,
        and that can autopopulate fields such as to, cc, subject, and body.
      </p>

      <div>
        <form>
          <label htmlFor="to">
            to:
            <input id="to" type="text" value={form.to} onChange={onToChange} />
          </label>

          <label htmlFor="cc">
            cc:
            <input id="cc" type="text" value={form.cc} onChange={onCCChange} />
          </label>

          <label htmlFor="subject">
            subject:
            <input id="subject" type="text" value={form.subject} onChange={onSubjectChange} />
          </label>

          <label htmlFor="body">
            body:
            <textarea id="body" type="text" value={form.body} onChange={onBodyChange} />
          </label>

          <textarea readOnly value={link} />

          <input type="submit" value="shorten link" />
        </form>
      </div>

    </div>
  );
}

export default App;
