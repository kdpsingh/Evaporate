const {glm_model}=require("./glm_model.js");

// input & prediction array
data = [[80,    // RACE
        45,     // AGE
        2.6,    // PSA
        2   // GLEASON
        ]]
pred = new Array(3).fill(0);

// try score0 function in JavaSript
let m = new glm_model();
p = m.score0(data, pred);
console.log(p);

n = glm_model.NAMES_$LI$();
console.log(n);
