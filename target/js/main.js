const {DRF_model_python_1613526296143_1}=require("./DRF_model_python_1613526296143_1.js");
/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class main {
    static main(args) {
        const m = new DRF_model_python_1613526296143_1();
        const r = [10.0, 10.3, 10.3, 1.2, 89];
        const rawData = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(m.nfeatures());
        rawData.fill(0);
        const preds = m.score0(r, rawData);
        console.info(preds);
    }
}
main["__class"] = "main";
main.main(null);
