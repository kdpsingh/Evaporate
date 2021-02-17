#!/bin/bash
jsOut="${1%.*}.js" &&

mv $1 /mnt/c/Users/Yiju\ Huang/Documents/karandeep/evpt &&		# make sure POJO is in same directory as main.sh
cd /mnt/c/Users/Yiju\ Huang/Documents/karandeep/evpt &&			# go into official evaporate directory
cp GenModel.java src/main/java &&					# move GenModel into src/main/java
cp $1 src/main/java &&							# move POJO into src/main/java
bash/pojoFilter.sh src/main/java/$1 &&					# make POJO file h2o-genmodel independent
bash/pojoFilter.sh src/main/java/GenModel.java &&			# make GenModel h2o independent
mvn generate-sources;							# make sure it is OK if JSweet exits on error(;)
bash/jsweetFilter.sh target/js/$jsOut &&				# clean up JSweet left-over Java code
bash/jsweetFilter.sh target/js/GenModel.js &&				# clean up JSweet left-over Java code
bash/exports.sh target/js/$jsOut >> target/js/$jsOut &&			# export JS-converted POJO as a class
bash/exports.sh target/js/GenModel.js >> target/js/GenModel.js &&	# export GenModel
bash/import.sh target/js/GenModel.js target/js/$jsOut &&		# import GenModel to JS-converted POJO
