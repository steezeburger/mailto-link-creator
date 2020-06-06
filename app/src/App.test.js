import React from 'react';
import { render, queryByAttribute } from '@testing-library/react';
import App from './App';
import { test } from 'ramda';

const getById = (container, id) => queryByAttribute('id', container, id);

it('initializes correctly', async () => {
  const dom = render(<App />);

  const expectedInitialResults = 'mailto%3A%3Fcc%3D%26subject%3D%26body%3D';

  const results = getById(dom.container, 'results');
  return expect(results).toHaveTextContent(expectedInitialResults)
});
