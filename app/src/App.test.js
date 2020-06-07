import React from 'react'
import { render, queryByAttribute, fireEvent } from '@testing-library/react'
import App from './App'

const getById = (id, container) => queryByAttribute('id', container, id)

it('initializes correctly', async () => {
  const dom = render(<App />)

  const expectedInitialResults = 'mailto%3A%3Fcc%3D%26subject%3D%26body%3D'

  const results = getById('results', dom.container)

  return expect(results).toHaveTextContent(expectedInitialResults)
})

it('handles shorten link click properly', async () => {
  window.open = jest.fn() // eslint-disable-line fp/no-mutation

  const dom = render(<App />)

  const shortenLinkButton = getById('shorten-link', dom.container)

  fireEvent.click(shortenLinkButton)
  return expect(window.open).toHaveBeenCalled()
})
