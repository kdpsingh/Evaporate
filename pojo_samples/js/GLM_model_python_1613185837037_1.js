/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class GLM_model_python_1613185837037_1 {
    isSupervised() {
        return true;
    }
    nfeatures() {
        return 4;
    }
    nclasses() {
        return 2;
    }
    static NAMES_$LI$() { if (GLM_model_python_1613185837037_1.NAMES == null) {
        GLM_model_python_1613185837037_1.NAMES = NamesHolder_GLM_model_python_1613185837037_1.VALUES_$LI$();
    } return GLM_model_python_1613185837037_1.NAMES; }
    static DOMAINS_$LI$() { if (GLM_model_python_1613185837037_1.DOMAINS == null) {
        GLM_model_python_1613185837037_1.DOMAINS = [null, null, null, null, GLM_model_python_1613185837037_1_ColInfo_4.VALUES_$LI$()];
    } return GLM_model_python_1613185837037_1.DOMAINS; }
    getUUID() {
        return /* toString */ ('' + (-131003003702305964));
    }
    static GLM_logitInv(x) {
        return 1.0 / (Math.exp(-x) + 1.0);
    }
    score0(data, preds) {
        const b = GLM_model_python_1613185837037_1.BETA.VALUES_$LI$();
        for (let i = 0; i < 0; ++i) {
            if ( /* isNaN */isNaN(data[i]))
                data[i] = GLM_model_python_1613185837037_1.CAT_MODES.VALUES_$LI$()[i];
            ;
        }
        for (let i = 0; i < 4; ++i) {
            if ( /* isNaN */isNaN(data[i + 0]))
                data[i + 0] = GLM_model_python_1613185837037_1.NUM_MEANS.VALUES_$LI$()[i];
            ;
        }
        let eta = 0.0;
        for (let i = 0; i < GLM_model_python_1613185837037_1.CATOFFS_$LI$().length - 1; ++i) {
            {
                let ival = (data[i] | 0);
                if (ival !== data[i])
                    throw Object.defineProperty(new Error("categorical value out of range"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                ival += GLM_model_python_1613185837037_1.CATOFFS_$LI$()[i];
                if (ival < GLM_model_python_1613185837037_1.CATOFFS_$LI$()[i + 1])
                    eta += b[ival];
            }
            ;
        }
        for (let i = 0; i < b.length - 1 - 0; ++i) {
            eta += b[0 + i] * data[i];
        }
        eta += b[b.length - 1];
        const mu = GLM_model_python_1613185837037_1.GLM_logitInv(eta);
        preds[0] = (mu >= 0.30183246546652454) ? 1 : 0;
        preds[1] = 1.0 - mu;
        preds[2] = mu;
        return preds;
    }
    static CATOFFS_$LI$() { if (GLM_model_python_1613185837037_1.CATOFFS == null) {
        GLM_model_python_1613185837037_1.CATOFFS = [0];
    } return GLM_model_python_1613185837037_1.CATOFFS; }
}
GLM_model_python_1613185837037_1.NCLASSES = 2;
GLM_model_python_1613185837037_1.PRIOR_CLASS_DISTRIB = null;
GLM_model_python_1613185837037_1.MODEL_CLASS_DISTRIB = null;
GLM_model_python_1613185837037_1["__class"] = "GLM_model_python_1613185837037_1";
(function (GLM_model_python_1613185837037_1) {
    class BETA {
        constructor() {
        }
        static __static_initialize() { if (!BETA.__static_initialized) {
            BETA.__static_initialized = true;
            BETA.__static_initializer_0();
        } }
        static VALUES_$LI$() { BETA.__static_initialize(); if (BETA.VALUES == null) {
            BETA.VALUES = [0, 0, 0, 0, 0];
        } return BETA.VALUES; }
        static __static_initializer_0() {
            BETA.BETA_0.fill(BETA.VALUES_$LI$());
        }
    }
    BETA.__static_initialized = false;
    GLM_model_python_1613185837037_1.BETA = BETA;
    BETA["__class"] = "GLM_model_python_1613185837037_1.BETA";
    BETA["__interfaces"] = ["java.io.Serializable"];
    (function (BETA) {
        class BETA_0 {
            static fill(sa) {
                sa[0] = -0.02168030732498942;
                sa[1] = -0.5081360879035385;
                sa[2] = 0.02832790010586815;
                sa[3] = 1.0731274341195762;
                sa[4] = -5.766595526099149;
            }
            constructor() {
            }
        }
        BETA.BETA_0 = BETA_0;
        BETA_0["__class"] = "GLM_model_python_1613185837037_1.BETA.BETA_0";
        BETA_0["__interfaces"] = ["java.io.Serializable"];
    })(BETA = GLM_model_python_1613185837037_1.BETA || (GLM_model_python_1613185837037_1.BETA = {}));
    class NUM_MEANS {
        constructor() {
        }
        static __static_initialize() { if (!NUM_MEANS.__static_initialized) {
            NUM_MEANS.__static_initialized = true;
            NUM_MEANS.__static_initializer_0();
        } }
        static VALUES_$LI$() { NUM_MEANS.__static_initialize(); if (NUM_MEANS.VALUES == null) {
            NUM_MEANS.VALUES = [0, 0, 0, 0];
        } return NUM_MEANS.VALUES; }
        static __static_initializer_0() {
            NUM_MEANS.NUM_MEANS_0.fill(NUM_MEANS.VALUES_$LI$());
        }
    }
    NUM_MEANS.__static_initialized = false;
    GLM_model_python_1613185837037_1.NUM_MEANS = NUM_MEANS;
    NUM_MEANS["__class"] = "GLM_model_python_1613185837037_1.NUM_MEANS";
    NUM_MEANS["__interfaces"] = ["java.io.Serializable"];
    (function (NUM_MEANS) {
        class NUM_MEANS_0 {
            static fill(sa) {
                sa[0] = 66.03947368421103;
                sa[1] = 1.095490716180382;
                sa[2] = 15.408631578947343;
                sa[3] = 6.384210526315727;
            }
            constructor() {
            }
        }
        NUM_MEANS.NUM_MEANS_0 = NUM_MEANS_0;
        NUM_MEANS_0["__class"] = "GLM_model_python_1613185837037_1.NUM_MEANS.NUM_MEANS_0";
        NUM_MEANS_0["__interfaces"] = ["java.io.Serializable"];
    })(NUM_MEANS = GLM_model_python_1613185837037_1.NUM_MEANS || (GLM_model_python_1613185837037_1.NUM_MEANS = {}));
    class CAT_MODES {
        constructor() {
        }
        static __static_initialize() { if (!CAT_MODES.__static_initialized) {
            CAT_MODES.__static_initialized = true;
            CAT_MODES.__static_initializer_0();
        } }
        static VALUES_$LI$() { CAT_MODES.__static_initialize(); if (CAT_MODES.VALUES == null) {
            CAT_MODES.VALUES = [];
        } return CAT_MODES.VALUES; }
        static __static_initializer_0() {
        }
    }
    CAT_MODES.__static_initialized = false;
    GLM_model_python_1613185837037_1.CAT_MODES = CAT_MODES;
    CAT_MODES["__class"] = "GLM_model_python_1613185837037_1.CAT_MODES";
    CAT_MODES["__interfaces"] = ["java.io.Serializable"];
})(GLM_model_python_1613185837037_1 || (GLM_model_python_1613185837037_1 = {}));
class NamesHolder_GLM_model_python_1613185837037_1 {
    constructor() {
    }
    static __static_initialize() { if (!NamesHolder_GLM_model_python_1613185837037_1.__static_initialized) {
        NamesHolder_GLM_model_python_1613185837037_1.__static_initialized = true;
        NamesHolder_GLM_model_python_1613185837037_1.__static_initializer_0();
    } }
    static VALUES_$LI$() { NamesHolder_GLM_model_python_1613185837037_1.__static_initialize(); if (NamesHolder_GLM_model_python_1613185837037_1.VALUES == null) {
        NamesHolder_GLM_model_python_1613185837037_1.VALUES = [null, null, null, null];
    } return NamesHolder_GLM_model_python_1613185837037_1.VALUES; }
    static __static_initializer_0() {
        NamesHolder_GLM_model_python_1613185837037_1.NamesHolder_GLM_model_python_1613185837037_1_0.fill(NamesHolder_GLM_model_python_1613185837037_1.VALUES_$LI$());
    }
}
NamesHolder_GLM_model_python_1613185837037_1.__static_initialized = false;
NamesHolder_GLM_model_python_1613185837037_1["__class"] = "NamesHolder_GLM_model_python_1613185837037_1";
NamesHolder_GLM_model_python_1613185837037_1["__interfaces"] = ["java.io.Serializable"];
(function (NamesHolder_GLM_model_python_1613185837037_1) {
    class NamesHolder_GLM_model_python_1613185837037_1_0 {
        static fill(sa) {
            sa[0] = "AGE";
            sa[1] = "RACE";
            sa[2] = "PSA";
            sa[3] = "GLEASON";
        }
        constructor() {
        }
    }
    NamesHolder_GLM_model_python_1613185837037_1.NamesHolder_GLM_model_python_1613185837037_1_0 = NamesHolder_GLM_model_python_1613185837037_1_0;
    NamesHolder_GLM_model_python_1613185837037_1_0["__class"] = "NamesHolder_GLM_model_python_1613185837037_1.NamesHolder_GLM_model_python_1613185837037_1_0";
    NamesHolder_GLM_model_python_1613185837037_1_0["__interfaces"] = ["java.io.Serializable"];
})(NamesHolder_GLM_model_python_1613185837037_1 || (NamesHolder_GLM_model_python_1613185837037_1 = {}));
class GLM_model_python_1613185837037_1_ColInfo_4 {
    constructor() {
    }
    static __static_initialize() { if (!GLM_model_python_1613185837037_1_ColInfo_4.__static_initialized) {
        GLM_model_python_1613185837037_1_ColInfo_4.__static_initialized = true;
        GLM_model_python_1613185837037_1_ColInfo_4.__static_initializer_0();
    } }
    static VALUES_$LI$() { GLM_model_python_1613185837037_1_ColInfo_4.__static_initialize(); if (GLM_model_python_1613185837037_1_ColInfo_4.VALUES == null) {
        GLM_model_python_1613185837037_1_ColInfo_4.VALUES = [null, null];
    } return GLM_model_python_1613185837037_1_ColInfo_4.VALUES; }
    static __static_initializer_0() {
        GLM_model_python_1613185837037_1_ColInfo_4.GLM_model_python_1613185837037_1_ColInfo_4_0.fill(GLM_model_python_1613185837037_1_ColInfo_4.VALUES_$LI$());
    }
}
GLM_model_python_1613185837037_1_ColInfo_4.__static_initialized = false;
GLM_model_python_1613185837037_1_ColInfo_4["__class"] = "GLM_model_python_1613185837037_1_ColInfo_4";
GLM_model_python_1613185837037_1_ColInfo_4["__interfaces"] = ["java.io.Serializable"];
(function (GLM_model_python_1613185837037_1_ColInfo_4) {
    class GLM_model_python_1613185837037_1_ColInfo_4_0 {
        static fill(sa) {
            sa[0] = "0";
            sa[1] = "1";
        }
        constructor() {
        }
    }
    GLM_model_python_1613185837037_1_ColInfo_4.GLM_model_python_1613185837037_1_ColInfo_4_0 = GLM_model_python_1613185837037_1_ColInfo_4_0;
    GLM_model_python_1613185837037_1_ColInfo_4_0["__class"] = "GLM_model_python_1613185837037_1_ColInfo_4.GLM_model_python_1613185837037_1_ColInfo_4_0";
    GLM_model_python_1613185837037_1_ColInfo_4_0["__interfaces"] = ["java.io.Serializable"];
})(GLM_model_python_1613185837037_1_ColInfo_4 || (GLM_model_python_1613185837037_1_ColInfo_4 = {}));
GLM_model_python_1613185837037_1_ColInfo_4.__static_initialize();
NamesHolder_GLM_model_python_1613185837037_1.__static_initialize();
GLM_model_python_1613185837037_1.CAT_MODES.__static_initialize();
GLM_model_python_1613185837037_1.NUM_MEANS.__static_initialize();
GLM_model_python_1613185837037_1.BETA.__static_initialize();

exports.simpGLM = GLM_model_python_1613185837037_1;
