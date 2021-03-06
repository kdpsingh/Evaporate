#!/bin/bash
jsOut="${1%.*}.js" &&							# get file name for JS output
cwd=$(pwd) &&								# get current work directory to put output back

cp $1 ../ &&								# make sure POJO is in same directory as main.sh
cd ../ &&								# go into official evaporate directory
cp GenMod/GenModel.java src/main/java &&				# move GenModel into src/main/java
mv $1 src/main/java &&							# move POJO into src/main/java
bash/pojoFilter.sh src/main/java/$1 &&					# make POJO file h2o-genmodel independent
bash/pojoFilter.sh src/main/java/GenModel.java &&			# make GenModel h2o independent
mvn generate-sources;							# make sure it is OK if JSweet exits on error(;)
mv target/js/bundle.js target/js/$jsOut &&				# rename bundle.js to JS file corresponding to pojo name
bash/jsweetFilter.sh target/js/$jsOut &&				# filter left-over Java syntax
bash/exports.sh target/js/$jsOut >> target/js/$jsOut &&			# export JS class
mv target/js/* "$cwd" && 						# move all JS files into original directory
rm -rf target/ &&							# remove target directory
rm src/main/java/* && 							# clean up src/main/java
echo -e "\nDONE!"
