#!/bin/bash
rm -rf ./docs/*;
echo "brandonhuelga.com" >> ./docs/CNAME;
cp -r ./src/* ./docs/;