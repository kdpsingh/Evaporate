/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class main {
    static modelClassName: string = "gbm_pojo_test";

    public static main(args: string[]) {
        const m: gbm_pojo_test = new gbm_pojo_test();
        const r: number[] = [1987.0, 10.0, 14.0, 3.0, 730.0, javaemul.internal.DoubleHelper.NaN, 5.0, javaemul.internal.DoubleHelper.NaN, javaemul.internal.DoubleHelper.NaN, 106.0, 118.0];
        const rawData: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(m.nfeatures());
        java.util.Arrays.fill(rawData, javaemul.internal.DoubleHelper.NaN);
        const preds: number[] = m.score0(r, rawData);
        console.info(java.util.Arrays.toString(preds));
    }
}
main["__class"] = "main";




main.main(null);
