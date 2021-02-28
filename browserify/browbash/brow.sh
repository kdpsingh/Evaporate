#!/bin/bash

# this file takes the Evaporate-converted JS file and uses it to generate 3 files:
# index.html, main.js, bundle.js (should all appear in the same directory)
# the main.js is what creates the interface (i.e. when you click the 'H2O Calculate!' button)
# the bundle.js contains ALL the JS needed for the index.html
# after you ran the code, you should be able to just open the index.html file and use it
# run it like:
# > ./brow.sh name_of_js_file

var=${1##*/}
fn1=${var%.*}
imp="const {$fn1}=require(\"./$1\"); let m=new $fn1(); let n=$fn1.NAMES_\$LI\$();"

touch main.js;					# create main.js to implement interface
sed -i "1 i\\$imp" gen_main.js;			# import JS class needed to write main.js code
sed -i "1 i\\$imp" gen_html.js;			# import JS class needed to generate HTML
echo "$imp" > main.js;				# write import statement in main.js
node gen_html.js > index.html;			# output HTML code
node gen_main.js >> main.js;			# output main.js code
browserify --debug main.js -o bundle.js;	# browserify the JS code 
sed -i "/require/d" gen_main.js;		# remove the $imp line from file for reuse
sed -i "/require/d" gen_html.js			# do the same for HTML gen code
