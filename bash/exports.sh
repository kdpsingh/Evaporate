#!/bin/bash

# appends export statement to JavaScript class
# since it just echos the export statement, to actually append it, you need to use the >> command:
# ./exports.sh f1 >> f1

echo -e "\nexports.${1%.*}=${1%.*};"
