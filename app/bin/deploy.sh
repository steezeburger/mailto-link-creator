#! /bin/sh

branch=$(git rev-parse --abbrev-ref HEAD);

eslint ..

if [[ $branch == \"master\" ]]; then
  yarn build && gh-pages -d build
else
  echo \"You can only deploy from master.\" && exit 1
fi
