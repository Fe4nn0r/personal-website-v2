#!/bin/bash
./node_modules/.bin/next build
nohup ./node_modules/.bin/next start > run.log 2>&1 &
echo $! > save_pid.txt
