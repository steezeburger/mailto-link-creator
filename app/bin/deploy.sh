#! /bin/sh

branch=$(git rev-parse --abbrev-ref HEAD);

if [[ $branch == \"master\" ]]; then
  yarn lint && yarn test && yarn build && yarn deploy
else
  echo \"You can only deploy from master.\" && exit 1
fi
