#!/bin/bash
fileDir=/Users/zl/Documents/dev/github/blog/build
git pull

if [ ! -d "$fileDir" ]; then
echo "file dir not exist $fileDir"
exit
fi
echo "rm js files"

rm -rf *.js
cp -rf $fileDir/* .
git add .
git commit -m "update"
git push
