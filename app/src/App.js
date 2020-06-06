import React, { useState } from 'react';
import createLink from './lib/linkGenerator';
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

  const onShortenLinkClick = (link) => {
    const tinyUrl = 'https://tinyurl.com/create.php?source=indexpage&url=';
    const fullLink = `${tinyUrl}${link}`;
    return window.open(fullLink);
  };

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
        use this tool to create links that can be opened in an email client,
        with fields such as to, cc, subject, and body already filled out.
      </p>

      <div className="container">
        <form onSubmit={(e) => e.preventDefault() }>
          <ul className="flex-outer">

            <li>
              <label htmlFor="to">to</label>
              <input type="text" id="to" value={form.to} onChange={onToChange}/>
            </li>

            <li>
              <label htmlFor="cc">cc</label>
              <input type="text" id="cc" value={form.cc} onChange={onCCChange}/>
            </li>

            <li>
              <label htmlFor="subject">subject</label>
              <input type="text" id="subject" value={form.subject} onChange={onSubjectChange}/>
            </li>

            <li>
              <label htmlFor="body">body</label>
              <textarea className="body" type="text" id="body" value={form.body} onChange={onBodyChange}/>
            </li>

            <li>
              <label htmlFor="results">results</label>
              <textarea id="results" className="results" readOnly value={link} />
            </li>

            <li>
              <button type="submit" onClick={(e) => (e.preventDefault && onShortenLinkClick(link))}>
                generate shortened link via TinyUrl
              </button>
            </li>

          </ul>
        </form>
      </div>

    </div>
  );
}

export default App;
