import * as R from 'ramda';

// TODO - generate body, url encode inputs, generate link
const createLink = ({
  body,
  cc,
  fullName,
  subject,
  to,
}) => true;

const generateBody = ({
  body,
  fullName,
}) => true;

const generateLink = ({
  body,
  cc,
  subject,
  to,
}) => `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`;

const urlEncodeString = (str) => R.pipe(
  encodeURIComponent,
  str,
);

export default {
  createLink,
  generateBody,
  generateLink,
  urlEncodeString,
};
