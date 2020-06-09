import ReactGA from 'react-ga'

const recordEvent = (category, action, label) => ReactGA.event({ category, action, label })

export default recordEvent
