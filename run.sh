#!/bin/bash
./node_modules/.bin/next build

forever start ./node_modules/.bin/next
forever restart ./node_modules/.bin/next