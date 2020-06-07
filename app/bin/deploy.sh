#! /bin/sh

branch=$(git rev-parse --abbrev-ref HEAD);



if [[ $branch == \"master\" ]]; then
  eslint .. && yarn test && yarn build && gh-pages -d build
else
  echo \"You can only deploy from master.\" && exit 1
fi
