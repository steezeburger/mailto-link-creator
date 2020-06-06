import { pipe } from 'ramda';

const generateLink = ({
  body,
  cc,
  subject,
  to,
}) => `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`;

const createLink = (form) => pipe(generateLink, encodeURIComponent)(form);

export default createLink;
