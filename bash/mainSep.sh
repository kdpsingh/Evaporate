#!/bin/bash
# this main is for if you want a seperate GenModel file and your POJO (make sure you edit <bundle> to be false in pom.xml!)
jsOut="${1%.*}.js" &&							# get file name for JS output
cwd=$(pwd) &&								# get current work directory to put output back

cp $1 ../ &&								# make sure POJO is in same directory as main.sh
cd ../ &&								# go into official evaporate directory
cp GenMod/GenModel.java src/main/java &&				# move GenModel into src/main/java
mv $1 src/main/java &&							# move POJO into src/main/java
bash/pojoFilter.sh src/main/java/$1 &&					# make POJO file h2o-genmodel independent
bash/pojoFilter.sh src/main/java/GenModel.java &&			# make GenModel h2o independent
mvn generate-sources;							# make sure it is OK if JSweet exits on error(;)
bash/jsweetFilter.sh target/js/$jsOut &&				# clean up JSweet left-over Java code
bash/jsweetFilter.sh target/js/GenModel.js &&				# clean up JSweet left-over Java code
bash/exports.sh target/js/$jsOut >> target/js/$jsOut &&			# export JS-converted POJO as a class
bash/exports.sh target/js/GenModel.js >> target/js/GenModel.js &&	# export GenModel
bash/import.sh target/js/GenModel.js target/js/$jsOut &&		# import GenModel to JS-converted POJO
mv target/js/* "$cwd" && 						# move all JS files into original directory
rm -rf target/ &&							# remove target directory
rm src/main/java/* && 							# clean up src/main/java
echo -e "\nDONE!"
