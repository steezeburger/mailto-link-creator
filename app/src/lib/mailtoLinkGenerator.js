import { pipe } from 'ramda';

const buildLink = ({
  body,
  cc,
  subject,
  to,
}) => `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`;

const createLink = (form) => pipe(buildLink, encodeURIComponent)(form);

export default createLink;
