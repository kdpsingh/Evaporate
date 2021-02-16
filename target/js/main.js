/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
const {GLM_model_python_1613488863363_1} = require("./GLM_model_python_1613488863363_1.js");

class main {
    static main(args) {
        const m = new GLM_model_python_1613488863363_1();
        const r = [80, 1, 2.6, 2];
        const rawData = [0,0,0,0];
        const preds = m.score0(r, rawData);
        console.info(preds);
    }
}
main["__class"] = "main";
main.main(null);
