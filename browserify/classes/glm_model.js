const {GenModel}=require("./GenModel.js");
/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class glm_model {
    isSupervised() {
        return true;
    }
    nfeatures() {
        return 4;
    }
    nclasses() {
        return 2;
    }
    static NAMES_$LI$() { if (glm_model.NAMES == null) {
        glm_model.NAMES = NamesHolder_glm_model.VALUES_$LI$();
    } return glm_model.NAMES; }
    static DOMAINS_$LI$() { if (glm_model.DOMAINS == null) {
        glm_model.DOMAINS = [glm_model_ColInfo_0.VALUES_$LI$(), null, null, null, glm_model_ColInfo_4.VALUES_$LI$()];
    } return glm_model.DOMAINS; }
    getUUID() {
        return /* toString */ ('' + (141935666827635768));
    }
    score0(data, preds) {
        const b = glm_model.BETA.VALUES_$LI$();
        for (let i = 0; i < 1; ++i) {
            if ( /* isNaN */isNaN(data[i]))
                data[i] = glm_model.CAT_MODES.VALUES_$LI$()[i];
            ;
        }
        for (let i = 0; i < 3; ++i) {
            if ( /* isNaN */isNaN(data[i + 1]))
                data[i + 1] = glm_model.NUM_MEANS.VALUES_$LI$()[i];
            ;
        }
        let eta = 0.0;
        for (let i = 0; i < glm_model.CATOFFS_$LI$().length - 1; ++i) {
            {
                let ival = (data[i] | 0);
                if (ival !== data[i])
                    throw new java.lang.IllegalArgumentException("categorical value out of range");
                ival += glm_model.CATOFFS_$LI$()[i];
                if (ival < glm_model.CATOFFS_$LI$()[i + 1])
                    eta += b[ival];
            }
            ;
        }
        for (let i = 1; i < b.length - 1 - 1; ++i) {
            eta += b[1 + i] * data[i];
        }
        eta += b[b.length - 1];
        const mu = GenModel.GLM_logitInv(eta);
        preds[0] = (mu >= 0.3013814467120079) ? 1 : 0;
        preds[1] = 1.0 - mu;
        preds[2] = mu;
        return preds;
    }
    static CATOFFS_$LI$() { if (glm_model.CATOFFS == null) {
        glm_model.CATOFFS = [0, 2];
    } return glm_model.CATOFFS; }
}
glm_model.NCLASSES = 2;
glm_model.PRIOR_CLASS_DISTRIB = null;
glm_model.MODEL_CLASS_DISTRIB = null;
glm_model["__class"] = "glm_model";
(function (glm_model) {
    class BETA {
        constructor() {
        }
        static __static_initialize() { if (!BETA.__static_initialized) {
            BETA.__static_initialized = true;
            BETA.__static_initializer_0();
        } }
        static VALUES_$LI$() { BETA.__static_initialize(); if (BETA.VALUES == null) {
            BETA.VALUES = [0, 0, 0, 0, 0, 0];
        } return BETA.VALUES; }
        static __static_initializer_0() {
            BETA.BETA_0.fill(BETA.VALUES_$LI$());
        }
    }
    BETA.__static_initialized = false;
    glm_model.BETA = BETA;
    BETA["__class"] = "glm_model.BETA";
    BETA["__interfaces"] = ["java.io.Serializable"];
    (function (BETA) {
        class BETA_0 {
            static fill(sa) {
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
        BETA.BETA_0 = BETA_0;
        BETA_0["__class"] = "glm_model.BETA.BETA_0";
        BETA_0["__interfaces"] = ["java.io.Serializable"];
    })(BETA = glm_model.BETA || (glm_model.BETA = {}));
    class NUM_MEANS {
        constructor() {
        }
        static __static_initialize() { if (!NUM_MEANS.__static_initialized) {
            NUM_MEANS.__static_initialized = true;
            NUM_MEANS.__static_initializer_0();
        } }
        static VALUES_$LI$() { NUM_MEANS.__static_initialize(); if (NUM_MEANS.VALUES == null) {
            NUM_MEANS.VALUES = [0, 0, 0];
        } return NUM_MEANS.VALUES; }
        static __static_initializer_0() {
            NUM_MEANS.NUM_MEANS_0.fill(NUM_MEANS.VALUES_$LI$());
        }
    }
    NUM_MEANS.__static_initialized = false;
    glm_model.NUM_MEANS = NUM_MEANS;
    NUM_MEANS["__class"] = "glm_model.NUM_MEANS";
    NUM_MEANS["__interfaces"] = ["java.io.Serializable"];
    (function (NUM_MEANS) {
        class NUM_MEANS_0 {
            static fill(sa) {
                sa[0] = 66.03947368421103;
                sa[1] = 15.408631578947343;
                sa[2] = 6.384210526315727;
            }
            constructor() {
            }
        }
        NUM_MEANS.NUM_MEANS_0 = NUM_MEANS_0;
        NUM_MEANS_0["__class"] = "glm_model.NUM_MEANS.NUM_MEANS_0";
        NUM_MEANS_0["__interfaces"] = ["java.io.Serializable"];
    })(NUM_MEANS = glm_model.NUM_MEANS || (glm_model.NUM_MEANS = {}));
    class CAT_MODES {
        constructor() {
        }
        static __static_initialize() { if (!CAT_MODES.__static_initialized) {
            CAT_MODES.__static_initialized = true;
            CAT_MODES.__static_initializer_0();
        } }
        static VALUES_$LI$() { CAT_MODES.__static_initialize(); if (CAT_MODES.VALUES == null) {
            CAT_MODES.VALUES = [0];
        } return CAT_MODES.VALUES; }
        static __static_initializer_0() {
            CAT_MODES.CAT_MODES_0.fill(CAT_MODES.VALUES_$LI$());
        }
    }
    CAT_MODES.__static_initialized = false;
    glm_model.CAT_MODES = CAT_MODES;
    CAT_MODES["__class"] = "glm_model.CAT_MODES";
    CAT_MODES["__interfaces"] = ["java.io.Serializable"];
    (function (CAT_MODES) {
        class CAT_MODES_0 {
            static fill(sa) {
                sa[0] = 0;
            }
            constructor() {
            }
        }
        CAT_MODES.CAT_MODES_0 = CAT_MODES_0;
        CAT_MODES_0["__class"] = "glm_model.CAT_MODES.CAT_MODES_0";
        CAT_MODES_0["__interfaces"] = ["java.io.Serializable"];
    })(CAT_MODES = glm_model.CAT_MODES || (glm_model.CAT_MODES = {}));
})(glm_model || (glm_model = {}));
class NamesHolder_glm_model {
    constructor() {
    }
    static __static_initialize() { if (!NamesHolder_glm_model.__static_initialized) {
        NamesHolder_glm_model.__static_initialized = true;
        NamesHolder_glm_model.__static_initializer_0();
    } }
    static VALUES_$LI$() { NamesHolder_glm_model.__static_initialize(); if (NamesHolder_glm_model.VALUES == null) {
        NamesHolder_glm_model.VALUES = [null, null, null, null];
    } return NamesHolder_glm_model.VALUES; }
    static __static_initializer_0() {
        NamesHolder_glm_model.NamesHolder_glm_model_0.fill(NamesHolder_glm_model.VALUES_$LI$());
    }
}
NamesHolder_glm_model.__static_initialized = false;
NamesHolder_glm_model["__class"] = "NamesHolder_glm_model";
NamesHolder_glm_model["__interfaces"] = ["java.io.Serializable"];
(function (NamesHolder_glm_model) {
    class NamesHolder_glm_model_0 {
        static fill(sa) {
            sa[0] = "RACE";
            sa[1] = "AGE";
            sa[2] = "PSA";
            sa[3] = "GLEASON";
        }
        constructor() {
        }
    }
    NamesHolder_glm_model.NamesHolder_glm_model_0 = NamesHolder_glm_model_0;
    NamesHolder_glm_model_0["__class"] = "NamesHolder_glm_model.NamesHolder_glm_model_0";
    NamesHolder_glm_model_0["__interfaces"] = ["java.io.Serializable"];
})(NamesHolder_glm_model || (NamesHolder_glm_model = {}));
class glm_model_ColInfo_0 {
    constructor() {
    }
    static __static_initialize() { if (!glm_model_ColInfo_0.__static_initialized) {
        glm_model_ColInfo_0.__static_initialized = true;
        glm_model_ColInfo_0.__static_initializer_0();
    } }
    static VALUES_$LI$() { glm_model_ColInfo_0.__static_initialize(); if (glm_model_ColInfo_0.VALUES == null) {
        glm_model_ColInfo_0.VALUES = [null, null];
    } return glm_model_ColInfo_0.VALUES; }
    static __static_initializer_0() {
        glm_model_ColInfo_0.glm_model_ColInfo_0_0.fill(glm_model_ColInfo_0.VALUES_$LI$());
    }
}
glm_model_ColInfo_0.__static_initialized = false;
glm_model_ColInfo_0["__class"] = "glm_model_ColInfo_0";
glm_model_ColInfo_0["__interfaces"] = ["java.io.Serializable"];
(function (glm_model_ColInfo_0) {
    class glm_model_ColInfo_0_0 {
        static fill(sa) {
            sa[0] = "1";
            sa[1] = "2";
        }
        constructor() {
        }
    }
    glm_model_ColInfo_0.glm_model_ColInfo_0_0 = glm_model_ColInfo_0_0;
    glm_model_ColInfo_0_0["__class"] = "glm_model_ColInfo_0.glm_model_ColInfo_0_0";
    glm_model_ColInfo_0_0["__interfaces"] = ["java.io.Serializable"];
})(glm_model_ColInfo_0 || (glm_model_ColInfo_0 = {}));
class glm_model_ColInfo_4 {
    constructor() {
    }
    static __static_initialize() { if (!glm_model_ColInfo_4.__static_initialized) {
        glm_model_ColInfo_4.__static_initialized = true;
        glm_model_ColInfo_4.__static_initializer_0();
    } }
    static VALUES_$LI$() { glm_model_ColInfo_4.__static_initialize(); if (glm_model_ColInfo_4.VALUES == null) {
        glm_model_ColInfo_4.VALUES = [null, null];
    } return glm_model_ColInfo_4.VALUES; }
    static __static_initializer_0() {
        glm_model_ColInfo_4.glm_model_ColInfo_4_0.fill(glm_model_ColInfo_4.VALUES_$LI$());
    }
}
glm_model_ColInfo_4.__static_initialized = false;
glm_model_ColInfo_4["__class"] = "glm_model_ColInfo_4";
glm_model_ColInfo_4["__interfaces"] = ["java.io.Serializable"];
(function (glm_model_ColInfo_4) {
    class glm_model_ColInfo_4_0 {
        static fill(sa) {
            sa[0] = "0";
            sa[1] = "1";
        }
        constructor() {
        }
    }
    glm_model_ColInfo_4.glm_model_ColInfo_4_0 = glm_model_ColInfo_4_0;
    glm_model_ColInfo_4_0["__class"] = "glm_model_ColInfo_4.glm_model_ColInfo_4_0";
    glm_model_ColInfo_4_0["__interfaces"] = ["java.io.Serializable"];
})(glm_model_ColInfo_4 || (glm_model_ColInfo_4 = {}));
glm_model_ColInfo_4.__static_initialize();
glm_model_ColInfo_0.__static_initialize();
NamesHolder_glm_model.__static_initialize();
glm_model.CAT_MODES.__static_initialize();
glm_model.NUM_MEANS.__static_initialize();
glm_model.BETA.__static_initialize();
exports.glm_model=glm_model;
