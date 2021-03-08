#!/bin/bash
RED='\033[0;91m';							# RED
NC='\033[0m'; 								# NO COLOR
CYAN='\033[0;36m'							# CYAN
GREEN='\033[0;32m'							# GREEN
jsOut="${1%.*}.js";							# get file name for JS output
cwd=$(pwd);								# get current work directory to put output back

cp GenMod/GenModel.java src/main/java;					# move GenModel into src/main/java
cp $1 src/main/java;							# move POJO into src/main/java
bash/pojoFilter.sh src/main/java/$1;					# make POJO file h2o-genmodel independent
bash/pojoFilter.sh src/main/java/GenModel.java;				# make GenModel h2o independent
mvn generate-sources;							# make sure it is OK if JSweet exits on error(;)
mv target/js/bundle.js target/js/$jsOut;				# rename bundle.js to JS file corresponding to pojo name
bash/jsweetFilter.sh target/js/$jsOut;					# filter left-over Java syntax
bash/exports.sh target/js/$jsOut >> target/js/$jsOut;			# export JS class
mv target/js/* "$cwd"; 							# move all JS files into original directory
rm -rf target/;								# remove target directory
rm src/main/java/*; 							# clean up src/main/java
echo -e "\n${GREEN}A MESSAGE FROM THE EVAPORATE TEAM:\
\n${NC}Don't worry if JSweet outputs ${RED}BUILD FAILURE${NC}!!!\
\nIt means that the JavaScript file JSweet produced didn't compiled successfully;\
\nusually, JSweet gets us about 85-90% there.\n\
\n${GREEN}AND...AN EVEN LONGER MESSAGE:${NC} (c'mon, bear with us) \
\nJSweet isn't by all means perfect, and the transpiled JavaScript might not run on the first try. \
\nWe are aware of this fact and provided our customized modifications to the outputted JSweet code; \
\nWe do our best to patched up common left-over Java code in JSweet-converted JavaScript files \
\nso it might run on the first try. (All modifications are in ${CYAN}bash/jsweetFilter.sh${NC}) \
\nAnd YES: please feel free to add your own modifications too!"