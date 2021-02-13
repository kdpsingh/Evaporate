// JavaScript implementation of gbm_pojo_test from H2O website
const {simpGLM} = require("./GLM_model_python_1613185837037_1.js");

// input & prediction array
data = [80, 1, 2.6, 2]
pred = new Array(data.length).fill(0);

// try score0 function in JavaSript
let m = new simpGLM();
p = m.score0(data, pred);
console.log(p);
