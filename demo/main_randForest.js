const {DRF_model_python_1613635642522_1}=require("./DRF_model_python_1613635642522_1.js");

 // input & prediction array
data = [360.0,	// displacement
	175.0,	// power
	3821.0,	// weight
	11.0,	// acceleration
	73.0	// year
	]

pred = new Array(3).fill(0);

// try score0 function in JavaSript
let m = new DRF_model_python_1613635642522_1();
p = m.score0(data, pred);
console.log(p);
