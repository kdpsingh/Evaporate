#!/bin/bash

# overwrites the initial H2O POJO so it can compile without h2o-genmodel.jar

pojo_filter_in_place () {
	sed -i '/.*super.*(.*)/d' 	 $1	# delete line with super() function
	sed -i '/^@ModelPojo/d'		 $1	# delete @ModelPojo override
	sed -i '/^import hex.*/d' 	 $1	# delete import hex*
	sed -i 's/ extends GenModel//g'	 $1 	# delete the extends GenModel line
	sed -i 's/hex.genmodel.//g' 	 $1	# delete hex.genmodel. (jez I hope I don't get in trouble for this)
	sed -i '/.*getModelCategory.*/d' $1 	# delete calls to hex.ModelCategory
}

pojo_filter_in_place $1
