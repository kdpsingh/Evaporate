#!/bin/bash
fn1=${1%.*}

imp="const {$fn1}=require(\"./$1\");"
echo $imp
sed -i "1 i\\$imp" $2
