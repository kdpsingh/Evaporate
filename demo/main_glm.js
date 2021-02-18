const {GLM_model_python_1613638673374_1}=require("./GLM_model_python_1613638673374_1.js");

// input & prediction array
data = [80, 	// RACE
	45, 	// AGE
	2.6,	// PSA
	2	// GLEASON
	]
pred = new Array(data.length).fill(0);

// try score0 function in JavaSript
let m = new GLM_model_python_1613638673374_1();
p = m.score0(data, pred);
console.log(p);
