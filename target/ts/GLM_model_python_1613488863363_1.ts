/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class GLM_model_python_1613488863363_1 {
    public isSupervised(): boolean {
        return true;
    }

    public nfeatures(): number {
        return 4;
    }

    public nclasses(): number {
        return 2;
    }

    public static NAMES: string[]; public static NAMES_$LI$(): string[] { if (GLM_model_python_1613488863363_1.NAMES == null) { GLM_model_python_1613488863363_1.NAMES = NamesHolder_GLM_model_python_1613488863363_1.VALUES_$LI$(); }  return GLM_model_python_1613488863363_1.NAMES; }

    public static NCLASSES: number = 2;

    public static DOMAINS: string[][]; public static DOMAINS_$LI$(): string[][] { if (GLM_model_python_1613488863363_1.DOMAINS == null) { GLM_model_python_1613488863363_1.DOMAINS = [GLM_model_python_1613488863363_1_ColInfo_0.VALUES_$LI$(), null, null, null, GLM_model_python_1613488863363_1_ColInfo_4.VALUES_$LI$()]; }  return GLM_model_python_1613488863363_1.DOMAINS; }

    public static PRIOR_CLASS_DISTRIB: number[] = null;

    public static MODEL_CLASS_DISTRIB: number[] = null;

    public getUUID(): string {
        return /* toString */(''+(-2551455267043039524));
    }

    public score0(data: number[], preds: number[]): number[] {
        const b: number[] = GLM_model_python_1613488863363_1.BETA.VALUES_$LI$();
        for(let i: number = 0; i < 1; ++i) {if (/* isNaN */isNaN(data[i]))data[i] = GLM_model_python_1613488863363_1.CAT_MODES.VALUES_$LI$()[i];;}
        for(let i: number = 0; i < 3; ++i) {if (/* isNaN */isNaN(data[i + 1]))data[i + 1] = GLM_model_python_1613488863363_1.NUM_MEANS.VALUES_$LI$()[i];;}
        let eta: number = 0.0;
        for(let i: number = 0; i < GLM_model_python_1613488863363_1.CATOFFS_$LI$().length - 1; ++i) {{
            let ival: number = (<number>data[i]|0);
            if (ival !== data[i])throw new java.lang.IllegalArgumentException("categorical value out of range");
            ival += GLM_model_python_1613488863363_1.CATOFFS_$LI$()[i];
            if (ival < GLM_model_python_1613488863363_1.CATOFFS_$LI$()[i + 1])eta += b[ival];
        };}
        for(let i: number = 1; i < b.length - 1 - 1; ++i) {eta += b[1 + i] * data[i];}
        eta += b[b.length - 1];
        const mu: number = GenModelEva.GLM_logitInv(eta);
        preds[0] = (mu >= 0.3013814467120079) ? 1 : 0;
        preds[1] = 1.0 - mu;
        preds[2] = mu;
        return preds;
    }

    public static CATOFFS: number[]; public static CATOFFS_$LI$(): number[] { if (GLM_model_python_1613488863363_1.CATOFFS == null) { GLM_model_python_1613488863363_1.CATOFFS = [0, 2]; }  return GLM_model_python_1613488863363_1.CATOFFS; }
}
GLM_model_python_1613488863363_1["__class"] = "GLM_model_python_1613488863363_1";


namespace GLM_model_python_1613488863363_1 {

    export class BETA implements java.io.Serializable {
        static __static_initialized: boolean = false;
        static __static_initialize() { if (!BETA.__static_initialized) { BETA.__static_initialized = true; BETA.__static_initializer_0(); } }

        public static VALUES: number[]; public static VALUES_$LI$(): number[] { BETA.__static_initialize(); if (BETA.VALUES == null) { BETA.VALUES = [0, 0, 0, 0, 0, 0]; }  return BETA.VALUES; }

        static  __static_initializer_0() {
            BETA.BETA_0.fill(BETA.VALUES_$LI$());
        }

        constructor() {
        }
    }
    BETA["__class"] = "GLM_model_python_1613488863363_1.BETA";
    BETA["__interfaces"] = ["java.io.Serializable"];



    export namespace BETA {

        export class BETA_0 implements java.io.Serializable {
            static fill(sa: number[]) {
                sa[0] = 0.2502528707088587;
                sa[1] = -0.24203900661628655;
                sa[2] = -0.021574877311133958;
                sa[3] = 0.02823624475366092;
                sa[4] = 1.072934769711424;
                sa[5] = -6.531154239276896;
            }

            constructor() {
            }
        }
        BETA_0["__class"] = "GLM_model_python_1613488863363_1.BETA.BETA_0";
        BETA_0["__interfaces"] = ["java.io.Serializable"];


    }


    export class NUM_MEANS implements java.io.Serializable {
        static __static_initialized: boolean = false;
        static __static_initialize() { if (!NUM_MEANS.__static_initialized) { NUM_MEANS.__static_initialized = true; NUM_MEANS.__static_initializer_0(); } }

        public static VALUES: number[]; public static VALUES_$LI$(): number[] { NUM_MEANS.__static_initialize(); if (NUM_MEANS.VALUES == null) { NUM_MEANS.VALUES = [0, 0, 0]; }  return NUM_MEANS.VALUES; }

        static  __static_initializer_0() {
            NUM_MEANS.NUM_MEANS_0.fill(NUM_MEANS.VALUES_$LI$());
        }

        constructor() {
        }
    }
    NUM_MEANS["__class"] = "GLM_model_python_1613488863363_1.NUM_MEANS";
    NUM_MEANS["__interfaces"] = ["java.io.Serializable"];



    export namespace NUM_MEANS {

        export class NUM_MEANS_0 implements java.io.Serializable {
            static fill(sa: number[]) {
                sa[0] = 66.03947368421103;
                sa[1] = 15.408631578947343;
                sa[2] = 6.384210526315727;
            }

            constructor() {
            }
        }
        NUM_MEANS_0["__class"] = "GLM_model_python_1613488863363_1.NUM_MEANS.NUM_MEANS_0";
        NUM_MEANS_0["__interfaces"] = ["java.io.Serializable"];


    }


    export class CAT_MODES implements java.io.Serializable {
        static __static_initialized: boolean = false;
        static __static_initialize() { if (!CAT_MODES.__static_initialized) { CAT_MODES.__static_initialized = true; CAT_MODES.__static_initializer_0(); } }

        public static VALUES: number[]; public static VALUES_$LI$(): number[] { CAT_MODES.__static_initialize(); if (CAT_MODES.VALUES == null) { CAT_MODES.VALUES = [0]; }  return CAT_MODES.VALUES; }

        static  __static_initializer_0() {
            CAT_MODES.CAT_MODES_0.fill(CAT_MODES.VALUES_$LI$());
        }

        constructor() {
        }
    }
    CAT_MODES["__class"] = "GLM_model_python_1613488863363_1.CAT_MODES";
    CAT_MODES["__interfaces"] = ["java.io.Serializable"];



    export namespace CAT_MODES {

        export class CAT_MODES_0 implements java.io.Serializable {
            static fill(sa: number[]) {
                sa[0] = 0;
            }

            constructor() {
            }
        }
        CAT_MODES_0["__class"] = "GLM_model_python_1613488863363_1.CAT_MODES.CAT_MODES_0";
        CAT_MODES_0["__interfaces"] = ["java.io.Serializable"];


    }

}


class NamesHolder_GLM_model_python_1613488863363_1 implements java.io.Serializable {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!NamesHolder_GLM_model_python_1613488863363_1.__static_initialized) { NamesHolder_GLM_model_python_1613488863363_1.__static_initialized = true; NamesHolder_GLM_model_python_1613488863363_1.__static_initializer_0(); } }

    public static VALUES: string[]; public static VALUES_$LI$(): string[] { NamesHolder_GLM_model_python_1613488863363_1.__static_initialize(); if (NamesHolder_GLM_model_python_1613488863363_1.VALUES == null) { NamesHolder_GLM_model_python_1613488863363_1.VALUES = [null, null, null, null]; }  return NamesHolder_GLM_model_python_1613488863363_1.VALUES; }

    static  __static_initializer_0() {
        NamesHolder_GLM_model_python_1613488863363_1.NamesHolder_GLM_model_python_1613488863363_1_0.fill(NamesHolder_GLM_model_python_1613488863363_1.VALUES_$LI$());
    }

    constructor() {
    }
}
NamesHolder_GLM_model_python_1613488863363_1["__class"] = "NamesHolder_GLM_model_python_1613488863363_1";
NamesHolder_GLM_model_python_1613488863363_1["__interfaces"] = ["java.io.Serializable"];



namespace NamesHolder_GLM_model_python_1613488863363_1 {

    export class NamesHolder_GLM_model_python_1613488863363_1_0 implements java.io.Serializable {
        static fill(sa: string[]) {
            sa[0] = "RACE";
            sa[1] = "AGE";
            sa[2] = "PSA";
            sa[3] = "GLEASON";
        }

        constructor() {
        }
    }
    NamesHolder_GLM_model_python_1613488863363_1_0["__class"] = "NamesHolder_GLM_model_python_1613488863363_1.NamesHolder_GLM_model_python_1613488863363_1_0";
    NamesHolder_GLM_model_python_1613488863363_1_0["__interfaces"] = ["java.io.Serializable"];


}


class GLM_model_python_1613488863363_1_ColInfo_0 implements java.io.Serializable {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!GLM_model_python_1613488863363_1_ColInfo_0.__static_initialized) { GLM_model_python_1613488863363_1_ColInfo_0.__static_initialized = true; GLM_model_python_1613488863363_1_ColInfo_0.__static_initializer_0(); } }

    public static VALUES: string[]; public static VALUES_$LI$(): string[] { GLM_model_python_1613488863363_1_ColInfo_0.__static_initialize(); if (GLM_model_python_1613488863363_1_ColInfo_0.VALUES == null) { GLM_model_python_1613488863363_1_ColInfo_0.VALUES = [null, null]; }  return GLM_model_python_1613488863363_1_ColInfo_0.VALUES; }

    static  __static_initializer_0() {
        GLM_model_python_1613488863363_1_ColInfo_0.GLM_model_python_1613488863363_1_ColInfo_0_0.fill(GLM_model_python_1613488863363_1_ColInfo_0.VALUES_$LI$());
    }

    constructor() {
    }
}
GLM_model_python_1613488863363_1_ColInfo_0["__class"] = "GLM_model_python_1613488863363_1_ColInfo_0";
GLM_model_python_1613488863363_1_ColInfo_0["__interfaces"] = ["java.io.Serializable"];



namespace GLM_model_python_1613488863363_1_ColInfo_0 {

    export class GLM_model_python_1613488863363_1_ColInfo_0_0 implements java.io.Serializable {
        static fill(sa: string[]) {
            sa[0] = "1";
            sa[1] = "2";
        }

        constructor() {
        }
    }
    GLM_model_python_1613488863363_1_ColInfo_0_0["__class"] = "GLM_model_python_1613488863363_1_ColInfo_0.GLM_model_python_1613488863363_1_ColInfo_0_0";
    GLM_model_python_1613488863363_1_ColInfo_0_0["__interfaces"] = ["java.io.Serializable"];


}


class GLM_model_python_1613488863363_1_ColInfo_4 implements java.io.Serializable {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!GLM_model_python_1613488863363_1_ColInfo_4.__static_initialized) { GLM_model_python_1613488863363_1_ColInfo_4.__static_initialized = true; GLM_model_python_1613488863363_1_ColInfo_4.__static_initializer_0(); } }

    public static VALUES: string[]; public static VALUES_$LI$(): string[] { GLM_model_python_1613488863363_1_ColInfo_4.__static_initialize(); if (GLM_model_python_1613488863363_1_ColInfo_4.VALUES == null) { GLM_model_python_1613488863363_1_ColInfo_4.VALUES = [null, null]; }  return GLM_model_python_1613488863363_1_ColInfo_4.VALUES; }

    static  __static_initializer_0() {
        GLM_model_python_1613488863363_1_ColInfo_4.GLM_model_python_1613488863363_1_ColInfo_4_0.fill(GLM_model_python_1613488863363_1_ColInfo_4.VALUES_$LI$());
    }

    constructor() {
    }
}
GLM_model_python_1613488863363_1_ColInfo_4["__class"] = "GLM_model_python_1613488863363_1_ColInfo_4";
GLM_model_python_1613488863363_1_ColInfo_4["__interfaces"] = ["java.io.Serializable"];



namespace GLM_model_python_1613488863363_1_ColInfo_4 {

    export class GLM_model_python_1613488863363_1_ColInfo_4_0 implements java.io.Serializable {
        static fill(sa: string[]) {
            sa[0] = "0";
            sa[1] = "1";
        }

        constructor() {
        }
    }
    GLM_model_python_1613488863363_1_ColInfo_4_0["__class"] = "GLM_model_python_1613488863363_1_ColInfo_4.GLM_model_python_1613488863363_1_ColInfo_4_0";
    GLM_model_python_1613488863363_1_ColInfo_4_0["__interfaces"] = ["java.io.Serializable"];


}




GLM_model_python_1613488863363_1_ColInfo_4.__static_initialize();

GLM_model_python_1613488863363_1_ColInfo_0.__static_initialize();

NamesHolder_GLM_model_python_1613488863363_1.__static_initialize();

GLM_model_python_1613488863363_1.CAT_MODES.__static_initialize();

GLM_model_python_1613488863363_1.NUM_MEANS.__static_initialize();

GLM_model_python_1613488863363_1.BETA.__static_initialize();
