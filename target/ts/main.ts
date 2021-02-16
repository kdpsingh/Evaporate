/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class main {
    public static main(args: string[]) {
        const m: GLM_model_python_1613488863363_1 = new GLM_model_python_1613488863363_1();
        const r: number[] = [80, 1, 2.6, 2];
        const rawData: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(m.nfeatures());
        java.util.Arrays.fill(rawData, javaemul.internal.DoubleHelper.NaN);
        const preds: number[] = m.score0(r, rawData);
        console.info(java.util.Arrays.toString(preds));
    }
}
main["__class"] = "main";




main.main(null);
