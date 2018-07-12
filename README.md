# Karetao

## Overview

A simple toy robot simulator written in TypeScript.


## Getting it running

Install the dependencies as you usually would.

    npm install

Compile the TypeScript into JavaScript

    npm run build

Run the test suite, you do not need to build before running tests.

    npm test

Try out some commands

    echo 'PLACE 1,2,EAST MOVE LEFT REPORT' | node ./build/index.js

You can also install it as a system executable

    npm install -g
    cat examples/example1.txt | karetao
