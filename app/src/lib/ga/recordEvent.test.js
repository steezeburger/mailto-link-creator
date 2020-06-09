import ReactGA from 'react-ga'

import recordEvent from './recordEvent'

jest.mock('react-ga', () => ({
  event: jest.fn(),
}))

it('calls ReactGA initialize', () => {
  recordEvent('category', 'action', 'label')

  return expect(ReactGA.event).toHaveBeenCalled()
})
