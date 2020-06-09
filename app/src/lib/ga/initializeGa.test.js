import ReactGA from 'react-ga'

import initializeGA from './initializeGA'

jest.mock('react-ga', () => ({
  initialize: jest.fn(),
}))

it('calls ReactGA initialize', () => {
  initializeGA()

  return expect(ReactGA.initialize).toHaveBeenCalled()
})
