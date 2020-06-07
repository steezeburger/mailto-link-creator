import createLink from './mailtoLinkGenerator'

const body = 'test body'
const cc = 'test1@test1.com, test2@test2.com'
const subject = 'test subject'
const to = 'test@test.com'

const expectLinkWithCC = encodeURIComponent(
  `mailto:${to}?cc=${cc}&subject=${subject}&body=${body}`,
)

it('can build link with cc', () =>
  expect(createLink({ body, cc, subject, to })).toEqual(expectLinkWithCC))
