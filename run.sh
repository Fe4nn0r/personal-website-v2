#!/bin/bash
./node_modules/.bin/next build

forever start -c "./node_modules/.bin/next start" ./
forever start -c "./node_modules/.bin/next start" ./