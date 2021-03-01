const {rf_model}=require("./rf_model.js");

 // input & prediction array
data = [3.0,	// displacement
		3.0,	// power
		3.0,	// weight
		3.0,	// acceleration
		3.0		// year
		]

pred = new Array(3).fill(0);

// try score0 function in JavaSript
let m = new rf_model();
p = m.score0(data, pred);
console.log(p);

