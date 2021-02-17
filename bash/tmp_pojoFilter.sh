#!/bin/bash
pojo_filter () {
	sed '/.*super.*(.*)/d' $1	|	# delete line with super() function
	sed '/^@ModelPojo/d' 		|	# delete @ModelPojo override
	sed '/^import hex.*/d' 		|	# delete import hex*
	sed 's/ extends GenModel//g'	|	# delete the extends GenModel line
	sed 's/hex.genmodel.//g' 	|	# delete hex.genmodel. (jez I hope I don't get in trouble for this)
	sed '/.*getModelCategory.*/d' 		# delete calls to hex.ModelCategory
}

pojo_filter $1
