/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class DRF_model_python_1613526296143_1 {
    public isSupervised(): boolean {
        return true;
    }

    public nfeatures(): number {
        return 5;
    }

    public nclasses(): number {
        return 2;
    }

    public static NAMES: string[]; public static NAMES_$LI$(): string[] { if (DRF_model_python_1613526296143_1.NAMES == null) { DRF_model_python_1613526296143_1.NAMES = NamesHolder_DRF_model_python_1613526296143_1.VALUES_$LI$(); }  return DRF_model_python_1613526296143_1.NAMES; }

    public static NCLASSES: number = 2;

    public static DOMAINS: string[][]; public static DOMAINS_$LI$(): string[][] { if (DRF_model_python_1613526296143_1.DOMAINS == null) { DRF_model_python_1613526296143_1.DOMAINS = [null, null, null, null, null, DRF_model_python_1613526296143_1_ColInfo_5.VALUES_$LI$()]; }  return DRF_model_python_1613526296143_1.DOMAINS; }

    public static PRIOR_CLASS_DISTRIB: number[]; public static PRIOR_CLASS_DISTRIB_$LI$(): number[] { if (DRF_model_python_1613526296143_1.PRIOR_CLASS_DISTRIB == null) { DRF_model_python_1613526296143_1.PRIOR_CLASS_DISTRIB = [0.3723076923076923, 0.6276923076923077]; }  return DRF_model_python_1613526296143_1.PRIOR_CLASS_DISTRIB; }

    public static MODEL_CLASS_DISTRIB: number[]; public static MODEL_CLASS_DISTRIB_$LI$(): number[] { if (DRF_model_python_1613526296143_1.MODEL_CLASS_DISTRIB == null) { DRF_model_python_1613526296143_1.MODEL_CLASS_DISTRIB = [0.3723076923076923, 0.6276923076923077]; }  return DRF_model_python_1613526296143_1.MODEL_CLASS_DISTRIB; }

    public getUUID(): string {
        return /* toString */(''+(4597120739987111725));
    }

    public score0(data: number[], preds: number[]): number[] {
        java.util.Arrays.fill(preds, 0);
        DRF_model_python_1613526296143_1_Forest_0.score0(data, preds);
        DRF_model_python_1613526296143_1_Forest_1.score0(data, preds);
        DRF_model_python_1613526296143_1_Forest_2.score0(data, preds);
        DRF_model_python_1613526296143_1_Forest_3.score0(data, preds);
        DRF_model_python_1613526296143_1_Forest_4.score0(data, preds);
        DRF_model_python_1613526296143_1_Forest_5.score0(data, preds);
        DRF_model_python_1613526296143_1_Forest_6.score0(data, preds);
        DRF_model_python_1613526296143_1_Forest_7.score0(data, preds);
        DRF_model_python_1613526296143_1_Forest_8.score0(data, preds);
        DRF_model_python_1613526296143_1_Forest_9.score0(data, preds);
        let sum: number = 0;
        for(let i: number = 1; i < preds.length; i++) {{
            sum += preds[i];
        };}
        if (sum > 0)for(let i: number = 1; i < preds.length; i++) {{
            preds[i] /= sum;
        };}
        preds[0] = GenModel.getPrediction(preds, DRF_model_python_1613526296143_1.PRIOR_CLASS_DISTRIB_$LI$(), data, 0.6871434272305222);
        return preds;
    }
}
DRF_model_python_1613526296143_1["__class"] = "DRF_model_python_1613526296143_1";


class NamesHolder_DRF_model_python_1613526296143_1 implements java.io.Serializable {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!NamesHolder_DRF_model_python_1613526296143_1.__static_initialized) { NamesHolder_DRF_model_python_1613526296143_1.__static_initialized = true; NamesHolder_DRF_model_python_1613526296143_1.__static_initializer_0(); } }

    public static VALUES: string[]; public static VALUES_$LI$(): string[] { NamesHolder_DRF_model_python_1613526296143_1.__static_initialize(); if (NamesHolder_DRF_model_python_1613526296143_1.VALUES == null) { NamesHolder_DRF_model_python_1613526296143_1.VALUES = [null, null, null, null, null]; }  return NamesHolder_DRF_model_python_1613526296143_1.VALUES; }

    static  __static_initializer_0() {
        NamesHolder_DRF_model_python_1613526296143_1.NamesHolder_DRF_model_python_1613526296143_1_0.fill(NamesHolder_DRF_model_python_1613526296143_1.VALUES_$LI$());
    }

    constructor() {
    }
}
NamesHolder_DRF_model_python_1613526296143_1["__class"] = "NamesHolder_DRF_model_python_1613526296143_1";
NamesHolder_DRF_model_python_1613526296143_1["__interfaces"] = ["java.io.Serializable"];



namespace NamesHolder_DRF_model_python_1613526296143_1 {

    export class NamesHolder_DRF_model_python_1613526296143_1_0 implements java.io.Serializable {
        static fill(sa: string[]) {
            sa[0] = "displacement";
            sa[1] = "power";
            sa[2] = "weight";
            sa[3] = "acceleration";
            sa[4] = "year";
        }

        constructor() {
        }
    }
    NamesHolder_DRF_model_python_1613526296143_1_0["__class"] = "NamesHolder_DRF_model_python_1613526296143_1.NamesHolder_DRF_model_python_1613526296143_1_0";
    NamesHolder_DRF_model_python_1613526296143_1_0["__interfaces"] = ["java.io.Serializable"];


}


class DRF_model_python_1613526296143_1_ColInfo_5 implements java.io.Serializable {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!DRF_model_python_1613526296143_1_ColInfo_5.__static_initialized) { DRF_model_python_1613526296143_1_ColInfo_5.__static_initialized = true; DRF_model_python_1613526296143_1_ColInfo_5.__static_initializer_0(); } }

    public static VALUES: string[]; public static VALUES_$LI$(): string[] { DRF_model_python_1613526296143_1_ColInfo_5.__static_initialize(); if (DRF_model_python_1613526296143_1_ColInfo_5.VALUES == null) { DRF_model_python_1613526296143_1_ColInfo_5.VALUES = [null, null]; }  return DRF_model_python_1613526296143_1_ColInfo_5.VALUES; }

    static  __static_initializer_0() {
        DRF_model_python_1613526296143_1_ColInfo_5.DRF_model_python_1613526296143_1_ColInfo_5_0.fill(DRF_model_python_1613526296143_1_ColInfo_5.VALUES_$LI$());
    }

    constructor() {
    }
}
DRF_model_python_1613526296143_1_ColInfo_5["__class"] = "DRF_model_python_1613526296143_1_ColInfo_5";
DRF_model_python_1613526296143_1_ColInfo_5["__interfaces"] = ["java.io.Serializable"];



namespace DRF_model_python_1613526296143_1_ColInfo_5 {

    export class DRF_model_python_1613526296143_1_ColInfo_5_0 implements java.io.Serializable {
        static fill(sa: string[]) {
            sa[0] = "0";
            sa[1] = "1";
        }

        constructor() {
        }
    }
    DRF_model_python_1613526296143_1_ColInfo_5_0["__class"] = "DRF_model_python_1613526296143_1_ColInfo_5.DRF_model_python_1613526296143_1_ColInfo_5_0";
    DRF_model_python_1613526296143_1_ColInfo_5_0["__interfaces"] = ["java.io.Serializable"];


}


class DRF_model_python_1613526296143_1_Forest_0 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += DRF_model_python_1613526296143_1_Tree_0_class_0.score0(fdata);
        preds[2] += DRF_model_python_1613526296143_1_Tree_0_class_1.score0(fdata);
    }
}
DRF_model_python_1613526296143_1_Forest_0["__class"] = "DRF_model_python_1613526296143_1_Forest_0";


class DRF_model_python_1613526296143_1_Tree_0_class_0 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[1]) || data[1] < 97.5 ? (/* isNaN */isNaN(data[1]) || data[1] < 84.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 2529.5 ? 0.0 : 0.2) : (/* isNaN */isNaN(data[4]) || data[4] < 76.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 2674.0 ? 0.14285715 : 0.7) : (/* isNaN */isNaN(data[2]) || data[2] < 2798.5 ? 0.0 : 0.1))) : (data[0] < 228.28613 ? (data[2] < 2798.5 ? 0.0 : 0.53846157) : (/* isNaN */isNaN(data[4]) || data[4] < 77.5 ? 1.0 : 0.8)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_0_class_0["__class"] = "DRF_model_python_1613526296143_1_Tree_0_class_0";


class DRF_model_python_1613526296143_1_Tree_0_class_1 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[1]) || data[1] < 97.5 ? (/* isNaN */isNaN(data[1]) || data[1] < 84.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 2529.5 ? 1.0 : 0.8) : (/* isNaN */isNaN(data[4]) || data[4] < 76.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 2674.0 ? 0.85714287 : 0.3) : (/* isNaN */isNaN(data[2]) || data[2] < 2798.5 ? 1.0 : 0.9))) : (data[0] < 228.28613 ? (data[2] < 2798.5 ? 1.0 : 0.46153846) : (/* isNaN */isNaN(data[4]) || data[4] < 77.5 ? 0.0 : 0.2)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_0_class_1["__class"] = "DRF_model_python_1613526296143_1_Tree_0_class_1";


class DRF_model_python_1613526296143_1_Forest_1 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += DRF_model_python_1613526296143_1_Tree_1_class_0.score0(fdata);
        preds[2] += DRF_model_python_1613526296143_1_Tree_1_class_1.score0(fdata);
    }
}
DRF_model_python_1613526296143_1_Forest_1["__class"] = "DRF_model_python_1613526296143_1_Forest_1";


class DRF_model_python_1613526296143_1_Tree_1_class_0 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[0]) || data[0] < 212.49512 ? (/* isNaN */isNaN(data[0]) || data[0] < 159.61607 ? (/* isNaN */isNaN(data[1]) || data[1] < 86.5 ? 0.0 : (/* isNaN */isNaN(data[2]) || data[2] < 2784.5 ? (data[2] < 2412.5 ? 0.2 : 0.0) : 0.3)) : 0.3) : (data[2] < 3739.0 ? (/* isNaN */isNaN(data[4]) || data[4] < 75.5 ? 0.94736844 : 0.5294118) : 1.0));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_1_class_0["__class"] = "DRF_model_python_1613526296143_1_Tree_1_class_0";


class DRF_model_python_1613526296143_1_Tree_1_class_1 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[0]) || data[0] < 212.49512 ? (/* isNaN */isNaN(data[0]) || data[0] < 159.61607 ? (/* isNaN */isNaN(data[1]) || data[1] < 86.5 ? 1.0 : (/* isNaN */isNaN(data[2]) || data[2] < 2784.5 ? (data[2] < 2412.5 ? 0.8 : 1.0) : 0.7)) : 0.7) : (data[2] < 3739.0 ? (/* isNaN */isNaN(data[4]) || data[4] < 75.5 ? 0.05263158 : 0.47058824) : 0.0));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_1_class_1["__class"] = "DRF_model_python_1613526296143_1_Tree_1_class_1";


class DRF_model_python_1613526296143_1_Forest_2 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += DRF_model_python_1613526296143_1_Tree_2_class_0.score0(fdata);
        preds[2] += DRF_model_python_1613526296143_1_Tree_2_class_1.score0(fdata);
    }
}
DRF_model_python_1613526296143_1_Forest_2["__class"] = "DRF_model_python_1613526296143_1_Forest_2";


class DRF_model_python_1613526296143_1_Tree_2_class_0 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[2]) || data[2] < 3096.5 ? (/* isNaN */isNaN(data[0]) || data[0] < 198.58398 ? (/* isNaN */isNaN(data[1]) || data[1] < 106.5 ? (data[4] < 73.5 ? (data[4] < 71.5 ? 0.0 : 0.15384616) : 0.0) : 0.2) : 0.8) : (/* isNaN */isNaN(data[4]) || data[4] < 77.5 ? (data[1] < 106.5 ? 0.8333333 : 1.0) : (/* isNaN */isNaN(data[3]) || data[3] < 16.209375 ? 0.75 : 0.4)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_2_class_0["__class"] = "DRF_model_python_1613526296143_1_Tree_2_class_0";


class DRF_model_python_1613526296143_1_Tree_2_class_1 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[2]) || data[2] < 3072.5 ? (/* isNaN */isNaN(data[0]) || data[0] < 155.72266 ? (/* isNaN */isNaN(data[1]) || data[1] < 82.5 ? 1.0 : (data[2] < 2342.5 ? 0.8333333 : (/* isNaN */isNaN(data[2]) || data[2] < 2735.5 ? 1.0 : 0.9))) : 0.42857143) : (data[4] < 75.5 ? 0.0 : (data[1] < 106.5 ? (data[3] < 17.95078 ? 0.5 : 0.6) : (data[2] < 3848.5 ? 0.2 : 0.0))));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_2_class_1["__class"] = "DRF_model_python_1613526296143_1_Tree_2_class_1";


class DRF_model_python_1613526296143_1_Forest_3 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += DRF_model_python_1613526296143_1_Tree_3_class_0.score0(fdata);
        preds[2] += DRF_model_python_1613526296143_1_Tree_3_class_1.score0(fdata);
    }
}
DRF_model_python_1613526296143_1_Forest_3["__class"] = "DRF_model_python_1613526296143_1_Forest_3";


class DRF_model_python_1613526296143_1_Tree_3_class_0 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[2]) || data[2] < 3096.5 ? (/* isNaN */isNaN(data[0]) || data[0] < 198.58398 ? (data[4] < 73.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 2273.5 ? 0.07692308 : 0.4) : 0.0) : 0.41666666) : (data[0] < 231.66992 ? 0.42105263 : (/* isNaN */isNaN(data[4]) || data[4] < 76.5 ? 1.0 : 0.8666667)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_3_class_0["__class"] = "DRF_model_python_1613526296143_1_Tree_3_class_0";


class DRF_model_python_1613526296143_1_Tree_3_class_1 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[2]) || data[2] < 3072.5 ? (/* isNaN */isNaN(data[0]) || data[0] < 198.58398 ? (data[4] < 73.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 2274.5 ? 0.9230769 : 0.6) : 1.0) : 0.6363636) : (data[0] < 231.66992 ? 0.57894737 : (/* isNaN */isNaN(data[4]) || data[4] < 76.5 ? 0.0 : 0.13333334)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_3_class_1["__class"] = "DRF_model_python_1613526296143_1_Tree_3_class_1";


class DRF_model_python_1613526296143_1_Forest_4 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += DRF_model_python_1613526296143_1_Tree_4_class_0.score0(fdata);
        preds[2] += DRF_model_python_1613526296143_1_Tree_4_class_1.score0(fdata);
    }
}
DRF_model_python_1613526296143_1_Forest_4["__class"] = "DRF_model_python_1613526296143_1_Forest_4";


class DRF_model_python_1613526296143_1_Tree_4_class_0 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[2]) || data[2] < 3096.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 2749.5 ? (data[4] < 73.5 ? (data[4] < 71.5 ? 0.0 : 0.16666667) : 0.0) : (/* isNaN */isNaN(data[0]) || data[0] < 189.56055 ? 0.0625 : 0.5)) : (data[0] < 231.66992 ? 0.5263158 : (/* isNaN */isNaN(data[4]) || data[4] < 75.5 ? 1.0 : 0.8333333)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_4_class_0["__class"] = "DRF_model_python_1613526296143_1_Tree_4_class_0";


class DRF_model_python_1613526296143_1_Tree_4_class_1 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[2]) || data[2] < 3072.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 2749.5 ? (data[4] < 73.5 ? (data[4] < 71.5 ? 1.0 : 0.8333333) : 1.0) : (/* isNaN */isNaN(data[0]) || data[0] < 189.56055 ? 0.9375 : 0.5)) : (data[0] < 231.66992 ? 0.47368422 : (/* isNaN */isNaN(data[4]) || data[4] < 75.5 ? 0.0 : 0.16666667)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_4_class_1["__class"] = "DRF_model_python_1613526296143_1_Tree_4_class_1";


class DRF_model_python_1613526296143_1_Forest_5 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += DRF_model_python_1613526296143_1_Tree_5_class_0.score0(fdata);
        preds[2] += DRF_model_python_1613526296143_1_Tree_5_class_1.score0(fdata);
    }
}
DRF_model_python_1613526296143_1_Forest_5["__class"] = "DRF_model_python_1613526296143_1_Forest_5";


class DRF_model_python_1613526296143_1_Tree_5_class_0 {
    static score0(data: number[]): number {
        const pred: number = (data[3] < 13.750391 ? (data[0] < 201.96777 ? 0.14285715 : (/* isNaN */isNaN(data[4]) || data[4] < 76.5 ? 1.0 : 0.9166667)) : (/* isNaN */isNaN(data[2]) || data[2] < 3018.5 ? (/* isNaN */isNaN(data[1]) || data[1] < 94.5 ? 0.0 : (/* isNaN */isNaN(data[2]) || data[2] < 2761.0 ? 0.0 : 0.3)) : (data[2] < 3436.5 ? (/* isNaN */isNaN(data[3]) || data[3] < 16.685444 ? 0.78571427 : 0.5) : 1.0)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_5_class_0["__class"] = "DRF_model_python_1613526296143_1_Tree_5_class_0";


class DRF_model_python_1613526296143_1_Tree_5_class_1 {
    static score0(data: number[]): number {
        const pred: number = (data[3] < 13.750391 ? (data[0] < 201.96777 ? 0.85714287 : (/* isNaN */isNaN(data[4]) || data[4] < 76.5 ? 0.0 : 0.083333336)) : (/* isNaN */isNaN(data[2]) || data[2] < 3018.5 ? (/* isNaN */isNaN(data[1]) || data[1] < 94.5 ? 1.0 : (/* isNaN */isNaN(data[2]) || data[2] < 2761.0 ? 1.0 : 0.7)) : (data[2] < 3436.5 ? (/* isNaN */isNaN(data[3]) || data[3] < 16.685444 ? 0.21428572 : 0.5) : 0.0)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_5_class_1["__class"] = "DRF_model_python_1613526296143_1_Tree_5_class_1";


class DRF_model_python_1613526296143_1_Forest_6 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += DRF_model_python_1613526296143_1_Tree_6_class_0.score0(fdata);
        preds[2] += DRF_model_python_1613526296143_1_Tree_6_class_1.score0(fdata);
    }
}
DRF_model_python_1613526296143_1_Forest_6["__class"] = "DRF_model_python_1613526296143_1_Forest_6";


class DRF_model_python_1613526296143_1_Tree_6_class_0 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[0]) || data[0] < 212.49512 ? (/* isNaN */isNaN(data[1]) || data[1] < 84.5 ? 0.0 : (/* isNaN */isNaN(data[2]) || data[2] < 2922.5 ? (data[2] < 2288.5 ? 0.2 : 0.0) : 0.45454547)) : (data[2] < 3429.0 ? (/* isNaN */isNaN(data[1]) || data[1] < 102.5 ? 0.7692308 : 0.41666666) : (data[2] < 3739.5 ? 0.8666667 : 1.0)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_6_class_0["__class"] = "DRF_model_python_1613526296143_1_Tree_6_class_0";


class DRF_model_python_1613526296143_1_Tree_6_class_1 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[0]) || data[0] < 212.49512 ? (/* isNaN */isNaN(data[1]) || data[1] < 84.5 ? 1.0 : (/* isNaN */isNaN(data[2]) || data[2] < 2922.5 ? (data[2] < 2288.5 ? 0.8 : 1.0) : 0.54545456)) : (data[2] < 3429.0 ? (/* isNaN */isNaN(data[1]) || data[1] < 102.5 ? 0.23076923 : 0.5833333) : (data[2] < 3739.5 ? 0.13333334 : 0.0)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_6_class_1["__class"] = "DRF_model_python_1613526296143_1_Tree_6_class_1";


class DRF_model_python_1613526296143_1_Forest_7 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += DRF_model_python_1613526296143_1_Tree_7_class_0.score0(fdata);
        preds[2] += DRF_model_python_1613526296143_1_Tree_7_class_1.score0(fdata);
    }
}
DRF_model_python_1613526296143_1_Forest_7["__class"] = "DRF_model_python_1613526296143_1_Forest_7";


class DRF_model_python_1613526296143_1_Tree_7_class_0 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[1]) || data[1] < 97.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 3094.5 ? (/* isNaN */isNaN(data[1]) || data[1] < 84.0 ? 0.0 : (data[0] < 112.109375 ? 0.3 : (/* isNaN */isNaN(data[0]) || data[0] < 144.89795 ? 0.0 : 0.07692308))) : 0.64285713) : (data[2] < 2922.5 ? 0.23076923 : (data[0] < 240.69336 ? 0.6 : 1.0)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_7_class_0["__class"] = "DRF_model_python_1613526296143_1_Tree_7_class_0";


class DRF_model_python_1613526296143_1_Tree_7_class_1 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[1]) || data[1] < 97.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 3094.5 ? (/* isNaN */isNaN(data[1]) || data[1] < 84.0 ? 1.0 : (data[0] < 112.109375 ? 0.7 : (/* isNaN */isNaN(data[0]) || data[0] < 144.89795 ? 1.0 : 0.9230769))) : 0.35714287) : (data[2] < 2922.5 ? 0.7692308 : (data[0] < 240.69336 ? 0.4 : 0.0)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_7_class_1["__class"] = "DRF_model_python_1613526296143_1_Tree_7_class_1";


class DRF_model_python_1613526296143_1_Forest_8 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += DRF_model_python_1613526296143_1_Tree_8_class_0.score0(fdata);
        preds[2] += DRF_model_python_1613526296143_1_Tree_8_class_1.score0(fdata);
    }
}
DRF_model_python_1613526296143_1_Forest_8["__class"] = "DRF_model_python_1613526296143_1_Forest_8";


class DRF_model_python_1613526296143_1_Tree_8_class_0 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[1]) || data[1] < 97.5 ? (data[4] < 76.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 2736.0 ? (/* isNaN */isNaN(data[1]) || data[1] < 87.5 ? 0.0 : 0.1764706) : 0.7) : (/* isNaN */isNaN(data[0]) || data[0] < 148.20312 ? 0.0 : 0.27272728)) : (data[2] < 3432.5 ? (data[4] < 77.5 ? 0.5 : 0.0) : (/* isNaN */isNaN(data[4]) || data[4] < 76.5 ? 1.0 : 0.93333334)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_8_class_0["__class"] = "DRF_model_python_1613526296143_1_Tree_8_class_0";


class DRF_model_python_1613526296143_1_Tree_8_class_1 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[1]) || data[1] < 97.5 ? (data[4] < 76.5 ? (/* isNaN */isNaN(data[2]) || data[2] < 2736.0 ? (/* isNaN */isNaN(data[1]) || data[1] < 87.5 ? 1.0 : 0.8235294) : 0.3) : (/* isNaN */isNaN(data[0]) || data[0] < 148.20312 ? 1.0 : 0.72727275)) : (data[2] < 3432.5 ? (data[4] < 77.5 ? 0.5 : 1.0) : (/* isNaN */isNaN(data[4]) || data[4] < 76.5 ? 0.0 : 0.06666667)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_8_class_1["__class"] = "DRF_model_python_1613526296143_1_Tree_8_class_1";


class DRF_model_python_1613526296143_1_Forest_9 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += DRF_model_python_1613526296143_1_Tree_9_class_0.score0(fdata);
        preds[2] += DRF_model_python_1613526296143_1_Tree_9_class_1.score0(fdata);
    }
}
DRF_model_python_1613526296143_1_Forest_9["__class"] = "DRF_model_python_1613526296143_1_Forest_9";


class DRF_model_python_1613526296143_1_Tree_9_class_0 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[1]) || data[1] < 97.5 ? (/* isNaN */isNaN(data[0]) || data[0] < 212.49512 ? (/* isNaN */isNaN(data[2]) || data[2] < 2977.5 ? (data[3] < 14.126562 ? 0.09090909 : (/* isNaN */isNaN(data[2]) || data[2] < 2687.5 ? 0.013157895 : 0.09090909)) : 0.3) : 0.7692308) : (/* isNaN */isNaN(data[4]) || data[4] < 77.5 ? (data[1] < 111.5 ? (data[0] < 227.91016 ? 0.5 : 0.90909094) : 1.0) : (/* isNaN */isNaN(data[2]) || data[2] < 3363.5 ? 0.0 : 0.75)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_9_class_0["__class"] = "DRF_model_python_1613526296143_1_Tree_9_class_0";


class DRF_model_python_1613526296143_1_Tree_9_class_1 {
    static score0(data: number[]): number {
        const pred: number = (/* isNaN */isNaN(data[1]) || data[1] < 97.5 ? (/* isNaN */isNaN(data[0]) || data[0] < 212.49512 ? (/* isNaN */isNaN(data[2]) || data[2] < 2977.5 ? (data[3] < 14.126562 ? 0.90909094 : (/* isNaN */isNaN(data[2]) || data[2] < 2687.5 ? 0.9868421 : 0.90909094)) : 0.7) : 0.23076923) : (/* isNaN */isNaN(data[4]) || data[4] < 77.5 ? (data[1] < 111.5 ? (data[0] < 227.91016 ? 0.5 : 0.09090909) : 0.0) : (/* isNaN */isNaN(data[2]) || data[2] < 3363.5 ? 1.0 : 0.25)));
        return pred;
    }
}
DRF_model_python_1613526296143_1_Tree_9_class_1["__class"] = "DRF_model_python_1613526296143_1_Tree_9_class_1";




DRF_model_python_1613526296143_1_ColInfo_5.__static_initialize();

NamesHolder_DRF_model_python_1613526296143_1.__static_initialize();
