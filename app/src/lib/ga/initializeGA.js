import ReactGA from 'react-ga'

const initializeGA = () => ReactGA.initialize(
  'UA-168760181-1',
  { testMode: process.env.NODE_ENV === 'test' },
)

export default initializeGA
