/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class main {
    public static main(args: string[]) {
        const m: DRF_model_python_1613526296143_1 = new DRF_model_python_1613526296143_1();
        const r: number[] = [10.0, 10.3, 10.3, 1.2, 89];
        const rawData: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(m.nfeatures());
        java.util.Arrays.fill(rawData, javaemul.internal.DoubleHelper.NaN);
        const preds: number[] = m.score0(r, rawData);
        console.info(java.util.Arrays.toString(preds));
    }
}
main["__class"] = "main";




main.main(null);
