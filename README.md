## mailto: link creator
An app to easily create shareable links for autofilled e-mail campaigns.

### Current Limitations
* you'll generally still need at least one placeholder in the email body for the sender's name, something like `[YOUR NAME HERE]`

### Roadmap
- [x] `mailto:` link generation
- [x] link shortening with TinyUrl
- [x] tests
- [ ] custom url shortener
- [ ] a feature to generate a page with a list of links where user can type in name to autofill the entire email body


### Contributions
E-mail me if you'd like to contribute. Designers, programmers, or even those that have a feature idea should not hesitate to reach out.

You can simply fork the repo to begin contributing.
* install depdencies - `yarn install`
* run development server - `yarn start`
* run tests in watch mode (rerun after file saves) - `yarn test`
* build production release - `yarn build`
* deploying is handled via gh-pages, and it's dead simple - `yarn deploy` NOTE: this builds a production build then deploys to gh-pages
