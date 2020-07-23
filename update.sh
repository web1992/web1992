#!/bin/bash
git pull
rm -rf *.js
cp -rf /Users/zl/Documents/dev/github/blog/build/* .
git add .
git commit -m "update"
git push
