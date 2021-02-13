// JavaScript implementation of gbm_pojo_test from H2O website
const {gbm_pojo_test} = require("./gbm_pojo_test.js");

// input & prediction array
data = [1987, 10, 14, 3, 730, NaN, 5, NaN, NaN, 106, 11]
pred = new Array(data.length).fill(0);

// try score0 function in JavaSript
let m = new gbm_pojo_test();
p = m.score0(data, pred);
console.log(p);
