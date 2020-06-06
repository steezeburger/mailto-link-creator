import createLink from './tinyUrlLinkGenerator';

const mailtoLink = 'fakeLink';
const expectedTinyLink = `https://tinyurl.com/create.php?source=indexpage&url=${mailtoLink}`;

it('can build link', () =>
  expect(createLink({mailtoLink})).toEqual(expectedTinyLink));
