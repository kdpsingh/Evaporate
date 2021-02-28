#! /bin/bash
watchify main.js -o bundle.js -v
browserify main.js --debug | exorcist bundle.map.js > bundle.js
browserify --debug main.js -o bundle.js
