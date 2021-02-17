#!/bin/bash

# prepends import statement for JavaScript class into file
# imports file 1 (f1) into file 2 (f2) like this:
# ./import.sh f1 f2
var=${1##*/}
fn1=${var%.*}
imp="const {$fn1}=require(\"./$var\");"
sed -i "1 i\\$imp" $2
