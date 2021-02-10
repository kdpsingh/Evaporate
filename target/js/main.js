/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class main {
    static main(args) {
        const m = new gbm_pojo_test();
        const r = [1987.0, 10.0, 14.0, 3.0, 730.0, javaemul.internal.DoubleHelper.NaN, 5.0, javaemul.internal.DoubleHelper.NaN, javaemul.internal.DoubleHelper.NaN, 106.0, 118.0];
        const rawData = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(m.nfeatures());
        java.util.Arrays.fill(rawData, javaemul.internal.DoubleHelper.NaN);
        const preds = m.score0(r, rawData);
        console.info(java.util.Arrays.toString(preds));
    }
}
main.modelClassName = "gbm_pojo_test";
main["__class"] = "main";
main.main(null);
