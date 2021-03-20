(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class gbm_pojo_test {
    isSupervised() {
        return true;
    }
    nfeatures() {
        return 11;
    }
    nclasses() {
        return 2;
    }
    static NAMES_$LI$() { if (gbm_pojo_test.NAMES == null) {
        gbm_pojo_test.NAMES = NamesHolder_gbm_pojo_test.VALUES_$LI$();
    } return gbm_pojo_test.NAMES; }
    static DOMAINS_$LI$() { if (gbm_pojo_test.DOMAINS == null) {
        gbm_pojo_test.DOMAINS = [null, null, null, null, null, null, gbm_pojo_test_ColInfo_6.VALUES_$LI$(), null, null, gbm_pojo_test_ColInfo_9.VALUES_$LI$(), gbm_pojo_test_ColInfo_10.VALUES_$LI$(), gbm_pojo_test_ColInfo_11.VALUES_$LI$()];
    } return gbm_pojo_test.DOMAINS; }
    static PRIOR_CLASS_DISTRIB_$LI$() { if (gbm_pojo_test.PRIOR_CLASS_DISTRIB == null) {
        gbm_pojo_test.PRIOR_CLASS_DISTRIB = [0.47494201646277684, 0.5250579835372231];
    } return gbm_pojo_test.PRIOR_CLASS_DISTRIB; }
    static MODEL_CLASS_DISTRIB_$LI$() { if (gbm_pojo_test.MODEL_CLASS_DISTRIB == null) {
        gbm_pojo_test.MODEL_CLASS_DISTRIB = [0.47494201646277684, 0.5250579835372231];
    } return gbm_pojo_test.MODEL_CLASS_DISTRIB; }
    getUUID() {
        return /* toString */ ('' + (916966837873556288));
    }
    score0(data, preds) {
        preds.fill(0);
        gbm_pojo_test_Forest_0.score0(data, preds);
        gbm_pojo_test_Forest_1.score0(data, preds);
        gbm_pojo_test_Forest_2.score0(data, preds);
        gbm_pojo_test_Forest_3.score0(data, preds);
        gbm_pojo_test_Forest_4.score0(data, preds);
        gbm_pojo_test_Forest_5.score0(data, preds);
        gbm_pojo_test_Forest_6.score0(data, preds);
        gbm_pojo_test_Forest_7.score0(data, preds);
        gbm_pojo_test_Forest_8.score0(data, preds);
        gbm_pojo_test_Forest_9.score0(data, preds);
        preds[2] = preds[1] + 0.10031597534710991;
        preds[2] = 1.0 / (1.0 + Math.min(1.0E19, Math.exp(-(preds[2]))));
        preds[1] = 1.0 - preds[2];
        preds[0] = GenModel.getPrediction(preds, gbm_pojo_test.PRIOR_CLASS_DISTRIB_$LI$(), data, 0.44517145663915264);
        return preds;
    }
}
gbm_pojo_test.NCLASSES = 2;
gbm_pojo_test["__class"] = "gbm_pojo_test";
class NamesHolder_gbm_pojo_test {
    constructor() {
    }
    static __static_initialize() { if (!NamesHolder_gbm_pojo_test.__static_initialized) {
        NamesHolder_gbm_pojo_test.__static_initialized = true;
        NamesHolder_gbm_pojo_test.__static_initializer_0();
    } }
    static VALUES_$LI$() { NamesHolder_gbm_pojo_test.__static_initialize(); if (NamesHolder_gbm_pojo_test.VALUES == null) {
        NamesHolder_gbm_pojo_test.VALUES = (s => { let a = []; while (s-- > 0)
            a.push(null); return a; })(11);
    } return NamesHolder_gbm_pojo_test.VALUES; }
    static __static_initializer_0() {
        NamesHolder_gbm_pojo_test.NamesHolder_gbm_pojo_test_0.fill(NamesHolder_gbm_pojo_test.VALUES_$LI$());
    }
}
NamesHolder_gbm_pojo_test.__static_initialized = false;
NamesHolder_gbm_pojo_test["__class"] = "NamesHolder_gbm_pojo_test";
NamesHolder_gbm_pojo_test["__interfaces"] = ["java.io.Serializable"];
(function (NamesHolder_gbm_pojo_test) {
    class NamesHolder_gbm_pojo_test_0 {
        static fill(sa) {
            sa[0] = "Year";
            sa[1] = "Month";
            sa[2] = "DayofMonth";
            sa[3] = "DayOfWeek";
            sa[4] = "CRSDepTime";
            sa[5] = "CRSArrTime";
            sa[6] = "UniqueCarrier";
            sa[7] = "FlightNum";
            sa[8] = "CRSElapsedTime";
            sa[9] = "Origin";
            sa[10] = "Dest";
        }
        constructor() {
        }
    }
    NamesHolder_gbm_pojo_test.NamesHolder_gbm_pojo_test_0 = NamesHolder_gbm_pojo_test_0;
    NamesHolder_gbm_pojo_test_0["__class"] = "NamesHolder_gbm_pojo_test.NamesHolder_gbm_pojo_test_0";
    NamesHolder_gbm_pojo_test_0["__interfaces"] = ["java.io.Serializable"];
})(NamesHolder_gbm_pojo_test || (NamesHolder_gbm_pojo_test = {}));
class gbm_pojo_test_ColInfo_6 {
    constructor() {
    }
    static __static_initialize() { if (!gbm_pojo_test_ColInfo_6.__static_initialized) {
        gbm_pojo_test_ColInfo_6.__static_initialized = true;
        gbm_pojo_test_ColInfo_6.__static_initializer_0();
    } }
    static VALUES_$LI$() { gbm_pojo_test_ColInfo_6.__static_initialize(); if (gbm_pojo_test_ColInfo_6.VALUES == null) {
        gbm_pojo_test_ColInfo_6.VALUES = [null, null, null, null, null, null, null, null, null, null];
    } return gbm_pojo_test_ColInfo_6.VALUES; }
    static __static_initializer_0() {
        gbm_pojo_test_ColInfo_6.gbm_pojo_test_ColInfo_6_0.fill(gbm_pojo_test_ColInfo_6.VALUES_$LI$());
    }
}
gbm_pojo_test_ColInfo_6.__static_initialized = false;
gbm_pojo_test_ColInfo_6["__class"] = "gbm_pojo_test_ColInfo_6";
gbm_pojo_test_ColInfo_6["__interfaces"] = ["java.io.Serializable"];
(function (gbm_pojo_test_ColInfo_6) {
    class gbm_pojo_test_ColInfo_6_0 {
        static fill(sa) {
            sa[0] = "AA";
            sa[1] = "CO";
            sa[2] = "DL";
            sa[3] = "HP";
            sa[4] = "PI";
            sa[5] = "PS";
            sa[6] = "TW";
            sa[7] = "UA";
            sa[8] = "US";
            sa[9] = "WN";
        }
        constructor() {
        }
    }
    gbm_pojo_test_ColInfo_6.gbm_pojo_test_ColInfo_6_0 = gbm_pojo_test_ColInfo_6_0;
    gbm_pojo_test_ColInfo_6_0["__class"] = "gbm_pojo_test_ColInfo_6.gbm_pojo_test_ColInfo_6_0";
    gbm_pojo_test_ColInfo_6_0["__interfaces"] = ["java.io.Serializable"];
})(gbm_pojo_test_ColInfo_6 || (gbm_pojo_test_ColInfo_6 = {}));
class gbm_pojo_test_ColInfo_9 {
    constructor() {
    }
    static __static_initialize() { if (!gbm_pojo_test_ColInfo_9.__static_initialized) {
        gbm_pojo_test_ColInfo_9.__static_initialized = true;
        gbm_pojo_test_ColInfo_9.__static_initializer_0();
    } }
    static VALUES_$LI$() { gbm_pojo_test_ColInfo_9.__static_initialize(); if (gbm_pojo_test_ColInfo_9.VALUES == null) {
        gbm_pojo_test_ColInfo_9.VALUES = (s => { let a = []; while (s-- > 0)
            a.push(null); return a; })(132);
    } return gbm_pojo_test_ColInfo_9.VALUES; }
    static __static_initializer_0() {
        gbm_pojo_test_ColInfo_9.gbm_pojo_test_ColInfo_9_0.fill(gbm_pojo_test_ColInfo_9.VALUES_$LI$());
    }
}
gbm_pojo_test_ColInfo_9.__static_initialized = false;
gbm_pojo_test_ColInfo_9["__class"] = "gbm_pojo_test_ColInfo_9";
gbm_pojo_test_ColInfo_9["__interfaces"] = ["java.io.Serializable"];
(function (gbm_pojo_test_ColInfo_9) {
    class gbm_pojo_test_ColInfo_9_0 {
        static fill(sa) {
            sa[0] = "ABE";
            sa[1] = "ABQ";
            sa[2] = "ACY";
            sa[3] = "ALB";
            sa[4] = "AMA";
            sa[5] = "ANC";
            sa[6] = "ATL";
            sa[7] = "AUS";
            sa[8] = "AVP";
            sa[9] = "BDL";
            sa[10] = "BGM";
            sa[11] = "BHM";
            sa[12] = "BIL";
            sa[13] = "BNA";
            sa[14] = "BOI";
            sa[15] = "BOS";
            sa[16] = "BTV";
            sa[17] = "BUF";
            sa[18] = "BUR";
            sa[19] = "BWI";
            sa[20] = "CAE";
            sa[21] = "CHO";
            sa[22] = "CHS";
            sa[23] = "CLE";
            sa[24] = "CLT";
            sa[25] = "CMH";
            sa[26] = "COS";
            sa[27] = "CRP";
            sa[28] = "CRW";
            sa[29] = "CVG";
            sa[30] = "DAL";
            sa[31] = "DAY";
            sa[32] = "DCA";
            sa[33] = "DEN";
            sa[34] = "DFW";
            sa[35] = "DSM";
            sa[36] = "DTW";
            sa[37] = "EGE";
            sa[38] = "ELP";
            sa[39] = "ERI";
            sa[40] = "EWR";
            sa[41] = "EYW";
            sa[42] = "FLL";
            sa[43] = "GEG";
            sa[44] = "GNV";
            sa[45] = "GRR";
            sa[46] = "GSO";
            sa[47] = "HNL";
            sa[48] = "HOU";
            sa[49] = "HPN";
            sa[50] = "HRL";
            sa[51] = "IAD";
            sa[52] = "IAH";
            sa[53] = "ICT";
            sa[54] = "IND";
            sa[55] = "ISP";
            sa[56] = "JAN";
            sa[57] = "JAX";
            sa[58] = "JFK";
            sa[59] = "KOA";
            sa[60] = "LAN";
            sa[61] = "LAS";
            sa[62] = "LAX";
            sa[63] = "LBB";
            sa[64] = "LEX";
            sa[65] = "LGA";
            sa[66] = "LIH";
            sa[67] = "LIT";
            sa[68] = "LYH";
            sa[69] = "MAF";
            sa[70] = "MCI";
            sa[71] = "MCO";
            sa[72] = "MDT";
            sa[73] = "MDW";
            sa[74] = "MEM";
            sa[75] = "MFR";
            sa[76] = "MHT";
            sa[77] = "MIA";
            sa[78] = "MKE";
            sa[79] = "MLB";
            sa[80] = "MRY";
            sa[81] = "MSP";
            sa[82] = "MSY";
            sa[83] = "MYR";
            sa[84] = "OAK";
            sa[85] = "OGG";
            sa[86] = "OKC";
            sa[87] = "OMA";
            sa[88] = "ONT";
            sa[89] = "ORD";
            sa[90] = "ORF";
            sa[91] = "PBI";
            sa[92] = "PDX";
            sa[93] = "PHF";
            sa[94] = "PHL";
            sa[95] = "PHX";
            sa[96] = "PIT";
            sa[97] = "PSP";
            sa[98] = "PVD";
            sa[99] = "PWM";
            sa[100] = "RDU";
            sa[101] = "RIC";
            sa[102] = "RNO";
            sa[103] = "ROA";
            sa[104] = "ROC";
            sa[105] = "RSW";
            sa[106] = "SAN";
            sa[107] = "SAT";
            sa[108] = "SAV";
            sa[109] = "SBN";
            sa[110] = "SCK";
            sa[111] = "SDF";
            sa[112] = "SEA";
            sa[113] = "SFO";
            sa[114] = "SJC";
            sa[115] = "SJU";
            sa[116] = "SLC";
            sa[117] = "SMF";
            sa[118] = "SNA";
            sa[119] = "SRQ";
            sa[120] = "STL";
            sa[121] = "STT";
            sa[122] = "STX";
            sa[123] = "SWF";
            sa[124] = "SYR";
            sa[125] = "TLH";
            sa[126] = "TPA";
            sa[127] = "TRI";
            sa[128] = "TUL";
            sa[129] = "TUS";
            sa[130] = "TYS";
            sa[131] = "UCA";
        }
        constructor() {
        }
    }
    gbm_pojo_test_ColInfo_9.gbm_pojo_test_ColInfo_9_0 = gbm_pojo_test_ColInfo_9_0;
    gbm_pojo_test_ColInfo_9_0["__class"] = "gbm_pojo_test_ColInfo_9.gbm_pojo_test_ColInfo_9_0";
    gbm_pojo_test_ColInfo_9_0["__interfaces"] = ["java.io.Serializable"];
})(gbm_pojo_test_ColInfo_9 || (gbm_pojo_test_ColInfo_9 = {}));
class gbm_pojo_test_ColInfo_10 {
    constructor() {
    }
    static __static_initialize() { if (!gbm_pojo_test_ColInfo_10.__static_initialized) {
        gbm_pojo_test_ColInfo_10.__static_initialized = true;
        gbm_pojo_test_ColInfo_10.__static_initializer_0();
    } }
    static VALUES_$LI$() { gbm_pojo_test_ColInfo_10.__static_initialize(); if (gbm_pojo_test_ColInfo_10.VALUES == null) {
        gbm_pojo_test_ColInfo_10.VALUES = (s => { let a = []; while (s-- > 0)
            a.push(null); return a; })(134);
    } return gbm_pojo_test_ColInfo_10.VALUES; }
    static __static_initializer_0() {
        gbm_pojo_test_ColInfo_10.gbm_pojo_test_ColInfo_10_0.fill(gbm_pojo_test_ColInfo_10.VALUES_$LI$());
    }
}
gbm_pojo_test_ColInfo_10.__static_initialized = false;
gbm_pojo_test_ColInfo_10["__class"] = "gbm_pojo_test_ColInfo_10";
gbm_pojo_test_ColInfo_10["__interfaces"] = ["java.io.Serializable"];
(function (gbm_pojo_test_ColInfo_10) {
    class gbm_pojo_test_ColInfo_10_0 {
        static fill(sa) {
            sa[0] = "ABE";
            sa[1] = "ABQ";
            sa[2] = "ACY";
            sa[3] = "ALB";
            sa[4] = "AMA";
            sa[5] = "ANC";
            sa[6] = "ATL";
            sa[7] = "AUS";
            sa[8] = "AVL";
            sa[9] = "AVP";
            sa[10] = "BDL";
            sa[11] = "BGM";
            sa[12] = "BHM";
            sa[13] = "BNA";
            sa[14] = "BOI";
            sa[15] = "BOS";
            sa[16] = "BTV";
            sa[17] = "BUF";
            sa[18] = "BUR";
            sa[19] = "BWI";
            sa[20] = "CAE";
            sa[21] = "CAK";
            sa[22] = "CHA";
            sa[23] = "CHO";
            sa[24] = "CHS";
            sa[25] = "CLE";
            sa[26] = "CLT";
            sa[27] = "CMH";
            sa[28] = "COS";
            sa[29] = "CRP";
            sa[30] = "CVG";
            sa[31] = "DAL";
            sa[32] = "DAY";
            sa[33] = "DCA";
            sa[34] = "DEN";
            sa[35] = "DFW";
            sa[36] = "DSM";
            sa[37] = "DTW";
            sa[38] = "ELM";
            sa[39] = "ELP";
            sa[40] = "ERI";
            sa[41] = "EUG";
            sa[42] = "EWR";
            sa[43] = "EYW";
            sa[44] = "FAT";
            sa[45] = "FAY";
            sa[46] = "FLL";
            sa[47] = "FNT";
            sa[48] = "GEG";
            sa[49] = "GRR";
            sa[50] = "GSO";
            sa[51] = "GSP";
            sa[52] = "HNL";
            sa[53] = "HOU";
            sa[54] = "HPN";
            sa[55] = "HRL";
            sa[56] = "HTS";
            sa[57] = "IAD";
            sa[58] = "IAH";
            sa[59] = "ICT";
            sa[60] = "ILM";
            sa[61] = "IND";
            sa[62] = "ISP";
            sa[63] = "JAN";
            sa[64] = "JAX";
            sa[65] = "JFK";
            sa[66] = "KOA";
            sa[67] = "LAS";
            sa[68] = "LAX";
            sa[69] = "LBB";
            sa[70] = "LEX";
            sa[71] = "LGA";
            sa[72] = "LIH";
            sa[73] = "LIT";
            sa[74] = "LYH";
            sa[75] = "MAF";
            sa[76] = "MCI";
            sa[77] = "MCO";
            sa[78] = "MDT";
            sa[79] = "MDW";
            sa[80] = "MHT";
            sa[81] = "MIA";
            sa[82] = "MKE";
            sa[83] = "MRY";
            sa[84] = "MSP";
            sa[85] = "MSY";
            sa[86] = "MYR";
            sa[87] = "OAJ";
            sa[88] = "OAK";
            sa[89] = "OGG";
            sa[90] = "OKC";
            sa[91] = "OMA";
            sa[92] = "ONT";
            sa[93] = "ORD";
            sa[94] = "ORF";
            sa[95] = "ORH";
            sa[96] = "PBI";
            sa[97] = "PDX";
            sa[98] = "PHF";
            sa[99] = "PHL";
            sa[100] = "PHX";
            sa[101] = "PIT";
            sa[102] = "PNS";
            sa[103] = "PSP";
            sa[104] = "PVD";
            sa[105] = "PWM";
            sa[106] = "RDU";
            sa[107] = "RIC";
            sa[108] = "RNO";
            sa[109] = "ROA";
            sa[110] = "ROC";
            sa[111] = "RSW";
            sa[112] = "SAN";
            sa[113] = "SAT";
            sa[114] = "SBN";
            sa[115] = "SCK";
            sa[116] = "SDF";
            sa[117] = "SEA";
            sa[118] = "SFO";
            sa[119] = "SJC";
            sa[120] = "SJU";
            sa[121] = "SLC";
            sa[122] = "SMF";
            sa[123] = "SNA";
            sa[124] = "SRQ";
            sa[125] = "STL";
            sa[126] = "STT";
            sa[127] = "SWF";
            sa[128] = "SYR";
            sa[129] = "TOL";
            sa[130] = "TPA";
            sa[131] = "TUL";
            sa[132] = "TUS";
            sa[133] = "UCA";
        }
        constructor() {
        }
    }
    gbm_pojo_test_ColInfo_10.gbm_pojo_test_ColInfo_10_0 = gbm_pojo_test_ColInfo_10_0;
    gbm_pojo_test_ColInfo_10_0["__class"] = "gbm_pojo_test_ColInfo_10.gbm_pojo_test_ColInfo_10_0";
    gbm_pojo_test_ColInfo_10_0["__interfaces"] = ["java.io.Serializable"];
})(gbm_pojo_test_ColInfo_10 || (gbm_pojo_test_ColInfo_10 = {}));
class gbm_pojo_test_ColInfo_11 {
    constructor() {
    }
    static __static_initialize() { if (!gbm_pojo_test_ColInfo_11.__static_initialized) {
        gbm_pojo_test_ColInfo_11.__static_initialized = true;
        gbm_pojo_test_ColInfo_11.__static_initializer_0();
    } }
    static VALUES_$LI$() { gbm_pojo_test_ColInfo_11.__static_initialize(); if (gbm_pojo_test_ColInfo_11.VALUES == null) {
        gbm_pojo_test_ColInfo_11.VALUES = [null, null];
    } return gbm_pojo_test_ColInfo_11.VALUES; }
    static __static_initializer_0() {
        gbm_pojo_test_ColInfo_11.gbm_pojo_test_ColInfo_11_0.fill(gbm_pojo_test_ColInfo_11.VALUES_$LI$());
    }
}
gbm_pojo_test_ColInfo_11.__static_initialized = false;
gbm_pojo_test_ColInfo_11["__class"] = "gbm_pojo_test_ColInfo_11";
gbm_pojo_test_ColInfo_11["__interfaces"] = ["java.io.Serializable"];
(function (gbm_pojo_test_ColInfo_11) {
    class gbm_pojo_test_ColInfo_11_0 {
        static fill(sa) {
            sa[0] = "NO";
            sa[1] = "YES";
        }
        constructor() {
        }
    }
    gbm_pojo_test_ColInfo_11.gbm_pojo_test_ColInfo_11_0 = gbm_pojo_test_ColInfo_11_0;
    gbm_pojo_test_ColInfo_11_0["__class"] = "gbm_pojo_test_ColInfo_11.gbm_pojo_test_ColInfo_11_0";
    gbm_pojo_test_ColInfo_11_0["__interfaces"] = ["java.io.Serializable"];
})(gbm_pojo_test_ColInfo_11 || (gbm_pojo_test_ColInfo_11 = {}));
class gbm_pojo_test_Forest_0 {
    static score0(fdata, preds) {
        preds[1] += gbm_pojo_test_Tree_0_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_0["__class"] = "gbm_pojo_test_Forest_0";
class gbm_pojo_test_Tree_0_class_0 {
    static score0(data) {
        const pred = (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (data[2] < 5.5 ? ( /* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT1_$LI$(), 131, 0, data[9])) ? (data[5] < 1214.5 ? -0.08490811 : -0.0074444837) : (data[5] < 1325.5 ? -0.0026011502 : 0.0672389)) : (data[5] < 1104.5 ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(132, 1, data[10]) || (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT2_$LI$(), 132, 1, data[10])) ? -0.041237872 : 0.08666507) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(66, 51, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT3_$LI$(), 66, 51, data[9])) ? 0.070153005 : 0.16985005))) : (data[0] < 1998.0 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(131, 0, data[9]) || (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT4_$LI$(), 131, 0, data[9])) ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(134, 0, data[10]) || (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT5_$LI$(), 134, 0, data[10])) ? -0.07675884 : -0.015552446) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT6_$LI$(), 134, 0, data[10])) ? -0.025045818 : 0.041781697)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT7_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(131, 0, data[9]) || (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT8_$LI$(), 131, 0, data[9])) ? -0.1403306 : -0.08559531) : ( /* isNaN */isNaN(data[5]) || data[5] < 1622.5 ? -0.09153927 : -0.02366724)))) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT9_$LI$(), 134, 0, data[10])) ? (data[2] < 7.5 ? (data[4] < 917.5 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(124, 3, data[9]) || (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT10_$LI$(), 124, 3, data[9])) ? -0.046503622 : 0.12153205) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(124, 3, data[9]) || (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT11_$LI$(), 124, 3, data[9])) ? 0.03362562 : 0.10945965)) : (data[0] < 1997.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT12_$LI$(), 124, 3, data[9])) ? -0.055411227 : 0.034853708) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT13_$LI$(), 124, 3, data[9])) ? -0.12390993 : -0.06337517))) : (data[2] < 7.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT14_$LI$(), 129, 3, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(132, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT15_$LI$(), 132, 0, data[10])) ? -0.0022618792 : 0.06443829) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(129, 3, data[9]) || (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT16_$LI$(), 129, 3, data[9])) ? 0.10094735 : 0.17672203)) : ( /* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT17_$LI$(), 129, 3, data[9])) ? 0.013672127 : 0.07838874) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT18_$LI$(), 129, 3, data[9])) ? -0.08370597 : 0.0076616695)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT0 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT0 = [120, 6, 41, -30, -60, 36, -29, 97, -37, 42, -128, 95, -25, 75, -53, 92, 8];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT1 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT1 = [3, -96, 2, 1, 58, 9, 0, 0, 0, -48, 6, -128, 24, -128, 52, 1, 6];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT1; }
    static GRPSPLIT2_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT2 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT2 = [-65, -17, -5, -65, -65, -33, -17, -1, -13, -9, -1, -1, -9, -9, -97, -7, 15];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT2; }
    static GRPSPLIT3_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT3 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT3 = [-65, -17, -1, -1, -9, -1, -1, -1, 3];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT3; }
    static GRPSPLIT4_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT4 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT4 = [1, -128, 66, 1, 11, 1, 8, 0, 0, 16, 0, -128, 16, 36, 32, 0, 0];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT4; }
    static GRPSPLIT5_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT5 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT5 = [0, 0, 2, 0, 0, 4, 0, 0, -112, 0, 0, 3, 8, 0, 64, 4, 16];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT5; }
    static GRPSPLIT6_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT6 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT6 = [0, 0, 88, 1, 2, 4, 20, 2, -128, 4, -128, 64, 48, -124, 64, 0, 0];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT6; }
    static GRPSPLIT7_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT7 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT7 = [40, -28, 9, 1, 0, 68, 1, 16, -119, 96, 49, 97, 27, -31, 96, 45, 5];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT7; }
    static GRPSPLIT8_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT8 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT8 = [0, -88, 4, 17, 33, 1, 0, 0, 0, 0, 0, 0, 16, 0, 4, 0, 0];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT8; }
    static GRPSPLIT9_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT9 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT9 = [-65, -75, -8, -103, -80, -35, -67, -48, -2, -65, -64, -33, 125, -3, -13, 62, 47];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT9; }
    static GRPSPLIT10_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT10 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT10 = [1, 0, 0, 8, 0, 0, 0, 0, 88, 0, 0, -127, 0, 1, 0, 0];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT10; }
    static GRPSPLIT11_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT11 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT11 = [8, 0, 0, 0, -128, 0, 0, 76, 80, 0, -64, -127, 88, 33, 0, 2];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT11; }
    static GRPSPLIT12_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT12 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT12 = [-1, -1, -2, -5, -1, -1, -1, -5, -1, -1, -1, -9, -69, -1, -1, 5];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT12; }
    static GRPSPLIT13_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT13 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT13 = [-1, -1, -2, 111, -1, -1, -9, -73, -9, -5, 127, 95, -97, -33, -17, 7];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT13; }
    static GRPSPLIT14_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT14 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT14 = [61, -1, -66, -29, -1, -33, -33, -1, -2, -2, -1, -1, -37, -9, -10, -1, 0];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT14; }
    static GRPSPLIT15_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT15 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT15 = [111, 127, -1, -1, -33, -65, -1, -65, 119, -51, -1, -70, -33, -6, 44, -5, 3];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT15; }
    static GRPSPLIT16_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT16 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT16 = [0, 0, 4, 0, 16, 0, 0, 0, 66, 4, 0, 0, 8, 0, 0, 3, 0];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT16; }
    static GRPSPLIT17_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT17 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT17 = [126, -1, -65, -1, 127, -1, -17, -5, -65, -1, 63, 127, -1, -41, -10, -9, 0];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT17; }
    static GRPSPLIT18_$LI$() { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT18 == null) {
        gbm_pojo_test_Tree_0_class_0.GRPSPLIT18 = [12, 32, 1, -124, -128, 64, 0, 0, 16, 0, 64, 9, 100, 0, -127, 10, 0];
    } return gbm_pojo_test_Tree_0_class_0.GRPSPLIT18; }
}
gbm_pojo_test_Tree_0_class_0["__class"] = "gbm_pojo_test_Tree_0_class_0";
class gbm_pojo_test_Forest_1 {
    static score0(fdata, preds) {
        preds[1] += gbm_pojo_test_Tree_1_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_1["__class"] = "gbm_pojo_test_Forest_1";
class gbm_pojo_test_Tree_1_class_0 {
    static score0(data) {
        const pred = (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (data[2] < 5.5 ? ( /* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT1_$LI$(), 131, 0, data[9])) ? (data[4] < 975.5 ? -0.095463976 : -0.014495662) : (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT2_$LI$(), 32, 0, data[6])) ? -0.049982212 : 0.04667776)) : (data[5] < 1104.5 ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(132, 1, data[10]) || (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT3_$LI$(), 132, 1, data[10])) ? -0.031231511 : 0.086104415) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(66, 51, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT4_$LI$(), 66, 51, data[9])) ? 0.06345302 : 0.15539458))) : (data[0] < 1998.0 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT5_$LI$(), 131, 0, data[9])) ? (data[5] < 1274.5 ? -0.09608598 : -0.04030581) : ( /* isNaN */isNaN(data[5]) || data[5] < 1548.5 ? -0.020994632 : 0.038413852)) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT6_$LI$(), 131, 0, data[9])) ? ( /* isNaN */isNaN(data[5]) || data[5] < 1878.5 ? -0.12219516 : -0.06311011) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT7_$LI$(), 134, 0, data[10])) ? -0.10240176 : -0.032094374)))) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT8_$LI$(), 134, 0, data[10])) ? (data[2] < 7.5 ? (data[4] < 918.5 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(129, 3, data[9]) || (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT9_$LI$(), 129, 3, data[9])) ? -0.044791684 : 0.11350671) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(129, 3, data[9]) || (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT10_$LI$(), 129, 3, data[9])) ? 0.03744709 : 0.10671422)) : (data[0] < 1997.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT11_$LI$(), 129, 3, data[9])) ? -0.05136065 : 0.034544434) : (data[5] < 1441.5 ? -0.110554494 : -0.05872382))) : (data[2] < 7.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT12_$LI$(), 124, 3, data[9])) ? (data[5] < 1180.0 ? 8.2124857E-4 : 0.061129592) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(124, 3, data[9]) || (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT13_$LI$(), 124, 3, data[9])) ? 0.0957122 : 0.1668169)) : ( /* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT14_$LI$(), 124, 3, data[9])) ? 0.020376673 : 0.07489993) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT15_$LI$(), 124, 3, data[9])) ? -0.06373164 : 0.015438366)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT0 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT0 = [120, 6, 41, -30, -28, 36, -29, 97, -37, 42, -128, 95, -25, 75, -53, 92, 8];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT1 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT1 = [3, -96, -126, 1, 26, 9, 0, 0, 0, -48, 6, -128, 24, -124, 52, 1, 6];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT1; }
    static GRPSPLIT2_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT2 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT2 = [-45, 3, 0, 0];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT2; }
    static GRPSPLIT3_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT3 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT3 = [-65, -17, -5, -65, -65, -33, -17, -1, -13, -9, -1, -9, -9, -9, -97, -7, 15];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT3; }
    static GRPSPLIT4_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT4 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT4 = [-65, -17, -1, -1, -9, -1, -1, -1, 3];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT4; }
    static GRPSPLIT5_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT5 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT5 = [1, -128, -62, 1, 27, 65, 8, 0, 0, 17, 0, -128, 16, 36, 32, 1, 2];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT5; }
    static GRPSPLIT6_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT6 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT6 = [2, -96, -128, 17, 11, -128, 0, 4, 0, 1, 0, 0, 16, 0, 48, 1, 0];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT6; }
    static GRPSPLIT7_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT7 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT7 = [-74, -2, -19, -31, -45, -33, -5, -35, 111, -17, -67, -29, -65, -63, 126, -81, 55];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT7; }
    static GRPSPLIT8_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT8 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT8 = [-65, -75, -8, -39, -80, 89, -67, -48, -2, -65, -64, -97, 125, -3, -14, 62, 44];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT8; }
    static GRPSPLIT9_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT9 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT9 = [1, 0, 0, 8, 0, 0, 0, 0, 88, 0, 0, -127, 0, 1, 0, 0, 0];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT9; }
    static GRPSPLIT10_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT10 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT10 = [0, 0, 0, 16, -116, 0, 0, 12, 80, 0, -64, -63, 120, 33, 0, 2, 0];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT10; }
    static GRPSPLIT11_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT11 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT11 = [-1, -1, -2, -5, -1, -1, -17, -5, -17, -1, -1, -9, -69, -1, -1, -9, 1];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT11; }
    static GRPSPLIT12_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT12 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT12 = [61, -1, -66, -29, -1, -33, -41, -1, -2, -2, 127, -1, -37, -41, -10, 15];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT12; }
    static GRPSPLIT13_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT13 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT13 = [0, 0, 4, 0, 16, 0, 0, 0, 66, 4, 0, 0, 8, 0, 0, 1];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT13; }
    static GRPSPLIT14_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT14 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT14 = [126, -1, -65, -1, 127, -1, -1, -5, -65, -1, 63, 127, -33, -41, -10, 7];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT14; }
    static GRPSPLIT15_$LI$() { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT15 == null) {
        gbm_pojo_test_Tree_1_class_0.GRPSPLIT15 = [12, 32, 1, 4, -128, 64, 0, 0, 16, 0, 64, 9, 36, 0, -127, 10];
    } return gbm_pojo_test_Tree_1_class_0.GRPSPLIT15; }
}
gbm_pojo_test_Tree_1_class_0["__class"] = "gbm_pojo_test_Tree_1_class_0";
class gbm_pojo_test_Forest_2 {
    static score0(fdata, preds) {
        preds[1] += gbm_pojo_test_Tree_2_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_2["__class"] = "gbm_pojo_test_Forest_2";
class gbm_pojo_test_Tree_2_class_0 {
    static score0(data) {
        const pred = (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? ( /* isNaN */isNaN(data[0]) || data[0] < 2006.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT1_$LI$(), 131, 0, data[9])) ? (data[0] < 1987.5 ? ( /* isNaN */isNaN(data[7]) || data[7] < 1535.5 ? 0.07354705 : -0.038398083) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT2_$LI$(), 133, 1, data[10])) ? -0.12525378 : -0.065879285)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT3_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[7]) || data[7] < 679.5 ? -0.0399611 : -0.08144096) : (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT4_$LI$(), 32, 0, data[6])) ? -0.0800385 : 0.008836972))) : (data[5] < 1242.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 1, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT5_$LI$(), 129, 1, data[9])) ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(132, 1, data[10]) || (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT6_$LI$(), 132, 1, data[10])) ? -0.13485901 : 0.077487275) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT7_$LI$(), 132, 1, data[10])) ? -0.003762017 : 0.07857362)) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 1, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT8_$LI$(), 129, 1, data[9])) ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(132, 1, data[10]) || (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT9_$LI$(), 132, 1, data[10])) ? 0.0014935309 : 0.15552887) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT10_$LI$(), 132, 1, data[10])) ? 0.10809928 : 0.15701)))) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT11_$LI$(), 134, 0, data[10])) ? (data[2] < 5.5 ? (data[5] < 1081.5 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(129, 3, data[9]) || (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT12_$LI$(), 129, 3, data[9])) ? -0.049810037 : 0.12804708) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT13_$LI$(), 129, 3, data[9])) ? 0.033265512 : 0.10477275)) : (data[0] < 1997.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT14_$LI$(), 129, 3, data[9])) ? -0.03614877 : 0.027475996) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT15_$LI$(), 129, 3, data[9])) ? -0.09453595 : -0.03963656))) : (data[2] < 7.5 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(124, 3, data[9]) || (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT16_$LI$(), 124, 3, data[9])) ? (data[4] < 1216.5 ? 0.035695385 : 0.08741104) : (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT17_$LI$(), 32, 0, data[6])) ? -0.037707943 : 0.11799982)) : ( /* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT18_$LI$(), 124, 3, data[9])) ? 0.02139124 : 0.07292731) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT19_$LI$(), 124, 3, data[9])) ? -0.0563367 : 0.011105511)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT0 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT0 = [104, 6, 41, -30, -28, 36, -29, 97, -37, 42, -128, 95, -57, 107, -53, 92, 8];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT1 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT1 = [3, -96, -62, 1, 11, 1, 0, 0, 0, -127, 16, 0, 56, 4, 32, 1, 6];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT1; }
    static GRPSPLIT2_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT2 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT2 = [-66, -35, -1, -5, -67, 127, -9, -3, -6, -25, -12, -5, -1, 117, -81, -17, 31];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT2; }
    static GRPSPLIT3_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT3 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT3 = [0, -60, 81, 1, 2, 68, 16, 4, 82, 100, -79, 64, 59, -59, 98, 37, 21];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT3; }
    static GRPSPLIT4_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT4 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT4 = [-9, 3, 0, 0];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT4; }
    static GRPSPLIT5_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT5 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT5 = [-9, -37, -1, -5, -1, -1, -7, -65, -17, -1, -33, -1, -1, -1, 119, 127, 0];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT5; }
    static GRPSPLIT6_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT6 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT6 = [0, 48, 0, 0, 0, -128, 0, 0, 8, 1, 0, 0, 9, -128, 0, 0, 4];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT6; }
    static GRPSPLIT7_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT7 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT7 = [-1, -1, -7, -2, -65, -33, -1, -17, -5, -13, 111, -1, -9, -1, -66, -5, 5];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT7; }
    static GRPSPLIT8_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT8 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT8 = [-65, -1, -4, -5, -1, -5, -7, -66, -1, -1, -1, -1, -1, -1, 127, 127, 0];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT8; }
    static GRPSPLIT9_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT9 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT9 = [64, 16, 0, 5, 0, 0, 64, 0, 24, 0, 0, 4, 1, 0, 72, 16, 6];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT9; }
    static GRPSPLIT10_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT10 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT10 = [-10, -1, -5, -65, -17, 127, -17, 127, -5, -25, -1, -9, 127, -9, -2, -21, 13];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT10; }
    static GRPSPLIT11_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT11 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT11 = [-65, 53, -8, -39, -78, 89, -67, -112, -2, -65, -64, -97, 125, -3, -46, 62, 44];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT11; }
    static GRPSPLIT12_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT12 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT12 = [1, 0, 0, 8, 0, 0, 0, 0, 88, 0, 0, 1, 0, 32, 0, 0, 0];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT12; }
    static GRPSPLIT13_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT13 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT13 = [-1, -1, -66, -9, 127, -37, -9, -65, -1, -5, -17, -10, -33, -97, -2, -9, 0];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT13; }
    static GRPSPLIT14_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT14 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT14 = [-1, -1, -2, -5, -1, -1, -25, -5, -17, -1, -1, -9, -65, -1, -1, -9, 1];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT14; }
    static GRPSPLIT15_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT15 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT15 = [9, 0, 64, 0, -124, 4, 0, 0, 16, 0, 64, 10, 32, 1, 9, 2, 0];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT15; }
    static GRPSPLIT16_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT16 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT16 = [8, 0, 4, 0, -112, 64, 20, 40, 82, 4, 48, -63, 8, 0, -112, 3];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT16; }
    static GRPSPLIT17_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT17 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT17 = [127, 3, 0, 0];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT17; }
    static GRPSPLIT18_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT18 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT18 = [126, -1, -66, -1, 127, -1, -1, -5, -65, -1, 63, 127, -33, -41, -10, 6];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT18; }
    static GRPSPLIT19_$LI$() { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT19 == null) {
        gbm_pojo_test_Tree_2_class_0.GRPSPLIT19 = [76, 32, 1, 4, -128, 64, 0, 0, 16, 0, 64, 9, 32, 0, -127, 10];
    } return gbm_pojo_test_Tree_2_class_0.GRPSPLIT19; }
}
gbm_pojo_test_Tree_2_class_0["__class"] = "gbm_pojo_test_Tree_2_class_0";
class gbm_pojo_test_Forest_3 {
    static score0(fdata, preds) {
        preds[1] += gbm_pojo_test_Tree_3_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_3["__class"] = "gbm_pojo_test_Forest_3";
class gbm_pojo_test_Tree_3_class_0 {
    static score0(data) {
        const pred = (data[2] < 6.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT1_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT2_$LI$(), 132, 0, data[9])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT3_$LI$(), 132, 0, data[9])) ? -0.14475606 : -0.07131989) : (data[5] < 1088.0 ? -0.06947046 : 0.032513283)) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT4_$LI$(), 132, 0, data[9])) ? (data[5] < 1327.5 ? -0.058298577 : 0.007936995) : (data[5] < 1143.5 ? 0.008775314 : 0.076927535))) : (data[5] < 1180.0 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(131, 0, data[9]) || (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT5_$LI$(), 131, 0, data[9])) ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(133, 0, data[10]) || (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT6_$LI$(), 133, 0, data[10])) ? -0.041947298 : 0.03570212) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT7_$LI$(), 133, 0, data[10])) ? 0.023365906 : 0.09398554)) : ( /* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT8_$LI$(), 32, 0, data[6])) ? -0.010184068 : 0.0750181) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT9_$LI$(), 131, 0, data[9])) ? 0.11923278 : 0.15482864)))) : ( /* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT10_$LI$(), 132, 0, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT11_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[6]) || !GenModel.bitSetIsInRange(32, 0, data[6]) || (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT12_$LI$(), 32, 0, data[6])) ? -0.06809773 : 0.09678831) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT13_$LI$(), 132, 0, data[9])) ? -0.03513849 : 0.02532822)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT14_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[4]) || data[4] < 1511.5 ? -0.025363052 : 0.04103205) : (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT15_$LI$(), 32, 0, data[6])) ? -0.028269341 : 0.05953272))) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT16_$LI$(), 132, 0, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT17_$LI$(), 134, 0, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT18_$LI$(), 132, 0, data[9])) ? -0.13941258 : -0.10332655) : (data[5] < 1327.5 ? -0.09895605 : -0.03512637)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT19_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[5]) || data[5] < 1770.0 ? -0.07830333 : -0.019202774) : (data[5] < 1475.0 ? -0.022279682 : 0.03281123)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT0 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT0 = [107, -94, 41, -32, -2, 46, -29, 97, -37, -78, -44, -1, -33, -114, -81, 94, 4];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT1 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT1 = [-3, 127, -11, -5, 122, -33, -49, -23, 114, -57, -97, -99, -33, 111, -3, -3, 31];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT1; }
    static GRPSPLIT2_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT2 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT2 = [16, 13, 6, 2, 0, 1, 16, 18, 32, 65, 2, 0, 0, 32, 16, 0, 0];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT2; }
    static GRPSPLIT3_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT3 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT3 = [-5, -17, -81, -25, -1, -1, -9, 115, -5, -1, -1, -1, -1, -17, -1, 127, 13];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT3; }
    static GRPSPLIT4_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT4 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT4 = [0, 64, -126, 1, 1, 1, 12, 2, 0, 0, 0, 0, 0, 1, 0, 1, 2];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT4; }
    static GRPSPLIT5_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT5 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT5 = [73, 34, 1, -128, 84, 12, -126, 64, -63, -78, 0, -120, 76, -128, 2, 16, 0];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT5; }
    static GRPSPLIT6_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT6 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT6 = [10, 52, 10, -120, -124, 97, 33, 0, -87, -32, 32, 89, 41, -120, -48, 36, 5];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT6; }
    static GRPSPLIT7_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT7 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT7 = [-1, 43, -5, -3, 127, -65, -1, -1, -2, -1, -33, -50, 125, -22, -4, -41, 3];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT7; }
    static GRPSPLIT8_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT8 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT8 = [-42, 3, 0, 0];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT8; }
    static GRPSPLIT9_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT9 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT9 = [0, 0, 0, 0, 0, 0, -128, 97, 8, 2, -112, 17, 64, 0, 5, 0, 0];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT9; }
    static GRPSPLIT10_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT10 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT10 = [120, -34, 107, -21, -18, 62, 111, -39, -5, 60, -64, -33, -89, -5, -45, 30, 9];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT10; }
    static GRPSPLIT11_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT11 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT11 = [-1, -1, -9, -5, -5, -1, -17, -37, -1, -34, -33, -34, 111, -33, 126, -1, 31];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT11; }
    static GRPSPLIT12_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT12 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT12 = [2, 0, 0, 0];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT12; }
    static GRPSPLIT13_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT13 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT13 = [0, 0, 4, 0, 17, 1, 0, 2, 0, 0, 0, 0, 0, 4, 0, 64, 2];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT13; }
    static GRPSPLIT14_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT14 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT14 = [-5, -43, -40, -3, -106, 79, -3, -110, -68, -65, -9, -105, 125, -69, -9, 127, 45];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT14; }
    static GRPSPLIT15_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT15 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT15 = [-9, 3, 0, 0];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT15; }
    static GRPSPLIT16_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT16 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT16 = [96, -94, 9, 35, 45, -124, 2, 0, -128, 1, 0, 90, 48, 3, 72, 84, 0];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT16; }
    static GRPSPLIT17_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT17 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT17 = [96, -32, 2, 2, 0, 4, 65, 0, -118, 48, 0, 36, 26, 0, 100, 44, 12];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT17; }
    static GRPSPLIT18_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT18 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT18 = [-2, -65, -1, -1, -1, -11, -1, -3, -1, -53, 125, 127, -9, -25, 95, -4, 15];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT18; }
    static GRPSPLIT19_$LI$() { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT19 == null) {
        gbm_pojo_test_Tree_3_class_0.GRPSPLIT19 = [0, -124, 8, 72, 8, 76, 1, 0, 25, 32, 49, 65, 25, -61, 34, 35, 5];
    } return gbm_pojo_test_Tree_3_class_0.GRPSPLIT19; }
}
gbm_pojo_test_Tree_3_class_0["__class"] = "gbm_pojo_test_Tree_3_class_0";
class gbm_pojo_test_Forest_4 {
    static score0(fdata, preds) {
        preds[1] += gbm_pojo_test_Tree_4_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_4["__class"] = "gbm_pojo_test_Forest_4";
class gbm_pojo_test_Tree_4_class_0 {
    static score0(data) {
        const pred = (data[2] < 6.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (data[5] < 1032.5 ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(133, 1, data[10]) || (GenModel.bitSetIsInRange(133, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT1_$LI$(), 133, 1, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 1, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT2_$LI$(), 131, 1, data[9])) ? -0.12371421 : -0.062322695) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 1, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT3_$LI$(), 131, 1, data[9])) ? -0.07444072 : 0.045755927)) : ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(133, 1, data[10]) || (GenModel.bitSetIsInRange(133, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT4_$LI$(), 133, 1, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 1, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT5_$LI$(), 131, 1, data[9])) ? -0.13140881 : 0.0013696944) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 1, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT6_$LI$(), 131, 1, data[9])) ? -0.040153 : 0.07998007))) : (data[4] < 1041.5 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(131, 0, data[9]) || (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT7_$LI$(), 131, 0, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT8_$LI$(), 133, 0, data[10])) ? -0.073470205 : 0.020269897) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT9_$LI$(), 133, 0, data[10])) ? 0.0081113335 : 0.096475005)) : ( /* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT10_$LI$(), 133, 0, data[10])) ? 0.014573026 : 0.07913743) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT11_$LI$(), 131, 0, data[9])) ? 0.11842765 : 0.14836372)))) : ( /* isNaN */isNaN(data[0]) || data[0] < 1999.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT12_$LI$(), 132, 0, data[9])) ? (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT13_$LI$(), 32, 0, data[6])) ? (data[4] < 811.5 ? -0.13078639 : -0.04807093) : ( /* isNaN */isNaN(data[0]) || data[0] < 1992.5 ? -0.03275934 : 0.022654513)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT14_$LI$(), 134, 0, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT15_$LI$(), 132, 0, data[9])) ? -0.03371911 : 0.017215878) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT16_$LI$(), 132, 0, data[9])) ? 0.025642848 : 0.07064418))) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT17_$LI$(), 132, 0, data[9])) ? (data[5] < 1438.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(130, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT18_$LI$(), 130, 0, data[9])) ? -0.13195784 : -0.08627914) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(132, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT19_$LI$(), 132, 0, data[10])) ? -0.090834394 : -0.035032675)) : ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(134, 0, data[10]) || (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT20_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[5]) || data[5] < 1585.5 ? -0.070559286 : -0.018396154) : (data[4] < 1401.5 ? -0.0020808042 : 0.04909105)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT0 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT0 = [73, 34, 33, -96, -10, 44, -94, 96, -37, -78, -108, -33, -49, -114, -113, 92, 4];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT1 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT1 = [-65, -65, -1, -84, -19, -33, -1, 15, -13, 122, -1, -23, -25, 21, -42, -6, 27];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT1; }
    static GRPSPLIT2_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT2 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT2 = [-73, -41, 59, -33, 127, -1, -7, -65, 111, -1, -1, -1, -17, -1, 119, -1, 7];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT2; }
    static GRPSPLIT3_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT3 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT3 = [65, 66, 71, -96, 0, -128, 32, 1, 0, 0, 0, 0, 16, 16, -80, 0, 0];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT3; }
    static GRPSPLIT4_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT4 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT4 = [101, 62, -128, 68, 16, -94, 64, 80, 56, -58, 0, -100, 5, -10, 24, -112, 10];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT4; }
    static GRPSPLIT5_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT5 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT5 = [-3, -1, -9, -13, -1, -41, -5, -71, -3, -1, -21, -1, -17, -9, -1, -65, 7];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT5; }
    static GRPSPLIT6_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT6 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT6 = [-1, -1, -1, -1, -1, -97, -9, -1, -1, 127, -33, -1, -17, -33, -41, 127, 3];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT6; }
    static GRPSPLIT7_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT7 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT7 = [9, 2, 0, 0, 20, 4, -126, 64, -127, -78, 0, -128, 77, 0, 8, 16, 0];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT7; }
    static GRPSPLIT8_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT8 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT8 = [-3, 107, -5, -5, 125, -69, 127, -5, -1, -17, -34, -9, -1, -66, -33, -11, 11];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT8; }
    static GRPSPLIT9_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT9 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT9 = [-1, -77, -1, -3, -33, -5, -17, -6, -2, 47, -1, -50, -3, -30, 125, -9, 15];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT9; }
    static GRPSPLIT10_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT10 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT10 = [-11, -1, -7, -17, -10, -3, -75, -7, -10, -1, -54, 118, -1, 100, -38, -5, 6];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT10; }
    static GRPSPLIT11_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT11 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT11 = [0, 0, 0, 0, 0, 0, -128, 96, 8, 2, -112, 17, 64, 0, 3, 0, 0];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT11; }
    static GRPSPLIT12_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT12 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT12 = [120, -34, 107, -21, -20, 62, 111, -39, -5, 60, -64, -33, -89, 59, -61, 94, 9];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT12; }
    static GRPSPLIT13_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT13 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT13 = [-14, 1, 0, 0];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT13; }
    static GRPSPLIT14_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT14 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT14 = [-5, -43, -40, -7, -98, 95, -19, -110, -68, -65, -9, -105, 125, -69, -9, 127, 44];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT14; }
    static GRPSPLIT15_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT15 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT15 = [0, 0, 64, -126, 0, 0, 0, 0, -62, 0, -128, 10, -127, 0, 2, 0, 8];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT15; }
    static GRPSPLIT16_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT16 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT16 = [64, 2, 33, 1, -128, 0, 96, 64, 19, 32, 0, 72, 3, 0, -128, 68, 0];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT16; }
    static GRPSPLIT17_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT17 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT17 = [104, -94, 9, 35, 41, -124, 2, 4, -128, 1, 0, 90, 48, 8, 120, 0, 0];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT17; }
    static GRPSPLIT18_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT18 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT18 = [2, 73, 70, -128, 18, 1, 80, 32, 64, 64, 10, 0, 65, 0, 2, 0, 2];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT18; }
    static GRPSPLIT19_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT19 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT19 = [0, -64, 2, 2, 0, 4, 64, 34, -112, 32, 0, 33, 26, 0, -28, 12, 4];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT19; }
    static GRPSPLIT20_$LI$() { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT20 == null) {
        gbm_pojo_test_Tree_4_class_0.GRPSPLIT20 = [0, -128, 8, 64, 8, 76, 0, 0, 16, 32, 32, 65, 17, -63, 98, 34, 5];
    } return gbm_pojo_test_Tree_4_class_0.GRPSPLIT20; }
}
gbm_pojo_test_Tree_4_class_0["__class"] = "gbm_pojo_test_Tree_4_class_0";
class gbm_pojo_test_Forest_5 {
    static score0(fdata, preds) {
        preds[1] += gbm_pojo_test_Tree_5_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_5["__class"] = "gbm_pojo_test_Forest_5";
class gbm_pojo_test_Tree_5_class_0 {
    static score0(data) {
        const pred = (data[2] < 6.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT1_$LI$(), 134, 0, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT2_$LI$(), 132, 0, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT3_$LI$(), 134, 0, data[10])) ? -0.17535403 : -0.11951502) : ( /* isNaN */isNaN(data[4]) || data[4] < 1272.0 ? -0.08784636 : -0.022800786)) : (data[4] < 1180.0 ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(130, 1, data[10]) || (GenModel.bitSetIsInRange(130, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT4_$LI$(), 130, 1, data[10])) ? -0.05467794 : 0.123772666) : ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(130, 1, data[10]) || (GenModel.bitSetIsInRange(130, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT5_$LI$(), 130, 1, data[10])) ? -6.35277E-4 : 0.1540596))) : (data[5] < 1327.5 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(131, 0, data[9]) || (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT6_$LI$(), 131, 0, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT7_$LI$(), 133, 0, data[10])) ? -0.04405936 : 0.019320041) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT8_$LI$(), 133, 0, data[10])) ? 0.005152084 : 0.07956682)) : ( /* isNaN */isNaN(data[0]) || data[0] < 2003.5 ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT9_$LI$(), 133, 0, data[10])) ? -0.052023977 : 0.059355058) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(130, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT10_$LI$(), 130, 0, data[9])) ? 0.043730453 : 0.1109079)))) : ( /* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT11_$LI$(), 132, 0, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT12_$LI$(), 134, 0, data[10])) ? (data[5] < 1106.5 ? -0.107170016 : -0.045113467) : ( /* isNaN */isNaN(data[4]) || data[4] < 1364.5 ? -0.04108156 : 0.0054534846)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT13_$LI$(), 134, 0, data[10])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT14_$LI$(), 134, 0, data[10])) ? -0.083889164 : -0.010010638) : (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT15_$LI$(), 32, 0, data[6])) ? -0.02485342 : 0.046775978))) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT16_$LI$(), 132, 0, data[9])) ? ( /* isNaN */isNaN(data[5]) || data[5] < 1881.0 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(130, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT17_$LI$(), 130, 0, data[9])) ? -0.10566193 : -0.06981868) : ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(131, 0, data[10]) || (GenModel.bitSetIsInRange(131, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT18_$LI$(), 131, 0, data[10])) ? -0.08136055 : -0.015339674)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT19_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[0]) || data[0] < 2004.5 ? -0.07521195 : -0.01897317) : (data[4] < 1180.0 ? -0.042753506 : 0.014415721)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT0 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT0 = [107, -94, 43, -29, -2, 47, -29, 99, -37, -13, -44, -1, -33, -17, -81, 95, 6];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT1 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT1 = [-1, 127, -9, -5, 123, -5, -17, -1, 123, -25, -33, -99, -1, -17, -3, -1, 31];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT1; }
    static GRPSPLIT2_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT2 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT2 = [127, -81, -21, -1, -2, -1, -5, 115, -37, -1, -1, -1, -1, -17, -1, 127, 15];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT2; }
    static GRPSPLIT3_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT3 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT3 = [0, 0, 8, 4, -128, 0, 16, 0, 0, 0, 0, 32, 0, 0, 0, 0, 32];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT3; }
    static GRPSPLIT4_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT4 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT4 = [0, 48, -127, 0, 0, -128, 0, 0, 16, 0, 0, 0, 0, 0, 0, 2, 0];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT4; }
    static GRPSPLIT5_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT5 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT5 = [64, 48, 0, 0, 0, 0, 64, -112, 16, 64, 0, 0, 1, -96, 24, 17, 2];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT5; }
    static GRPSPLIT6_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT6 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT6 = [73, 34, 0, -128, 20, 4, -126, 64, -61, -78, 4, -128, 79, 0, 10, 16, 4];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT6; }
    static GRPSPLIT7_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT7 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT7 = [-19, 127, -31, -15, -35, -69, -1, 59, 110, -25, -66, -14, -33, 14, -36, -9, 7];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT7; }
    static GRPSPLIT8_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT8 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT8 = [-2, 51, -5, -7, -33, -5, -25, -38, -2, 63, -34, -50, -1, -25, -3, -1, 6];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT8; }
    static GRPSPLIT9_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT9 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT9 = [-11, -97, -69, -17, -10, -35, -67, -23, -11, -1, -49, -66, -67, -2, -37, -41, 23];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT9; }
    static GRPSPLIT10_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT10 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT10 = [-1, 125, -11, -65, -9, -9, -66, -4, -1, -1, -5, -1, -1, -3, -3, -2, 1];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT10; }
    static GRPSPLIT11_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT11 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT11 = [120, -34, 107, -21, -17, 126, 111, -39, -5, 60, -64, -33, -89, -1, -13, 30, 9];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT11; }
    static GRPSPLIT12_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT12 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT12 = [-1, -1, -11, -5, -1, -1, -17, -37, -1, -34, -33, -33, -17, -1, 127, -1, 63];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT12; }
    static GRPSPLIT13_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT13 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT13 = [-5, -43, -40, -3, -74, 79, -3, -110, -68, -65, -9, -66, 125, -69, -9, 127, 45];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT13; }
    static GRPSPLIT14_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT14 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT14 = [-1, -1, -2, -1, -73, -17, -1, -74, -1, -1, -1, -1, 127, -1, -9, -1, 63];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT14; }
    static GRPSPLIT15_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT15 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT15 = [-9, 3, 0, 0];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT15; }
    static GRPSPLIT16_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT16 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT16 = [106, -94, 9, 51, 47, -124, 2, 4, -128, 1, 2, 90, 48, 11, 123, 85, 0];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT16; }
    static GRPSPLIT17_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT17 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT17 = [0, 9, -122, -128, 16, 1, 64, 32, 0, 64, -120, 4, 5, 0, 4, 0, 2];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT17; }
    static GRPSPLIT18_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT18 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT18 = [64, 0, 2, 0, 32, 68, 0, 2, -126, 32, 0, 48, 26, 0, -96, 6, 0];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT18; }
    static GRPSPLIT19_$LI$() { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT19 == null) {
        gbm_pojo_test_Tree_5_class_0.GRPSPLIT19 = [0, -92, 8, 72, 2, 76, 1, 20, -119, 32, 49, 65, 27, -61, 98, 43, 5];
    } return gbm_pojo_test_Tree_5_class_0.GRPSPLIT19; }
}
gbm_pojo_test_Tree_5_class_0["__class"] = "gbm_pojo_test_Tree_5_class_0";
class gbm_pojo_test_Forest_6 {
    static score0(fdata, preds) {
        preds[1] += gbm_pojo_test_Tree_6_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_6["__class"] = "gbm_pojo_test_Forest_6";
class gbm_pojo_test_Tree_6_class_0 {
    static score0(data) {
        const pred = (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? ( /* isNaN */isNaN(data[0]) || data[0] < 2006.5 ? (data[5] < 1444.5 ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(134, 0, data[10]) || (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT1_$LI$(), 134, 0, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT2_$LI$(), 132, 0, data[9])) ? -0.07994515 : -0.038213454) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT3_$LI$(), 132, 0, data[9])) ? -0.03815278 : 0.013343556)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT4_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT5_$LI$(), 132, 0, data[9])) ? -0.05748715 : 0.062956914) : (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT6_$LI$(), 32, 0, data[6])) ? -0.059515014 : 0.013447878))) : (data[4] < 1124.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 1, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT7_$LI$(), 129, 1, data[9])) ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(132, 1, data[10]) || (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT8_$LI$(), 132, 1, data[10])) ? -0.1732277 : -0.04905467) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT9_$LI$(), 132, 1, data[10])) ? -0.14933641 : 0.037337136)) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(129, 1, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT10_$LI$(), 129, 1, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT11_$LI$(), 132, 1, data[10])) ? -0.051000718 : 0.06068832) : ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(132, 1, data[10]) || (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT12_$LI$(), 132, 1, data[10])) ? 0.09433502 : 0.13511497)))) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT13_$LI$(), 134, 0, data[10])) ? (data[2] < 5.5 ? (data[5] < 1081.5 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(124, 3, data[9]) || (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT14_$LI$(), 124, 3, data[9])) ? -0.03974043 : 0.09754446) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT15_$LI$(), 133, 0, data[10])) ? -0.006901633 : 0.07263307)) : ( /* isNaN */isNaN(data[0]) || data[0] < 1997.5 ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT16_$LI$(), 133, 0, data[10])) ? -0.029186554 : 0.021131588) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(124, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT17_$LI$(), 124, 3, data[9])) ? -0.07091319 : -0.027239723))) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT18_$LI$(), 132, 0, data[9])) ? ( /* isNaN */isNaN(data[5]) || data[5] < 1640.5 ? ( /* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? 0.027061231 : -0.021917144) : ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(131, 1, data[10]) || (GenModel.bitSetIsInRange(131, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT19_$LI$(), 131, 1, data[10])) ? 0.025699666 : 0.083474666)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT20_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT21_$LI$(), 132, 0, data[9])) ? 0.013190969 : 0.073076054) : (data[5] < 921.5 ? 0.0071072467 : 0.075247064)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT0 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT0 = [104, 6, 41, -30, -28, 36, -29, 97, -37, 42, -128, 95, -57, 43, -54, 92, 0];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT1 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT1 = [106, 32, 32, 1, 2, 4, 1, 0, 9, 16, 96, 64, -87, -55, -62, 5, 20];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT1; }
    static GRPSPLIT2_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT2 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT2 = [0, -96, -64, 5, 27, -63, 0, 20, 0, -63, 26, -128, 0, 0, 17, 0, 0];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT2; }
    static GRPSPLIT3_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT3 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT3 = [3, -96, 0, 1, 3, 0, 0, 2, 0, 16, 4, 0, 32, 4, 32, 0, 4];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT3; }
    static GRPSPLIT4_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT4 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT4 = [52, -33, -3, -29, 83, -33, -18, -19, -16, -18, -103, -29, -65, -27, 126, -69, 23];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT4; }
    static GRPSPLIT5_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT5 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT5 = [0, 32, 68, 0, 0, 9, 0, 0, 0, 0, 0, 0, 48, 0, 16, 0, 0];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT5; }
    static GRPSPLIT6_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT6 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT6 = [-15, 3, 0, 0];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT6; }
    static GRPSPLIT7_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT7 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT7 = [-9, -33, -1, -5, -1, -1, -7, -65, -17, -1, -1, -1, -1, -1, -1, 127, 0];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT7; }
    static GRPSPLIT8_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT8 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT8 = [64, 0, 0, 64, 0, -128, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1, 2];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT8; }
    static GRPSPLIT9_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT9 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT9 = [-9, -1, -1, -2, -1, -33, -1, -1, -1, -5, -17, -1, 127, -1, -10, -5, 15];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT9; }
    static GRPSPLIT10_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT10 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT10 = [-65, -1, -4, -5, -1, -1, -7, -66, -1, -1, -33, -1, -1, -1, 127, 127, 0];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT10; }
    static GRPSPLIT11_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT11 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT11 = [-2, -9, -1, -1, -83, -1, -17, -1, -5, -30, -1, -35, -1, -1, -2, -2, 15];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT11; }
    static GRPSPLIT12_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT12 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT12 = [-2, -33, -7, -65, -17, 127, -1, 127, -13, -81, -1, -9, 127, -9, -1, -7, 13];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT12; }
    static GRPSPLIT13_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT13 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT13 = [-126, 20, -120, -120, -78, 73, -67, -128, -70, -72, 0, -99, 61, -52, -46, 46, 12];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT13; }
    static GRPSPLIT14_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT14 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT14 = [65, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 1, 0, 1, 0, 0];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT14; }
    static GRPSPLIT15_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT15 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT15 = [-17, -1, -1, -37, -2, -3, -65, -7, -2, -1, -23, -1, 127, -2, -5, -1, 31];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT15; }
    static GRPSPLIT16_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT16 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT16 = [77, -126, 0, 4, 5, -124, 0, 32, 1, 0, 2, 32, 2, 17, 33, 0, 1];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT16; }
    static GRPSPLIT17_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT17 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT17 = [-1, -1, -2, 111, -1, -1, -9, -73, -9, -5, -33, 94, -65, -65, -17, 7];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT17; }
    static GRPSPLIT18_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT18 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT18 = [-9, -7, -9, -99, -69, -5, -1, -34, -9, -9, 127, -71, -5, -4, -75, -1, 15];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT18; }
    static GRPSPLIT19_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT19 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT19 = [-1, -3, -1, -1, -18, 127, -17, -65, -30, -1, -1, -71, -29, -69, -97, -21, 3];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT19; }
    static GRPSPLIT20_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT20 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT20 = [127, -1, -1, -1, -33, -1, -25, -1, -1, 103, -1, -2, -33, -9, 125, -33, 63];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT20; }
    static GRPSPLIT21_$LI$() { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT21 == null) {
        gbm_pojo_test_Tree_6_class_0.GRPSPLIT21 = [-65, -1, -1, -1, -1, -1, 126, -65, 61, -1, -1, -10, -2, -1, -1, -65, 15];
    } return gbm_pojo_test_Tree_6_class_0.GRPSPLIT21; }
}
gbm_pojo_test_Tree_6_class_0["__class"] = "gbm_pojo_test_Tree_6_class_0";
class gbm_pojo_test_Forest_7 {
    static score0(fdata, preds) {
        preds[1] += gbm_pojo_test_Tree_7_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_7["__class"] = "gbm_pojo_test_Forest_7";
class gbm_pojo_test_Tree_7_class_0 {
    static score0(data) {
        const pred = (data[2] < 6.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (data[5] < 1041.5 ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(133, 1, data[10]) || (GenModel.bitSetIsInRange(133, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT1_$LI$(), 133, 1, data[10])) ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT2_$LI$(), 132, 0, data[9])) ? -0.077967025 : 0.025046602) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT3_$LI$(), 132, 0, data[9])) ? -0.07011788 : 0.035904076)) : ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(133, 1, data[10]) || (GenModel.bitSetIsInRange(133, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT4_$LI$(), 133, 1, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT5_$LI$(), 132, 0, data[9])) ? -0.042469706 : 0.016547324) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT6_$LI$(), 132, 0, data[9])) ? -0.01932079 : 0.076523185))) : (data[4] < 829.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(128, 3, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT7_$LI$(), 128, 3, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT8_$LI$(), 133, 0, data[10])) ? -0.16542368 : -0.0136284735) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT9_$LI$(), 133, 0, data[10])) ? -0.01292895 : 0.0797437)) : ( /* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT10_$LI$(), 133, 0, data[10])) ? -0.0094185425 : 0.061720364) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT11_$LI$(), 133, 0, data[10])) ? 0.08849967 : 0.12887704)))) : ( /* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT12_$LI$(), 132, 0, data[9])) ? (data[0] < 1987.5 ? (data[4] < 1211.5 ? -0.05261361 : 0.059977558) : ( /* isNaN */isNaN(data[2]) || data[2] < 20.5 ? -0.01599408 : -0.055944283)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT13_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[0]) || data[0] < 1993.5 ? -0.0101492535 : 0.057988476) : (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT14_$LI$(), 32, 0, data[6])) ? -0.022203758 : 0.04871426))) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT15_$LI$(), 134, 0, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT16_$LI$(), 132, 0, data[9])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT17_$LI$(), 132, 0, data[9])) ? -0.13240871 : -0.086979926) : ( /* isNaN */isNaN(data[0]) || data[0] < 2004.5 ? -0.06318535 : -0.011012612)) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT18_$LI$(), 132, 0, data[9])) ? (data[5] < 1327.5 ? -0.06991185 : -0.02522777) : (data[4] < 1143.5 ? -0.025657265 : 0.028593613)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT0 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT0 = [72, 2, 33, -96, -10, 12, -94, 97, -45, -78, 4, -33, -57, -118, -121, 92, 4];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT1 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT1 = [-1, -65, -4, -84, -3, -33, -1, 13, -9, 122, -1, -63, -25, 29, -74, -6, 27];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT1; }
    static GRPSPLIT2_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT2 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT2 = [1, 32, 0, 2, 0, 64, 64, 2, 0, 0, -64, 0, 0, 1, 0, 0, 3];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT2; }
    static GRPSPLIT3_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT3 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT3 = [-17, -74, -1, -11, -1, -65, -13, 127, -33, -1, 63, -1, -17, -2, -17, -33, 12];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT3; }
    static GRPSPLIT4_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT4 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT4 = [101, 42, -128, 68, 0, -126, 64, 80, 56, -58, 0, -100, 65, 102, 88, -112, 10];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT4; }
    static GRPSPLIT5_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT5 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT5 = [122, -73, -17, -25, -10, 47, -89, 99, -5, -13, -41, -1, -33, -17, -65, 127, 14];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT5; }
    static GRPSPLIT6_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT6 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT6 = [-1, -9, -1, -1, -1, 31, -1, 127, -1, -1, -66, -1, -33, -65, -65, -1, 6];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT6; }
    static GRPSPLIT7_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT7 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT7 = [-1, -1, -1, -65, -3, -1, -33, -69, -1, 127, -97, -43, -65, -98, -1, -9];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT7; }
    static GRPSPLIT8_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT8 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT8 = [-3, 127, -1, -9, 127, -1, -1, -69, -1, -17, -34, -1, -3, -6, -98, -9, 15];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT8; }
    static GRPSPLIT9_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT9 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT9 = [-1, 11, -5, -9, 123, -65, -1, -1, -2, 111, -1, -2, -3, -22, -1, -45, 7];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT9; }
    static GRPSPLIT10_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT10 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT10 = [-1, -77, -7, -17, -2, -3, -75, -8, -2, -1, -17, 119, -1, 102, -37, -1, 30];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT10; }
    static GRPSPLIT11_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT11 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT11 = [-3, -49, -13, 117, -1, -1, 126, -33, -9, -33, -34, -1, -9, 110, 125, -41, 27];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT11; }
    static GRPSPLIT12_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT12 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT12 = [120, -34, 107, -21, -18, 62, 111, -39, -5, 60, -64, -33, -93, -65, -45, 30, 9];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT12; }
    static GRPSPLIT13_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT13 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT13 = [2, -128, -104, 8, 6, 64, 29, 2, -112, -76, -126, 0, 61, -103, -31, 32, 5];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT13; }
    static GRPSPLIT14_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT14 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT14 = [-9, 3, 0, 0];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT14; }
    static GRPSPLIT15_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT15 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT15 = [32, -92, 8, 72, 8, 76, 65, 20, -125, 32, 17, 96, 27, -61, 38, 39, 5];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT15; }
    static GRPSPLIT16_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT16 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT16 = [72, -85, 11, 17, 115, 5, 2, 0, -126, 0, 8, 78, 21, 0, 79, 16, 0];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT16; }
    static GRPSPLIT17_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT17 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT17 = [-2, -1, -1, -3, -1, -9, -1, -5, -1, -34, -19, -2, -73, -32, 95, -4, 15];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT17; }
    static GRPSPLIT18_$LI$() { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT18 == null) {
        gbm_pojo_test_Tree_7_class_0.GRPSPLIT18 = [96, 34, 9, 1, 21, -115, 0, 6, -128, 65, 2, -34, 0, 9, 105, 85, 0];
    } return gbm_pojo_test_Tree_7_class_0.GRPSPLIT18; }
}
gbm_pojo_test_Tree_7_class_0["__class"] = "gbm_pojo_test_Tree_7_class_0";
class gbm_pojo_test_Forest_8 {
    static score0(fdata, preds) {
        preds[1] += gbm_pojo_test_Tree_8_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_8["__class"] = "gbm_pojo_test_Forest_8";
class gbm_pojo_test_Tree_8_class_0 {
    static score0(data) {
        const pred = (data[2] < 6.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT1_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT2_$LI$(), 132, 0, data[9])) ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(134, 0, data[10]) || (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT3_$LI$(), 134, 0, data[10])) ? -0.08960409 : -0.036350418) : (data[0] < 1993.5 ? -0.05960466 : 0.03154628)) : (data[5] < 1014.5 ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(132, 1, data[10]) || (GenModel.bitSetIsInRange(132, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT4_$LI$(), 132, 1, data[10])) ? -0.045764044 : 0.052963074) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT5_$LI$(), 132, 0, data[9])) ? -0.018311732 : 0.037378646))) : (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT6_$LI$(), 32, 0, data[6])) ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT7_$LI$(), 132, 0, data[9])) ? (data[2] < 2.5 ? -0.12705249 : -0.05079043) : ( /* isNaN */isNaN(data[0]) || data[0] < 1999.0 ? 0.074032426 : -0.03185142)) : (data[4] < 1106.5 ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT8_$LI$(), 133, 0, data[10])) ? -0.014158565 : 0.044793554) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT9_$LI$(), 133, 0, data[10])) ? 0.03150996 : 0.08309605)))) : ( /* isNaN */isNaN(data[0]) || data[0] < 1999.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT10_$LI$(), 132, 0, data[9])) ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(134, 0, data[10]) || (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT11_$LI$(), 134, 0, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT12_$LI$(), 132, 0, data[9])) ? -0.13306955 : -0.037829727) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT13_$LI$(), 132, 0, data[9])) ? -0.021149727 : 0.028858071)) : (!isNaN(data[6]) && (GenModel.bitSetIsInRange(32, 0, data[6]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT14_$LI$(), 32, 0, data[6])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT15_$LI$(), 132, 0, data[9])) ? -0.07009283 : -0.004869465) : ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(134, 0, data[10]) || (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT16_$LI$(), 134, 0, data[10])) ? 0.015709344 : 0.054861084))) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT17_$LI$(), 132, 0, data[9])) ? (data[5] < 1438.5 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(130, 0, data[9]) || (GenModel.bitSetIsInRange(130, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT18_$LI$(), 130, 0, data[9])) ? -0.10968897 : -0.0684205) : ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(131, 0, data[10]) || (GenModel.bitSetIsInRange(131, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT19_$LI$(), 131, 0, data[10])) ? -0.06700152 : -0.0053774575)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT20_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[0]) || data[0] < 2004.5 ? -0.07106419 : -0.005718407) : (data[5] < 1548.5 ? -0.028868884 : 0.019552873)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT0 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT0 = [74, 2, 33, -96, -10, 12, -94, 96, -45, -78, -124, -33, -49, -118, -121, 92, 4];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT1 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT1 = [-17, 127, -83, -37, -6, -1, -17, -87, -6, -3, -65, -71, -1, 127, -3, -9, 31];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT1; }
    static GRPSPLIT2_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT2 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT2 = [0, 40, 2, 2, 0, 65, 0, 0, 0, 0, 16, 0, 16, 32, 112, 0, 0];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT2; }
    static GRPSPLIT3_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT3 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT3 = [16, 0, 82, 0, 0, 0, 0, 4, 0, 2, 64, 70, 0, -128, 2, 0, 0];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT3; }
    static GRPSPLIT4_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT4 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT4 = [5, 8, 0, 4, 65, 0, 64, 0, 0, 76, 16, -128, 1, 12, 0, 18, 0];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT4; }
    static GRPSPLIT5_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT5 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT5 = [122, -9, -5, -25, -1, 63, -17, 127, -1, -9, -44, -1, -33, -65, -81, -1, 6];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT5; }
    static GRPSPLIT6_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT6 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT6 = [-9, 3, 0, 0];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT6; }
    static GRPSPLIT7_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT7 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT7 = [64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT7; }
    static GRPSPLIT8_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT8 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT8 = [-1, 39, -5, -15, 85, -5, 103, -38, -2, -81, -34, -41, -3, -90, -1, -41, 15];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT8; }
    static GRPSPLIT9_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT9 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT9 = [-91, -3, -7, -17, -26, -3, -67, -7, -1, -1, -55, 87, -35, 116, -101, -1, 22];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT9; }
    static GRPSPLIT10_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT10 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT10 = [72, -126, 99, -93, -121, 68, 104, 64, -45, 56, -128, -50, -93, 1, -61, 92, 0];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT10; }
    static GRPSPLIT11_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT11 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT11 = [-1, -1, -15, -5, -5, -1, -17, -37, -1, -34, -33, -34, 111, -33, 126, -1, 27];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT11; }
    static GRPSPLIT12_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT12 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT12 = [-1, -1, -1, -1, -1, -1, -1, -3, -5, -1, -1, -1, -1, -3, -1, -33, 13];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT12; }
    static GRPSPLIT13_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT13 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT13 = [0, 0, 12, 0, 16, 1, 0, 2, 0, 0, 0, 0, 0, 6, 0, 0, 2];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT13; }
    static GRPSPLIT14_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT14 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT14 = [-9, 3, 0, 0];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT14; }
    static GRPSPLIT15_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT15 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT15 = [-1, -1, -1, -1, -3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT15; }
    static GRPSPLIT16_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT16 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT16 = [2, 0, -112, 9, 2, 64, 5, 2, 0, 52, 2, 0, 21, 0, 97, 32, 4];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT16; }
    static GRPSPLIT17_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT17 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT17 = [104, -86, 13, 51, 43, -124, 2, 4, -128, 1, 2, 90, 48, 8, 120, 0, 0];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT17; }
    static GRPSPLIT18_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT18 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT18 = [2, 65, 66, -128, 16, 1, 80, 34, 64, 80, 8, 0, 65, 4, 2, 0, 2];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT18; }
    static GRPSPLIT19_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT19 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT19 = [64, 0, 2, 2, 0, 4, 64, 34, 16, 0, 0, 48, 10, 0, 4, 4, 4];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT19; }
    static GRPSPLIT20_$LI$() { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT20 == null) {
        gbm_pojo_test_Tree_8_class_0.GRPSPLIT20 = [0, -92, 8, 76, 2, 76, 1, 4, 9, 32, 49, 97, 49, -61, 98, 35, 5];
    } return gbm_pojo_test_Tree_8_class_0.GRPSPLIT20; }
}
gbm_pojo_test_Tree_8_class_0["__class"] = "gbm_pojo_test_Tree_8_class_0";
class gbm_pojo_test_Forest_9 {
    static score0(fdata, preds) {
        preds[1] += gbm_pojo_test_Tree_9_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_9["__class"] = "gbm_pojo_test_Forest_9";
class gbm_pojo_test_Tree_9_class_0 {
    static score0(data) {
        const pred = (data[2] < 6.5 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (data[5] < 1041.5 ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(133, 1, data[10]) || (GenModel.bitSetIsInRange(133, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT1_$LI$(), 133, 1, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 1, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT2_$LI$(), 131, 1, data[9])) ? -0.15235789 : -0.048692) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(131, 1, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT3_$LI$(), 131, 1, data[9])) ? -0.06283237 : 0.03258739)) : ( /* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT4_$LI$(), 133, 1, data[10])) ? -0.034710344 : 0.022741744) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 1, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT5_$LI$(), 133, 1, data[10])) ? 0.033610754 : 0.11563232))) : (data[2] < 1.5 ? ( /* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT6_$LI$(), 133, 0, data[10])) ? -0.094179556 : 0.06645071) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT7_$LI$(), 133, 0, data[10])) ? -0.12691893 : 0.017173646)) : (data[4] < 717.5 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(131, 0, data[9]) || (GenModel.bitSetIsInRange(131, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT8_$LI$(), 131, 0, data[9])) ? -0.052207164 : 0.082908764) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT9_$LI$(), 133, 0, data[10])) ? 0.02356362 : 0.07073981)))) : ( /* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT10_$LI$(), 132, 0, data[9])) ? (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT11_$LI$(), 134, 0, data[10])) ? (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT12_$LI$(), 132, 0, data[9])) ? -0.13247876 : -0.03522225) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT13_$LI$(), 132, 0, data[9])) ? -0.033556167 : 0.013424614)) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(134, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT14_$LI$(), 134, 0, data[10])) ? ( /* isNaN */isNaN(data[5]) || data[5] < 1678.0 ? -0.049635213 : 0.027109658) : ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(132, 0, data[9]) || (GenModel.bitSetIsInRange(132, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT15_$LI$(), 132, 0, data[9])) ? 0.017906439 : 0.049174905))) : ( /* isNaN */isNaN(data[5]) || data[5] < 1631.5 ? ( /* isNaN */isNaN(data[9]) || !GenModel.bitSetIsInRange(130, 0, data[9]) || (GenModel.bitSetIsInRange(130, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT16_$LI$(), 130, 0, data[9])) ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(133, 0, data[10]) || (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT17_$LI$(), 133, 0, data[10])) ? -0.07433795 : -0.040629175) : (data[0] < 2000.5 ? 0.020971054 : -0.029973244)) : (!isNaN(data[9]) && (GenModel.bitSetIsInRange(130, 0, data[9]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT18_$LI$(), 130, 0, data[9])) ? ( /* isNaN */isNaN(data[10]) || !GenModel.bitSetIsInRange(133, 0, data[10]) || (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT19_$LI$(), 133, 0, data[10])) ? -0.06287862 : -0.004335585) : (!isNaN(data[10]) && (GenModel.bitSetIsInRange(133, 0, data[10]) && !GenModel.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT20_$LI$(), 133, 0, data[10])) ? -0.04766358 : 0.024850857)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT0 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT0 = [73, 0, 33, -96, -10, 12, -94, 96, -45, -78, 4, -49, -57, -118, -121, 92, 4];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT1 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT1 = [-5, -67, -3, -84, -3, -33, -65, 15, -9, 122, -33, -31, -25, -99, -74, -6, 27];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT1; }
    static GRPSPLIT2_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT2 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT2 = [-9, -41, -1, -33, -1, -1, -3, -65, -5, -1, -1, -9, -1, -3, 95, -1, 7];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT2; }
    static GRPSPLIT3_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT3 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT3 = [119, -37, -33, -6, 127, -33, 121, -1, -17, -1, -97, -1, 119, -1, -9, 127, 6];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT3; }
    static GRPSPLIT4_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT4 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT4 = [-9, -65, -60, 109, -4, -17, -9, 86, -71, -10, 111, -44, 95, 119, -1, -8, 15];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT4; }
    static GRPSPLIT5_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT5 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT5 = [-2, -17, -5, -1, -3, -33, -1, -1, -1, -9, -1, -33, -2, -1, -18, -17, 31];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT5; }
    static GRPSPLIT6_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT6 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT6 = [-1, 83, -2, -5, -34, -66, -17, -6, -2, -1, -3, 63, -1, -73, 127, -41, 12];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT6; }
    static GRPSPLIT7_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT7 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT7 = [61, -81, -3, -17, -3, -3, -1, -5, 111, -1, -8, -42, -49, -12, 9, -39, 19];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT7; }
    static GRPSPLIT8_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT8 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT8 = [0, 0, 0, -128, 68, 12, 2, 0, -127, -110, 0, 4, 68, 8, 3, 80, 0];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT8; }
    static GRPSPLIT9_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT9 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT9 = [-2, -79, -5, -19, -18, -7, 52, -8, -1, -1, -49, -9, 93, -10, -5, -9, 14];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT9; }
    static GRPSPLIT10_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT10 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT10 = [72, -126, 107, -93, -122, 4, 96, 64, -45, 56, -128, -54, -93, 3, -61, 24, 0];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT10; }
    static GRPSPLIT11_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT11 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT11 = [-1, -1, -9, -5, -7, -1, -17, -37, -1, -34, -33, -34, 111, -33, 126, -1, 62];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT11; }
    static GRPSPLIT12_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT12 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT12 = [-1, -1, -1, -1, -1, -1, -1, -3, -5, -1, -1, -5, -1, -1, -1, -33, 13];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT12; }
    static GRPSPLIT13_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT13 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT13 = [1, 0, 4, 16, 17, 65, -120, 38, 0, 0, 16, 4, 20, 68, 32, 64, 2];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT13; }
    static GRPSPLIT14_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT14 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT14 = [-1, -41, -36, -3, -74, -49, -1, -78, -65, -65, -9, -1, 127, -5, -9, 127, 61];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT14; }
    static GRPSPLIT15_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT15 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT15 = [64, 2, 33, 35, -128, 0, 96, 0, 83, 32, -128, 8, -125, 0, -128, 0, 0];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT15; }
    static GRPSPLIT16_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT16 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT16 = [104, 32, 8, 2, 61, -128, 2, 0, -128, 1, 0, 16, 0, 1, 24, 80, 0];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT16; }
    static GRPSPLIT17_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT17 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT17 = [98, -94, 0, 8, 40, 12, 1, 36, 11, 48, 83, 64, 18, -104, 1, 1, 4];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT17; }
    static GRPSPLIT18_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT18 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT18 = [66, -94, -53, 36, 3, 5, 0, 4, -128, 0, 6, 94, 48, 11, 73, 69, 0];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT18; }
    static GRPSPLIT19_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT19 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT19 = [0, 36, 10, 1, 0, 4, 68, 16, -112, 96, 1, 112, 11, -31, 4, 46, 5];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT19; }
    static GRPSPLIT20_$LI$() { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT20 == null) {
        gbm_pojo_test_Tree_9_class_0.GRPSPLIT20 = [-1, -65, -1, -1, -33, -1, -2, -37, -1, -81, -35, -21, -33, -17, 127, -41, 7];
    } return gbm_pojo_test_Tree_9_class_0.GRPSPLIT20; }
}
gbm_pojo_test_Tree_9_class_0["__class"] = "gbm_pojo_test_Tree_9_class_0";
/**
 * ''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 * JAKE'S EDITS (REMOVED MOST CALLS TO H2O CLASSES!!)
 * ''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 * This is a helper class to support Java generated models.
 * @class
 */
class GenModel {
    static correctProbabilities(scored, priorClassDist, modelClassDist) {
        let probsum = 0;
        for (let c = 1; c < scored.length; c++) {
            {
                const original_fraction = priorClassDist[c - 1];
                const oversampled_fraction = modelClassDist[c - 1];
                if (original_fraction !== 0 && oversampled_fraction !== 0)
                    scored[c] *= original_fraction / oversampled_fraction;
                probsum += scored[c];
            }
            ;
        }
        if (probsum > 0)
            for (let i = 1; i < scored.length; ++i) {
                scored[i] /= probsum;
            }
        return scored;
    }
    /**
     * Utility function to get a best prediction from an array of class
     * prediction distribution.  It returns the index of the max. probability (if that exists).
     * In the case of ties, it samples from the tied classes with the likelihood given by the prior probabilities.
     * @param {double[]} preds an array of prediction distribution.  Length of arrays is equal to a number of classes+1.
     * @param {double[]} priorClassDist prior class probabilities (used to break ties)
     * @param {double[]} data Test data
     * @param {number} threshold threshold for binary classifier
     * @return {number} the best prediction (index of class, zero-based)
     */
    static getPrediction(preds, priorClassDist, data, threshold) {
        if (preds.length === 3) {
            return GenModel.getPredictionBinomial(preds, threshold);
        }
        else {
            return GenModel.getPredictionMultinomial(preds, priorClassDist, data);
        }
    }
    static getPredictionBinomial(preds, threshold) {
        return (preds[2] >= threshold) ? 1 : 0;
    }
    static getPredictionMultinomial(preds, priorClassDist, data) {
        const ties = ([]);
        ties.push(0);
        let best = 1;
        let tieCnt = 0;
        for (let c = 2; c < preds.length; c++) {
            {
                if (preds[best] < preds[c]) {
                    best = c;
                    tieCnt = 0;
                }
                else if (preds[best] === preds[c]) {
                    tieCnt++;
                    ties.push(c - 1);
                }
            }
            ;
        }
        if (tieCnt === 0)
            return best - 1;
        let hash = 0;
        if (data != null)
            for (let index121 = 0; index121 < data.length; index121++) {
                let d = data[index121];
                hash ^= (function (f) { var buf = new ArrayBuffer(4); (new Float32Array(buf))[0] = f; return (new Uint32Array(buf))[0]; })(Math.fround(d)) >> 6;
            }
        if (priorClassDist != null) {
            let sum = 0;
            for (let index122 = ties.iterator(); index122.hasNext();) {
                let i = index122.next();
                {
                    sum += priorClassDist[i];
                }
            }
            const rng = new java.util.Random(hash);
            const tie = rng.nextDouble();
            let partialSum = 0;
            for (let index123 = ties.iterator(); index123.hasNext();) {
                let i = index123.next();
                {
                    partialSum += priorClassDist[i] / sum;
                    if (tie <= partialSum)
                        return i;
                }
            }
        }
        const res = preds[best];
        let idx = (hash | 0) % (tieCnt + 1);
        for (best = 1; best < preds.length; best++) {
            if (res === preds[best] && --idx < 0)
                return best - 1;
            ;
        }
        throw new java.lang.RuntimeException("Should Not Reach Here");
    }
    static bitSetContains(bits, nbits, bitoff, dnum) {
        let idx = (dnum | 0);
        idx -= bitoff;
        return (bits[idx >> 3] & ((1 | 0) << (idx & 7))) !== 0;
    }
    static bitSetIsInRange(nbits, bitoff, dnum) {
        let idx = (dnum | 0);
        idx -= bitoff;
        return (idx >= 0 && idx < nbits);
    }
    static Kmeans_preprocessData$double_A$double_A$double_A$int_A(data, means, mults, modes) {
        for (let i = 0; i < data.length; i++) {
            {
                data[i] = GenModel.Kmeans_preprocessData$double$int$double_A$double_A$int_A(data[i], i, means, mults, modes);
            }
            ;
        }
    }
    static Kmeans_preprocessData$double$int$double_A$double_A$int_A(d, i, means, mults, modes) {
        if (modes[i] === -1) {
            if ( /* isNaN */isNaN(d))
                d = means[i];
            if (mults != null) {
                d -= means[i];
                d *= mults[i];
            }
        }
        else {
            if ( /* isNaN */isNaN(d))
                d = modes[i];
        }
        return d;
    }
    static Kmeans_preprocessData(d, i, means, mults, modes) {
        if (((typeof d === 'number') || d === null) && ((typeof i === 'number') || i === null) && ((means != null && means instanceof Array && (means.length == 0 || means[0] == null || (typeof means[0] === 'number'))) || means === null) && ((mults != null && mults instanceof Array && (mults.length == 0 || mults[0] == null || (typeof mults[0] === 'number'))) || mults === null) && ((modes != null && modes instanceof Array && (modes.length == 0 || modes[0] == null || (typeof modes[0] === 'number'))) || modes === null)) {
            return GenModel.Kmeans_preprocessData$double$int$double_A$double_A$int_A(d, i, means, mults, modes);
        }
        else if (((d != null && d instanceof Array && (d.length == 0 || d[0] == null || (typeof d[0] === 'number'))) || d === null) && ((i != null && i instanceof Array && (i.length == 0 || i[0] == null || (typeof i[0] === 'number'))) || i === null) && ((means != null && means instanceof Array && (means.length == 0 || means[0] == null || (typeof means[0] === 'number'))) || means === null) && ((mults != null && mults instanceof Array && (mults.length == 0 || mults[0] == null || (typeof mults[0] === 'number'))) || mults === null) && modes === undefined) {
            return GenModel.Kmeans_preprocessData$double_A$double_A$double_A$int_A(d, i, means, mults);
        }
        else
            throw new Error('invalid overload');
    }
    static KMeans_closest(centers, point, domains) {
        let min = -1;
        let minSqr = javaemul.internal.DoubleHelper.MAX_VALUE;
        for (let cluster = 0; cluster < centers.length; cluster++) {
            {
                const sqr = GenModel.KMeans_distance$double_A$double_A$java_lang_String_A_A(centers[cluster], point, domains);
                if (sqr < minSqr) {
                    min = cluster;
                    minSqr = sqr;
                }
            }
            ;
        }
        return min;
    }
    static KMeans_distances(centers, point, domains, distances) {
        let min = -1;
        let minSqr = javaemul.internal.DoubleHelper.MAX_VALUE;
        for (let cluster = 0; cluster < centers.length; cluster++) {
            {
                distances[cluster] = GenModel.KMeans_distance$double_A$double_A$java_lang_String_A_A(centers[cluster], point, domains);
                if (distances[cluster] < minSqr) {
                    min = cluster;
                    minSqr = distances[cluster];
                }
            }
            ;
        }
        return min;
    }
    static KMeans_simplex(centers, point, domains) {
        const dist = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(centers.length);
        let sum = 0;
        let inv_sum = 0;
        for (let cluster = 0; cluster < centers.length; cluster++) {
            {
                dist[cluster] = GenModel.KMeans_distance$double_A$double_A$java_lang_String_A_A(centers[cluster], point, domains);
                sum += dist[cluster];
                inv_sum += 1.0 / dist[cluster];
            }
            ;
        }
        const ratios = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(centers.length);
        if (sum === 0) {
            const rng = new java.util.Random();
            const idx = rng.nextInt(centers.length);
            ratios[idx] = 1;
        }
        else {
            let idx = -1;
            for (let cluster = 0; cluster < centers.length; cluster++) {
                {
                    if (dist[cluster] === 0) {
                        idx = cluster;
                        break;
                    }
                }
                ;
            }
            if (idx === -1) {
                for (let cluster = 0; cluster < centers.length; cluster++) {
                    ratios[cluster] = 1.0 / (dist[cluster] * inv_sum);
                }
            }
            else
                ratios[idx] = 1;
        }
        return ratios;
    }
    static KMeans_distance$double_A$float_A$int_A$double_A$double_A(center, point, modes, colSum, colSumSq) {
        let sqr = 0;
        let pts = point.length;
        for (let column = 0; column < center.length; column++) {
            {
                const d = point[column];
                if ( /* isNaN */isNaN(d)) {
                    pts--;
                    continue;
                }
                if (modes[column] !== -1) {
                    if (d !== center[column]) {
                        sqr += 1.0;
                    }
                    if (d !== modes[column]) {
                        colSum[column] += 1;
                    }
                }
                else {
                    const delta = d - center[column];
                    sqr += delta * delta;
                    colSum[column] += d;
                    colSumSq[column] += Math.fround(d * d);
                }
            }
            ;
        }
        if (0 < pts && pts < point.length) {
            const scale = point.length / pts;
            sqr *= scale;
        }
        return sqr;
    }
    static KMeans_distance(center, point, modes, colSum, colSumSq) {
        if (((center != null && center instanceof Array && (center.length == 0 || center[0] == null || (typeof center[0] === 'number'))) || center === null) && ((point != null && point instanceof Array && (point.length == 0 || point[0] == null || (typeof point[0] === 'number'))) || point === null) && ((modes != null && modes instanceof Array && (modes.length == 0 || modes[0] == null || (typeof modes[0] === 'number'))) || modes === null) && ((colSum != null && colSum instanceof Array && (colSum.length == 0 || colSum[0] == null || (typeof colSum[0] === 'number'))) || colSum === null) && ((colSumSq != null && colSumSq instanceof Array && (colSumSq.length == 0 || colSumSq[0] == null || (typeof colSumSq[0] === 'number'))) || colSumSq === null)) {
            return GenModel.KMeans_distance$double_A$float_A$int_A$double_A$double_A(center, point, modes, colSum, colSumSq);
        }
        else if (((center != null && center instanceof Array && (center.length == 0 || center[0] == null || (typeof center[0] === 'number'))) || center === null) && ((point != null && point instanceof Array && (point.length == 0 || point[0] == null || (typeof point[0] === 'number'))) || point === null) && ((modes != null && modes instanceof Array && (modes.length == 0 || modes[0] == null || modes[0] instanceof Array)) || modes === null) && colSum === undefined && colSumSq === undefined) {
            return GenModel.KMeans_distance$double_A$double_A$java_lang_String_A_A(center, point, modes);
        }
        else
            throw new Error('invalid overload');
    }
    static KMeans_distance$double_A$double_A$java_lang_String_A_A(center, point, domains) {
        let sqr = 0;
        let pts = point.length;
        for (let column = 0; column < center.length; column++) {
            {
                const d = point[column];
                if ( /* isNaN */isNaN(d)) {
                    pts--;
                    continue;
                }
                if (domains[column] != null) {
                    if (d !== center[column])
                        sqr += 1.0;
                }
                else {
                    const delta = d - center[column];
                    sqr += delta * delta;
                }
            }
            ;
        }
        if (0 < pts && pts < point.length)
            sqr *= point.length / pts;
        return sqr;
    }
    static log_rescale(preds) {
        let maxval = javaemul.internal.DoubleHelper.NEGATIVE_INFINITY;
        for (let k = 1; k < preds.length; k++) {
            maxval = Math.max(maxval, preds[k]);
        }
        let dsum = 0;
        for (let k = 1; k < preds.length; k++) {
            dsum += (preds[k] = Math.exp(preds[k] - maxval));
        }
        return dsum;
    }
    static GBM_rescale(preds) {
        const sum = GenModel.log_rescale(preds);
        for (let k = 1; k < preds.length; k++) {
            preds[k] /= sum;
        }
    }
    static GLM_identityInv(x) {
        return x;
    }
    static GLM_logitInv(x) {
        return 1.0 / (Math.exp(-x) + 1.0);
    }
    static GLM_logInv(x) {
        return Math.exp(x);
    }
    static GLM_inverseInv(x) {
        const xx = (x < 0) ? Math.min(-1.0E-5, x) : Math.max(1.0E-5, x);
        return 1.0 / xx;
    }
    static GLM_ologitInv(x) {
        return GenModel.GLM_logitInv(x);
    }
    static GLM_tweedieInv(x, tweedie_link_power) {
        return tweedie_link_power === 0 ? Math.max(2.0E-16, Math.exp(x)) : Math.pow(x, 1.0 / tweedie_link_power);
    }
    /**
     * ???
     * @return {string}
     */
    getHeader() {
        return null;
    }
    static setInput$double_A$float_A$int$int$int_A$double_A$double_A$boolean$boolean(from, to, _nums, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels, replaceMissingWithZero) {
        const nums = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(_nums);
        const cats = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(_cats);
        GenModel.setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels);
        java.util.Arrays.fill(to, 0.0);
        for (let i = 0; i < _cats; ++i) {
            if (cats[i] >= 0)
                to[cats[i]] = 1.0;
            ;
        }
        for (let i = 0; i < _nums; ++i) {
            to[_catOffsets[_cats] + i] = /* isNaN */ isNaN(nums[i]) ? (replaceMissingWithZero ? 0 : javaemul.internal.FloatHelper.NaN) : Math.fround(nums[i]);
        }
    }
    static setInput$double_A$double_A$double_A$int_A$int$int$int_A$double_A$double_A$boolean$boolean(from, to, nums, cats, _nums, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels, replaceMissingWithZero) {
        GenModel.setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels);
        java.util.Arrays.fill(to, 0.0);
        for (let i = 0; i < _cats; ++i) {
            if (cats[i] >= 0)
                to[cats[i]] = 1.0;
            ;
        }
        for (let i = 0; i < _nums; ++i) {
            to[_catOffsets[_cats] + i] = /* isNaN */ isNaN(nums[i]) ? (replaceMissingWithZero ? 0 : NaN) : nums[i];
        }
    }
    static setInput(from, to, nums, cats, _nums, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels, replaceMissingWithZero) {
        if (((from != null && from instanceof Array && (from.length == 0 || from[0] == null || (typeof from[0] === 'number'))) || from === null) && ((to != null && to instanceof Array && (to.length == 0 || to[0] == null || (typeof to[0] === 'number'))) || to === null) && ((nums != null && nums instanceof Array && (nums.length == 0 || nums[0] == null || (typeof nums[0] === 'number'))) || nums === null) && ((cats != null && cats instanceof Array && (cats.length == 0 || cats[0] == null || (typeof cats[0] === 'number'))) || cats === null) && ((typeof _nums === 'number') || _nums === null) && ((typeof _cats === 'number') || _cats === null) && ((_catOffsets != null && _catOffsets instanceof Array && (_catOffsets.length == 0 || _catOffsets[0] == null || (typeof _catOffsets[0] === 'number'))) || _catOffsets === null) && ((_normMul != null && _normMul instanceof Array && (_normMul.length == 0 || _normMul[0] == null || (typeof _normMul[0] === 'number'))) || _normMul === null) && ((_normSub != null && _normSub instanceof Array && (_normSub.length == 0 || _normSub[0] == null || (typeof _normSub[0] === 'number'))) || _normSub === null) && ((typeof useAllFactorLevels === 'boolean') || useAllFactorLevels === null) && ((typeof replaceMissingWithZero === 'boolean') || replaceMissingWithZero === null)) {
            return GenModel.setInput$double_A$double_A$double_A$int_A$int$int$int_A$double_A$double_A$boolean$boolean(from, to, nums, cats, _nums, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels, replaceMissingWithZero);
        }
        else if (((from != null && from instanceof Array && (from.length == 0 || from[0] == null || (typeof from[0] === 'number'))) || from === null) && ((to != null && to instanceof Array && (to.length == 0 || to[0] == null || (typeof to[0] === 'number'))) || to === null) && ((typeof nums === 'number') || nums === null) && ((typeof cats === 'number') || cats === null) && ((_nums != null && _nums instanceof Array && (_nums.length == 0 || _nums[0] == null || (typeof _nums[0] === 'number'))) || _nums === null) && ((_cats != null && _cats instanceof Array && (_cats.length == 0 || _cats[0] == null || (typeof _cats[0] === 'number'))) || _cats === null) && ((_catOffsets != null && _catOffsets instanceof Array && (_catOffsets.length == 0 || _catOffsets[0] == null || (typeof _catOffsets[0] === 'number'))) || _catOffsets === null) && ((typeof _normMul === 'boolean') || _normMul === null) && ((typeof _normSub === 'boolean') || _normSub === null) && useAllFactorLevels === undefined && replaceMissingWithZero === undefined) {
            return GenModel.setInput$double_A$float_A$int$int$int_A$double_A$double_A$boolean$boolean(from, to, nums, cats, _nums, _cats, _catOffsets, _normMul, _normSub);
        }
        else
            throw new Error('invalid overload');
    }
    static setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels) {
        GenModel.setCats$double_A$int_A$int$int_A$boolean(from, cats, _cats, _catOffsets, useAllFactorLevels);
        for (let i = _cats; i < from.length; ++i) {
            {
                let d = from[i];
                if ((_normMul != null) && (_normMul.length > 0)) {
                    d = (d - _normSub[i - _cats]) * _normMul[i - _cats];
                }
                nums[i - _cats] = d;
            }
            ;
        }
    }
    static setCats(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels) {
        if (((from != null && from instanceof Array && (from.length == 0 || from[0] == null || (typeof from[0] === 'number'))) || from === null) && ((nums != null && nums instanceof Array && (nums.length == 0 || nums[0] == null || (typeof nums[0] === 'number'))) || nums === null) && ((cats != null && cats instanceof Array && (cats.length == 0 || cats[0] == null || (typeof cats[0] === 'number'))) || cats === null) && ((typeof _cats === 'number') || _cats === null) && ((_catOffsets != null && _catOffsets instanceof Array && (_catOffsets.length == 0 || _catOffsets[0] == null || (typeof _catOffsets[0] === 'number'))) || _catOffsets === null) && ((_normMul != null && _normMul instanceof Array && (_normMul.length == 0 || _normMul[0] == null || (typeof _normMul[0] === 'number'))) || _normMul === null) && ((_normSub != null && _normSub instanceof Array && (_normSub.length == 0 || _normSub[0] == null || (typeof _normSub[0] === 'number'))) || _normSub === null) && ((typeof useAllFactorLevels === 'boolean') || useAllFactorLevels === null)) {
            return GenModel.setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels);
        }
        else if (((from != null && from instanceof Array && (from.length == 0 || from[0] == null || (typeof from[0] === 'number'))) || from === null) && ((nums != null && nums instanceof Array && (nums.length == 0 || nums[0] == null || (typeof nums[0] === 'number'))) || nums === null) && ((typeof cats === 'number') || cats === null) && ((_cats != null && _cats instanceof Array && (_cats.length == 0 || _cats[0] == null || (typeof _cats[0] === 'number'))) || _cats === null) && ((typeof _catOffsets === 'boolean') || _catOffsets === null) && _normMul === undefined && _normSub === undefined && useAllFactorLevels === undefined) {
            return GenModel.setCats$double_A$int_A$int$int_A$boolean(from, nums, cats, _cats, _catOffsets);
        }
        else
            throw new Error('invalid overload');
    }
    static setCats$double_A$int_A$int$int_A$boolean(from, to, cats, catOffsets, useAllFactorLevels) {
        for (let i = 0; i < cats; ++i) {
            {
                if ( /* isNaN */isNaN(from[i])) {
                    to[i] = (catOffsets[i + 1] - 1);
                }
                else {
                    const c = (from[i] | 0);
                    if (useAllFactorLevels)
                        to[i] = c + catOffsets[i];
                    else {
                        if (c !== 0)
                            to[i] = c - 1 + catOffsets[i];
                        else
                            to[i] = -1;
                    }
                    if (to[i] >= catOffsets[i + 1])
                        to[i] = (catOffsets[i + 1] - 1);
                }
            }
            ;
        }
    }
    static convertDouble2Float(input) {
        const arraySize = input.length;
        const output = (s => { let a = []; while (s-- > 0)
            a.push(0); return a; })(arraySize);
        for (let index = 0; index < arraySize; index++) {
            output[index] = Math.fround(input[index]);
        }
        return output;
    }
}
GenModel["__class"] = "GenModel";
gbm_pojo_test_Tree_9_class_0.GRPSPLIT20_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT19_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT18_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT17_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT16_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT15_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT14_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT13_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT12_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT11_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT10_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT9_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT8_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT7_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT6_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT5_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT4_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT3_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT2_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT1_$LI$();
gbm_pojo_test_Tree_9_class_0.GRPSPLIT0_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT20_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT19_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT18_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT17_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT16_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT15_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT14_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT13_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT12_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT11_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT10_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT9_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT8_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT7_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT6_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT5_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT4_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT3_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT2_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT1_$LI$();
gbm_pojo_test_Tree_8_class_0.GRPSPLIT0_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT18_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT17_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT16_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT15_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT14_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT13_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT12_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT11_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT10_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT9_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT8_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT7_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT6_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT5_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT4_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT3_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT2_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT1_$LI$();
gbm_pojo_test_Tree_7_class_0.GRPSPLIT0_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT21_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT20_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT19_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT18_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT17_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT16_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT15_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT14_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT13_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT12_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT11_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT10_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT9_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT8_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT7_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT6_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT5_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT4_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT3_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT2_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT1_$LI$();
gbm_pojo_test_Tree_6_class_0.GRPSPLIT0_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT19_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT18_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT17_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT16_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT15_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT14_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT13_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT12_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT11_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT10_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT9_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT8_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT7_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT6_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT5_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT4_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT3_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT2_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT1_$LI$();
gbm_pojo_test_Tree_5_class_0.GRPSPLIT0_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT20_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT19_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT18_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT17_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT16_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT15_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT14_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT13_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT12_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT11_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT10_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT9_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT8_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT7_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT6_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT5_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT4_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT3_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT2_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT1_$LI$();
gbm_pojo_test_Tree_4_class_0.GRPSPLIT0_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT19_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT18_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT17_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT16_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT15_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT14_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT13_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT12_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT11_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT10_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT9_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT8_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT7_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT6_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT5_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT4_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT3_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT2_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT1_$LI$();
gbm_pojo_test_Tree_3_class_0.GRPSPLIT0_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT19_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT18_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT17_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT16_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT15_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT14_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT13_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT12_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT11_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT10_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT9_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT8_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT7_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT6_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT5_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT4_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT3_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT2_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT1_$LI$();
gbm_pojo_test_Tree_2_class_0.GRPSPLIT0_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT15_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT14_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT13_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT12_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT11_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT10_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT9_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT8_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT7_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT6_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT5_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT4_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT3_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT2_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT1_$LI$();
gbm_pojo_test_Tree_1_class_0.GRPSPLIT0_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT18_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT17_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT16_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT15_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT14_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT13_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT12_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT11_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT10_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT9_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT8_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT7_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT6_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT5_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT4_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT3_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT2_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT1_$LI$();
gbm_pojo_test_Tree_0_class_0.GRPSPLIT0_$LI$();
gbm_pojo_test_ColInfo_11.VALUES_$LI$();
gbm_pojo_test_ColInfo_11.__static_initialize();
gbm_pojo_test_ColInfo_10.VALUES_$LI$();
gbm_pojo_test_ColInfo_10.__static_initialize();
gbm_pojo_test_ColInfo_9.VALUES_$LI$();
gbm_pojo_test_ColInfo_9.__static_initialize();
gbm_pojo_test_ColInfo_6.VALUES_$LI$();
gbm_pojo_test_ColInfo_6.__static_initialize();
NamesHolder_gbm_pojo_test.VALUES_$LI$();
NamesHolder_gbm_pojo_test.__static_initialize();
gbm_pojo_test.MODEL_CLASS_DISTRIB_$LI$();
gbm_pojo_test.PRIOR_CLASS_DISTRIB_$LI$();
gbm_pojo_test.DOMAINS_$LI$();
gbm_pojo_test.NAMES_$LI$();
exports.gbm_pojo_test=gbm_pojo_test;

},{}],2:[function(require,module,exports){
const {gbm_pojo_test}=require("./gbm_pojo_test.js"); let m=new gbm_pojo_test(); let n=gbm_pojo_test.NAMES_$LI$();
document.getElementById("h2oCalc").addEventListener("click", h2o_calculate);
function h2o_calculate() {
	pred = new Array(3).fill(0);
	var year = parseFloat(document.getElementById("year").value);
	var month = parseFloat(document.getElementById("month").value);
	var dayofmonth = parseFloat(document.getElementById("dayofmonth").value);
	var dayofweek = parseFloat(document.getElementById("dayofweek").value);
	var crsdeptime = parseFloat(document.getElementById("crsdeptime").value);
	var crsarrtime = parseFloat(document.getElementById("crsarrtime").value);
	var uniquecarrier = parseFloat(document.getElementById("uniquecarrier").value);
	var flightnum = parseFloat(document.getElementById("flightnum").value);
	var crselapsedtime = parseFloat(document.getElementById("crselapsedtime").value);
	var origin = parseFloat(document.getElementById("origin").value);
	var dest = parseFloat(document.getElementById("dest").value);
	input = [year,month,dayofmonth,dayofweek,crsdeptime,crsarrtime,uniquecarrier,flightnum,crselapsedtime,origin,dest];
	p = m.score0(input, pred);
	document.getElementById("h2oResult").innerHTML = p;
}

},{"./gbm_pojo_test.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImdibV9wb2pvX3Rlc3QuanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbHpEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiLyogR2VuZXJhdGVkIGZyb20gSmF2YSB3aXRoIEpTd2VldCAzLjAuMCAtIGh0dHA6Ly93d3cuanN3ZWV0Lm9yZyAqL1xuY2xhc3MgZ2JtX3Bvam9fdGVzdCB7XG4gICAgaXNTdXBlcnZpc2VkKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbmZlYXR1cmVzKCkge1xuICAgICAgICByZXR1cm4gMTE7XG4gICAgfVxuICAgIG5jbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgc3RhdGljIE5BTUVTXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0Lk5BTUVTID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdC5OQU1FUyA9IE5hbWVzSG9sZGVyX2dibV9wb2pvX3Rlc3QuVkFMVUVTXyRMSSQoKTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0Lk5BTUVTOyB9XG4gICAgc3RhdGljIERPTUFJTlNfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3QuRE9NQUlOUyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3QuRE9NQUlOUyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBnYm1fcG9qb190ZXN0X0NvbEluZm9fNi5WQUxVRVNfJExJJCgpLCBudWxsLCBudWxsLCBnYm1fcG9qb190ZXN0X0NvbEluZm9fOS5WQUxVRVNfJExJJCgpLCBnYm1fcG9qb190ZXN0X0NvbEluZm9fMTAuVkFMVUVTXyRMSSQoKSwgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzExLlZBTFVFU18kTEkkKCldO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3QuRE9NQUlOUzsgfVxuICAgIHN0YXRpYyBQUklPUl9DTEFTU19ESVNUUklCXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0LlBSSU9SX0NMQVNTX0RJU1RSSUIgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0LlBSSU9SX0NMQVNTX0RJU1RSSUIgPSBbMC40NzQ5NDIwMTY0NjI3NzY4NCwgMC41MjUwNTc5ODM1MzcyMjMxXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0LlBSSU9SX0NMQVNTX0RJU1RSSUI7IH1cbiAgICBzdGF0aWMgTU9ERUxfQ0xBU1NfRElTVFJJQl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdC5NT0RFTF9DTEFTU19ESVNUUklCID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdC5NT0RFTF9DTEFTU19ESVNUUklCID0gWzAuNDc0OTQyMDE2NDYyNzc2ODQsIDAuNTI1MDU3OTgzNTM3MjIzMV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdC5NT0RFTF9DTEFTU19ESVNUUklCOyB9XG4gICAgZ2V0VVVJRCgpIHtcbiAgICAgICAgcmV0dXJuIC8qIHRvU3RyaW5nICovICgnJyArICg5MTY5NjY4Mzc4NzM1NTYyODgpKTtcbiAgICB9XG4gICAgc2NvcmUwKGRhdGEsIHByZWRzKSB7XG4gICAgICAgIHByZWRzLmZpbGwoMCk7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfRm9yZXN0XzAuc2NvcmUwKGRhdGEsIHByZWRzKTtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfMS5zY29yZTAoZGF0YSwgcHJlZHMpO1xuICAgICAgICBnYm1fcG9qb190ZXN0X0ZvcmVzdF8yLnNjb3JlMChkYXRhLCBwcmVkcyk7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfRm9yZXN0XzMuc2NvcmUwKGRhdGEsIHByZWRzKTtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfNC5zY29yZTAoZGF0YSwgcHJlZHMpO1xuICAgICAgICBnYm1fcG9qb190ZXN0X0ZvcmVzdF81LnNjb3JlMChkYXRhLCBwcmVkcyk7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfRm9yZXN0XzYuc2NvcmUwKGRhdGEsIHByZWRzKTtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfNy5zY29yZTAoZGF0YSwgcHJlZHMpO1xuICAgICAgICBnYm1fcG9qb190ZXN0X0ZvcmVzdF84LnNjb3JlMChkYXRhLCBwcmVkcyk7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfRm9yZXN0Xzkuc2NvcmUwKGRhdGEsIHByZWRzKTtcbiAgICAgICAgcHJlZHNbMl0gPSBwcmVkc1sxXSArIDAuMTAwMzE1OTc1MzQ3MTA5OTE7XG4gICAgICAgIHByZWRzWzJdID0gMS4wIC8gKDEuMCArIE1hdGgubWluKDEuMEUxOSwgTWF0aC5leHAoLShwcmVkc1syXSkpKSk7XG4gICAgICAgIHByZWRzWzFdID0gMS4wIC0gcHJlZHNbMl07XG4gICAgICAgIHByZWRzWzBdID0gR2VuTW9kZWwuZ2V0UHJlZGljdGlvbihwcmVkcywgZ2JtX3Bvam9fdGVzdC5QUklPUl9DTEFTU19ESVNUUklCXyRMSSQoKSwgZGF0YSwgMC40NDUxNzE0NTY2MzkxNTI2NCk7XG4gICAgICAgIHJldHVybiBwcmVkcztcbiAgICB9XG59XG5nYm1fcG9qb190ZXN0Lk5DTEFTU0VTID0gMjtcbmdibV9wb2pvX3Rlc3RbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0XCI7XG5jbGFzcyBOYW1lc0hvbGRlcl9nYm1fcG9qb190ZXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgc3RhdGljIF9fc3RhdGljX2luaXRpYWxpemUoKSB7IGlmICghTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdC5fX3N0YXRpY19pbml0aWFsaXplZCkge1xuICAgICAgICBOYW1lc0hvbGRlcl9nYm1fcG9qb190ZXN0Ll9fc3RhdGljX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdC5fX3N0YXRpY19pbml0aWFsaXplcl8wKCk7XG4gICAgfSB9XG4gICAgc3RhdGljIFZBTFVFU18kTEkkKCkgeyBOYW1lc0hvbGRlcl9nYm1fcG9qb190ZXN0Ll9fc3RhdGljX2luaXRpYWxpemUoKTsgaWYgKE5hbWVzSG9sZGVyX2dibV9wb2pvX3Rlc3QuVkFMVUVTID09IG51bGwpIHtcbiAgICAgICAgTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdC5WQUxVRVMgPSAocyA9PiB7IGxldCBhID0gW107IHdoaWxlIChzLS0gPiAwKVxuICAgICAgICAgICAgYS5wdXNoKG51bGwpOyByZXR1cm4gYTsgfSkoMTEpO1xuICAgIH0gcmV0dXJuIE5hbWVzSG9sZGVyX2dibV9wb2pvX3Rlc3QuVkFMVUVTOyB9XG4gICAgc3RhdGljIF9fc3RhdGljX2luaXRpYWxpemVyXzAoKSB7XG4gICAgICAgIE5hbWVzSG9sZGVyX2dibV9wb2pvX3Rlc3QuTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdF8wLmZpbGwoTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdC5WQUxVRVNfJExJJCgpKTtcbiAgICB9XG59XG5OYW1lc0hvbGRlcl9nYm1fcG9qb190ZXN0Ll9fc3RhdGljX2luaXRpYWxpemVkID0gZmFsc2U7XG5OYW1lc0hvbGRlcl9nYm1fcG9qb190ZXN0W1wiX19jbGFzc1wiXSA9IFwiTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdFwiO1xuTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdFtcIl9faW50ZXJmYWNlc1wiXSA9IFtcImphdmEuaW8uU2VyaWFsaXphYmxlXCJdO1xuKGZ1bmN0aW9uIChOYW1lc0hvbGRlcl9nYm1fcG9qb190ZXN0KSB7XG4gICAgY2xhc3MgTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdF8wIHtcbiAgICAgICAgc3RhdGljIGZpbGwoc2EpIHtcbiAgICAgICAgICAgIHNhWzBdID0gXCJZZWFyXCI7XG4gICAgICAgICAgICBzYVsxXSA9IFwiTW9udGhcIjtcbiAgICAgICAgICAgIHNhWzJdID0gXCJEYXlvZk1vbnRoXCI7XG4gICAgICAgICAgICBzYVszXSA9IFwiRGF5T2ZXZWVrXCI7XG4gICAgICAgICAgICBzYVs0XSA9IFwiQ1JTRGVwVGltZVwiO1xuICAgICAgICAgICAgc2FbNV0gPSBcIkNSU0FyclRpbWVcIjtcbiAgICAgICAgICAgIHNhWzZdID0gXCJVbmlxdWVDYXJyaWVyXCI7XG4gICAgICAgICAgICBzYVs3XSA9IFwiRmxpZ2h0TnVtXCI7XG4gICAgICAgICAgICBzYVs4XSA9IFwiQ1JTRWxhcHNlZFRpbWVcIjtcbiAgICAgICAgICAgIHNhWzldID0gXCJPcmlnaW5cIjtcbiAgICAgICAgICAgIHNhWzEwXSA9IFwiRGVzdFwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB9XG4gICAgfVxuICAgIE5hbWVzSG9sZGVyX2dibV9wb2pvX3Rlc3QuTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdF8wID0gTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdF8wO1xuICAgIE5hbWVzSG9sZGVyX2dibV9wb2pvX3Rlc3RfMFtcIl9fY2xhc3NcIl0gPSBcIk5hbWVzSG9sZGVyX2dibV9wb2pvX3Rlc3QuTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdF8wXCI7XG4gICAgTmFtZXNIb2xkZXJfZ2JtX3Bvam9fdGVzdF8wW1wiX19pbnRlcmZhY2VzXCJdID0gW1wiamF2YS5pby5TZXJpYWxpemFibGVcIl07XG59KShOYW1lc0hvbGRlcl9nYm1fcG9qb190ZXN0IHx8IChOYW1lc0hvbGRlcl9nYm1fcG9qb190ZXN0ID0ge30pKTtcbmNsYXNzIGdibV9wb2pvX3Rlc3RfQ29sSW5mb182IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgc3RhdGljIF9fc3RhdGljX2luaXRpYWxpemUoKSB7IGlmICghZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzYuX19zdGF0aWNfaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzYuX19zdGF0aWNfaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBnYm1fcG9qb190ZXN0X0NvbEluZm9fNi5fX3N0YXRpY19pbml0aWFsaXplcl8wKCk7XG4gICAgfSB9XG4gICAgc3RhdGljIFZBTFVFU18kTEkkKCkgeyBnYm1fcG9qb190ZXN0X0NvbEluZm9fNi5fX3N0YXRpY19pbml0aWFsaXplKCk7IGlmIChnYm1fcG9qb190ZXN0X0NvbEluZm9fNi5WQUxVRVMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X0NvbEluZm9fNi5WQUxVRVMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzYuVkFMVUVTOyB9XG4gICAgc3RhdGljIF9fc3RhdGljX2luaXRpYWxpemVyXzAoKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfQ29sSW5mb182LmdibV9wb2pvX3Rlc3RfQ29sSW5mb182XzAuZmlsbChnYm1fcG9qb190ZXN0X0NvbEluZm9fNi5WQUxVRVNfJExJJCgpKTtcbiAgICB9XG59XG5nYm1fcG9qb190ZXN0X0NvbEluZm9fNi5fX3N0YXRpY19pbml0aWFsaXplZCA9IGZhbHNlO1xuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzZbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X0NvbEluZm9fNlwiO1xuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzZbXCJfX2ludGVyZmFjZXNcIl0gPSBbXCJqYXZhLmlvLlNlcmlhbGl6YWJsZVwiXTtcbihmdW5jdGlvbiAoZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzYpIHtcbiAgICBjbGFzcyBnYm1fcG9qb190ZXN0X0NvbEluZm9fNl8wIHtcbiAgICAgICAgc3RhdGljIGZpbGwoc2EpIHtcbiAgICAgICAgICAgIHNhWzBdID0gXCJBQVwiO1xuICAgICAgICAgICAgc2FbMV0gPSBcIkNPXCI7XG4gICAgICAgICAgICBzYVsyXSA9IFwiRExcIjtcbiAgICAgICAgICAgIHNhWzNdID0gXCJIUFwiO1xuICAgICAgICAgICAgc2FbNF0gPSBcIlBJXCI7XG4gICAgICAgICAgICBzYVs1XSA9IFwiUFNcIjtcbiAgICAgICAgICAgIHNhWzZdID0gXCJUV1wiO1xuICAgICAgICAgICAgc2FbN10gPSBcIlVBXCI7XG4gICAgICAgICAgICBzYVs4XSA9IFwiVVNcIjtcbiAgICAgICAgICAgIHNhWzldID0gXCJXTlwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB9XG4gICAgfVxuICAgIGdibV9wb2pvX3Rlc3RfQ29sSW5mb182LmdibV9wb2pvX3Rlc3RfQ29sSW5mb182XzAgPSBnYm1fcG9qb190ZXN0X0NvbEluZm9fNl8wO1xuICAgIGdibV9wb2pvX3Rlc3RfQ29sSW5mb182XzBbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X0NvbEluZm9fNi5nYm1fcG9qb190ZXN0X0NvbEluZm9fNl8wXCI7XG4gICAgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzZfMFtcIl9faW50ZXJmYWNlc1wiXSA9IFtcImphdmEuaW8uU2VyaWFsaXphYmxlXCJdO1xufSkoZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzYgfHwgKGdibV9wb2pvX3Rlc3RfQ29sSW5mb182ID0ge30pKTtcbmNsYXNzIGdibV9wb2pvX3Rlc3RfQ29sSW5mb185IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgc3RhdGljIF9fc3RhdGljX2luaXRpYWxpemUoKSB7IGlmICghZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzkuX19zdGF0aWNfaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzkuX19zdGF0aWNfaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICBnYm1fcG9qb190ZXN0X0NvbEluZm9fOS5fX3N0YXRpY19pbml0aWFsaXplcl8wKCk7XG4gICAgfSB9XG4gICAgc3RhdGljIFZBTFVFU18kTEkkKCkgeyBnYm1fcG9qb190ZXN0X0NvbEluZm9fOS5fX3N0YXRpY19pbml0aWFsaXplKCk7IGlmIChnYm1fcG9qb190ZXN0X0NvbEluZm9fOS5WQUxVRVMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X0NvbEluZm9fOS5WQUxVRVMgPSAocyA9PiB7IGxldCBhID0gW107IHdoaWxlIChzLS0gPiAwKVxuICAgICAgICAgICAgYS5wdXNoKG51bGwpOyByZXR1cm4gYTsgfSkoMTMyKTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X0NvbEluZm9fOS5WQUxVRVM7IH1cbiAgICBzdGF0aWMgX19zdGF0aWNfaW5pdGlhbGl6ZXJfMCgpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzkuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzlfMC5maWxsKGdibV9wb2pvX3Rlc3RfQ29sSW5mb185LlZBTFVFU18kTEkkKCkpO1xuICAgIH1cbn1cbmdibV9wb2pvX3Rlc3RfQ29sSW5mb185Ll9fc3RhdGljX2luaXRpYWxpemVkID0gZmFsc2U7XG5nYm1fcG9qb190ZXN0X0NvbEluZm9fOVtcIl9fY2xhc3NcIl0gPSBcImdibV9wb2pvX3Rlc3RfQ29sSW5mb185XCI7XG5nYm1fcG9qb190ZXN0X0NvbEluZm9fOVtcIl9faW50ZXJmYWNlc1wiXSA9IFtcImphdmEuaW8uU2VyaWFsaXphYmxlXCJdO1xuKGZ1bmN0aW9uIChnYm1fcG9qb190ZXN0X0NvbEluZm9fOSkge1xuICAgIGNsYXNzIGdibV9wb2pvX3Rlc3RfQ29sSW5mb185XzAge1xuICAgICAgICBzdGF0aWMgZmlsbChzYSkge1xuICAgICAgICAgICAgc2FbMF0gPSBcIkFCRVwiO1xuICAgICAgICAgICAgc2FbMV0gPSBcIkFCUVwiO1xuICAgICAgICAgICAgc2FbMl0gPSBcIkFDWVwiO1xuICAgICAgICAgICAgc2FbM10gPSBcIkFMQlwiO1xuICAgICAgICAgICAgc2FbNF0gPSBcIkFNQVwiO1xuICAgICAgICAgICAgc2FbNV0gPSBcIkFOQ1wiO1xuICAgICAgICAgICAgc2FbNl0gPSBcIkFUTFwiO1xuICAgICAgICAgICAgc2FbN10gPSBcIkFVU1wiO1xuICAgICAgICAgICAgc2FbOF0gPSBcIkFWUFwiO1xuICAgICAgICAgICAgc2FbOV0gPSBcIkJETFwiO1xuICAgICAgICAgICAgc2FbMTBdID0gXCJCR01cIjtcbiAgICAgICAgICAgIHNhWzExXSA9IFwiQkhNXCI7XG4gICAgICAgICAgICBzYVsxMl0gPSBcIkJJTFwiO1xuICAgICAgICAgICAgc2FbMTNdID0gXCJCTkFcIjtcbiAgICAgICAgICAgIHNhWzE0XSA9IFwiQk9JXCI7XG4gICAgICAgICAgICBzYVsxNV0gPSBcIkJPU1wiO1xuICAgICAgICAgICAgc2FbMTZdID0gXCJCVFZcIjtcbiAgICAgICAgICAgIHNhWzE3XSA9IFwiQlVGXCI7XG4gICAgICAgICAgICBzYVsxOF0gPSBcIkJVUlwiO1xuICAgICAgICAgICAgc2FbMTldID0gXCJCV0lcIjtcbiAgICAgICAgICAgIHNhWzIwXSA9IFwiQ0FFXCI7XG4gICAgICAgICAgICBzYVsyMV0gPSBcIkNIT1wiO1xuICAgICAgICAgICAgc2FbMjJdID0gXCJDSFNcIjtcbiAgICAgICAgICAgIHNhWzIzXSA9IFwiQ0xFXCI7XG4gICAgICAgICAgICBzYVsyNF0gPSBcIkNMVFwiO1xuICAgICAgICAgICAgc2FbMjVdID0gXCJDTUhcIjtcbiAgICAgICAgICAgIHNhWzI2XSA9IFwiQ09TXCI7XG4gICAgICAgICAgICBzYVsyN10gPSBcIkNSUFwiO1xuICAgICAgICAgICAgc2FbMjhdID0gXCJDUldcIjtcbiAgICAgICAgICAgIHNhWzI5XSA9IFwiQ1ZHXCI7XG4gICAgICAgICAgICBzYVszMF0gPSBcIkRBTFwiO1xuICAgICAgICAgICAgc2FbMzFdID0gXCJEQVlcIjtcbiAgICAgICAgICAgIHNhWzMyXSA9IFwiRENBXCI7XG4gICAgICAgICAgICBzYVszM10gPSBcIkRFTlwiO1xuICAgICAgICAgICAgc2FbMzRdID0gXCJERldcIjtcbiAgICAgICAgICAgIHNhWzM1XSA9IFwiRFNNXCI7XG4gICAgICAgICAgICBzYVszNl0gPSBcIkRUV1wiO1xuICAgICAgICAgICAgc2FbMzddID0gXCJFR0VcIjtcbiAgICAgICAgICAgIHNhWzM4XSA9IFwiRUxQXCI7XG4gICAgICAgICAgICBzYVszOV0gPSBcIkVSSVwiO1xuICAgICAgICAgICAgc2FbNDBdID0gXCJFV1JcIjtcbiAgICAgICAgICAgIHNhWzQxXSA9IFwiRVlXXCI7XG4gICAgICAgICAgICBzYVs0Ml0gPSBcIkZMTFwiO1xuICAgICAgICAgICAgc2FbNDNdID0gXCJHRUdcIjtcbiAgICAgICAgICAgIHNhWzQ0XSA9IFwiR05WXCI7XG4gICAgICAgICAgICBzYVs0NV0gPSBcIkdSUlwiO1xuICAgICAgICAgICAgc2FbNDZdID0gXCJHU09cIjtcbiAgICAgICAgICAgIHNhWzQ3XSA9IFwiSE5MXCI7XG4gICAgICAgICAgICBzYVs0OF0gPSBcIkhPVVwiO1xuICAgICAgICAgICAgc2FbNDldID0gXCJIUE5cIjtcbiAgICAgICAgICAgIHNhWzUwXSA9IFwiSFJMXCI7XG4gICAgICAgICAgICBzYVs1MV0gPSBcIklBRFwiO1xuICAgICAgICAgICAgc2FbNTJdID0gXCJJQUhcIjtcbiAgICAgICAgICAgIHNhWzUzXSA9IFwiSUNUXCI7XG4gICAgICAgICAgICBzYVs1NF0gPSBcIklORFwiO1xuICAgICAgICAgICAgc2FbNTVdID0gXCJJU1BcIjtcbiAgICAgICAgICAgIHNhWzU2XSA9IFwiSkFOXCI7XG4gICAgICAgICAgICBzYVs1N10gPSBcIkpBWFwiO1xuICAgICAgICAgICAgc2FbNThdID0gXCJKRktcIjtcbiAgICAgICAgICAgIHNhWzU5XSA9IFwiS09BXCI7XG4gICAgICAgICAgICBzYVs2MF0gPSBcIkxBTlwiO1xuICAgICAgICAgICAgc2FbNjFdID0gXCJMQVNcIjtcbiAgICAgICAgICAgIHNhWzYyXSA9IFwiTEFYXCI7XG4gICAgICAgICAgICBzYVs2M10gPSBcIkxCQlwiO1xuICAgICAgICAgICAgc2FbNjRdID0gXCJMRVhcIjtcbiAgICAgICAgICAgIHNhWzY1XSA9IFwiTEdBXCI7XG4gICAgICAgICAgICBzYVs2Nl0gPSBcIkxJSFwiO1xuICAgICAgICAgICAgc2FbNjddID0gXCJMSVRcIjtcbiAgICAgICAgICAgIHNhWzY4XSA9IFwiTFlIXCI7XG4gICAgICAgICAgICBzYVs2OV0gPSBcIk1BRlwiO1xuICAgICAgICAgICAgc2FbNzBdID0gXCJNQ0lcIjtcbiAgICAgICAgICAgIHNhWzcxXSA9IFwiTUNPXCI7XG4gICAgICAgICAgICBzYVs3Ml0gPSBcIk1EVFwiO1xuICAgICAgICAgICAgc2FbNzNdID0gXCJNRFdcIjtcbiAgICAgICAgICAgIHNhWzc0XSA9IFwiTUVNXCI7XG4gICAgICAgICAgICBzYVs3NV0gPSBcIk1GUlwiO1xuICAgICAgICAgICAgc2FbNzZdID0gXCJNSFRcIjtcbiAgICAgICAgICAgIHNhWzc3XSA9IFwiTUlBXCI7XG4gICAgICAgICAgICBzYVs3OF0gPSBcIk1LRVwiO1xuICAgICAgICAgICAgc2FbNzldID0gXCJNTEJcIjtcbiAgICAgICAgICAgIHNhWzgwXSA9IFwiTVJZXCI7XG4gICAgICAgICAgICBzYVs4MV0gPSBcIk1TUFwiO1xuICAgICAgICAgICAgc2FbODJdID0gXCJNU1lcIjtcbiAgICAgICAgICAgIHNhWzgzXSA9IFwiTVlSXCI7XG4gICAgICAgICAgICBzYVs4NF0gPSBcIk9BS1wiO1xuICAgICAgICAgICAgc2FbODVdID0gXCJPR0dcIjtcbiAgICAgICAgICAgIHNhWzg2XSA9IFwiT0tDXCI7XG4gICAgICAgICAgICBzYVs4N10gPSBcIk9NQVwiO1xuICAgICAgICAgICAgc2FbODhdID0gXCJPTlRcIjtcbiAgICAgICAgICAgIHNhWzg5XSA9IFwiT1JEXCI7XG4gICAgICAgICAgICBzYVs5MF0gPSBcIk9SRlwiO1xuICAgICAgICAgICAgc2FbOTFdID0gXCJQQklcIjtcbiAgICAgICAgICAgIHNhWzkyXSA9IFwiUERYXCI7XG4gICAgICAgICAgICBzYVs5M10gPSBcIlBIRlwiO1xuICAgICAgICAgICAgc2FbOTRdID0gXCJQSExcIjtcbiAgICAgICAgICAgIHNhWzk1XSA9IFwiUEhYXCI7XG4gICAgICAgICAgICBzYVs5Nl0gPSBcIlBJVFwiO1xuICAgICAgICAgICAgc2FbOTddID0gXCJQU1BcIjtcbiAgICAgICAgICAgIHNhWzk4XSA9IFwiUFZEXCI7XG4gICAgICAgICAgICBzYVs5OV0gPSBcIlBXTVwiO1xuICAgICAgICAgICAgc2FbMTAwXSA9IFwiUkRVXCI7XG4gICAgICAgICAgICBzYVsxMDFdID0gXCJSSUNcIjtcbiAgICAgICAgICAgIHNhWzEwMl0gPSBcIlJOT1wiO1xuICAgICAgICAgICAgc2FbMTAzXSA9IFwiUk9BXCI7XG4gICAgICAgICAgICBzYVsxMDRdID0gXCJST0NcIjtcbiAgICAgICAgICAgIHNhWzEwNV0gPSBcIlJTV1wiO1xuICAgICAgICAgICAgc2FbMTA2XSA9IFwiU0FOXCI7XG4gICAgICAgICAgICBzYVsxMDddID0gXCJTQVRcIjtcbiAgICAgICAgICAgIHNhWzEwOF0gPSBcIlNBVlwiO1xuICAgICAgICAgICAgc2FbMTA5XSA9IFwiU0JOXCI7XG4gICAgICAgICAgICBzYVsxMTBdID0gXCJTQ0tcIjtcbiAgICAgICAgICAgIHNhWzExMV0gPSBcIlNERlwiO1xuICAgICAgICAgICAgc2FbMTEyXSA9IFwiU0VBXCI7XG4gICAgICAgICAgICBzYVsxMTNdID0gXCJTRk9cIjtcbiAgICAgICAgICAgIHNhWzExNF0gPSBcIlNKQ1wiO1xuICAgICAgICAgICAgc2FbMTE1XSA9IFwiU0pVXCI7XG4gICAgICAgICAgICBzYVsxMTZdID0gXCJTTENcIjtcbiAgICAgICAgICAgIHNhWzExN10gPSBcIlNNRlwiO1xuICAgICAgICAgICAgc2FbMTE4XSA9IFwiU05BXCI7XG4gICAgICAgICAgICBzYVsxMTldID0gXCJTUlFcIjtcbiAgICAgICAgICAgIHNhWzEyMF0gPSBcIlNUTFwiO1xuICAgICAgICAgICAgc2FbMTIxXSA9IFwiU1RUXCI7XG4gICAgICAgICAgICBzYVsxMjJdID0gXCJTVFhcIjtcbiAgICAgICAgICAgIHNhWzEyM10gPSBcIlNXRlwiO1xuICAgICAgICAgICAgc2FbMTI0XSA9IFwiU1lSXCI7XG4gICAgICAgICAgICBzYVsxMjVdID0gXCJUTEhcIjtcbiAgICAgICAgICAgIHNhWzEyNl0gPSBcIlRQQVwiO1xuICAgICAgICAgICAgc2FbMTI3XSA9IFwiVFJJXCI7XG4gICAgICAgICAgICBzYVsxMjhdID0gXCJUVUxcIjtcbiAgICAgICAgICAgIHNhWzEyOV0gPSBcIlRVU1wiO1xuICAgICAgICAgICAgc2FbMTMwXSA9IFwiVFlTXCI7XG4gICAgICAgICAgICBzYVsxMzFdID0gXCJVQ0FcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnYm1fcG9qb190ZXN0X0NvbEluZm9fOS5nYm1fcG9qb190ZXN0X0NvbEluZm9fOV8wID0gZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzlfMDtcbiAgICBnYm1fcG9qb190ZXN0X0NvbEluZm9fOV8wW1wiX19jbGFzc1wiXSA9IFwiZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzkuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzlfMFwiO1xuICAgIGdibV9wb2pvX3Rlc3RfQ29sSW5mb185XzBbXCJfX2ludGVyZmFjZXNcIl0gPSBbXCJqYXZhLmlvLlNlcmlhbGl6YWJsZVwiXTtcbn0pKGdibV9wb2pvX3Rlc3RfQ29sSW5mb185IHx8IChnYm1fcG9qb190ZXN0X0NvbEluZm9fOSA9IHt9KSk7XG5jbGFzcyBnYm1fcG9qb190ZXN0X0NvbEluZm9fMTAge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cbiAgICBzdGF0aWMgX19zdGF0aWNfaW5pdGlhbGl6ZSgpIHsgaWYgKCFnYm1fcG9qb190ZXN0X0NvbEluZm9fMTAuX19zdGF0aWNfaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwLl9fc3RhdGljX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwLl9fc3RhdGljX2luaXRpYWxpemVyXzAoKTtcbiAgICB9IH1cbiAgICBzdGF0aWMgVkFMVUVTXyRMSSQoKSB7IGdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMC5fX3N0YXRpY19pbml0aWFsaXplKCk7IGlmIChnYm1fcG9qb190ZXN0X0NvbEluZm9fMTAuVkFMVUVTID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwLlZBTFVFUyA9IChzID0+IHsgbGV0IGEgPSBbXTsgd2hpbGUgKHMtLSA+IDApXG4gICAgICAgICAgICBhLnB1c2gobnVsbCk7IHJldHVybiBhOyB9KSgxMzQpO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMC5WQUxVRVM7IH1cbiAgICBzdGF0aWMgX19zdGF0aWNfaW5pdGlhbGl6ZXJfMCgpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwLmdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMF8wLmZpbGwoZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwLlZBTFVFU18kTEkkKCkpO1xuICAgIH1cbn1cbmdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMC5fX3N0YXRpY19pbml0aWFsaXplZCA9IGZhbHNlO1xuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwW1wiX19jbGFzc1wiXSA9IFwiZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwXCI7XG5nYm1fcG9qb190ZXN0X0NvbEluZm9fMTBbXCJfX2ludGVyZmFjZXNcIl0gPSBbXCJqYXZhLmlvLlNlcmlhbGl6YWJsZVwiXTtcbihmdW5jdGlvbiAoZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwKSB7XG4gICAgY2xhc3MgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwXzAge1xuICAgICAgICBzdGF0aWMgZmlsbChzYSkge1xuICAgICAgICAgICAgc2FbMF0gPSBcIkFCRVwiO1xuICAgICAgICAgICAgc2FbMV0gPSBcIkFCUVwiO1xuICAgICAgICAgICAgc2FbMl0gPSBcIkFDWVwiO1xuICAgICAgICAgICAgc2FbM10gPSBcIkFMQlwiO1xuICAgICAgICAgICAgc2FbNF0gPSBcIkFNQVwiO1xuICAgICAgICAgICAgc2FbNV0gPSBcIkFOQ1wiO1xuICAgICAgICAgICAgc2FbNl0gPSBcIkFUTFwiO1xuICAgICAgICAgICAgc2FbN10gPSBcIkFVU1wiO1xuICAgICAgICAgICAgc2FbOF0gPSBcIkFWTFwiO1xuICAgICAgICAgICAgc2FbOV0gPSBcIkFWUFwiO1xuICAgICAgICAgICAgc2FbMTBdID0gXCJCRExcIjtcbiAgICAgICAgICAgIHNhWzExXSA9IFwiQkdNXCI7XG4gICAgICAgICAgICBzYVsxMl0gPSBcIkJITVwiO1xuICAgICAgICAgICAgc2FbMTNdID0gXCJCTkFcIjtcbiAgICAgICAgICAgIHNhWzE0XSA9IFwiQk9JXCI7XG4gICAgICAgICAgICBzYVsxNV0gPSBcIkJPU1wiO1xuICAgICAgICAgICAgc2FbMTZdID0gXCJCVFZcIjtcbiAgICAgICAgICAgIHNhWzE3XSA9IFwiQlVGXCI7XG4gICAgICAgICAgICBzYVsxOF0gPSBcIkJVUlwiO1xuICAgICAgICAgICAgc2FbMTldID0gXCJCV0lcIjtcbiAgICAgICAgICAgIHNhWzIwXSA9IFwiQ0FFXCI7XG4gICAgICAgICAgICBzYVsyMV0gPSBcIkNBS1wiO1xuICAgICAgICAgICAgc2FbMjJdID0gXCJDSEFcIjtcbiAgICAgICAgICAgIHNhWzIzXSA9IFwiQ0hPXCI7XG4gICAgICAgICAgICBzYVsyNF0gPSBcIkNIU1wiO1xuICAgICAgICAgICAgc2FbMjVdID0gXCJDTEVcIjtcbiAgICAgICAgICAgIHNhWzI2XSA9IFwiQ0xUXCI7XG4gICAgICAgICAgICBzYVsyN10gPSBcIkNNSFwiO1xuICAgICAgICAgICAgc2FbMjhdID0gXCJDT1NcIjtcbiAgICAgICAgICAgIHNhWzI5XSA9IFwiQ1JQXCI7XG4gICAgICAgICAgICBzYVszMF0gPSBcIkNWR1wiO1xuICAgICAgICAgICAgc2FbMzFdID0gXCJEQUxcIjtcbiAgICAgICAgICAgIHNhWzMyXSA9IFwiREFZXCI7XG4gICAgICAgICAgICBzYVszM10gPSBcIkRDQVwiO1xuICAgICAgICAgICAgc2FbMzRdID0gXCJERU5cIjtcbiAgICAgICAgICAgIHNhWzM1XSA9IFwiREZXXCI7XG4gICAgICAgICAgICBzYVszNl0gPSBcIkRTTVwiO1xuICAgICAgICAgICAgc2FbMzddID0gXCJEVFdcIjtcbiAgICAgICAgICAgIHNhWzM4XSA9IFwiRUxNXCI7XG4gICAgICAgICAgICBzYVszOV0gPSBcIkVMUFwiO1xuICAgICAgICAgICAgc2FbNDBdID0gXCJFUklcIjtcbiAgICAgICAgICAgIHNhWzQxXSA9IFwiRVVHXCI7XG4gICAgICAgICAgICBzYVs0Ml0gPSBcIkVXUlwiO1xuICAgICAgICAgICAgc2FbNDNdID0gXCJFWVdcIjtcbiAgICAgICAgICAgIHNhWzQ0XSA9IFwiRkFUXCI7XG4gICAgICAgICAgICBzYVs0NV0gPSBcIkZBWVwiO1xuICAgICAgICAgICAgc2FbNDZdID0gXCJGTExcIjtcbiAgICAgICAgICAgIHNhWzQ3XSA9IFwiRk5UXCI7XG4gICAgICAgICAgICBzYVs0OF0gPSBcIkdFR1wiO1xuICAgICAgICAgICAgc2FbNDldID0gXCJHUlJcIjtcbiAgICAgICAgICAgIHNhWzUwXSA9IFwiR1NPXCI7XG4gICAgICAgICAgICBzYVs1MV0gPSBcIkdTUFwiO1xuICAgICAgICAgICAgc2FbNTJdID0gXCJITkxcIjtcbiAgICAgICAgICAgIHNhWzUzXSA9IFwiSE9VXCI7XG4gICAgICAgICAgICBzYVs1NF0gPSBcIkhQTlwiO1xuICAgICAgICAgICAgc2FbNTVdID0gXCJIUkxcIjtcbiAgICAgICAgICAgIHNhWzU2XSA9IFwiSFRTXCI7XG4gICAgICAgICAgICBzYVs1N10gPSBcIklBRFwiO1xuICAgICAgICAgICAgc2FbNThdID0gXCJJQUhcIjtcbiAgICAgICAgICAgIHNhWzU5XSA9IFwiSUNUXCI7XG4gICAgICAgICAgICBzYVs2MF0gPSBcIklMTVwiO1xuICAgICAgICAgICAgc2FbNjFdID0gXCJJTkRcIjtcbiAgICAgICAgICAgIHNhWzYyXSA9IFwiSVNQXCI7XG4gICAgICAgICAgICBzYVs2M10gPSBcIkpBTlwiO1xuICAgICAgICAgICAgc2FbNjRdID0gXCJKQVhcIjtcbiAgICAgICAgICAgIHNhWzY1XSA9IFwiSkZLXCI7XG4gICAgICAgICAgICBzYVs2Nl0gPSBcIktPQVwiO1xuICAgICAgICAgICAgc2FbNjddID0gXCJMQVNcIjtcbiAgICAgICAgICAgIHNhWzY4XSA9IFwiTEFYXCI7XG4gICAgICAgICAgICBzYVs2OV0gPSBcIkxCQlwiO1xuICAgICAgICAgICAgc2FbNzBdID0gXCJMRVhcIjtcbiAgICAgICAgICAgIHNhWzcxXSA9IFwiTEdBXCI7XG4gICAgICAgICAgICBzYVs3Ml0gPSBcIkxJSFwiO1xuICAgICAgICAgICAgc2FbNzNdID0gXCJMSVRcIjtcbiAgICAgICAgICAgIHNhWzc0XSA9IFwiTFlIXCI7XG4gICAgICAgICAgICBzYVs3NV0gPSBcIk1BRlwiO1xuICAgICAgICAgICAgc2FbNzZdID0gXCJNQ0lcIjtcbiAgICAgICAgICAgIHNhWzc3XSA9IFwiTUNPXCI7XG4gICAgICAgICAgICBzYVs3OF0gPSBcIk1EVFwiO1xuICAgICAgICAgICAgc2FbNzldID0gXCJNRFdcIjtcbiAgICAgICAgICAgIHNhWzgwXSA9IFwiTUhUXCI7XG4gICAgICAgICAgICBzYVs4MV0gPSBcIk1JQVwiO1xuICAgICAgICAgICAgc2FbODJdID0gXCJNS0VcIjtcbiAgICAgICAgICAgIHNhWzgzXSA9IFwiTVJZXCI7XG4gICAgICAgICAgICBzYVs4NF0gPSBcIk1TUFwiO1xuICAgICAgICAgICAgc2FbODVdID0gXCJNU1lcIjtcbiAgICAgICAgICAgIHNhWzg2XSA9IFwiTVlSXCI7XG4gICAgICAgICAgICBzYVs4N10gPSBcIk9BSlwiO1xuICAgICAgICAgICAgc2FbODhdID0gXCJPQUtcIjtcbiAgICAgICAgICAgIHNhWzg5XSA9IFwiT0dHXCI7XG4gICAgICAgICAgICBzYVs5MF0gPSBcIk9LQ1wiO1xuICAgICAgICAgICAgc2FbOTFdID0gXCJPTUFcIjtcbiAgICAgICAgICAgIHNhWzkyXSA9IFwiT05UXCI7XG4gICAgICAgICAgICBzYVs5M10gPSBcIk9SRFwiO1xuICAgICAgICAgICAgc2FbOTRdID0gXCJPUkZcIjtcbiAgICAgICAgICAgIHNhWzk1XSA9IFwiT1JIXCI7XG4gICAgICAgICAgICBzYVs5Nl0gPSBcIlBCSVwiO1xuICAgICAgICAgICAgc2FbOTddID0gXCJQRFhcIjtcbiAgICAgICAgICAgIHNhWzk4XSA9IFwiUEhGXCI7XG4gICAgICAgICAgICBzYVs5OV0gPSBcIlBITFwiO1xuICAgICAgICAgICAgc2FbMTAwXSA9IFwiUEhYXCI7XG4gICAgICAgICAgICBzYVsxMDFdID0gXCJQSVRcIjtcbiAgICAgICAgICAgIHNhWzEwMl0gPSBcIlBOU1wiO1xuICAgICAgICAgICAgc2FbMTAzXSA9IFwiUFNQXCI7XG4gICAgICAgICAgICBzYVsxMDRdID0gXCJQVkRcIjtcbiAgICAgICAgICAgIHNhWzEwNV0gPSBcIlBXTVwiO1xuICAgICAgICAgICAgc2FbMTA2XSA9IFwiUkRVXCI7XG4gICAgICAgICAgICBzYVsxMDddID0gXCJSSUNcIjtcbiAgICAgICAgICAgIHNhWzEwOF0gPSBcIlJOT1wiO1xuICAgICAgICAgICAgc2FbMTA5XSA9IFwiUk9BXCI7XG4gICAgICAgICAgICBzYVsxMTBdID0gXCJST0NcIjtcbiAgICAgICAgICAgIHNhWzExMV0gPSBcIlJTV1wiO1xuICAgICAgICAgICAgc2FbMTEyXSA9IFwiU0FOXCI7XG4gICAgICAgICAgICBzYVsxMTNdID0gXCJTQVRcIjtcbiAgICAgICAgICAgIHNhWzExNF0gPSBcIlNCTlwiO1xuICAgICAgICAgICAgc2FbMTE1XSA9IFwiU0NLXCI7XG4gICAgICAgICAgICBzYVsxMTZdID0gXCJTREZcIjtcbiAgICAgICAgICAgIHNhWzExN10gPSBcIlNFQVwiO1xuICAgICAgICAgICAgc2FbMTE4XSA9IFwiU0ZPXCI7XG4gICAgICAgICAgICBzYVsxMTldID0gXCJTSkNcIjtcbiAgICAgICAgICAgIHNhWzEyMF0gPSBcIlNKVVwiO1xuICAgICAgICAgICAgc2FbMTIxXSA9IFwiU0xDXCI7XG4gICAgICAgICAgICBzYVsxMjJdID0gXCJTTUZcIjtcbiAgICAgICAgICAgIHNhWzEyM10gPSBcIlNOQVwiO1xuICAgICAgICAgICAgc2FbMTI0XSA9IFwiU1JRXCI7XG4gICAgICAgICAgICBzYVsxMjVdID0gXCJTVExcIjtcbiAgICAgICAgICAgIHNhWzEyNl0gPSBcIlNUVFwiO1xuICAgICAgICAgICAgc2FbMTI3XSA9IFwiU1dGXCI7XG4gICAgICAgICAgICBzYVsxMjhdID0gXCJTWVJcIjtcbiAgICAgICAgICAgIHNhWzEyOV0gPSBcIlRPTFwiO1xuICAgICAgICAgICAgc2FbMTMwXSA9IFwiVFBBXCI7XG4gICAgICAgICAgICBzYVsxMzFdID0gXCJUVUxcIjtcbiAgICAgICAgICAgIHNhWzEzMl0gPSBcIlRVU1wiO1xuICAgICAgICAgICAgc2FbMTMzXSA9IFwiVUNBXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwLmdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMF8wID0gZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwXzA7XG4gICAgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwXzBbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X0NvbEluZm9fMTAuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwXzBcIjtcbiAgICBnYm1fcG9qb190ZXN0X0NvbEluZm9fMTBfMFtcIl9faW50ZXJmYWNlc1wiXSA9IFtcImphdmEuaW8uU2VyaWFsaXphYmxlXCJdO1xufSkoZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwIHx8IChnYm1fcG9qb190ZXN0X0NvbEluZm9fMTAgPSB7fSkpO1xuY2xhc3MgZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzExIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgc3RhdGljIF9fc3RhdGljX2luaXRpYWxpemUoKSB7IGlmICghZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzExLl9fc3RhdGljX2luaXRpYWxpemVkKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMS5fX3N0YXRpY19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMS5fX3N0YXRpY19pbml0aWFsaXplcl8wKCk7XG4gICAgfSB9XG4gICAgc3RhdGljIFZBTFVFU18kTEkkKCkgeyBnYm1fcG9qb190ZXN0X0NvbEluZm9fMTEuX19zdGF0aWNfaW5pdGlhbGl6ZSgpOyBpZiAoZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzExLlZBTFVFUyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMS5WQUxVRVMgPSBbbnVsbCwgbnVsbF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzExLlZBTFVFUzsgfVxuICAgIHN0YXRpYyBfX3N0YXRpY19pbml0aWFsaXplcl8wKCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X0NvbEluZm9fMTEuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzExXzAuZmlsbChnYm1fcG9qb190ZXN0X0NvbEluZm9fMTEuVkFMVUVTXyRMSSQoKSk7XG4gICAgfVxufVxuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzExLl9fc3RhdGljX2luaXRpYWxpemVkID0gZmFsc2U7XG5nYm1fcG9qb190ZXN0X0NvbEluZm9fMTFbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X0NvbEluZm9fMTFcIjtcbmdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMVtcIl9faW50ZXJmYWNlc1wiXSA9IFtcImphdmEuaW8uU2VyaWFsaXphYmxlXCJdO1xuKGZ1bmN0aW9uIChnYm1fcG9qb190ZXN0X0NvbEluZm9fMTEpIHtcbiAgICBjbGFzcyBnYm1fcG9qb190ZXN0X0NvbEluZm9fMTFfMCB7XG4gICAgICAgIHN0YXRpYyBmaWxsKHNhKSB7XG4gICAgICAgICAgICBzYVswXSA9IFwiTk9cIjtcbiAgICAgICAgICAgIHNhWzFdID0gXCJZRVNcIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnYm1fcG9qb190ZXN0X0NvbEluZm9fMTEuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzExXzAgPSBnYm1fcG9qb190ZXN0X0NvbEluZm9fMTFfMDtcbiAgICBnYm1fcG9qb190ZXN0X0NvbEluZm9fMTFfMFtcIl9fY2xhc3NcIl0gPSBcImdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMS5nYm1fcG9qb190ZXN0X0NvbEluZm9fMTFfMFwiO1xuICAgIGdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMV8wW1wiX19pbnRlcmZhY2VzXCJdID0gW1wiamF2YS5pby5TZXJpYWxpemFibGVcIl07XG59KShnYm1fcG9qb190ZXN0X0NvbEluZm9fMTEgfHwgKGdibV9wb2pvX3Rlc3RfQ29sSW5mb18xMSA9IHt9KSk7XG5jbGFzcyBnYm1fcG9qb190ZXN0X0ZvcmVzdF8wIHtcbiAgICBzdGF0aWMgc2NvcmUwKGZkYXRhLCBwcmVkcykge1xuICAgICAgICBwcmVkc1sxXSArPSBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLnNjb3JlMChmZGF0YSk7XG4gICAgfVxufVxuZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfMFtcIl9fY2xhc3NcIl0gPSBcImdibV9wb2pvX3Rlc3RfRm9yZXN0XzBcIjtcbmNsYXNzIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAge1xuICAgIHN0YXRpYyBzY29yZTAoZGF0YSkge1xuICAgICAgICBjb25zdCBwcmVkID0gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQwXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAoZGF0YVsyXSA8IDUuNSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMjAwNy41ID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxXyRMSSQoKSwgMTMxLCAwLCBkYXRhWzldKSkgPyAoZGF0YVs1XSA8IDEyMTQuNSA/IC0wLjA4NDkwODExIDogLTAuMDA3NDQ0NDgzNykgOiAoZGF0YVs1XSA8IDEzMjUuNSA/IC0wLjAwMjYwMTE1MDIgOiAwLjA2NzIzODkpKSA6IChkYXRhWzVdIDwgMTEwNC41ID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMTBdKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMSwgZGF0YVsxMF0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAxLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQyXyRMSSQoKSwgMTMyLCAxLCBkYXRhWzEwXSkpID8gLTAuMDQxMjM3ODcyIDogMC4wODY2NjUwNykgOiAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoNjYsIDUxLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDNfJExJJCgpLCA2NiwgNTEsIGRhdGFbOV0pKSA/IDAuMDcwMTUzMDA1IDogMC4xNjk4NTAwNSkpKSA6IChkYXRhWzBdIDwgMTk5OC4wID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMxLCAwLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQ0XyRMSSQoKSwgMTMxLCAwLCBkYXRhWzldKSkgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVsxMF0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDVfJExJJCgpLCAxMzQsIDAsIGRhdGFbMTBdKSkgPyAtMC4wNzY3NTg4NCA6IC0wLjAxNTU1MjQ0NikgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUNl8kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/IC0wLjAyNTA0NTgxOCA6IDAuMDQxNzgxNjk3KSkgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUN18kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzldKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMCwgZGF0YVs5XSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUOF8kTEkkKCksIDEzMSwgMCwgZGF0YVs5XSkpID8gLTAuMTQwMzMwNiA6IC0wLjA4NTU5NTMxKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzVdKSB8fCBkYXRhWzVdIDwgMTYyMi41ID8gLTAuMDkxNTM5MjcgOiAtMC4wMjM2NjcyNCkpKSkgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUOV8kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/IChkYXRhWzJdIDwgNy41ID8gKGRhdGFbNF0gPCA5MTcuNSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzldKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyNCwgMywgZGF0YVs5XSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMjQsIDMsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTBfJExJJCgpLCAxMjQsIDMsIGRhdGFbOV0pKSA/IC0wLjA0NjUwMzYyMiA6IDAuMTIxNTMyMDUpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI0LCAzLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyNCwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxMV8kTEkkKCksIDEyNCwgMywgZGF0YVs5XSkpID8gMC4wMzM2MjU2MiA6IDAuMTA5NDU5NjUpKSA6IChkYXRhWzBdIDwgMTk5Ny41ID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyNCwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxMl8kTEkkKCksIDEyNCwgMywgZGF0YVs5XSkpID8gLTAuMDU1NDExMjI3IDogMC4wMzQ4NTM3MDgpIDogKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyNCwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxM18kTEkkKCksIDEyNCwgMywgZGF0YVs5XSkpID8gLTAuMTIzOTA5OTMgOiAtMC4wNjMzNzUxNykpKSA6IChkYXRhWzJdIDwgNy41ID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyOSwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxNF8kTEkkKCksIDEyOSwgMywgZGF0YVs5XSkpID8gKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE1XyRMSSQoKSwgMTMyLCAwLCBkYXRhWzEwXSkpID8gLTAuMDAyMjYxODc5MiA6IDAuMDY0NDM4MjkpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI5LCAzLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyOSwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxNl8kTEkkKCksIDEyOSwgMywgZGF0YVs5XSkpID8gMC4xMDA5NDczNSA6IDAuMTc2NzIyMDMpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMTk5OC4wID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyOSwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxN18kTEkkKCksIDEyOSwgMywgZGF0YVs5XSkpID8gMC4wMTM2NzIxMjcgOiAwLjA3ODM4ODc0KSA6ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMjksIDMsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMThfJExJJCgpLCAxMjksIDMsIGRhdGFbOV0pKSA/IC0wLjA4MzcwNTk3IDogMC4wMDc2NjE2Njk1KSkpKSk7XG4gICAgICAgIHJldHVybiBwcmVkO1xuICAgIH1cbiAgICBzdGF0aWMgR1JQU1BMSVQwXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQwID0gWzEyMCwgNiwgNDEsIC0zMCwgLTYwLCAzNiwgLTI5LCA5NywgLTM3LCA0MiwgLTEyOCwgOTUsIC0yNSwgNzUsIC01MywgOTIsIDhdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQwOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMSA9IFszLCAtOTYsIDIsIDEsIDU4LCA5LCAwLCAwLCAwLCAtNDgsIDYsIC0xMjgsIDI0LCAtMTI4LCA1MiwgMSwgNl07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQyXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMiA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQyID0gWy02NSwgLTE3LCAtNSwgLTY1LCAtNjUsIC0zMywgLTE3LCAtMSwgLTEzLCAtOSwgLTEsIC0xLCAtOSwgLTksIC05NywgLTcsIDE1XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDNfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQzID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDMgPSBbLTY1LCAtMTcsIC0xLCAtMSwgLTksIC0xLCAtMSwgLTEsIDNdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQzOyB9XG4gICAgc3RhdGljIEdSUFNQTElUNF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDQgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUNCA9IFsxLCAtMTI4LCA2NiwgMSwgMTEsIDEsIDgsIDAsIDAsIDE2LCAwLCAtMTI4LCAxNiwgMzYsIDMyLCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUNDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDVfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQ1ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDUgPSBbMCwgMCwgMiwgMCwgMCwgNCwgMCwgMCwgLTExMiwgMCwgMCwgMywgOCwgMCwgNjQsIDQsIDE2XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUNTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDZfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQ2ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDYgPSBbMCwgMCwgODgsIDEsIDIsIDQsIDIwLCAyLCAtMTI4LCA0LCAtMTI4LCA2NCwgNDgsIC0xMjQsIDY0LCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUNjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDdfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQ3ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDcgPSBbNDAsIC0yOCwgOSwgMSwgMCwgNjgsIDEsIDE2LCAtMTE5LCA5NiwgNDksIDk3LCAyNywgLTMxLCA5NiwgNDUsIDVdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQ3OyB9XG4gICAgc3RhdGljIEdSUFNQTElUOF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDggPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUOCA9IFswLCAtODgsIDQsIDE3LCAzMywgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMTYsIDAsIDQsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQ4OyB9XG4gICAgc3RhdGljIEdSUFNQTElUOV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDkgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUOSA9IFstNjUsIC03NSwgLTgsIC0xMDMsIC04MCwgLTM1LCAtNjcsIC00OCwgLTIsIC02NSwgLTY0LCAtMzMsIDEyNSwgLTMsIC0xMywgNjIsIDQ3XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUOTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEwXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTAgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTAgPSBbMSwgMCwgMCwgOCwgMCwgMCwgMCwgMCwgODgsIDAsIDAsIC0xMjcsIDAsIDEsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxMDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDExXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTEgPSBbOCwgMCwgMCwgMCwgLTEyOCwgMCwgMCwgNzYsIDgwLCAwLCAtNjQsIC0xMjcsIDg4LCAzMywgMCwgMl07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDExOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTJfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxMiA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxMiA9IFstMSwgLTEsIC0yLCAtNSwgLTEsIC0xLCAtMSwgLTUsIC0xLCAtMSwgLTEsIC05LCAtNjksIC0xLCAtMSwgNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDEyOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTNfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxMyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxMyA9IFstMSwgLTEsIC0yLCAxMTEsIC0xLCAtMSwgLTksIC03MywgLTksIC01LCAxMjcsIDk1LCAtOTcsIC0zMywgLTE3LCA3XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTM7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE0ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE0ID0gWzYxLCAtMSwgLTY2LCAtMjksIC0xLCAtMzMsIC0zMywgLTEsIC0yLCAtMiwgLTEsIC0xLCAtMzcsIC05LCAtMTAsIC0xLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTQ7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE1ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE1ID0gWzExMSwgMTI3LCAtMSwgLTEsIC0zMywgLTY1LCAtMSwgLTY1LCAxMTksIC01MSwgLTEsIC03MCwgLTMzLCAtNiwgNDQsIC01LCAzXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTU7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE2ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE2ID0gWzAsIDAsIDQsIDAsIDE2LCAwLCAwLCAwLCA2NiwgNCwgMCwgMCwgOCwgMCwgMCwgMywgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE2OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTdfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxNyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxNyA9IFsxMjYsIC0xLCAtNjUsIC0xLCAxMjcsIC0xLCAtMTcsIC01LCAtNjUsIC0xLCA2MywgMTI3LCAtMSwgLTQxLCAtMTAsIC05LCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTc7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxOF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE4ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE4ID0gWzEyLCAzMiwgMSwgLTEyNCwgLTEyOCwgNjQsIDAsIDAsIDE2LCAwLCA2NCwgOSwgMTAwLCAwLCAtMTI3LCAxMCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE4OyB9XG59XG5nYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wW1wiX19jbGFzc1wiXSA9IFwiZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMFwiO1xuY2xhc3MgZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfMSB7XG4gICAgc3RhdGljIHNjb3JlMChmZGF0YSwgcHJlZHMpIHtcbiAgICAgICAgcHJlZHNbMV0gKz0gZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5zY29yZTAoZmRhdGEpO1xuICAgIH1cbn1cbmdibV9wb2pvX3Rlc3RfRm9yZXN0XzFbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X0ZvcmVzdF8xXCI7XG5jbGFzcyBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wIHtcbiAgICBzdGF0aWMgc2NvcmUwKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcHJlZCA9ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMF8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKGRhdGFbMl0gPCA1LjUgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVswXSkgfHwgZGF0YVswXSA8IDIwMDcuNSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMV8kTEkkKCksIDEzMSwgMCwgZGF0YVs5XSkpID8gKGRhdGFbNF0gPCA5NzUuNSA/IC0wLjA5NTQ2Mzk3NiA6IC0wLjAxNDQ5NTY2MikgOiAoIWlzTmFOKGRhdGFbNl0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMzIsIDAsIGRhdGFbNl0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMl8kTEkkKCksIDMyLCAwLCBkYXRhWzZdKSkgPyAtMC4wNDk5ODIyMTIgOiAwLjA0NjY3Nzc2KSkgOiAoZGF0YVs1XSA8IDExMDQuNSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzEwXSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDEsIGRhdGFbMTBdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMSwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUM18kTEkkKCksIDEzMiwgMSwgZGF0YVsxMF0pKSA/IC0wLjAzMTIzMTUxMSA6IDAuMDg2MTA0NDE1KSA6ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSg2NiwgNTEsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUNF8kTEkkKCksIDY2LCA1MSwgZGF0YVs5XSkpID8gMC4wNjM0NTMwMiA6IDAuMTU1Mzk0NTgpKSkgOiAoZGF0YVswXSA8IDE5OTguMCA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUNV8kTEkkKCksIDEzMSwgMCwgZGF0YVs5XSkpID8gKGRhdGFbNV0gPCAxMjc0LjUgPyAtMC4wOTYwODU5OCA6IC0wLjA0MDMwNTgxKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzVdKSB8fCBkYXRhWzVdIDwgMTU0OC41ID8gLTAuMDIwOTk0NjMyIDogMC4wMzg0MTM4NTIpKSA6ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUNl8kTEkkKCksIDEzMSwgMCwgZGF0YVs5XSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbNV0pIHx8IGRhdGFbNV0gPCAxODc4LjUgPyAtMC4xMjIxOTUxNiA6IC0wLjA2MzExMDExKSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQ3XyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gLTAuMTAyNDAxNzYgOiAtMC4wMzIwOTQzNzQpKSkpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDhfJExJJCgpLCAxMzQsIDAsIGRhdGFbMTBdKSkgPyAoZGF0YVsyXSA8IDcuNSA/IChkYXRhWzRdIDwgOTE4LjUgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMjksIDMsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI5LCAzLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDlfJExJJCgpLCAxMjksIDMsIGRhdGFbOV0pKSA/IC0wLjA0NDc5MTY4NCA6IDAuMTEzNTA2NzEpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI5LCAzLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyOSwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQxMF8kTEkkKCksIDEyOSwgMywgZGF0YVs5XSkpID8gMC4wMzc0NDcwOSA6IDAuMTA2NzE0MjIpKSA6IChkYXRhWzBdIDwgMTk5Ny41ID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyOSwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQxMV8kTEkkKCksIDEyOSwgMywgZGF0YVs5XSkpID8gLTAuMDUxMzYwNjUgOiAwLjAzNDU0NDQzNCkgOiAoZGF0YVs1XSA8IDE0NDEuNSA/IC0wLjExMDU1NDQ5NCA6IC0wLjA1ODcyMzgyKSkpIDogKGRhdGFbMl0gPCA3LjUgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI0LCAzLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDEyXyRMSSQoKSwgMTI0LCAzLCBkYXRhWzldKSkgPyAoZGF0YVs1XSA8IDExODAuMCA/IDguMjEyNDg1N0UtNCA6IDAuMDYxMTI5NTkyKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzldKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyNCwgMywgZGF0YVs5XSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMjQsIDMsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMTNfJExJJCgpLCAxMjQsIDMsIGRhdGFbOV0pKSA/IDAuMDk1NzEyMiA6IDAuMTY2ODE2OSkpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAxOTk4LjAgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI0LCAzLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDE0XyRMSSQoKSwgMTI0LCAzLCBkYXRhWzldKSkgPyAwLjAyMDM3NjY3MyA6IDAuMDc0ODk5OTMpIDogKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyNCwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQxNV8kTEkkKCksIDEyNCwgMywgZGF0YVs5XSkpID8gLTAuMDYzNzMxNjQgOiAwLjAxNTQzODM2NikpKSkpO1xuICAgICAgICByZXR1cm4gcHJlZDtcbiAgICB9XG4gICAgc3RhdGljIEdSUFNQTElUMF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDAgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMCA9IFsxMjAsIDYsIDQxLCAtMzAsIC0yOCwgMzYsIC0yOSwgOTcsIC0zNywgNDIsIC0xMjgsIDk1LCAtMjUsIDc1LCAtNTMsIDkyLCA4XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDFfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQxID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDEgPSBbMywgLTk2LCAtMTI2LCAxLCAyNiwgOSwgMCwgMCwgMCwgLTQ4LCA2LCAtMTI4LCAyNCwgLTEyNCwgNTIsIDEsIDZdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQxOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDIgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMiA9IFstNDUsIDMsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQyOyB9XG4gICAgc3RhdGljIEdSUFNQTElUM18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMyA9IFstNjUsIC0xNywgLTUsIC02NSwgLTY1LCAtMzMsIC0xNywgLTEsIC0xMywgLTksIC0xLCAtOSwgLTksIC05LCAtOTcsIC03LCAxNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDM7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ0XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUNCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQ0ID0gWy02NSwgLTE3LCAtMSwgLTEsIC05LCAtMSwgLTEsIC0xLCAzXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUNDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDVfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQ1ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDUgPSBbMSwgLTEyOCwgLTYyLCAxLCAyNywgNjUsIDgsIDAsIDAsIDE3LCAwLCAtMTI4LCAxNiwgMzYsIDMyLCAxLCAyXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUNTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDZfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQ2ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDYgPSBbMiwgLTk2LCAtMTI4LCAxNywgMTEsIC0xMjgsIDAsIDQsIDAsIDEsIDAsIDAsIDE2LCAwLCA0OCwgMSwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDY7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ3XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUNyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQ3ID0gWy03NCwgLTIsIC0xOSwgLTMxLCAtNDUsIC0zMywgLTUsIC0zNSwgMTExLCAtMTcsIC02NywgLTI5LCAtNjUsIC02MywgMTI2LCAtODEsIDU1XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUNzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDhfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQ4ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDggPSBbLTY1LCAtNzUsIC04LCAtMzksIC04MCwgODksIC02NywgLTQ4LCAtMiwgLTY1LCAtNjQsIC05NywgMTI1LCAtMywgLTE0LCA2MiwgNDRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQ4OyB9XG4gICAgc3RhdGljIEdSUFNQTElUOV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDkgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUOSA9IFsxLCAwLCAwLCA4LCAwLCAwLCAwLCAwLCA4OCwgMCwgMCwgLTEyNywgMCwgMSwgMCwgMCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDk7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxMF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDEwID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDEwID0gWzAsIDAsIDAsIDE2LCAtMTE2LCAwLCAwLCAxMiwgODAsIDAsIC02NCwgLTYzLCAxMjAsIDMzLCAwLCAyLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMTA7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxMV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDExID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDExID0gWy0xLCAtMSwgLTIsIC01LCAtMSwgLTEsIC0xNywgLTUsIC0xNywgLTEsIC0xLCAtOSwgLTY5LCAtMSwgLTEsIC05LCAxXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMTE7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxMl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDEyID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDEyID0gWzYxLCAtMSwgLTY2LCAtMjksIC0xLCAtMzMsIC00MSwgLTEsIC0yLCAtMiwgMTI3LCAtMSwgLTM3LCAtNDEsIC0xMCwgMTVdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQxMjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEzXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMTMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMTMgPSBbMCwgMCwgNCwgMCwgMTYsIDAsIDAsIDAsIDY2LCA0LCAwLCAwLCA4LCAwLCAwLCAxXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMTM7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDE0ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDE0ID0gWzEyNiwgLTEsIC02NSwgLTEsIDEyNywgLTEsIC0xLCAtNSwgLTY1LCAtMSwgNjMsIDEyNywgLTMzLCAtNDEsIC0xMCwgN107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDE0OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTVfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQxNSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQxNSA9IFsxMiwgMzIsIDEsIDQsIC0xMjgsIDY0LCAwLCAwLCAxNiwgMCwgNjQsIDksIDM2LCAwLCAtMTI3LCAxMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDE1OyB9XG59XG5nYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wW1wiX19jbGFzc1wiXSA9IFwiZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMFwiO1xuY2xhc3MgZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfMiB7XG4gICAgc3RhdGljIHNjb3JlMChmZGF0YSwgcHJlZHMpIHtcbiAgICAgICAgcHJlZHNbMV0gKz0gZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5zY29yZTAoZmRhdGEpO1xuICAgIH1cbn1cbmdibV9wb2pvX3Rlc3RfRm9yZXN0XzJbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X0ZvcmVzdF8yXCI7XG5jbGFzcyBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wIHtcbiAgICBzdGF0aWMgc2NvcmUwKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcHJlZCA9ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMF8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAyMDA2LjUgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMxLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDFfJExJJCgpLCAxMzEsIDAsIGRhdGFbOV0pKSA/IChkYXRhWzBdIDwgMTk4Ny41ID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbN10pIHx8IGRhdGFbN10gPCAxNTM1LjUgPyAwLjA3MzU0NzA1IDogLTAuMDM4Mzk4MDgzKSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAxLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQyXyRMSSQoKSwgMTMzLCAxLCBkYXRhWzEwXSkpID8gLTAuMTI1MjUzNzggOiAtMC4wNjU4NzkyODUpKSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQzXyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbN10pIHx8IGRhdGFbN10gPCA2NzkuNSA/IC0wLjAzOTk2MTEgOiAtMC4wODE0NDA5NikgOiAoIWlzTmFOKGRhdGFbNl0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMzIsIDAsIGRhdGFbNl0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUNF8kTEkkKCksIDMyLCAwLCBkYXRhWzZdKSkgPyAtMC4wODAwMzg1IDogMC4wMDg4MzY5NzIpKSkgOiAoZGF0YVs1XSA8IDEyNDIuNSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMjksIDEsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUNV8kTEkkKCksIDEyOSwgMSwgZGF0YVs5XSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMTBdKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMSwgZGF0YVsxMF0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAxLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQ2XyRMSSQoKSwgMTMyLCAxLCBkYXRhWzEwXSkpID8gLTAuMTM0ODU5MDEgOiAwLjA3NzQ4NzI3NSkgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMSwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUN18kTEkkKCksIDEzMiwgMSwgZGF0YVsxMF0pKSA/IC0wLjAwMzc2MjAxNyA6IDAuMDc4NTczNjIpKSA6ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMjksIDEsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUOF8kTEkkKCksIDEyOSwgMSwgZGF0YVs5XSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMTBdKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMSwgZGF0YVsxMF0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAxLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQ5XyRMSSQoKSwgMTMyLCAxLCBkYXRhWzEwXSkpID8gMC4wMDE0OTM1MzA5IDogMC4xNTU1Mjg4NykgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMSwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTBfJExJJCgpLCAxMzIsIDEsIGRhdGFbMTBdKSkgPyAwLjEwODA5OTI4IDogMC4xNTcwMSkpKSkgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTFfJExJJCgpLCAxMzQsIDAsIGRhdGFbMTBdKSkgPyAoZGF0YVsyXSA8IDUuNSA/IChkYXRhWzVdIDwgMTA4MS41ID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI5LCAzLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyOSwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxMl8kTEkkKCksIDEyOSwgMywgZGF0YVs5XSkpID8gLTAuMDQ5ODEwMDM3IDogMC4xMjgwNDcwOCkgOiAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI5LCAzLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDEzXyRMSSQoKSwgMTI5LCAzLCBkYXRhWzldKSkgPyAwLjAzMzI2NTUxMiA6IDAuMTA0NzcyNzUpKSA6IChkYXRhWzBdIDwgMTk5Ny41ID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyOSwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxNF8kTEkkKCksIDEyOSwgMywgZGF0YVs5XSkpID8gLTAuMDM2MTQ4NzcgOiAwLjAyNzQ3NTk5NikgOiAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI5LCAzLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE1XyRMSSQoKSwgMTI5LCAzLCBkYXRhWzldKSkgPyAtMC4wOTQ1MzU5NSA6IC0wLjAzOTYzNjU2KSkpIDogKGRhdGFbMl0gPCA3LjUgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMjQsIDMsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI0LCAzLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE2XyRMSSQoKSwgMTI0LCAzLCBkYXRhWzldKSkgPyAoZGF0YVs0XSA8IDEyMTYuNSA/IDAuMDM1Njk1Mzg1IDogMC4wODc0MTEwNCkgOiAoIWlzTmFOKGRhdGFbNl0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMzIsIDAsIGRhdGFbNl0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTdfJExJJCgpLCAzMiwgMCwgZGF0YVs2XSkpID8gLTAuMDM3NzA3OTQzIDogMC4xMTc5OTk4MikpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAxOTk4LjAgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI0LCAzLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE4XyRMSSQoKSwgMTI0LCAzLCBkYXRhWzldKSkgPyAwLjAyMTM5MTI0IDogMC4wNzI5MjczMSkgOiAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI0LCAzLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE5XyRMSSQoKSwgMTI0LCAzLCBkYXRhWzldKSkgPyAtMC4wNTYzMzY3IDogMC4wMTExMDU1MTEpKSkpKTtcbiAgICAgICAgcmV0dXJuIHByZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBHUlBTUExJVDBfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQwID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDAgPSBbMTA0LCA2LCA0MSwgLTMwLCAtMjgsIDM2LCAtMjksIDk3LCAtMzcsIDQyLCAtMTI4LCA5NSwgLTU3LCAxMDcsIC01MywgOTIsIDhdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQwOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMSA9IFszLCAtOTYsIC02MiwgMSwgMTEsIDEsIDAsIDAsIDAsIC0xMjcsIDE2LCAwLCA1NiwgNCwgMzIsIDEsIDZdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDIgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMiA9IFstNjYsIC0zNSwgLTEsIC01LCAtNjcsIDEyNywgLTksIC0zLCAtNiwgLTI1LCAtMTIsIC01LCAtMSwgMTE3LCAtODEsIC0xNywgMzFdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQyOyB9XG4gICAgc3RhdGljIEdSUFNQTElUM18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMyA9IFswLCAtNjAsIDgxLCAxLCAyLCA2OCwgMTYsIDQsIDgyLCAxMDAsIC03OSwgNjQsIDU5LCAtNTksIDk4LCAzNywgMjFdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQzOyB9XG4gICAgc3RhdGljIEdSUFNQTElUNF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDQgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUNCA9IFstOSwgMywgMCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDQ7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ1XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUNSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQ1ID0gWy05LCAtMzcsIC0xLCAtNSwgLTEsIC0xLCAtNywgLTY1LCAtMTcsIC0xLCAtMzMsIC0xLCAtMSwgLTEsIDExOSwgMTI3LCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUNTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDZfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQ2ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDYgPSBbMCwgNDgsIDAsIDAsIDAsIC0xMjgsIDAsIDAsIDgsIDEsIDAsIDAsIDksIC0xMjgsIDAsIDAsIDRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQ2OyB9XG4gICAgc3RhdGljIEdSUFNQTElUN18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDcgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUNyA9IFstMSwgLTEsIC03LCAtMiwgLTY1LCAtMzMsIC0xLCAtMTcsIC01LCAtMTMsIDExMSwgLTEsIC05LCAtMSwgLTY2LCAtNSwgNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDc7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ4XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUOCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQ4ID0gWy02NSwgLTEsIC00LCAtNSwgLTEsIC01LCAtNywgLTY2LCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAxMjcsIDEyNywgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDg7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ5XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUOSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQ5ID0gWzY0LCAxNiwgMCwgNSwgMCwgMCwgNjQsIDAsIDI0LCAwLCAwLCA0LCAxLCAwLCA3MiwgMTYsIDZdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQ5OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTBfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxMCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxMCA9IFstMTAsIC0xLCAtNSwgLTY1LCAtMTcsIDEyNywgLTE3LCAxMjcsIC01LCAtMjUsIC0xLCAtOSwgMTI3LCAtOSwgLTIsIC0yMSwgMTNdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxMDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDExXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTEgPSBbLTY1LCA1MywgLTgsIC0zOSwgLTc4LCA4OSwgLTY3LCAtMTEyLCAtMiwgLTY1LCAtNjQsIC05NywgMTI1LCAtMywgLTQ2LCA2MiwgNDRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxMTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEyXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTIgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTIgPSBbMSwgMCwgMCwgOCwgMCwgMCwgMCwgMCwgODgsIDAsIDAsIDEsIDAsIDMyLCAwLCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTI7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxM18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDEzID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDEzID0gWy0xLCAtMSwgLTY2LCAtOSwgMTI3LCAtMzcsIC05LCAtNjUsIC0xLCAtNSwgLTE3LCAtMTAsIC0zMywgLTk3LCAtMiwgLTksIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxMzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE0XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTQgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTQgPSBbLTEsIC0xLCAtMiwgLTUsIC0xLCAtMSwgLTI1LCAtNSwgLTE3LCAtMSwgLTEsIC05LCAtNjUsIC0xLCAtMSwgLTksIDFdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxNDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE1XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTUgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTUgPSBbOSwgMCwgNjQsIDAsIC0xMjQsIDQsIDAsIDAsIDE2LCAwLCA2NCwgMTAsIDMyLCAxLCA5LCAyLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTU7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE2ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE2ID0gWzgsIDAsIDQsIDAsIC0xMTIsIDY0LCAyMCwgNDAsIDgyLCA0LCA0OCwgLTYzLCA4LCAwLCAtMTEyLCAzXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTY7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxN18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE3ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE3ID0gWzEyNywgMywgMCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE3OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMThfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxOCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxOCA9IFsxMjYsIC0xLCAtNjYsIC0xLCAxMjcsIC0xLCAtMSwgLTUsIC02NSwgLTEsIDYzLCAxMjcsIC0zMywgLTQxLCAtMTAsIDZdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxODsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE5XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTkgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTkgPSBbNzYsIDMyLCAxLCA0LCAtMTI4LCA2NCwgMCwgMCwgMTYsIDAsIDY0LCA5LCAzMiwgMCwgLTEyNywgMTBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxOTsgfVxufVxuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMFtcIl9fY2xhc3NcIl0gPSBcImdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzBcIjtcbmNsYXNzIGdibV9wb2pvX3Rlc3RfRm9yZXN0XzMge1xuICAgIHN0YXRpYyBzY29yZTAoZmRhdGEsIHByZWRzKSB7XG4gICAgICAgIHByZWRzWzFdICs9IGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuc2NvcmUwKGZkYXRhKTtcbiAgICB9XG59XG5nYm1fcG9qb190ZXN0X0ZvcmVzdF8zW1wiX19jbGFzc1wiXSA9IFwiZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfM1wiO1xuY2xhc3MgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMCB7XG4gICAgc3RhdGljIHNjb3JlMChkYXRhKSB7XG4gICAgICAgIGNvbnN0IHByZWQgPSAoZGF0YVsyXSA8IDYuNSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMF8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDFfJExJJCgpLCAxMzQsIDAsIGRhdGFbMTBdKSkgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDJfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUM18kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gLTAuMTQ0NzU2MDYgOiAtMC4wNzEzMTk4OSkgOiAoZGF0YVs1XSA8IDEwODguMCA/IC0wLjA2OTQ3MDQ2IDogMC4wMzI1MTMyODMpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzldKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUNF8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKGRhdGFbNV0gPCAxMzI3LjUgPyAtMC4wNTgyOTg1NzcgOiAwLjAwNzkzNjk5NSkgOiAoZGF0YVs1XSA8IDExNDMuNSA/IDAuMDA4Nzc1MzE0IDogMC4wNzY5Mjc1MzUpKSkgOiAoZGF0YVs1XSA8IDExODAuMCA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzldKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMCwgZGF0YVs5XSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUNV8kTEkkKCksIDEzMSwgMCwgZGF0YVs5XSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMTBdKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMCwgZGF0YVsxMF0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQ2XyRMSSQoKSwgMTMzLCAwLCBkYXRhWzEwXSkpID8gLTAuMDQxOTQ3Mjk4IDogMC4wMzU3MDIxMikgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUN18kTEkkKCksIDEzMywgMCwgZGF0YVsxMF0pKSA/IDAuMDIzMzY1OTA2IDogMC4wOTM5ODU1NCkpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAyMDA3LjUgPyAoIWlzTmFOKGRhdGFbNl0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMzIsIDAsIGRhdGFbNl0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUOF8kTEkkKCksIDMyLCAwLCBkYXRhWzZdKSkgPyAtMC4wMTAxODQwNjggOiAwLjA3NTAxODEpIDogKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQ5XyRMSSQoKSwgMTMxLCAwLCBkYXRhWzldKSkgPyAwLjExOTIzMjc4IDogMC4xNTQ4Mjg2NCkpKSkgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVswXSkgfHwgZGF0YVswXSA8IDE5OTguMCA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTBfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxMV8kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzZdKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDMyLCAwLCBkYXRhWzZdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDMyLCAwLCBkYXRhWzZdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDEyXyRMSSQoKSwgMzIsIDAsIGRhdGFbNl0pKSA/IC0wLjA2ODA5NzczIDogMC4wOTY3ODgzMSkgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDEzXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAtMC4wMzUxMzg0OSA6IDAuMDI1MzI4MjIpKSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxNF8kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzRdKSB8fCBkYXRhWzRdIDwgMTUxMS41ID8gLTAuMDI1MzYzMDUyIDogMC4wNDEwMzIwNSkgOiAoIWlzTmFOKGRhdGFbNl0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMzIsIDAsIGRhdGFbNl0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTVfJExJJCgpLCAzMiwgMCwgZGF0YVs2XSkpID8gLTAuMDI4MjY5MzQxIDogMC4wNTk1MzI3MikpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzldKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTZfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxN18kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMThfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/IC0wLjEzOTQxMjU4IDogLTAuMTAzMzI2NTUpIDogKGRhdGFbNV0gPCAxMzI3LjUgPyAtMC4wOTg5NTYwNSA6IC0wLjAzNTEyNjM3KSkgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTlfJExJJCgpLCAxMzQsIDAsIGRhdGFbMTBdKSkgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs1XSkgfHwgZGF0YVs1XSA8IDE3NzAuMCA/IC0wLjA3ODMwMzMzIDogLTAuMDE5MjAyNzc0KSA6IChkYXRhWzVdIDwgMTQ3NS4wID8gLTAuMDIyMjc5NjgyIDogMC4wMzI4MTEyMykpKSkpO1xuICAgICAgICByZXR1cm4gcHJlZDtcbiAgICB9XG4gICAgc3RhdGljIEdSUFNQTElUMF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDAgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMCA9IFsxMDcsIC05NCwgNDEsIC0zMiwgLTIsIDQ2LCAtMjksIDk3LCAtMzcsIC03OCwgLTQ0LCAtMSwgLTMzLCAtMTE0LCAtODEsIDk0LCA0XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDFfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDEgPSBbLTMsIDEyNywgLTExLCAtNSwgMTIyLCAtMzMsIC00OSwgLTIzLCAxMTQsIC01NywgLTk3LCAtOTksIC0zMywgMTExLCAtMywgLTMsIDMxXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDJfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQyID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDIgPSBbMTYsIDEzLCA2LCAyLCAwLCAxLCAxNiwgMTgsIDMyLCA2NSwgMiwgMCwgMCwgMzIsIDE2LCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDNfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQzID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDMgPSBbLTUsIC0xNywgLTgxLCAtMjUsIC0xLCAtMSwgLTksIDExNSwgLTUsIC0xLCAtMSwgLTEsIC0xLCAtMTcsIC0xLCAxMjcsIDEzXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDRfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQ0ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDQgPSBbMCwgNjQsIC0xMjYsIDEsIDEsIDEsIDEyLCAyLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAyXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUNDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDVfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQ1ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDUgPSBbNzMsIDM0LCAxLCAtMTI4LCA4NCwgMTIsIC0xMjYsIDY0LCAtNjMsIC03OCwgMCwgLTEyMCwgNzYsIC0xMjgsIDIsIDE2LCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUNTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDZfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQ2ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDYgPSBbMTAsIDUyLCAxMCwgLTEyMCwgLTEyNCwgOTcsIDMzLCAwLCAtODcsIC0zMiwgMzIsIDg5LCA0MSwgLTEyMCwgLTQ4LCAzNiwgNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDY7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ3XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUNyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQ3ID0gWy0xLCA0MywgLTUsIC0zLCAxMjcsIC02NSwgLTEsIC0xLCAtMiwgLTEsIC0zMywgLTUwLCAxMjUsIC0yMiwgLTQsIC00MSwgM107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDc7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ4XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUOCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQ4ID0gWy00MiwgMywgMCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDg7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ5XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUOSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQ5ID0gWzAsIDAsIDAsIDAsIDAsIDAsIC0xMjgsIDk3LCA4LCAyLCAtMTEyLCAxNywgNjQsIDAsIDUsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQ5OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTBfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxMCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxMCA9IFsxMjAsIC0zNCwgMTA3LCAtMjEsIC0xOCwgNjIsIDExMSwgLTM5LCAtNSwgNjAsIC02NCwgLTMzLCAtODksIC01LCAtNDUsIDMwLCA5XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTA7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxMV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDExID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDExID0gWy0xLCAtMSwgLTksIC01LCAtNSwgLTEsIC0xNywgLTM3LCAtMSwgLTM0LCAtMzMsIC0zNCwgMTExLCAtMzMsIDEyNiwgLTEsIDMxXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTE7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxMl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDEyID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDEyID0gWzIsIDAsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxMjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEzXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTMgPSBbMCwgMCwgNCwgMCwgMTcsIDEsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDQsIDAsIDY0LCAyXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTM7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDE0ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDE0ID0gWy01LCAtNDMsIC00MCwgLTMsIC0xMDYsIDc5LCAtMywgLTExMCwgLTY4LCAtNjUsIC05LCAtMTA1LCAxMjUsIC02OSwgLTksIDEyNywgNDVdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxNDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE1XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTUgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTUgPSBbLTksIDMsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxNTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE2XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTYgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTYgPSBbOTYsIC05NCwgOSwgMzUsIDQ1LCAtMTI0LCAyLCAwLCAtMTI4LCAxLCAwLCA5MCwgNDgsIDMsIDcyLCA4NCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDE2OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTdfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxNyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxNyA9IFs5NiwgLTMyLCAyLCAyLCAwLCA0LCA2NSwgMCwgLTExOCwgNDgsIDAsIDM2LCAyNiwgMCwgMTAwLCA0NCwgMTJdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxNzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE4XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTggPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTggPSBbLTIsIC02NSwgLTEsIC0xLCAtMSwgLTExLCAtMSwgLTMsIC0xLCAtNTMsIDEyNSwgMTI3LCAtOSwgLTI1LCA5NSwgLTQsIDE1XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTg7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxOV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDE5ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDE5ID0gWzAsIC0xMjQsIDgsIDcyLCA4LCA3NiwgMSwgMCwgMjUsIDMyLCA0OSwgNjUsIDI1LCAtNjEsIDM0LCAzNSwgNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDE5OyB9XG59XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wW1wiX19jbGFzc1wiXSA9IFwiZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMFwiO1xuY2xhc3MgZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfNCB7XG4gICAgc3RhdGljIHNjb3JlMChmZGF0YSwgcHJlZHMpIHtcbiAgICAgICAgcHJlZHNbMV0gKz0gZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5zY29yZTAoZmRhdGEpO1xuICAgIH1cbn1cbmdibV9wb2pvX3Rlc3RfRm9yZXN0XzRbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X0ZvcmVzdF80XCI7XG5jbGFzcyBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wIHtcbiAgICBzdGF0aWMgc2NvcmUwKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcHJlZCA9IChkYXRhWzJdIDwgNi41ID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQwXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAoZGF0YVs1XSA8IDEwMzIuNSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzEwXSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDEsIGRhdGFbMTBdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMSwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMV8kTEkkKCksIDEzMywgMSwgZGF0YVsxMF0pKSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDEsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMl8kTEkkKCksIDEzMSwgMSwgZGF0YVs5XSkpID8gLTAuMTIzNzE0MjEgOiAtMC4wNjIzMjI2OTUpIDogKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMSwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQzXyRMSSQoKSwgMTMxLCAxLCBkYXRhWzldKSkgPyAtMC4wNzQ0NDA3MiA6IDAuMDQ1NzU1OTI3KSkgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVsxMF0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAxLCBkYXRhWzEwXSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDEsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDRfJExJJCgpLCAxMzMsIDEsIGRhdGFbMTBdKSkgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMxLCAxLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDVfJExJJCgpLCAxMzEsIDEsIGRhdGFbOV0pKSA/IC0wLjEzMTQwODgxIDogMC4wMDEzNjk2OTQ0KSA6ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDEsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUNl8kTEkkKCksIDEzMSwgMSwgZGF0YVs5XSkpID8gLTAuMDQwMTUzIDogMC4wNzk5ODAwNykpKSA6IChkYXRhWzRdIDwgMTA0MS41ID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMxLCAwLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ3XyRMSSQoKSwgMTMxLCAwLCBkYXRhWzldKSkgPyAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUOF8kTEkkKCksIDEzMywgMCwgZGF0YVsxMF0pKSA/IC0wLjA3MzQ3MDIwNSA6IDAuMDIwMjY5ODk3KSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ5XyRMSSQoKSwgMTMzLCAwLCBkYXRhWzEwXSkpID8gMC4wMDgxMTEzMzM1IDogMC4wOTY0NzUwMDUpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMjAwNy41ID8gKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDEwXyRMSSQoKSwgMTMzLCAwLCBkYXRhWzEwXSkpID8gMC4wMTQ1NzMwMjYgOiAwLjA3OTEzNzQzKSA6ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTFfJExJJCgpLCAxMzEsIDAsIGRhdGFbOV0pKSA/IDAuMTE4NDI3NjUgOiAwLjE0ODM2MzcyKSkpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMTk5OS41ID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxMl8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKCFpc05hTihkYXRhWzZdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDMyLCAwLCBkYXRhWzZdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDEzXyRMSSQoKSwgMzIsIDAsIGRhdGFbNl0pKSA/IChkYXRhWzRdIDwgODExLjUgPyAtMC4xMzA3ODYzOSA6IC0wLjA0ODA3MDkzKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMTk5Mi41ID8gLTAuMDMyNzU5MzQgOiAwLjAyMjY1NDUxMykpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE0XyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxNV8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gLTAuMDMzNzE5MTEgOiAwLjAxNzIxNTg3OCkgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE2XyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAwLjAyNTY0Mjg0OCA6IDAuMDcwNjQ0MTgpKSkgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE3XyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAoZGF0YVs1XSA8IDE0MzguNSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzAsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMThfJExJJCgpLCAxMzAsIDAsIGRhdGFbOV0pKSA/IC0wLjEzMTk1Nzg0IDogLTAuMDg2Mjc5MTQpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE5XyRMSSQoKSwgMTMyLCAwLCBkYXRhWzEwXSkpID8gLTAuMDkwODM0Mzk0IDogLTAuMDM1MDMyNjc1KSkgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVsxMF0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDIwXyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbNV0pIHx8IGRhdGFbNV0gPCAxNTg1LjUgPyAtMC4wNzA1NTkyODYgOiAtMC4wMTgzOTYxNTQpIDogKGRhdGFbNF0gPCAxNDAxLjUgPyAtMC4wMDIwODA4MDQyIDogMC4wNDkwOTEwNSkpKSkpO1xuICAgICAgICByZXR1cm4gcHJlZDtcbiAgICB9XG4gICAgc3RhdGljIEdSUFNQTElUMF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDAgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMCA9IFs3MywgMzQsIDMzLCAtOTYsIC0xMCwgNDQsIC05NCwgOTYsIC0zNywgLTc4LCAtMTA4LCAtMzMsIC00OSwgLTExNCwgLTExMywgOTIsIDRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQwOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMSA9IFstNjUsIC02NSwgLTEsIC04NCwgLTE5LCAtMzMsIC0xLCAxNSwgLTEzLCAxMjIsIC0xLCAtMjMsIC0yNSwgMjEsIC00MiwgLTYsIDI3XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDJfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQyID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDIgPSBbLTczLCAtNDEsIDU5LCAtMzMsIDEyNywgLTEsIC03LCAtNjUsIDExMSwgLTEsIC0xLCAtMSwgLTE3LCAtMSwgMTE5LCAtMSwgN107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDI7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQzXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQzID0gWzY1LCA2NiwgNzEsIC05NiwgMCwgLTEyOCwgMzIsIDEsIDAsIDAsIDAsIDAsIDE2LCAxNiwgLTgwLCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDRfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ0ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDQgPSBbMTAxLCA2MiwgLTEyOCwgNjgsIDE2LCAtOTQsIDY0LCA4MCwgNTYsIC01OCwgMCwgLTEwMCwgNSwgLTEwLCAyNCwgLTExMiwgMTBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ0OyB9XG4gICAgc3RhdGljIEdSUFNQTElUNV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDUgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUNSA9IFstMywgLTEsIC05LCAtMTMsIC0xLCAtNDEsIC01LCAtNzEsIC0zLCAtMSwgLTIxLCAtMSwgLTE3LCAtOSwgLTEsIC02NSwgN107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDU7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ2XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUNiA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ2ID0gWy0xLCAtMSwgLTEsIC0xLCAtMSwgLTk3LCAtOSwgLTEsIC0xLCAxMjcsIC0zMywgLTEsIC0xNywgLTMzLCAtNDEsIDEyNywgM107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDY7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ3XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUNyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ3ID0gWzksIDIsIDAsIDAsIDIwLCA0LCAtMTI2LCA2NCwgLTEyNywgLTc4LCAwLCAtMTI4LCA3NywgMCwgOCwgMTYsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ3OyB9XG4gICAgc3RhdGljIEdSUFNQTElUOF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDggPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUOCA9IFstMywgMTA3LCAtNSwgLTUsIDEyNSwgLTY5LCAxMjcsIC01LCAtMSwgLTE3LCAtMzQsIC05LCAtMSwgLTY2LCAtMzMsIC0xMSwgMTFdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ4OyB9XG4gICAgc3RhdGljIEdSUFNQTElUOV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDkgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUOSA9IFstMSwgLTc3LCAtMSwgLTMsIC0zMywgLTUsIC0xNywgLTYsIC0yLCA0NywgLTEsIC01MCwgLTMsIC0zMCwgMTI1LCAtOSwgMTVdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ5OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTBfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxMCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxMCA9IFstMTEsIC0xLCAtNywgLTE3LCAtMTAsIC0zLCAtNzUsIC03LCAtMTAsIC0xLCAtNTQsIDExOCwgLTEsIDEwMCwgLTM4LCAtNSwgNl07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDEwOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTFfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxMSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxMSA9IFswLCAwLCAwLCAwLCAwLCAwLCAtMTI4LCA5NiwgOCwgMiwgLTExMiwgMTcsIDY0LCAwLCAzLCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTE7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxMl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDEyID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDEyID0gWzEyMCwgLTM0LCAxMDcsIC0yMSwgLTIwLCA2MiwgMTExLCAtMzksIC01LCA2MCwgLTY0LCAtMzMsIC04OSwgNTksIC02MSwgOTQsIDldO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxMjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEzXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTMgPSBbLTE0LCAxLCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTM7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE0ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE0ID0gWy01LCAtNDMsIC00MCwgLTcsIC05OCwgOTUsIC0xOSwgLTExMCwgLTY4LCAtNjUsIC05LCAtMTA1LCAxMjUsIC02OSwgLTksIDEyNywgNDRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxNDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE1XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTUgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTUgPSBbMCwgMCwgNjQsIC0xMjYsIDAsIDAsIDAsIDAsIC02MiwgMCwgLTEyOCwgMTAsIC0xMjcsIDAsIDIsIDAsIDhdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxNTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE2XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTYgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTYgPSBbNjQsIDIsIDMzLCAxLCAtMTI4LCAwLCA5NiwgNjQsIDE5LCAzMiwgMCwgNzIsIDMsIDAsIC0xMjgsIDY4LCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTY7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxN18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE3ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE3ID0gWzEwNCwgLTk0LCA5LCAzNSwgNDEsIC0xMjQsIDIsIDQsIC0xMjgsIDEsIDAsIDkwLCA0OCwgOCwgMTIwLCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTc7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxOF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE4ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE4ID0gWzIsIDczLCA3MCwgLTEyOCwgMTgsIDEsIDgwLCAzMiwgNjQsIDY0LCAxMCwgMCwgNjUsIDAsIDIsIDAsIDJdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxODsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE5XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTkgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTkgPSBbMCwgLTY0LCAyLCAyLCAwLCA0LCA2NCwgMzQsIC0xMTIsIDMyLCAwLCAzMywgMjYsIDAsIC0yOCwgMTIsIDRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxOTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDIwXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMjAgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMjAgPSBbMCwgLTEyOCwgOCwgNjQsIDgsIDc2LCAwLCAwLCAxNiwgMzIsIDMyLCA2NSwgMTcsIC02MywgOTgsIDM0LCA1XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMjA7IH1cbn1cbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzBbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wXCI7XG5jbGFzcyBnYm1fcG9qb190ZXN0X0ZvcmVzdF81IHtcbiAgICBzdGF0aWMgc2NvcmUwKGZkYXRhLCBwcmVkcykge1xuICAgICAgICBwcmVkc1sxXSArPSBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLnNjb3JlMChmZGF0YSk7XG4gICAgfVxufVxuZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfNVtcIl9fY2xhc3NcIl0gPSBcImdibV9wb2pvX3Rlc3RfRm9yZXN0XzVcIjtcbmNsYXNzIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAge1xuICAgIHN0YXRpYyBzY29yZTAoZGF0YSkge1xuICAgICAgICBjb25zdCBwcmVkID0gKGRhdGFbMl0gPCA2LjUgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDBfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxXyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQyXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUM18kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/IC0wLjE3NTM1NDAzIDogLTAuMTE5NTE1MDIpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbNF0pIHx8IGRhdGFbNF0gPCAxMjcyLjAgPyAtMC4wODc4NDYzNiA6IC0wLjAyMjgwMDc4NikpIDogKGRhdGFbNF0gPCAxMTgwLjAgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVsxMF0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMwLCAxLCBkYXRhWzEwXSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzAsIDEsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDRfJExJJCgpLCAxMzAsIDEsIGRhdGFbMTBdKSkgPyAtMC4wNTQ2Nzc5NCA6IDAuMTIzNzcyNjY2KSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzEwXSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzAsIDEsIGRhdGFbMTBdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMCwgMSwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUNV8kTEkkKCksIDEzMCwgMSwgZGF0YVsxMF0pKSA/IC02LjM1Mjc3RS00IDogMC4xNTQwNTk2KSkpIDogKGRhdGFbNV0gPCAxMzI3LjUgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDAsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMxLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDZfJExJJCgpLCAxMzEsIDAsIGRhdGFbOV0pKSA/ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQ3XyRMSSQoKSwgMTMzLCAwLCBkYXRhWzEwXSkpID8gLTAuMDQ0MDU5MzYgOiAwLjAxOTMyMDA0MSkgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUOF8kTEkkKCksIDEzMywgMCwgZGF0YVsxMF0pKSA/IDAuMDA1MTUyMDg0IDogMC4wNzk1NjY4MikpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAyMDAzLjUgPyAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUOV8kTEkkKCksIDEzMywgMCwgZGF0YVsxMF0pKSA/IC0wLjA1MjAyMzk3NyA6IDAuMDU5MzU1MDU4KSA6ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzAsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTBfJExJJCgpLCAxMzAsIDAsIGRhdGFbOV0pKSA/IDAuMDQzNzMwNDUzIDogMC4xMTA5MDc5KSkpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMTk5OC4wID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxMV8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDEyXyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKGRhdGFbNV0gPCAxMTA2LjUgPyAtMC4xMDcxNzAwMTYgOiAtMC4wNDUxMTM0NjcpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbNF0pIHx8IGRhdGFbNF0gPCAxMzY0LjUgPyAtMC4wNDEwODE1NiA6IDAuMDA1NDUzNDg0NikpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDEzXyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE0XyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gLTAuMDgzODg5MTY0IDogLTAuMDEwMDEwNjM4KSA6ICghaXNOYU4oZGF0YVs2XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgzMiwgMCwgZGF0YVs2XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxNV8kTEkkKCksIDMyLCAwLCBkYXRhWzZdKSkgPyAtMC4wMjQ4NTM0MiA6IDAuMDQ2Nzc1OTc4KSkpIDogKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxNl8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbNV0pIHx8IGRhdGFbNV0gPCAxODgxLjAgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMwLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE3XyRMSSQoKSwgMTMwLCAwLCBkYXRhWzldKSkgPyAtMC4xMDU2NjE5MyA6IC0wLjA2OTgxODY4KSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzEwXSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDAsIGRhdGFbMTBdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMThfJExJJCgpLCAxMzEsIDAsIGRhdGFbMTBdKSkgPyAtMC4wODEzNjA1NSA6IC0wLjAxNTMzOTY3NCkpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE5XyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAyMDA0LjUgPyAtMC4wNzUyMTE5NSA6IC0wLjAxODk3MzE3KSA6IChkYXRhWzRdIDwgMTE4MC4wID8gLTAuMDQyNzUzNTA2IDogMC4wMTQ0MTU3MjEpKSkpKTtcbiAgICAgICAgcmV0dXJuIHByZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBHUlBTUExJVDBfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQwID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDAgPSBbMTA3LCAtOTQsIDQzLCAtMjksIC0yLCA0NywgLTI5LCA5OSwgLTM3LCAtMTMsIC00NCwgLTEsIC0zMywgLTE3LCAtODEsIDk1LCA2XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDFfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDEgPSBbLTEsIDEyNywgLTksIC01LCAxMjMsIC01LCAtMTcsIC0xLCAxMjMsIC0yNSwgLTMzLCAtOTksIC0xLCAtMTcsIC0zLCAtMSwgMzFdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDIgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMiA9IFsxMjcsIC04MSwgLTIxLCAtMSwgLTIsIC0xLCAtNSwgMTE1LCAtMzcsIC0xLCAtMSwgLTEsIC0xLCAtMTcsIC0xLCAxMjcsIDE1XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDNfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQzID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDMgPSBbMCwgMCwgOCwgNCwgLTEyOCwgMCwgMTYsIDAsIDAsIDAsIDAsIDMyLCAwLCAwLCAwLCAwLCAzMl07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDM7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ0XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUNCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQ0ID0gWzAsIDQ4LCAtMTI3LCAwLCAwLCAtMTI4LCAwLCAwLCAxNiwgMCwgMCwgMCwgMCwgMCwgMCwgMiwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDQ7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ1XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUNSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQ1ID0gWzY0LCA0OCwgMCwgMCwgMCwgMCwgNjQsIC0xMTIsIDE2LCA2NCwgMCwgMCwgMSwgLTk2LCAyNCwgMTcsIDJdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQ1OyB9XG4gICAgc3RhdGljIEdSUFNQTElUNl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDYgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUNiA9IFs3MywgMzQsIDAsIC0xMjgsIDIwLCA0LCAtMTI2LCA2NCwgLTYxLCAtNzgsIDQsIC0xMjgsIDc5LCAwLCAxMCwgMTYsIDRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQ2OyB9XG4gICAgc3RhdGljIEdSUFNQTElUN18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDcgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUNyA9IFstMTksIDEyNywgLTMxLCAtMTUsIC0zNSwgLTY5LCAtMSwgNTksIDExMCwgLTI1LCAtNjYsIC0xNCwgLTMzLCAxNCwgLTM2LCAtOSwgN107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDc7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ4XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUOCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQ4ID0gWy0yLCA1MSwgLTUsIC03LCAtMzMsIC01LCAtMjUsIC0zOCwgLTIsIDYzLCAtMzQsIC01MCwgLTEsIC0yNSwgLTMsIC0xLCA2XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUODsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDlfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQ5ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDkgPSBbLTExLCAtOTcsIC02OSwgLTE3LCAtMTAsIC0zNSwgLTY3LCAtMjMsIC0xMSwgLTEsIC00OSwgLTY2LCAtNjcsIC0yLCAtMzcsIC00MSwgMjNdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQ5OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTBfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxMCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxMCA9IFstMSwgMTI1LCAtMTEsIC02NSwgLTksIC05LCAtNjYsIC00LCAtMSwgLTEsIC01LCAtMSwgLTEsIC0zLCAtMywgLTIsIDFdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxMDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDExXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTEgPSBbMTIwLCAtMzQsIDEwNywgLTIxLCAtMTcsIDEyNiwgMTExLCAtMzksIC01LCA2MCwgLTY0LCAtMzMsIC04OSwgLTEsIC0xMywgMzAsIDldO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxMTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEyXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTIgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTIgPSBbLTEsIC0xLCAtMTEsIC01LCAtMSwgLTEsIC0xNywgLTM3LCAtMSwgLTM0LCAtMzMsIC0zMywgLTE3LCAtMSwgMTI3LCAtMSwgNjNdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxMjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEzXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTMgPSBbLTUsIC00MywgLTQwLCAtMywgLTc0LCA3OSwgLTMsIC0xMTAsIC02OCwgLTY1LCAtOSwgLTY2LCAxMjUsIC02OSwgLTksIDEyNywgNDVdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxMzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE0XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTQgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTQgPSBbLTEsIC0xLCAtMiwgLTEsIC03MywgLTE3LCAtMSwgLTc0LCAtMSwgLTEsIC0xLCAtMSwgMTI3LCAtMSwgLTksIC0xLCA2M107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE0OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTVfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxNSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxNSA9IFstOSwgMywgMCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE1OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTZfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxNiA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxNiA9IFsxMDYsIC05NCwgOSwgNTEsIDQ3LCAtMTI0LCAyLCA0LCAtMTI4LCAxLCAyLCA5MCwgNDgsIDExLCAxMjMsIDg1LCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTY7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxN18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE3ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE3ID0gWzAsIDksIC0xMjIsIC0xMjgsIDE2LCAxLCA2NCwgMzIsIDAsIDY0LCAtMTIwLCA0LCA1LCAwLCA0LCAwLCAyXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTc7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxOF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE4ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE4ID0gWzY0LCAwLCAyLCAwLCAzMiwgNjgsIDAsIDIsIC0xMjYsIDMyLCAwLCA0OCwgMjYsIDAsIC05NiwgNiwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE4OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTlfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxOSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxOSA9IFswLCAtOTIsIDgsIDcyLCAyLCA3NiwgMSwgMjAsIC0xMTksIDMyLCA0OSwgNjUsIDI3LCAtNjEsIDk4LCA0MywgNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE5OyB9XG59XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wW1wiX19jbGFzc1wiXSA9IFwiZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMFwiO1xuY2xhc3MgZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfNiB7XG4gICAgc3RhdGljIHNjb3JlMChmZGF0YSwgcHJlZHMpIHtcbiAgICAgICAgcHJlZHNbMV0gKz0gZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5zY29yZTAoZmRhdGEpO1xuICAgIH1cbn1cbmdibV9wb2pvX3Rlc3RfRm9yZXN0XzZbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X0ZvcmVzdF82XCI7XG5jbGFzcyBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wIHtcbiAgICBzdGF0aWMgc2NvcmUwKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcHJlZCA9ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMF8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAyMDA2LjUgPyAoZGF0YVs1XSA8IDE0NDQuNSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzEwXSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMV8kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMl8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gLTAuMDc5OTQ1MTUgOiAtMC4wMzgyMTM0NTQpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQzXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAtMC4wMzgxNTI3OCA6IDAuMDEzMzQzNTU2KSkgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUNF8kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzldKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUNV8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gLTAuMDU3NDg3MTUgOiAwLjA2Mjk1NjkxNCkgOiAoIWlzTmFOKGRhdGFbNl0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMzIsIDAsIGRhdGFbNl0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUNl8kTEkkKCksIDMyLCAwLCBkYXRhWzZdKSkgPyAtMC4wNTk1MTUwMTQgOiAwLjAxMzQ0Nzg3OCkpKSA6IChkYXRhWzRdIDwgMTEyNC41ID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyOSwgMSwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ3XyRMSSQoKSwgMTI5LCAxLCBkYXRhWzldKSkgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVsxMF0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAxLCBkYXRhWzEwXSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDEsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDhfJExJJCgpLCAxMzIsIDEsIGRhdGFbMTBdKSkgPyAtMC4xNzMyMjc3IDogLTAuMDQ5MDU0NjcpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDEsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDlfJExJJCgpLCAxMzIsIDEsIGRhdGFbMTBdKSkgPyAtMC4xNDkzMzY0MSA6IDAuMDM3MzM3MTM2KSkgOiAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI5LCAxLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDEwXyRMSSQoKSwgMTI5LCAxLCBkYXRhWzldKSkgPyAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMSwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTFfJExJJCgpLCAxMzIsIDEsIGRhdGFbMTBdKSkgPyAtMC4wNTEwMDA3MTggOiAwLjA2MDY4ODMyKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzEwXSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDEsIGRhdGFbMTBdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMSwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTJfJExJJCgpLCAxMzIsIDEsIGRhdGFbMTBdKSkgPyAwLjA5NDMzNTAyIDogMC4xMzUxMTQ5NykpKSkgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTNfJExJJCgpLCAxMzQsIDAsIGRhdGFbMTBdKSkgPyAoZGF0YVsyXSA8IDUuNSA/IChkYXRhWzVdIDwgMTA4MS41ID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI0LCAzLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyNCwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxNF8kTEkkKCksIDEyNCwgMywgZGF0YVs5XSkpID8gLTAuMDM5NzQwNDMgOiAwLjA5NzU0NDQ2KSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxNV8kTEkkKCksIDEzMywgMCwgZGF0YVsxMF0pKSA/IC0wLjAwNjkwMTYzMyA6IDAuMDcyNjMzMDcpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMTk5Ny41ID8gKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE2XyRMSSQoKSwgMTMzLCAwLCBkYXRhWzEwXSkpID8gLTAuMDI5MTg2NTU0IDogMC4wMjExMzE1ODgpIDogKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEyNCwgMywgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxN18kTEkkKCksIDEyNCwgMywgZGF0YVs5XSkpID8gLTAuMDcwOTEzMTkgOiAtMC4wMjcyMzk3MjMpKSkgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE4XyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs1XSkgfHwgZGF0YVs1XSA8IDE2NDAuNSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMTk5OC4wID8gMC4wMjcwNjEyMzEgOiAtMC4wMjE5MTcxNDQpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMTBdKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMSwgZGF0YVsxMF0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMxLCAxLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxOV8kTEkkKCksIDEzMSwgMSwgZGF0YVsxMF0pKSA/IDAuMDI1Njk5NjY2IDogMC4wODM0NzQ2NjYpKSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQyMF8kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzldKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMjFfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/IDAuMDEzMTkwOTY5IDogMC4wNzMwNzYwNTQpIDogKGRhdGFbNV0gPCA5MjEuNSA/IDAuMDA3MTA3MjQ2NyA6IDAuMDc1MjQ3MDY0KSkpKSk7XG4gICAgICAgIHJldHVybiBwcmVkO1xuICAgIH1cbiAgICBzdGF0aWMgR1JQU1BMSVQwXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQwID0gWzEwNCwgNiwgNDEsIC0zMCwgLTI4LCAzNiwgLTI5LCA5NywgLTM3LCA0MiwgLTEyOCwgOTUsIC01NywgNDMsIC01NCwgOTIsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQwOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMSA9IFsxMDYsIDMyLCAzMiwgMSwgMiwgNCwgMSwgMCwgOSwgMTYsIDk2LCA2NCwgLTg3LCAtNTUsIC02MiwgNSwgMjBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDIgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMiA9IFswLCAtOTYsIC02NCwgNSwgMjcsIC02MywgMCwgMjAsIDAsIC02MywgMjYsIC0xMjgsIDAsIDAsIDE3LCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDNfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQzID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDMgPSBbMywgLTk2LCAwLCAxLCAzLCAwLCAwLCAyLCAwLCAxNiwgNCwgMCwgMzIsIDQsIDMyLCAwLCA0XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDRfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ0ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDQgPSBbNTIsIC0zMywgLTMsIC0yOSwgODMsIC0zMywgLTE4LCAtMTksIC0xNiwgLTE4LCAtMTAzLCAtMjksIC02NSwgLTI3LCAxMjYsIC02OSwgMjNdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ0OyB9XG4gICAgc3RhdGljIEdSUFNQTElUNV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDUgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUNSA9IFswLCAzMiwgNjgsIDAsIDAsIDksIDAsIDAsIDAsIDAsIDAsIDAsIDQ4LCAwLCAxNiwgMCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDU7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ2XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUNiA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ2ID0gWy0xNSwgMywgMCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDY7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ3XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUNyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ3ID0gWy05LCAtMzMsIC0xLCAtNSwgLTEsIC0xLCAtNywgLTY1LCAtMTcsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIDEyNywgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDc7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ4XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUOCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ4ID0gWzY0LCAwLCAwLCA2NCwgMCwgLTEyOCwgMCwgMCwgOCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMl07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDg7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ5XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUOSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ5ID0gWy05LCAtMSwgLTEsIC0yLCAtMSwgLTMzLCAtMSwgLTEsIC0xLCAtNSwgLTE3LCAtMSwgMTI3LCAtMSwgLTEwLCAtNSwgMTVdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ5OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTBfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxMCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxMCA9IFstNjUsIC0xLCAtNCwgLTUsIC0xLCAtMSwgLTcsIC02NiwgLTEsIC0xLCAtMzMsIC0xLCAtMSwgLTEsIDEyNywgMTI3LCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTA7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxMV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDExID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDExID0gWy0yLCAtOSwgLTEsIC0xLCAtODMsIC0xLCAtMTcsIC0xLCAtNSwgLTMwLCAtMSwgLTM1LCAtMSwgLTEsIC0yLCAtMiwgMTVdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxMTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEyXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTIgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTIgPSBbLTIsIC0zMywgLTcsIC02NSwgLTE3LCAxMjcsIC0xLCAxMjcsIC0xMywgLTgxLCAtMSwgLTksIDEyNywgLTksIC0xLCAtNywgMTNdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxMjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEzXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTMgPSBbLTEyNiwgMjAsIC0xMjAsIC0xMjAsIC03OCwgNzMsIC02NywgLTEyOCwgLTcwLCAtNzIsIDAsIC05OSwgNjEsIC01MiwgLTQ2LCA0NiwgMTJdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxMzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE0XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTQgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTQgPSBbNjUsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDg4LCAwLCAwLCAxLCAwLCAxLCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTQ7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE1ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE1ID0gWy0xNywgLTEsIC0xLCAtMzcsIC0yLCAtMywgLTY1LCAtNywgLTIsIC0xLCAtMjMsIC0xLCAxMjcsIC0yLCAtNSwgLTEsIDMxXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTU7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE2ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE2ID0gWzc3LCAtMTI2LCAwLCA0LCA1LCAtMTI0LCAwLCAzMiwgMSwgMCwgMiwgMzIsIDIsIDE3LCAzMywgMCwgMV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE2OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTdfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxNyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxNyA9IFstMSwgLTEsIC0yLCAxMTEsIC0xLCAtMSwgLTksIC03MywgLTksIC01LCAtMzMsIDk0LCAtNjUsIC02NSwgLTE3LCA3XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTc7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxOF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE4ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE4ID0gWy05LCAtNywgLTksIC05OSwgLTY5LCAtNSwgLTEsIC0zNCwgLTksIC05LCAxMjcsIC03MSwgLTUsIC00LCAtNzUsIC0xLCAxNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE4OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTlfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxOSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxOSA9IFstMSwgLTMsIC0xLCAtMSwgLTE4LCAxMjcsIC0xNywgLTY1LCAtMzAsIC0xLCAtMSwgLTcxLCAtMjksIC02OSwgLTk3LCAtMjEsIDNdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxOTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDIwXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMjAgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMjAgPSBbMTI3LCAtMSwgLTEsIC0xLCAtMzMsIC0xLCAtMjUsIC0xLCAtMSwgMTAzLCAtMSwgLTIsIC0zMywgLTksIDEyNSwgLTMzLCA2M107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDIwOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMjFfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQyMSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQyMSA9IFstNjUsIC0xLCAtMSwgLTEsIC0xLCAtMSwgMTI2LCAtNjUsIDYxLCAtMSwgLTEsIC0xMCwgLTIsIC0xLCAtMSwgLTY1LCAxNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDIxOyB9XG59XG5nYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wW1wiX19jbGFzc1wiXSA9IFwiZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMFwiO1xuY2xhc3MgZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfNyB7XG4gICAgc3RhdGljIHNjb3JlMChmZGF0YSwgcHJlZHMpIHtcbiAgICAgICAgcHJlZHNbMV0gKz0gZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5zY29yZTAoZmRhdGEpO1xuICAgIH1cbn1cbmdibV9wb2pvX3Rlc3RfRm9yZXN0XzdbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X0ZvcmVzdF83XCI7XG5jbGFzcyBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wIHtcbiAgICBzdGF0aWMgc2NvcmUwKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcHJlZCA9IChkYXRhWzJdIDwgNi41ID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQwXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAoZGF0YVs1XSA8IDEwNDEuNSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzEwXSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDEsIGRhdGFbMTBdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMSwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMV8kTEkkKCksIDEzMywgMSwgZGF0YVsxMF0pKSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzldKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMl8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gLTAuMDc3OTY3MDI1IDogMC4wMjUwNDY2MDIpIDogKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQzXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAtMC4wNzAxMTc4OCA6IDAuMDM1OTA0MDc2KSkgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVsxMF0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAxLCBkYXRhWzEwXSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDEsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDRfJExJJCgpLCAxMzMsIDEsIGRhdGFbMTBdKSkgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDVfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/IC0wLjA0MjQ2OTcwNiA6IDAuMDE2NTQ3MzI0KSA6ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUNl8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gLTAuMDE5MzIwNzkgOiAwLjA3NjUyMzE4NSkpKSA6IChkYXRhWzRdIDwgODI5LjUgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTI4LCAzLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDdfJExJJCgpLCAxMjgsIDMsIGRhdGFbOV0pKSA/ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ4XyRMSSQoKSwgMTMzLCAwLCBkYXRhWzEwXSkpID8gLTAuMTY1NDIzNjggOiAtMC4wMTM2Mjg0NzM1KSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ5XyRMSSQoKSwgMTMzLCAwLCBkYXRhWzEwXSkpID8gLTAuMDEyOTI4OTUgOiAwLjA3OTc0MzcpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMjAwNy41ID8gKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDEwXyRMSSQoKSwgMTMzLCAwLCBkYXRhWzEwXSkpID8gLTAuMDA5NDE4NTQyNSA6IDAuMDYxNzIwMzY0KSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxMV8kTEkkKCksIDEzMywgMCwgZGF0YVsxMF0pKSA/IDAuMDg4NDk5NjcgOiAwLjEyODg3NzA0KSkpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMTk5OC4wID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxMl8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKGRhdGFbMF0gPCAxOTg3LjUgPyAoZGF0YVs0XSA8IDEyMTEuNSA/IC0wLjA1MjYxMzYxIDogMC4wNTk5Nzc1NTgpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMl0pIHx8IGRhdGFbMl0gPCAyMC41ID8gLTAuMDE1OTk0MDggOiAtMC4wNTU5NDQyODMpKSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxM18kTEkkKCksIDEzNCwgMCwgZGF0YVsxMF0pKSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMTk5My41ID8gLTAuMDEwMTQ5MjUzNSA6IDAuMDU3OTg4NDc2KSA6ICghaXNOYU4oZGF0YVs2XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgzMiwgMCwgZGF0YVs2XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxNF8kTEkkKCksIDMyLCAwLCBkYXRhWzZdKSkgPyAtMC4wMjIyMDM3NTggOiAwLjA0ODcxNDI2KSkpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDE1XyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxNl8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxN18kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gLTAuMTMyNDA4NzEgOiAtMC4wODY5Nzk5MjYpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAyMDA0LjUgPyAtMC4wNjMxODUzNSA6IC0wLjAxMTAxMjYxMikpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxOF8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKGRhdGFbNV0gPCAxMzI3LjUgPyAtMC4wNjk5MTE4NSA6IC0wLjAyNTIyNzc3KSA6IChkYXRhWzRdIDwgMTE0My41ID8gLTAuMDI1NjU3MjY1IDogMC4wMjg1OTM2MTMpKSkpKTtcbiAgICAgICAgcmV0dXJuIHByZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBHUlBTUExJVDBfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQwID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDAgPSBbNzIsIDIsIDMzLCAtOTYsIC0xMCwgMTIsIC05NCwgOTcsIC00NSwgLTc4LCA0LCAtMzMsIC01NywgLTExOCwgLTEyMSwgOTIsIDRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQwOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMSA9IFstMSwgLTY1LCAtNCwgLTg0LCAtMywgLTMzLCAtMSwgMTMsIC05LCAxMjIsIC0xLCAtNjMsIC0yNSwgMjksIC03NCwgLTYsIDI3XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDJfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQyID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDIgPSBbMSwgMzIsIDAsIDIsIDAsIDY0LCA2NCwgMiwgMCwgMCwgLTY0LCAwLCAwLCAxLCAwLCAwLCAzXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDNfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQzID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDMgPSBbLTE3LCAtNzQsIC0xLCAtMTEsIC0xLCAtNjUsIC0xMywgMTI3LCAtMzMsIC0xLCA2MywgLTEsIC0xNywgLTIsIC0xNywgLTMzLCAxMl07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDM7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ0XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUNCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ0ID0gWzEwMSwgNDIsIC0xMjgsIDY4LCAwLCAtMTI2LCA2NCwgODAsIDU2LCAtNTgsIDAsIC0xMDAsIDY1LCAxMDIsIDg4LCAtMTEyLCAxMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDQ7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ1XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUNSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ1ID0gWzEyMiwgLTczLCAtMTcsIC0yNSwgLTEwLCA0NywgLTg5LCA5OSwgLTUsIC0xMywgLTQxLCAtMSwgLTMzLCAtMTcsIC02NSwgMTI3LCAxNF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDU7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ2XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUNiA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ2ID0gWy0xLCAtOSwgLTEsIC0xLCAtMSwgMzEsIC0xLCAxMjcsIC0xLCAtMSwgLTY2LCAtMSwgLTMzLCAtNjUsIC02NSwgLTEsIDZdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ2OyB9XG4gICAgc3RhdGljIEdSUFNQTElUN18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDcgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUNyA9IFstMSwgLTEsIC0xLCAtNjUsIC0zLCAtMSwgLTMzLCAtNjksIC0xLCAxMjcsIC05NywgLTQzLCAtNjUsIC05OCwgLTEsIC05XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUNzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDhfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ4ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDggPSBbLTMsIDEyNywgLTEsIC05LCAxMjcsIC0xLCAtMSwgLTY5LCAtMSwgLTE3LCAtMzQsIC0xLCAtMywgLTYsIC05OCwgLTksIDE1XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUODsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDlfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ5ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDkgPSBbLTEsIDExLCAtNSwgLTksIDEyMywgLTY1LCAtMSwgLTEsIC0yLCAxMTEsIC0xLCAtMiwgLTMsIC0yMiwgLTEsIC00NSwgN107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDk7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxMF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDEwID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDEwID0gWy0xLCAtNzcsIC03LCAtMTcsIC0yLCAtMywgLTc1LCAtOCwgLTIsIC0xLCAtMTcsIDExOSwgLTEsIDEwMiwgLTM3LCAtMSwgMzBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxMDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDExXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTEgPSBbLTMsIC00OSwgLTEzLCAxMTcsIC0xLCAtMSwgMTI2LCAtMzMsIC05LCAtMzMsIC0zNCwgLTEsIC05LCAxMTAsIDEyNSwgLTQxLCAyN107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDExOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTJfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxMiA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxMiA9IFsxMjAsIC0zNCwgMTA3LCAtMjEsIC0xOCwgNjIsIDExMSwgLTM5LCAtNSwgNjAsIC02NCwgLTMzLCAtOTMsIC02NSwgLTQ1LCAzMCwgOV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDEyOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTNfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxMyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxMyA9IFsyLCAtMTI4LCAtMTA0LCA4LCA2LCA2NCwgMjksIDIsIC0xMTIsIC03NiwgLTEyNiwgMCwgNjEsIC0xMDMsIC0zMSwgMzIsIDVdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxMzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE0XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTQgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTQgPSBbLTksIDMsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxNDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE1XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTUgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTUgPSBbMzIsIC05MiwgOCwgNzIsIDgsIDc2LCA2NSwgMjAsIC0xMjUsIDMyLCAxNywgOTYsIDI3LCAtNjEsIDM4LCAzOSwgNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDE1OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTZfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxNiA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxNiA9IFs3MiwgLTg1LCAxMSwgMTcsIDExNSwgNSwgMiwgMCwgLTEyNiwgMCwgOCwgNzgsIDIxLCAwLCA3OSwgMTYsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxNjsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE3XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTcgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTcgPSBbLTIsIC0xLCAtMSwgLTMsIC0xLCAtOSwgLTEsIC01LCAtMSwgLTM0LCAtMTksIC0yLCAtNzMsIC0zMiwgOTUsIC00LCAxNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDE3OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMThfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxOCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxOCA9IFs5NiwgMzQsIDksIDEsIDIxLCAtMTE1LCAwLCA2LCAtMTI4LCA2NSwgMiwgLTM0LCAwLCA5LCAxMDUsIDg1LCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTg7IH1cbn1cbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzBbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wXCI7XG5jbGFzcyBnYm1fcG9qb190ZXN0X0ZvcmVzdF84IHtcbiAgICBzdGF0aWMgc2NvcmUwKGZkYXRhLCBwcmVkcykge1xuICAgICAgICBwcmVkc1sxXSArPSBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLnNjb3JlMChmZGF0YSk7XG4gICAgfVxufVxuZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfOFtcIl9fY2xhc3NcIl0gPSBcImdibV9wb2pvX3Rlc3RfRm9yZXN0XzhcIjtcbmNsYXNzIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAge1xuICAgIHN0YXRpYyBzY29yZTAoZGF0YSkge1xuICAgICAgICBjb25zdCBwcmVkID0gKGRhdGFbMl0gPCA2LjUgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDBfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxXyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQyXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVsxMF0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTM0LCAwLCBkYXRhWzEwXSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDNfJExJJCgpLCAxMzQsIDAsIGRhdGFbMTBdKSkgPyAtMC4wODk2MDQwOSA6IC0wLjAzNjM1MDQxOCkgOiAoZGF0YVswXSA8IDE5OTMuNSA/IC0wLjA1OTYwNDY2IDogMC4wMzE1NDYyOCkpIDogKGRhdGFbNV0gPCAxMDE0LjUgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVsxMF0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAxLCBkYXRhWzEwXSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDEsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDRfJExJJCgpLCAxMzIsIDEsIGRhdGFbMTBdKSkgPyAtMC4wNDU3NjQwNDQgOiAwLjA1Mjk2MzA3NCkgOiAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDVfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/IC0wLjAxODMxMTczMiA6IDAuMDM3Mzc4NjQ2KSkpIDogKCFpc05hTihkYXRhWzZdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDMyLCAwLCBkYXRhWzZdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDZfJExJJCgpLCAzMiwgMCwgZGF0YVs2XSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ3XyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAoZGF0YVsyXSA8IDIuNSA/IC0wLjEyNzA1MjQ5IDogLTAuMDUwNzkwNDMpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAxOTk5LjAgPyAwLjA3NDAzMjQyNiA6IC0wLjAzMTg1MTQyKSkgOiAoZGF0YVs0XSA8IDExMDYuNSA/ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ4XyRMSSQoKSwgMTMzLCAwLCBkYXRhWzEwXSkpID8gLTAuMDE0MTU4NTY1IDogMC4wNDQ3OTM1NTQpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDlfJExJJCgpLCAxMzMsIDAsIGRhdGFbMTBdKSkgPyAwLjAzMTUwOTk2IDogMC4wODMwOTYwNSkpKSkgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVswXSkgfHwgZGF0YVswXSA8IDE5OTkuNSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTBfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzEwXSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTFfJExJJCgpLCAxMzQsIDAsIGRhdGFbMTBdKSkgPyAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDEyXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAtMC4xMzMwNjk1NSA6IC0wLjAzNzgyOTcyNykgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDEzXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAtMC4wMjExNDk3MjcgOiAwLjAyODg1ODA3MSkpIDogKCFpc05hTihkYXRhWzZdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDMyLCAwLCBkYXRhWzZdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDE0XyRMSSQoKSwgMzIsIDAsIGRhdGFbNl0pKSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTVfJExJJCgpLCAxMzIsIDAsIGRhdGFbOV0pKSA/IC0wLjA3MDA5MjgzIDogLTAuMDA0ODY5NDY1KSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzEwXSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzNCwgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTZfJExJJCgpLCAxMzQsIDAsIGRhdGFbMTBdKSkgPyAwLjAxNTcwOTM0NCA6IDAuMDU0ODYxMDg0KSkpIDogKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxN18kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKGRhdGFbNV0gPCAxNDM4LjUgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzAsIDAsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMwLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDE4XyRMSSQoKSwgMTMwLCAwLCBkYXRhWzldKSkgPyAtMC4xMDk2ODg5NyA6IC0wLjA2ODQyMDUpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMTBdKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMCwgZGF0YVsxMF0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMxLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxOV8kTEkkKCksIDEzMSwgMCwgZGF0YVsxMF0pKSA/IC0wLjA2NzAwMTUyIDogLTAuMDA1Mzc3NDU3NSkpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDIwXyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAyMDA0LjUgPyAtMC4wNzEwNjQxOSA6IC0wLjAwNTcxODQwNykgOiAoZGF0YVs1XSA8IDE1NDguNSA/IC0wLjAyODg2ODg4NCA6IDAuMDE5NTUyODczKSkpKSk7XG4gICAgICAgIHJldHVybiBwcmVkO1xuICAgIH1cbiAgICBzdGF0aWMgR1JQU1BMSVQwXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQwID0gWzc0LCAyLCAzMywgLTk2LCAtMTAsIDEyLCAtOTQsIDk2LCAtNDUsIC03OCwgLTEyNCwgLTMzLCAtNDksIC0xMTgsIC0xMjEsIDkyLCA0XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDFfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDEgPSBbLTE3LCAxMjcsIC04MywgLTM3LCAtNiwgLTEsIC0xNywgLTg3LCAtNiwgLTMsIC02NSwgLTcxLCAtMSwgMTI3LCAtMywgLTksIDMxXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDJfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQyID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDIgPSBbMCwgNDAsIDIsIDIsIDAsIDY1LCAwLCAwLCAwLCAwLCAxNiwgMCwgMTYsIDMyLCAxMTIsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQyOyB9XG4gICAgc3RhdGljIEdSUFNQTElUM18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMyA9IFsxNiwgMCwgODIsIDAsIDAsIDAsIDAsIDQsIDAsIDIsIDY0LCA3MCwgMCwgLTEyOCwgMiwgMCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDM7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ0XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUNCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ0ID0gWzUsIDgsIDAsIDQsIDY1LCAwLCA2NCwgMCwgMCwgNzYsIDE2LCAtMTI4LCAxLCAxMiwgMCwgMTgsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ0OyB9XG4gICAgc3RhdGljIEdSUFNQTElUNV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDUgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUNSA9IFsxMjIsIC05LCAtNSwgLTI1LCAtMSwgNjMsIC0xNywgMTI3LCAtMSwgLTksIC00NCwgLTEsIC0zMywgLTY1LCAtODEsIC0xLCA2XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUNTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDZfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ2ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDYgPSBbLTksIDMsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ2OyB9XG4gICAgc3RhdGljIEdSUFNQTElUN18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDcgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUNyA9IFs2NCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDc7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ4XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUOCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ4ID0gWy0xLCAzOSwgLTUsIC0xNSwgODUsIC01LCAxMDMsIC0zOCwgLTIsIC04MSwgLTM0LCAtNDEsIC0zLCAtOTAsIC0xLCAtNDEsIDE1XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUODsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDlfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ5ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDkgPSBbLTkxLCAtMywgLTcsIC0xNywgLTI2LCAtMywgLTY3LCAtNywgLTEsIC0xLCAtNTUsIDg3LCAtMzUsIDExNiwgLTEwMSwgLTEsIDIyXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUOTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEwXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTAgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTAgPSBbNzIsIC0xMjYsIDk5LCAtOTMsIC0xMjEsIDY4LCAxMDQsIDY0LCAtNDUsIDU2LCAtMTI4LCAtNTAsIC05MywgMSwgLTYxLCA5MiwgMF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDEwOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTFfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxMSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxMSA9IFstMSwgLTEsIC0xNSwgLTUsIC01LCAtMSwgLTE3LCAtMzcsIC0xLCAtMzQsIC0zMywgLTM0LCAxMTEsIC0zMywgMTI2LCAtMSwgMjddO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxMTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEyXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTIgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTIgPSBbLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0zLCAtNSwgLTEsIC0xLCAtMSwgLTEsIC0zLCAtMSwgLTMzLCAxM107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDEyOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTNfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxMyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxMyA9IFswLCAwLCAxMiwgMCwgMTYsIDEsIDAsIDIsIDAsIDAsIDAsIDAsIDAsIDYsIDAsIDAsIDJdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxMzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE0XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTQgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTQgPSBbLTksIDMsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxNDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE1XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTUgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTUgPSBbLTEsIC0xLCAtMSwgLTEsIC0zLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIDE1XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTU7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDE2ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDE2ID0gWzIsIDAsIC0xMTIsIDksIDIsIDY0LCA1LCAyLCAwLCA1MiwgMiwgMCwgMjEsIDAsIDk3LCAzMiwgNF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDE2OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTdfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxNyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxNyA9IFsxMDQsIC04NiwgMTMsIDUxLCA0MywgLTEyNCwgMiwgNCwgLTEyOCwgMSwgMiwgOTAsIDQ4LCA4LCAxMjAsIDAsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxNzsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE4XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTggPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTggPSBbMiwgNjUsIDY2LCAtMTI4LCAxNiwgMSwgODAsIDM0LCA2NCwgODAsIDgsIDAsIDY1LCA0LCAyLCAwLCAyXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTg7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxOV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDE5ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDE5ID0gWzY0LCAwLCAyLCAyLCAwLCA0LCA2NCwgMzQsIDE2LCAwLCAwLCA0OCwgMTAsIDAsIDQsIDQsIDRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxOTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDIwXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMjAgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMjAgPSBbMCwgLTkyLCA4LCA3NiwgMiwgNzYsIDEsIDQsIDksIDMyLCA0OSwgOTcsIDQ5LCAtNjEsIDk4LCAzNSwgNV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDIwOyB9XG59XG5nYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wW1wiX19jbGFzc1wiXSA9IFwiZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMFwiO1xuY2xhc3MgZ2JtX3Bvam9fdGVzdF9Gb3Jlc3RfOSB7XG4gICAgc3RhdGljIHNjb3JlMChmZGF0YSwgcHJlZHMpIHtcbiAgICAgICAgcHJlZHNbMV0gKz0gZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5zY29yZTAoZmRhdGEpO1xuICAgIH1cbn1cbmdibV9wb2pvX3Rlc3RfRm9yZXN0XzlbXCJfX2NsYXNzXCJdID0gXCJnYm1fcG9qb190ZXN0X0ZvcmVzdF85XCI7XG5jbGFzcyBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wIHtcbiAgICBzdGF0aWMgc2NvcmUwKGRhdGEpIHtcbiAgICAgICAgY29uc3QgcHJlZCA9IChkYXRhWzJdIDwgNi41ID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQwXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAoZGF0YVs1XSA8IDEwNDEuNSA/ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzEwXSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDEsIGRhdGFbMTBdKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMSwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMV8kTEkkKCksIDEzMywgMSwgZGF0YVsxMF0pKSA/ICghaXNOYU4oZGF0YVs5XSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzEsIDEsIGRhdGFbOV0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMl8kTEkkKCksIDEzMSwgMSwgZGF0YVs5XSkpID8gLTAuMTUyMzU3ODkgOiAtMC4wNDg2OTIpIDogKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMSwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQzXyRMSSQoKSwgMTMxLCAxLCBkYXRhWzldKSkgPyAtMC4wNjI4MzIzNyA6IDAuMDMyNTg3MzkpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMjAwNy41ID8gKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDEsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDRfJExJJCgpLCAxMzMsIDEsIGRhdGFbMTBdKSkgPyAtMC4wMzQ3MTAzNDQgOiAwLjAyMjc0MTc0NCkgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMSwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUNV8kTEkkKCksIDEzMywgMSwgZGF0YVsxMF0pKSA/IDAuMDMzNjEwNzU0IDogMC4xMTU2MzIzMikpKSA6IChkYXRhWzJdIDwgMS41ID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMF0pIHx8IGRhdGFbMF0gPCAxOTk4LjAgPyAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUNl8kTEkkKCksIDEzMywgMCwgZGF0YVsxMF0pKSA/IC0wLjA5NDE3OTU1NiA6IDAuMDY2NDUwNzEpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDdfJExJJCgpLCAxMzMsIDAsIGRhdGFbMTBdKSkgPyAtMC4xMjY5MTg5MyA6IDAuMDE3MTczNjQ2KSkgOiAoZGF0YVs0XSA8IDcxNy41ID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbOV0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMxLCAwLCBkYXRhWzldKSB8fCAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMSwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQ4XyRMSSQoKSwgMTMxLCAwLCBkYXRhWzldKSkgPyAtMC4wNTIyMDcxNjQgOiAwLjA4MjkwODc2NCkgOiAoIWlzTmFOKGRhdGFbMTBdKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMCwgZGF0YVsxMF0pICYmICFHZW5Nb2RlbC5iaXRTZXRDb250YWlucyhnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUOV8kTEkkKCksIDEzMywgMCwgZGF0YVsxMF0pKSA/IDAuMDIzNTYzNjIgOiAwLjA3MDczOTgxKSkpKSA6ICggLyogaXNOYU4gKi9pc05hTihkYXRhWzBdKSB8fCBkYXRhWzBdIDwgMTk5OC4wID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxMF8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDExXyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMiwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxMl8kTEkkKCksIDEzMiwgMCwgZGF0YVs5XSkpID8gLTAuMTMyNDc4NzYgOiAtMC4wMzUyMjIyNSkgOiAoIWlzTmFOKGRhdGFbOV0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDEzXyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAtMC4wMzM1NTYxNjcgOiAwLjAxMzQyNDYxNCkpIDogKCFpc05hTihkYXRhWzEwXSkgJiYgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzQsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE0XyRMSSQoKSwgMTM0LCAwLCBkYXRhWzEwXSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbNV0pIHx8IGRhdGFbNV0gPCAxNjc4LjAgPyAtMC4wNDk2MzUyMTMgOiAwLjAyNzEwOTY1OCkgOiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzIsIDAsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMyLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE1XyRMSSQoKSwgMTMyLCAwLCBkYXRhWzldKSkgPyAwLjAxNzkwNjQzOSA6IDAuMDQ5MTc0OTA1KSkpIDogKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbNV0pIHx8IGRhdGFbNV0gPCAxNjMxLjUgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVs5XSkgfHwgIUdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzAsIDAsIGRhdGFbOV0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMwLCAwLCBkYXRhWzldKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE2XyRMSSQoKSwgMTMwLCAwLCBkYXRhWzldKSkgPyAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVsxMF0pIHx8ICFHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgfHwgKEdlbk1vZGVsLmJpdFNldElzSW5SYW5nZSgxMzMsIDAsIGRhdGFbMTBdKSAmJiAhR2VuTW9kZWwuYml0U2V0Q29udGFpbnMoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE3XyRMSSQoKSwgMTMzLCAwLCBkYXRhWzEwXSkpID8gLTAuMDc0MzM3OTUgOiAtMC4wNDA2MjkxNzUpIDogKGRhdGFbMF0gPCAyMDAwLjUgPyAwLjAyMDk3MTA1NCA6IC0wLjAyOTk3MzI0NCkpIDogKCFpc05hTihkYXRhWzldKSAmJiAoR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMCwgMCwgZGF0YVs5XSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxOF8kTEkkKCksIDEzMCwgMCwgZGF0YVs5XSkpID8gKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbMTBdKSB8fCAhR2VuTW9kZWwuYml0U2V0SXNJblJhbmdlKDEzMywgMCwgZGF0YVsxMF0pIHx8IChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxOV8kTEkkKCksIDEzMywgMCwgZGF0YVsxMF0pKSA/IC0wLjA2Mjg3ODYyIDogLTAuMDA0MzM1NTg1KSA6ICghaXNOYU4oZGF0YVsxMF0pICYmIChHZW5Nb2RlbC5iaXRTZXRJc0luUmFuZ2UoMTMzLCAwLCBkYXRhWzEwXSkgJiYgIUdlbk1vZGVsLmJpdFNldENvbnRhaW5zKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQyMF8kTEkkKCksIDEzMywgMCwgZGF0YVsxMF0pKSA/IC0wLjA0NzY2MzU4IDogMC4wMjQ4NTA4NTcpKSkpKTtcbiAgICAgICAgcmV0dXJuIHByZWQ7XG4gICAgfVxuICAgIHN0YXRpYyBHUlBTUExJVDBfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQwID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDAgPSBbNzMsIDAsIDMzLCAtOTYsIC0xMCwgMTIsIC05NCwgOTYsIC00NSwgLTc4LCA0LCAtNDksIC01NywgLTExOCwgLTEyMSwgOTIsIDRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQwOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMSA9IFstNSwgLTY3LCAtMywgLTg0LCAtMywgLTMzLCAtNjUsIDE1LCAtOSwgMTIyLCAtMzMsIC0zMSwgLTI1LCAtOTksIC03NCwgLTYsIDI3XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDJfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQyID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDIgPSBbLTksIC00MSwgLTEsIC0zMywgLTEsIC0xLCAtMywgLTY1LCAtNSwgLTEsIC0xLCAtOSwgLTEsIC0zLCA5NSwgLTEsIDddO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQyOyB9XG4gICAgc3RhdGljIEdSUFNQTElUM18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDMgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMyA9IFsxMTksIC0zNywgLTMzLCAtNiwgMTI3LCAtMzMsIDEyMSwgLTEsIC0xNywgLTEsIC05NywgLTEsIDExOSwgLTEsIC05LCAxMjcsIDZdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQzOyB9XG4gICAgc3RhdGljIEdSUFNQTElUNF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDQgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUNCA9IFstOSwgLTY1LCAtNjAsIDEwOSwgLTQsIC0xNywgLTksIDg2LCAtNzEsIC0xMCwgMTExLCAtNDQsIDk1LCAxMTksIC0xLCAtOCwgMTVdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQ0OyB9XG4gICAgc3RhdGljIEdSUFNQTElUNV8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDUgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUNSA9IFstMiwgLTE3LCAtNSwgLTEsIC0zLCAtMzMsIC0xLCAtMSwgLTEsIC05LCAtMSwgLTMzLCAtMiwgLTEsIC0xOCwgLTE3LCAzMV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDU7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ2XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUNiA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQ2ID0gWy0xLCA4MywgLTIsIC01LCAtMzQsIC02NiwgLTE3LCAtNiwgLTIsIC0xLCAtMywgNjMsIC0xLCAtNzMsIDEyNywgLTQxLCAxMl07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDY7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ3XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUNyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQ3ID0gWzYxLCAtODEsIC0zLCAtMTcsIC0zLCAtMywgLTEsIC01LCAxMTEsIC0xLCAtOCwgLTQyLCAtNDksIC0xMiwgOSwgLTM5LCAxOV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDc7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQ4XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUOCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQ4ID0gWzAsIDAsIDAsIC0xMjgsIDY4LCAxMiwgMiwgMCwgLTEyNywgLTExMCwgMCwgNCwgNjgsIDgsIDMsIDgwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUODsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDlfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQ5ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDkgPSBbLTIsIC03OSwgLTUsIC0xOSwgLTE4LCAtNywgNTIsIC04LCAtMSwgLTEsIC00OSwgLTksIDkzLCAtMTAsIC01LCAtOSwgMTRdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQ5OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTBfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxMCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxMCA9IFs3MiwgLTEyNiwgMTA3LCAtOTMsIC0xMjIsIDQsIDk2LCA2NCwgLTQ1LCA1NiwgLTEyOCwgLTU0LCAtOTMsIDMsIC02MSwgMjQsIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxMDsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDExXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTEgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTEgPSBbLTEsIC0xLCAtOSwgLTUsIC03LCAtMSwgLTE3LCAtMzcsIC0xLCAtMzQsIC0zMywgLTM0LCAxMTEsIC0zMywgMTI2LCAtMSwgNjJdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxMTsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDEyXyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTIgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTIgPSBbLTEsIC0xLCAtMSwgLTEsIC0xLCAtMSwgLTEsIC0zLCAtNSwgLTEsIC0xLCAtNSwgLTEsIC0xLCAtMSwgLTMzLCAxM107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDEyOyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTNfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxMyA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxMyA9IFsxLCAwLCA0LCAxNiwgMTcsIDY1LCAtMTIwLCAzOCwgMCwgMCwgMTYsIDQsIDIwLCA2OCwgMzIsIDY0LCAyXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTM7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE0ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE0ID0gWy0xLCAtNDEsIC0zNiwgLTMsIC03NCwgLTQ5LCAtMSwgLTc4LCAtNjUsIC02NSwgLTksIC0xLCAxMjcsIC01LCAtOSwgMTI3LCA2MV07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE0OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMTVfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxNSA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxNSA9IFs2NCwgMiwgMzMsIDM1LCAtMTI4LCAwLCA5NiwgMCwgODMsIDMyLCAtMTI4LCA4LCAtMTI1LCAwLCAtMTI4LCAwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTU7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxNl8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE2ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE2ID0gWzEwNCwgMzIsIDgsIDIsIDYxLCAtMTI4LCAyLCAwLCAtMTI4LCAxLCAwLCAxNiwgMCwgMSwgMjQsIDgwLCAwXTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTY7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQxN18kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE3ID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE3ID0gWzk4LCAtOTQsIDAsIDgsIDQwLCAxMiwgMSwgMzYsIDExLCA0OCwgODMsIDY0LCAxOCwgLTEwNCwgMSwgMSwgNF07XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE3OyB9XG4gICAgc3RhdGljIEdSUFNQTElUMThfJExJJCgpIHsgaWYgKGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxOCA9PSBudWxsKSB7XG4gICAgICAgIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxOCA9IFs2NiwgLTk0LCAtNTMsIDM2LCAzLCA1LCAwLCA0LCAtMTI4LCAwLCA2LCA5NCwgNDgsIDExLCA3MywgNjksIDBdO1xuICAgIH0gcmV0dXJuIGdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxODsgfVxuICAgIHN0YXRpYyBHUlBTUExJVDE5XyRMSSQoKSB7IGlmIChnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTkgPT0gbnVsbCkge1xuICAgICAgICBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTkgPSBbMCwgMzYsIDEwLCAxLCAwLCA0LCA2OCwgMTYsIC0xMTIsIDk2LCAxLCAxMTIsIDExLCAtMzEsIDQsIDQ2LCA1XTtcbiAgICB9IHJldHVybiBnYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTk7IH1cbiAgICBzdGF0aWMgR1JQU1BMSVQyMF8kTEkkKCkgeyBpZiAoZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDIwID09IG51bGwpIHtcbiAgICAgICAgZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDIwID0gWy0xLCAtNjUsIC0xLCAtMSwgLTMzLCAtMSwgLTIsIC0zNywgLTEsIC04MSwgLTM1LCAtMjEsIC0zMywgLTE3LCAxMjcsIC00MSwgN107XG4gICAgfSByZXR1cm4gZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDIwOyB9XG59XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wW1wiX19jbGFzc1wiXSA9IFwiZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMFwiO1xuLyoqXG4gKiAnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJ1xuICogSkFLRSdTIEVESVRTIChSRU1PVkVEIE1PU1QgQ0FMTFMgVE8gSDJPIENMQVNTRVMhISlcbiAqICcnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnXG4gKiBUaGlzIGlzIGEgaGVscGVyIGNsYXNzIHRvIHN1cHBvcnQgSmF2YSBnZW5lcmF0ZWQgbW9kZWxzLlxuICogQGNsYXNzXG4gKi9cbmNsYXNzIEdlbk1vZGVsIHtcbiAgICBzdGF0aWMgY29ycmVjdFByb2JhYmlsaXRpZXMoc2NvcmVkLCBwcmlvckNsYXNzRGlzdCwgbW9kZWxDbGFzc0Rpc3QpIHtcbiAgICAgICAgbGV0IHByb2JzdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBjID0gMTsgYyA8IHNjb3JlZC5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsX2ZyYWN0aW9uID0gcHJpb3JDbGFzc0Rpc3RbYyAtIDFdO1xuICAgICAgICAgICAgICAgIGNvbnN0IG92ZXJzYW1wbGVkX2ZyYWN0aW9uID0gbW9kZWxDbGFzc0Rpc3RbYyAtIDFdO1xuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbF9mcmFjdGlvbiAhPT0gMCAmJiBvdmVyc2FtcGxlZF9mcmFjdGlvbiAhPT0gMClcbiAgICAgICAgICAgICAgICAgICAgc2NvcmVkW2NdICo9IG9yaWdpbmFsX2ZyYWN0aW9uIC8gb3ZlcnNhbXBsZWRfZnJhY3Rpb247XG4gICAgICAgICAgICAgICAgcHJvYnN1bSArPSBzY29yZWRbY107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2JzdW0gPiAwKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzY29yZWQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBzY29yZWRbaV0gLz0gcHJvYnN1bTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNjb3JlZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogVXRpbGl0eSBmdW5jdGlvbiB0byBnZXQgYSBiZXN0IHByZWRpY3Rpb24gZnJvbSBhbiBhcnJheSBvZiBjbGFzc1xuICAgICAqIHByZWRpY3Rpb24gZGlzdHJpYnV0aW9uLiAgSXQgcmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIG1heC4gcHJvYmFiaWxpdHkgKGlmIHRoYXQgZXhpc3RzKS5cbiAgICAgKiBJbiB0aGUgY2FzZSBvZiB0aWVzLCBpdCBzYW1wbGVzIGZyb20gdGhlIHRpZWQgY2xhc3NlcyB3aXRoIHRoZSBsaWtlbGlob29kIGdpdmVuIGJ5IHRoZSBwcmlvciBwcm9iYWJpbGl0aWVzLlxuICAgICAqIEBwYXJhbSB7ZG91YmxlW119IHByZWRzIGFuIGFycmF5IG9mIHByZWRpY3Rpb24gZGlzdHJpYnV0aW9uLiAgTGVuZ3RoIG9mIGFycmF5cyBpcyBlcXVhbCB0byBhIG51bWJlciBvZiBjbGFzc2VzKzEuXG4gICAgICogQHBhcmFtIHtkb3VibGVbXX0gcHJpb3JDbGFzc0Rpc3QgcHJpb3IgY2xhc3MgcHJvYmFiaWxpdGllcyAodXNlZCB0byBicmVhayB0aWVzKVxuICAgICAqIEBwYXJhbSB7ZG91YmxlW119IGRhdGEgVGVzdCBkYXRhXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRocmVzaG9sZCB0aHJlc2hvbGQgZm9yIGJpbmFyeSBjbGFzc2lmaWVyXG4gICAgICogQHJldHVybiB7bnVtYmVyfSB0aGUgYmVzdCBwcmVkaWN0aW9uIChpbmRleCBvZiBjbGFzcywgemVyby1iYXNlZClcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0UHJlZGljdGlvbihwcmVkcywgcHJpb3JDbGFzc0Rpc3QsIGRhdGEsIHRocmVzaG9sZCkge1xuICAgICAgICBpZiAocHJlZHMubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICByZXR1cm4gR2VuTW9kZWwuZ2V0UHJlZGljdGlvbkJpbm9taWFsKHByZWRzLCB0aHJlc2hvbGQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEdlbk1vZGVsLmdldFByZWRpY3Rpb25NdWx0aW5vbWlhbChwcmVkcywgcHJpb3JDbGFzc0Rpc3QsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBnZXRQcmVkaWN0aW9uQmlub21pYWwocHJlZHMsIHRocmVzaG9sZCkge1xuICAgICAgICByZXR1cm4gKHByZWRzWzJdID49IHRocmVzaG9sZCkgPyAxIDogMDtcbiAgICB9XG4gICAgc3RhdGljIGdldFByZWRpY3Rpb25NdWx0aW5vbWlhbChwcmVkcywgcHJpb3JDbGFzc0Rpc3QsIGRhdGEpIHtcbiAgICAgICAgY29uc3QgdGllcyA9IChbXSk7XG4gICAgICAgIHRpZXMucHVzaCgwKTtcbiAgICAgICAgbGV0IGJlc3QgPSAxO1xuICAgICAgICBsZXQgdGllQ250ID0gMDtcbiAgICAgICAgZm9yIChsZXQgYyA9IDI7IGMgPCBwcmVkcy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChwcmVkc1tiZXN0XSA8IHByZWRzW2NdKSB7XG4gICAgICAgICAgICAgICAgICAgIGJlc3QgPSBjO1xuICAgICAgICAgICAgICAgICAgICB0aWVDbnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcmVkc1tiZXN0XSA9PT0gcHJlZHNbY10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGllQ250Kys7XG4gICAgICAgICAgICAgICAgICAgIHRpZXMucHVzaChjIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aWVDbnQgPT09IDApXG4gICAgICAgICAgICByZXR1cm4gYmVzdCAtIDE7XG4gICAgICAgIGxldCBoYXNoID0gMDtcbiAgICAgICAgaWYgKGRhdGEgIT0gbnVsbClcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4MTIxID0gMDsgaW5kZXgxMjEgPCBkYXRhLmxlbmd0aDsgaW5kZXgxMjErKykge1xuICAgICAgICAgICAgICAgIGxldCBkID0gZGF0YVtpbmRleDEyMV07XG4gICAgICAgICAgICAgICAgaGFzaCBePSAoZnVuY3Rpb24gKGYpIHsgdmFyIGJ1ZiA9IG5ldyBBcnJheUJ1ZmZlcig0KTsgKG5ldyBGbG9hdDMyQXJyYXkoYnVmKSlbMF0gPSBmOyByZXR1cm4gKG5ldyBVaW50MzJBcnJheShidWYpKVswXTsgfSkoTWF0aC5mcm91bmQoZCkpID4+IDY7XG4gICAgICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvckNsYXNzRGlzdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4MTIyID0gdGllcy5pdGVyYXRvcigpOyBpbmRleDEyMi5oYXNOZXh0KCk7KSB7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSBpbmRleDEyMi5uZXh0KCk7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdW0gKz0gcHJpb3JDbGFzc0Rpc3RbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgcm5nID0gbmV3IGphdmEudXRpbC5SYW5kb20oaGFzaCk7XG4gICAgICAgICAgICBjb25zdCB0aWUgPSBybmcubmV4dERvdWJsZSgpO1xuICAgICAgICAgICAgbGV0IHBhcnRpYWxTdW0gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXgxMjMgPSB0aWVzLml0ZXJhdG9yKCk7IGluZGV4MTIzLmhhc05leHQoKTspIHtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGluZGV4MTIzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnRpYWxTdW0gKz0gcHJpb3JDbGFzc0Rpc3RbaV0gLyBzdW07XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWUgPD0gcGFydGlhbFN1bSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXMgPSBwcmVkc1tiZXN0XTtcbiAgICAgICAgbGV0IGlkeCA9IChoYXNoIHwgMCkgJSAodGllQ250ICsgMSk7XG4gICAgICAgIGZvciAoYmVzdCA9IDE7IGJlc3QgPCBwcmVkcy5sZW5ndGg7IGJlc3QrKykge1xuICAgICAgICAgICAgaWYgKHJlcyA9PT0gcHJlZHNbYmVzdF0gJiYgLS1pZHggPCAwKVxuICAgICAgICAgICAgICAgIHJldHVybiBiZXN0IC0gMTtcbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgamF2YS5sYW5nLlJ1bnRpbWVFeGNlcHRpb24oXCJTaG91bGQgTm90IFJlYWNoIEhlcmVcIik7XG4gICAgfVxuICAgIHN0YXRpYyBiaXRTZXRDb250YWlucyhiaXRzLCBuYml0cywgYml0b2ZmLCBkbnVtKSB7XG4gICAgICAgIGxldCBpZHggPSAoZG51bSB8IDApO1xuICAgICAgICBpZHggLT0gYml0b2ZmO1xuICAgICAgICByZXR1cm4gKGJpdHNbaWR4ID4+IDNdICYgKCgxIHwgMCkgPDwgKGlkeCAmIDcpKSkgIT09IDA7XG4gICAgfVxuICAgIHN0YXRpYyBiaXRTZXRJc0luUmFuZ2UobmJpdHMsIGJpdG9mZiwgZG51bSkge1xuICAgICAgICBsZXQgaWR4ID0gKGRudW0gfCAwKTtcbiAgICAgICAgaWR4IC09IGJpdG9mZjtcbiAgICAgICAgcmV0dXJuIChpZHggPj0gMCAmJiBpZHggPCBuYml0cyk7XG4gICAgfVxuICAgIHN0YXRpYyBLbWVhbnNfcHJlcHJvY2Vzc0RhdGEkZG91YmxlX0EkZG91YmxlX0EkZG91YmxlX0EkaW50X0EoZGF0YSwgbWVhbnMsIG11bHRzLCBtb2Rlcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gR2VuTW9kZWwuS21lYW5zX3ByZXByb2Nlc3NEYXRhJGRvdWJsZSRpbnQkZG91YmxlX0EkZG91YmxlX0EkaW50X0EoZGF0YVtpXSwgaSwgbWVhbnMsIG11bHRzLCBtb2Rlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEttZWFuc19wcmVwcm9jZXNzRGF0YSRkb3VibGUkaW50JGRvdWJsZV9BJGRvdWJsZV9BJGludF9BKGQsIGksIG1lYW5zLCBtdWx0cywgbW9kZXMpIHtcbiAgICAgICAgaWYgKG1vZGVzW2ldID09PSAtMSkge1xuICAgICAgICAgICAgaWYgKCAvKiBpc05hTiAqL2lzTmFOKGQpKVxuICAgICAgICAgICAgICAgIGQgPSBtZWFuc1tpXTtcbiAgICAgICAgICAgIGlmIChtdWx0cyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZCAtPSBtZWFuc1tpXTtcbiAgICAgICAgICAgICAgICBkICo9IG11bHRzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCAvKiBpc05hTiAqL2lzTmFOKGQpKVxuICAgICAgICAgICAgICAgIGQgPSBtb2Rlc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgc3RhdGljIEttZWFuc19wcmVwcm9jZXNzRGF0YShkLCBpLCBtZWFucywgbXVsdHMsIG1vZGVzKSB7XG4gICAgICAgIGlmICgoKHR5cGVvZiBkID09PSAnbnVtYmVyJykgfHwgZCA9PT0gbnVsbCkgJiYgKCh0eXBlb2YgaSA9PT0gJ251bWJlcicpIHx8IGkgPT09IG51bGwpICYmICgobWVhbnMgIT0gbnVsbCAmJiBtZWFucyBpbnN0YW5jZW9mIEFycmF5ICYmIChtZWFucy5sZW5ndGggPT0gMCB8fCBtZWFuc1swXSA9PSBudWxsIHx8ICh0eXBlb2YgbWVhbnNbMF0gPT09ICdudW1iZXInKSkpIHx8IG1lYW5zID09PSBudWxsKSAmJiAoKG11bHRzICE9IG51bGwgJiYgbXVsdHMgaW5zdGFuY2VvZiBBcnJheSAmJiAobXVsdHMubGVuZ3RoID09IDAgfHwgbXVsdHNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIG11bHRzWzBdID09PSAnbnVtYmVyJykpKSB8fCBtdWx0cyA9PT0gbnVsbCkgJiYgKChtb2RlcyAhPSBudWxsICYmIG1vZGVzIGluc3RhbmNlb2YgQXJyYXkgJiYgKG1vZGVzLmxlbmd0aCA9PSAwIHx8IG1vZGVzWzBdID09IG51bGwgfHwgKHR5cGVvZiBtb2Rlc1swXSA9PT0gJ251bWJlcicpKSkgfHwgbW9kZXMgPT09IG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gR2VuTW9kZWwuS21lYW5zX3ByZXByb2Nlc3NEYXRhJGRvdWJsZSRpbnQkZG91YmxlX0EkZG91YmxlX0EkaW50X0EoZCwgaSwgbWVhbnMsIG11bHRzLCBtb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKChkICE9IG51bGwgJiYgZCBpbnN0YW5jZW9mIEFycmF5ICYmIChkLmxlbmd0aCA9PSAwIHx8IGRbMF0gPT0gbnVsbCB8fCAodHlwZW9mIGRbMF0gPT09ICdudW1iZXInKSkpIHx8IGQgPT09IG51bGwpICYmICgoaSAhPSBudWxsICYmIGkgaW5zdGFuY2VvZiBBcnJheSAmJiAoaS5sZW5ndGggPT0gMCB8fCBpWzBdID09IG51bGwgfHwgKHR5cGVvZiBpWzBdID09PSAnbnVtYmVyJykpKSB8fCBpID09PSBudWxsKSAmJiAoKG1lYW5zICE9IG51bGwgJiYgbWVhbnMgaW5zdGFuY2VvZiBBcnJheSAmJiAobWVhbnMubGVuZ3RoID09IDAgfHwgbWVhbnNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIG1lYW5zWzBdID09PSAnbnVtYmVyJykpKSB8fCBtZWFucyA9PT0gbnVsbCkgJiYgKChtdWx0cyAhPSBudWxsICYmIG11bHRzIGluc3RhbmNlb2YgQXJyYXkgJiYgKG11bHRzLmxlbmd0aCA9PSAwIHx8IG11bHRzWzBdID09IG51bGwgfHwgKHR5cGVvZiBtdWx0c1swXSA9PT0gJ251bWJlcicpKSkgfHwgbXVsdHMgPT09IG51bGwpICYmIG1vZGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBHZW5Nb2RlbC5LbWVhbnNfcHJlcHJvY2Vzc0RhdGEkZG91YmxlX0EkZG91YmxlX0EkZG91YmxlX0EkaW50X0EoZCwgaSwgbWVhbnMsIG11bHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgb3ZlcmxvYWQnKTtcbiAgICB9XG4gICAgc3RhdGljIEtNZWFuc19jbG9zZXN0KGNlbnRlcnMsIHBvaW50LCBkb21haW5zKSB7XG4gICAgICAgIGxldCBtaW4gPSAtMTtcbiAgICAgICAgbGV0IG1pblNxciA9IGphdmFlbXVsLmludGVybmFsLkRvdWJsZUhlbHBlci5NQVhfVkFMVUU7XG4gICAgICAgIGZvciAobGV0IGNsdXN0ZXIgPSAwOyBjbHVzdGVyIDwgY2VudGVycy5sZW5ndGg7IGNsdXN0ZXIrKykge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNxciA9IEdlbk1vZGVsLktNZWFuc19kaXN0YW5jZSRkb3VibGVfQSRkb3VibGVfQSRqYXZhX2xhbmdfU3RyaW5nX0FfQShjZW50ZXJzW2NsdXN0ZXJdLCBwb2ludCwgZG9tYWlucyk7XG4gICAgICAgICAgICAgICAgaWYgKHNxciA8IG1pblNxcikge1xuICAgICAgICAgICAgICAgICAgICBtaW4gPSBjbHVzdGVyO1xuICAgICAgICAgICAgICAgICAgICBtaW5TcXIgPSBzcXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtaW47XG4gICAgfVxuICAgIHN0YXRpYyBLTWVhbnNfZGlzdGFuY2VzKGNlbnRlcnMsIHBvaW50LCBkb21haW5zLCBkaXN0YW5jZXMpIHtcbiAgICAgICAgbGV0IG1pbiA9IC0xO1xuICAgICAgICBsZXQgbWluU3FyID0gamF2YWVtdWwuaW50ZXJuYWwuRG91YmxlSGVscGVyLk1BWF9WQUxVRTtcbiAgICAgICAgZm9yIChsZXQgY2x1c3RlciA9IDA7IGNsdXN0ZXIgPCBjZW50ZXJzLmxlbmd0aDsgY2x1c3RlcisrKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlzdGFuY2VzW2NsdXN0ZXJdID0gR2VuTW9kZWwuS01lYW5zX2Rpc3RhbmNlJGRvdWJsZV9BJGRvdWJsZV9BJGphdmFfbGFuZ19TdHJpbmdfQV9BKGNlbnRlcnNbY2x1c3Rlcl0sIHBvaW50LCBkb21haW5zKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VzW2NsdXN0ZXJdIDwgbWluU3FyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNsdXN0ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1pblNxciA9IGRpc3RhbmNlc1tjbHVzdGVyXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgc3RhdGljIEtNZWFuc19zaW1wbGV4KGNlbnRlcnMsIHBvaW50LCBkb21haW5zKSB7XG4gICAgICAgIGNvbnN0IGRpc3QgPSAocyA9PiB7IGxldCBhID0gW107IHdoaWxlIChzLS0gPiAwKVxuICAgICAgICAgICAgYS5wdXNoKDApOyByZXR1cm4gYTsgfSkoY2VudGVycy5sZW5ndGgpO1xuICAgICAgICBsZXQgc3VtID0gMDtcbiAgICAgICAgbGV0IGludl9zdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBjbHVzdGVyID0gMDsgY2x1c3RlciA8IGNlbnRlcnMubGVuZ3RoOyBjbHVzdGVyKyspIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXN0W2NsdXN0ZXJdID0gR2VuTW9kZWwuS01lYW5zX2Rpc3RhbmNlJGRvdWJsZV9BJGRvdWJsZV9BJGphdmFfbGFuZ19TdHJpbmdfQV9BKGNlbnRlcnNbY2x1c3Rlcl0sIHBvaW50LCBkb21haW5zKTtcbiAgICAgICAgICAgICAgICBzdW0gKz0gZGlzdFtjbHVzdGVyXTtcbiAgICAgICAgICAgICAgICBpbnZfc3VtICs9IDEuMCAvIGRpc3RbY2x1c3Rlcl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmF0aW9zID0gKHMgPT4geyBsZXQgYSA9IFtdOyB3aGlsZSAocy0tID4gMClcbiAgICAgICAgICAgIGEucHVzaCgwKTsgcmV0dXJuIGE7IH0pKGNlbnRlcnMubGVuZ3RoKTtcbiAgICAgICAgaWYgKHN1bSA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3Qgcm5nID0gbmV3IGphdmEudXRpbC5SYW5kb20oKTtcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHJuZy5uZXh0SW50KGNlbnRlcnMubGVuZ3RoKTtcbiAgICAgICAgICAgIHJhdGlvc1tpZHhdID0gMTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBpZHggPSAtMTtcbiAgICAgICAgICAgIGZvciAobGV0IGNsdXN0ZXIgPSAwOyBjbHVzdGVyIDwgY2VudGVycy5sZW5ndGg7IGNsdXN0ZXIrKykge1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3RbY2x1c3Rlcl0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkeCA9IGNsdXN0ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaWR4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGNsdXN0ZXIgPSAwOyBjbHVzdGVyIDwgY2VudGVycy5sZW5ndGg7IGNsdXN0ZXIrKykge1xuICAgICAgICAgICAgICAgICAgICByYXRpb3NbY2x1c3Rlcl0gPSAxLjAgLyAoZGlzdFtjbHVzdGVyXSAqIGludl9zdW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByYXRpb3NbaWR4XSA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJhdGlvcztcbiAgICB9XG4gICAgc3RhdGljIEtNZWFuc19kaXN0YW5jZSRkb3VibGVfQSRmbG9hdF9BJGludF9BJGRvdWJsZV9BJGRvdWJsZV9BKGNlbnRlciwgcG9pbnQsIG1vZGVzLCBjb2xTdW0sIGNvbFN1bVNxKSB7XG4gICAgICAgIGxldCBzcXIgPSAwO1xuICAgICAgICBsZXQgcHRzID0gcG9pbnQubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjZW50ZXIubGVuZ3RoOyBjb2x1bW4rKykge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBwb2ludFtjb2x1bW5dO1xuICAgICAgICAgICAgICAgIGlmICggLyogaXNOYU4gKi9pc05hTihkKSkge1xuICAgICAgICAgICAgICAgICAgICBwdHMtLTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChtb2Rlc1tjb2x1bW5dICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZCAhPT0gY2VudGVyW2NvbHVtbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNxciArPSAxLjA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgIT09IG1vZGVzW2NvbHVtbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbFN1bVtjb2x1bW5dICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gZCAtIGNlbnRlcltjb2x1bW5dO1xuICAgICAgICAgICAgICAgICAgICBzcXIgKz0gZGVsdGEgKiBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgY29sU3VtW2NvbHVtbl0gKz0gZDtcbiAgICAgICAgICAgICAgICAgICAgY29sU3VtU3FbY29sdW1uXSArPSBNYXRoLmZyb3VuZChkICogZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIGlmICgwIDwgcHRzICYmIHB0cyA8IHBvaW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc2NhbGUgPSBwb2ludC5sZW5ndGggLyBwdHM7XG4gICAgICAgICAgICBzcXIgKj0gc2NhbGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxcjtcbiAgICB9XG4gICAgc3RhdGljIEtNZWFuc19kaXN0YW5jZShjZW50ZXIsIHBvaW50LCBtb2RlcywgY29sU3VtLCBjb2xTdW1TcSkge1xuICAgICAgICBpZiAoKChjZW50ZXIgIT0gbnVsbCAmJiBjZW50ZXIgaW5zdGFuY2VvZiBBcnJheSAmJiAoY2VudGVyLmxlbmd0aCA9PSAwIHx8IGNlbnRlclswXSA9PSBudWxsIHx8ICh0eXBlb2YgY2VudGVyWzBdID09PSAnbnVtYmVyJykpKSB8fCBjZW50ZXIgPT09IG51bGwpICYmICgocG9pbnQgIT0gbnVsbCAmJiBwb2ludCBpbnN0YW5jZW9mIEFycmF5ICYmIChwb2ludC5sZW5ndGggPT0gMCB8fCBwb2ludFswXSA9PSBudWxsIHx8ICh0eXBlb2YgcG9pbnRbMF0gPT09ICdudW1iZXInKSkpIHx8IHBvaW50ID09PSBudWxsKSAmJiAoKG1vZGVzICE9IG51bGwgJiYgbW9kZXMgaW5zdGFuY2VvZiBBcnJheSAmJiAobW9kZXMubGVuZ3RoID09IDAgfHwgbW9kZXNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIG1vZGVzWzBdID09PSAnbnVtYmVyJykpKSB8fCBtb2RlcyA9PT0gbnVsbCkgJiYgKChjb2xTdW0gIT0gbnVsbCAmJiBjb2xTdW0gaW5zdGFuY2VvZiBBcnJheSAmJiAoY29sU3VtLmxlbmd0aCA9PSAwIHx8IGNvbFN1bVswXSA9PSBudWxsIHx8ICh0eXBlb2YgY29sU3VtWzBdID09PSAnbnVtYmVyJykpKSB8fCBjb2xTdW0gPT09IG51bGwpICYmICgoY29sU3VtU3EgIT0gbnVsbCAmJiBjb2xTdW1TcSBpbnN0YW5jZW9mIEFycmF5ICYmIChjb2xTdW1TcS5sZW5ndGggPT0gMCB8fCBjb2xTdW1TcVswXSA9PSBudWxsIHx8ICh0eXBlb2YgY29sU3VtU3FbMF0gPT09ICdudW1iZXInKSkpIHx8IGNvbFN1bVNxID09PSBudWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIEdlbk1vZGVsLktNZWFuc19kaXN0YW5jZSRkb3VibGVfQSRmbG9hdF9BJGludF9BJGRvdWJsZV9BJGRvdWJsZV9BKGNlbnRlciwgcG9pbnQsIG1vZGVzLCBjb2xTdW0sIGNvbFN1bVNxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoKGNlbnRlciAhPSBudWxsICYmIGNlbnRlciBpbnN0YW5jZW9mIEFycmF5ICYmIChjZW50ZXIubGVuZ3RoID09IDAgfHwgY2VudGVyWzBdID09IG51bGwgfHwgKHR5cGVvZiBjZW50ZXJbMF0gPT09ICdudW1iZXInKSkpIHx8IGNlbnRlciA9PT0gbnVsbCkgJiYgKChwb2ludCAhPSBudWxsICYmIHBvaW50IGluc3RhbmNlb2YgQXJyYXkgJiYgKHBvaW50Lmxlbmd0aCA9PSAwIHx8IHBvaW50WzBdID09IG51bGwgfHwgKHR5cGVvZiBwb2ludFswXSA9PT0gJ251bWJlcicpKSkgfHwgcG9pbnQgPT09IG51bGwpICYmICgobW9kZXMgIT0gbnVsbCAmJiBtb2RlcyBpbnN0YW5jZW9mIEFycmF5ICYmIChtb2Rlcy5sZW5ndGggPT0gMCB8fCBtb2Rlc1swXSA9PSBudWxsIHx8IG1vZGVzWzBdIGluc3RhbmNlb2YgQXJyYXkpKSB8fCBtb2RlcyA9PT0gbnVsbCkgJiYgY29sU3VtID09PSB1bmRlZmluZWQgJiYgY29sU3VtU3EgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIEdlbk1vZGVsLktNZWFuc19kaXN0YW5jZSRkb3VibGVfQSRkb3VibGVfQSRqYXZhX2xhbmdfU3RyaW5nX0FfQShjZW50ZXIsIHBvaW50LCBtb2Rlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIG92ZXJsb2FkJyk7XG4gICAgfVxuICAgIHN0YXRpYyBLTWVhbnNfZGlzdGFuY2UkZG91YmxlX0EkZG91YmxlX0EkamF2YV9sYW5nX1N0cmluZ19BX0EoY2VudGVyLCBwb2ludCwgZG9tYWlucykge1xuICAgICAgICBsZXQgc3FyID0gMDtcbiAgICAgICAgbGV0IHB0cyA9IHBvaW50Lmxlbmd0aDtcbiAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgY2VudGVyLmxlbmd0aDsgY29sdW1uKyspIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gcG9pbnRbY29sdW1uXTtcbiAgICAgICAgICAgICAgICBpZiAoIC8qIGlzTmFOICovaXNOYU4oZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcHRzLS07XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZG9tYWluc1tjb2x1bW5dICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgIT09IGNlbnRlcltjb2x1bW5dKVxuICAgICAgICAgICAgICAgICAgICAgICAgc3FyICs9IDEuMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gZCAtIGNlbnRlcltjb2x1bW5dO1xuICAgICAgICAgICAgICAgICAgICBzcXIgKz0gZGVsdGEgKiBkZWx0YTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDAgPCBwdHMgJiYgcHRzIDwgcG9pbnQubGVuZ3RoKVxuICAgICAgICAgICAgc3FyICo9IHBvaW50Lmxlbmd0aCAvIHB0cztcbiAgICAgICAgcmV0dXJuIHNxcjtcbiAgICB9XG4gICAgc3RhdGljIGxvZ19yZXNjYWxlKHByZWRzKSB7XG4gICAgICAgIGxldCBtYXh2YWwgPSBqYXZhZW11bC5pbnRlcm5hbC5Eb3VibGVIZWxwZXIuTkVHQVRJVkVfSU5GSU5JVFk7XG4gICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgcHJlZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIG1heHZhbCA9IE1hdGgubWF4KG1heHZhbCwgcHJlZHNba10pO1xuICAgICAgICB9XG4gICAgICAgIGxldCBkc3VtID0gMDtcbiAgICAgICAgZm9yIChsZXQgayA9IDE7IGsgPCBwcmVkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgZHN1bSArPSAocHJlZHNba10gPSBNYXRoLmV4cChwcmVkc1trXSAtIG1heHZhbCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkc3VtO1xuICAgIH1cbiAgICBzdGF0aWMgR0JNX3Jlc2NhbGUocHJlZHMpIHtcbiAgICAgICAgY29uc3Qgc3VtID0gR2VuTW9kZWwubG9nX3Jlc2NhbGUocHJlZHMpO1xuICAgICAgICBmb3IgKGxldCBrID0gMTsgayA8IHByZWRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBwcmVkc1trXSAvPSBzdW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIEdMTV9pZGVudGl0eUludih4KSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBzdGF0aWMgR0xNX2xvZ2l0SW52KHgpIHtcbiAgICAgICAgcmV0dXJuIDEuMCAvIChNYXRoLmV4cCgteCkgKyAxLjApO1xuICAgIH1cbiAgICBzdGF0aWMgR0xNX2xvZ0ludih4KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmV4cCh4KTtcbiAgICB9XG4gICAgc3RhdGljIEdMTV9pbnZlcnNlSW52KHgpIHtcbiAgICAgICAgY29uc3QgeHggPSAoeCA8IDApID8gTWF0aC5taW4oLTEuMEUtNSwgeCkgOiBNYXRoLm1heCgxLjBFLTUsIHgpO1xuICAgICAgICByZXR1cm4gMS4wIC8geHg7XG4gICAgfVxuICAgIHN0YXRpYyBHTE1fb2xvZ2l0SW52KHgpIHtcbiAgICAgICAgcmV0dXJuIEdlbk1vZGVsLkdMTV9sb2dpdEludih4KTtcbiAgICB9XG4gICAgc3RhdGljIEdMTV90d2VlZGllSW52KHgsIHR3ZWVkaWVfbGlua19wb3dlcikge1xuICAgICAgICByZXR1cm4gdHdlZWRpZV9saW5rX3Bvd2VyID09PSAwID8gTWF0aC5tYXgoMi4wRS0xNiwgTWF0aC5leHAoeCkpIDogTWF0aC5wb3coeCwgMS4wIC8gdHdlZWRpZV9saW5rX3Bvd2VyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogPz8/XG4gICAgICogQHJldHVybiB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEhlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRJbnB1dCRkb3VibGVfQSRmbG9hdF9BJGludCRpbnQkaW50X0EkZG91YmxlX0EkZG91YmxlX0EkYm9vbGVhbiRib29sZWFuKGZyb20sIHRvLCBfbnVtcywgX2NhdHMsIF9jYXRPZmZzZXRzLCBfbm9ybU11bCwgX25vcm1TdWIsIHVzZUFsbEZhY3RvckxldmVscywgcmVwbGFjZU1pc3NpbmdXaXRoWmVybykge1xuICAgICAgICBjb25zdCBudW1zID0gKHMgPT4geyBsZXQgYSA9IFtdOyB3aGlsZSAocy0tID4gMClcbiAgICAgICAgICAgIGEucHVzaCgwKTsgcmV0dXJuIGE7IH0pKF9udW1zKTtcbiAgICAgICAgY29uc3QgY2F0cyA9IChzID0+IHsgbGV0IGEgPSBbXTsgd2hpbGUgKHMtLSA+IDApXG4gICAgICAgICAgICBhLnB1c2goMCk7IHJldHVybiBhOyB9KShfY2F0cyk7XG4gICAgICAgIEdlbk1vZGVsLnNldENhdHMkZG91YmxlX0EkZG91YmxlX0EkaW50X0EkaW50JGludF9BJGRvdWJsZV9BJGRvdWJsZV9BJGJvb2xlYW4oZnJvbSwgbnVtcywgY2F0cywgX2NhdHMsIF9jYXRPZmZzZXRzLCBfbm9ybU11bCwgX25vcm1TdWIsIHVzZUFsbEZhY3RvckxldmVscyk7XG4gICAgICAgIGphdmEudXRpbC5BcnJheXMuZmlsbCh0bywgMC4wKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfY2F0czsgKytpKSB7XG4gICAgICAgICAgICBpZiAoY2F0c1tpXSA+PSAwKVxuICAgICAgICAgICAgICAgIHRvW2NhdHNbaV1dID0gMS4wO1xuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX251bXM7ICsraSkge1xuICAgICAgICAgICAgdG9bX2NhdE9mZnNldHNbX2NhdHNdICsgaV0gPSAvKiBpc05hTiAqLyBpc05hTihudW1zW2ldKSA/IChyZXBsYWNlTWlzc2luZ1dpdGhaZXJvID8gMCA6IGphdmFlbXVsLmludGVybmFsLkZsb2F0SGVscGVyLk5hTikgOiBNYXRoLmZyb3VuZChudW1zW2ldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgc2V0SW5wdXQkZG91YmxlX0EkZG91YmxlX0EkZG91YmxlX0EkaW50X0EkaW50JGludCRpbnRfQSRkb3VibGVfQSRkb3VibGVfQSRib29sZWFuJGJvb2xlYW4oZnJvbSwgdG8sIG51bXMsIGNhdHMsIF9udW1zLCBfY2F0cywgX2NhdE9mZnNldHMsIF9ub3JtTXVsLCBfbm9ybVN1YiwgdXNlQWxsRmFjdG9yTGV2ZWxzLCByZXBsYWNlTWlzc2luZ1dpdGhaZXJvKSB7XG4gICAgICAgIEdlbk1vZGVsLnNldENhdHMkZG91YmxlX0EkZG91YmxlX0EkaW50X0EkaW50JGludF9BJGRvdWJsZV9BJGRvdWJsZV9BJGJvb2xlYW4oZnJvbSwgbnVtcywgY2F0cywgX2NhdHMsIF9jYXRPZmZzZXRzLCBfbm9ybU11bCwgX25vcm1TdWIsIHVzZUFsbEZhY3RvckxldmVscyk7XG4gICAgICAgIGphdmEudXRpbC5BcnJheXMuZmlsbCh0bywgMC4wKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfY2F0czsgKytpKSB7XG4gICAgICAgICAgICBpZiAoY2F0c1tpXSA+PSAwKVxuICAgICAgICAgICAgICAgIHRvW2NhdHNbaV1dID0gMS4wO1xuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX251bXM7ICsraSkge1xuICAgICAgICAgICAgdG9bX2NhdE9mZnNldHNbX2NhdHNdICsgaV0gPSAvKiBpc05hTiAqLyBpc05hTihudW1zW2ldKSA/IChyZXBsYWNlTWlzc2luZ1dpdGhaZXJvID8gMCA6IE5hTikgOiBudW1zW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBzZXRJbnB1dChmcm9tLCB0bywgbnVtcywgY2F0cywgX251bXMsIF9jYXRzLCBfY2F0T2Zmc2V0cywgX25vcm1NdWwsIF9ub3JtU3ViLCB1c2VBbGxGYWN0b3JMZXZlbHMsIHJlcGxhY2VNaXNzaW5nV2l0aFplcm8pIHtcbiAgICAgICAgaWYgKCgoZnJvbSAhPSBudWxsICYmIGZyb20gaW5zdGFuY2VvZiBBcnJheSAmJiAoZnJvbS5sZW5ndGggPT0gMCB8fCBmcm9tWzBdID09IG51bGwgfHwgKHR5cGVvZiBmcm9tWzBdID09PSAnbnVtYmVyJykpKSB8fCBmcm9tID09PSBudWxsKSAmJiAoKHRvICE9IG51bGwgJiYgdG8gaW5zdGFuY2VvZiBBcnJheSAmJiAodG8ubGVuZ3RoID09IDAgfHwgdG9bMF0gPT0gbnVsbCB8fCAodHlwZW9mIHRvWzBdID09PSAnbnVtYmVyJykpKSB8fCB0byA9PT0gbnVsbCkgJiYgKChudW1zICE9IG51bGwgJiYgbnVtcyBpbnN0YW5jZW9mIEFycmF5ICYmIChudW1zLmxlbmd0aCA9PSAwIHx8IG51bXNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIG51bXNbMF0gPT09ICdudW1iZXInKSkpIHx8IG51bXMgPT09IG51bGwpICYmICgoY2F0cyAhPSBudWxsICYmIGNhdHMgaW5zdGFuY2VvZiBBcnJheSAmJiAoY2F0cy5sZW5ndGggPT0gMCB8fCBjYXRzWzBdID09IG51bGwgfHwgKHR5cGVvZiBjYXRzWzBdID09PSAnbnVtYmVyJykpKSB8fCBjYXRzID09PSBudWxsKSAmJiAoKHR5cGVvZiBfbnVtcyA9PT0gJ251bWJlcicpIHx8IF9udW1zID09PSBudWxsKSAmJiAoKHR5cGVvZiBfY2F0cyA9PT0gJ251bWJlcicpIHx8IF9jYXRzID09PSBudWxsKSAmJiAoKF9jYXRPZmZzZXRzICE9IG51bGwgJiYgX2NhdE9mZnNldHMgaW5zdGFuY2VvZiBBcnJheSAmJiAoX2NhdE9mZnNldHMubGVuZ3RoID09IDAgfHwgX2NhdE9mZnNldHNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIF9jYXRPZmZzZXRzWzBdID09PSAnbnVtYmVyJykpKSB8fCBfY2F0T2Zmc2V0cyA9PT0gbnVsbCkgJiYgKChfbm9ybU11bCAhPSBudWxsICYmIF9ub3JtTXVsIGluc3RhbmNlb2YgQXJyYXkgJiYgKF9ub3JtTXVsLmxlbmd0aCA9PSAwIHx8IF9ub3JtTXVsWzBdID09IG51bGwgfHwgKHR5cGVvZiBfbm9ybU11bFswXSA9PT0gJ251bWJlcicpKSkgfHwgX25vcm1NdWwgPT09IG51bGwpICYmICgoX25vcm1TdWIgIT0gbnVsbCAmJiBfbm9ybVN1YiBpbnN0YW5jZW9mIEFycmF5ICYmIChfbm9ybVN1Yi5sZW5ndGggPT0gMCB8fCBfbm9ybVN1YlswXSA9PSBudWxsIHx8ICh0eXBlb2YgX25vcm1TdWJbMF0gPT09ICdudW1iZXInKSkpIHx8IF9ub3JtU3ViID09PSBudWxsKSAmJiAoKHR5cGVvZiB1c2VBbGxGYWN0b3JMZXZlbHMgPT09ICdib29sZWFuJykgfHwgdXNlQWxsRmFjdG9yTGV2ZWxzID09PSBudWxsKSAmJiAoKHR5cGVvZiByZXBsYWNlTWlzc2luZ1dpdGhaZXJvID09PSAnYm9vbGVhbicpIHx8IHJlcGxhY2VNaXNzaW5nV2l0aFplcm8gPT09IG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gR2VuTW9kZWwuc2V0SW5wdXQkZG91YmxlX0EkZG91YmxlX0EkZG91YmxlX0EkaW50X0EkaW50JGludCRpbnRfQSRkb3VibGVfQSRkb3VibGVfQSRib29sZWFuJGJvb2xlYW4oZnJvbSwgdG8sIG51bXMsIGNhdHMsIF9udW1zLCBfY2F0cywgX2NhdE9mZnNldHMsIF9ub3JtTXVsLCBfbm9ybVN1YiwgdXNlQWxsRmFjdG9yTGV2ZWxzLCByZXBsYWNlTWlzc2luZ1dpdGhaZXJvKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoKGZyb20gIT0gbnVsbCAmJiBmcm9tIGluc3RhbmNlb2YgQXJyYXkgJiYgKGZyb20ubGVuZ3RoID09IDAgfHwgZnJvbVswXSA9PSBudWxsIHx8ICh0eXBlb2YgZnJvbVswXSA9PT0gJ251bWJlcicpKSkgfHwgZnJvbSA9PT0gbnVsbCkgJiYgKCh0byAhPSBudWxsICYmIHRvIGluc3RhbmNlb2YgQXJyYXkgJiYgKHRvLmxlbmd0aCA9PSAwIHx8IHRvWzBdID09IG51bGwgfHwgKHR5cGVvZiB0b1swXSA9PT0gJ251bWJlcicpKSkgfHwgdG8gPT09IG51bGwpICYmICgodHlwZW9mIG51bXMgPT09ICdudW1iZXInKSB8fCBudW1zID09PSBudWxsKSAmJiAoKHR5cGVvZiBjYXRzID09PSAnbnVtYmVyJykgfHwgY2F0cyA9PT0gbnVsbCkgJiYgKChfbnVtcyAhPSBudWxsICYmIF9udW1zIGluc3RhbmNlb2YgQXJyYXkgJiYgKF9udW1zLmxlbmd0aCA9PSAwIHx8IF9udW1zWzBdID09IG51bGwgfHwgKHR5cGVvZiBfbnVtc1swXSA9PT0gJ251bWJlcicpKSkgfHwgX251bXMgPT09IG51bGwpICYmICgoX2NhdHMgIT0gbnVsbCAmJiBfY2F0cyBpbnN0YW5jZW9mIEFycmF5ICYmIChfY2F0cy5sZW5ndGggPT0gMCB8fCBfY2F0c1swXSA9PSBudWxsIHx8ICh0eXBlb2YgX2NhdHNbMF0gPT09ICdudW1iZXInKSkpIHx8IF9jYXRzID09PSBudWxsKSAmJiAoKF9jYXRPZmZzZXRzICE9IG51bGwgJiYgX2NhdE9mZnNldHMgaW5zdGFuY2VvZiBBcnJheSAmJiAoX2NhdE9mZnNldHMubGVuZ3RoID09IDAgfHwgX2NhdE9mZnNldHNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIF9jYXRPZmZzZXRzWzBdID09PSAnbnVtYmVyJykpKSB8fCBfY2F0T2Zmc2V0cyA9PT0gbnVsbCkgJiYgKCh0eXBlb2YgX25vcm1NdWwgPT09ICdib29sZWFuJykgfHwgX25vcm1NdWwgPT09IG51bGwpICYmICgodHlwZW9mIF9ub3JtU3ViID09PSAnYm9vbGVhbicpIHx8IF9ub3JtU3ViID09PSBudWxsKSAmJiB1c2VBbGxGYWN0b3JMZXZlbHMgPT09IHVuZGVmaW5lZCAmJiByZXBsYWNlTWlzc2luZ1dpdGhaZXJvID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBHZW5Nb2RlbC5zZXRJbnB1dCRkb3VibGVfQSRmbG9hdF9BJGludCRpbnQkaW50X0EkZG91YmxlX0EkZG91YmxlX0EkYm9vbGVhbiRib29sZWFuKGZyb20sIHRvLCBudW1zLCBjYXRzLCBfbnVtcywgX2NhdHMsIF9jYXRPZmZzZXRzLCBfbm9ybU11bCwgX25vcm1TdWIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBvdmVybG9hZCcpO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0Q2F0cyRkb3VibGVfQSRkb3VibGVfQSRpbnRfQSRpbnQkaW50X0EkZG91YmxlX0EkZG91YmxlX0EkYm9vbGVhbihmcm9tLCBudW1zLCBjYXRzLCBfY2F0cywgX2NhdE9mZnNldHMsIF9ub3JtTXVsLCBfbm9ybVN1YiwgdXNlQWxsRmFjdG9yTGV2ZWxzKSB7XG4gICAgICAgIEdlbk1vZGVsLnNldENhdHMkZG91YmxlX0EkaW50X0EkaW50JGludF9BJGJvb2xlYW4oZnJvbSwgY2F0cywgX2NhdHMsIF9jYXRPZmZzZXRzLCB1c2VBbGxGYWN0b3JMZXZlbHMpO1xuICAgICAgICBmb3IgKGxldCBpID0gX2NhdHM7IGkgPCBmcm9tLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGQgPSBmcm9tW2ldO1xuICAgICAgICAgICAgICAgIGlmICgoX25vcm1NdWwgIT0gbnVsbCkgJiYgKF9ub3JtTXVsLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIGQgPSAoZCAtIF9ub3JtU3ViW2kgLSBfY2F0c10pICogX25vcm1NdWxbaSAtIF9jYXRzXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbnVtc1tpIC0gX2NhdHNdID0gZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgc2V0Q2F0cyhmcm9tLCBudW1zLCBjYXRzLCBfY2F0cywgX2NhdE9mZnNldHMsIF9ub3JtTXVsLCBfbm9ybVN1YiwgdXNlQWxsRmFjdG9yTGV2ZWxzKSB7XG4gICAgICAgIGlmICgoKGZyb20gIT0gbnVsbCAmJiBmcm9tIGluc3RhbmNlb2YgQXJyYXkgJiYgKGZyb20ubGVuZ3RoID09IDAgfHwgZnJvbVswXSA9PSBudWxsIHx8ICh0eXBlb2YgZnJvbVswXSA9PT0gJ251bWJlcicpKSkgfHwgZnJvbSA9PT0gbnVsbCkgJiYgKChudW1zICE9IG51bGwgJiYgbnVtcyBpbnN0YW5jZW9mIEFycmF5ICYmIChudW1zLmxlbmd0aCA9PSAwIHx8IG51bXNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIG51bXNbMF0gPT09ICdudW1iZXInKSkpIHx8IG51bXMgPT09IG51bGwpICYmICgoY2F0cyAhPSBudWxsICYmIGNhdHMgaW5zdGFuY2VvZiBBcnJheSAmJiAoY2F0cy5sZW5ndGggPT0gMCB8fCBjYXRzWzBdID09IG51bGwgfHwgKHR5cGVvZiBjYXRzWzBdID09PSAnbnVtYmVyJykpKSB8fCBjYXRzID09PSBudWxsKSAmJiAoKHR5cGVvZiBfY2F0cyA9PT0gJ251bWJlcicpIHx8IF9jYXRzID09PSBudWxsKSAmJiAoKF9jYXRPZmZzZXRzICE9IG51bGwgJiYgX2NhdE9mZnNldHMgaW5zdGFuY2VvZiBBcnJheSAmJiAoX2NhdE9mZnNldHMubGVuZ3RoID09IDAgfHwgX2NhdE9mZnNldHNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIF9jYXRPZmZzZXRzWzBdID09PSAnbnVtYmVyJykpKSB8fCBfY2F0T2Zmc2V0cyA9PT0gbnVsbCkgJiYgKChfbm9ybU11bCAhPSBudWxsICYmIF9ub3JtTXVsIGluc3RhbmNlb2YgQXJyYXkgJiYgKF9ub3JtTXVsLmxlbmd0aCA9PSAwIHx8IF9ub3JtTXVsWzBdID09IG51bGwgfHwgKHR5cGVvZiBfbm9ybU11bFswXSA9PT0gJ251bWJlcicpKSkgfHwgX25vcm1NdWwgPT09IG51bGwpICYmICgoX25vcm1TdWIgIT0gbnVsbCAmJiBfbm9ybVN1YiBpbnN0YW5jZW9mIEFycmF5ICYmIChfbm9ybVN1Yi5sZW5ndGggPT0gMCB8fCBfbm9ybVN1YlswXSA9PSBudWxsIHx8ICh0eXBlb2YgX25vcm1TdWJbMF0gPT09ICdudW1iZXInKSkpIHx8IF9ub3JtU3ViID09PSBudWxsKSAmJiAoKHR5cGVvZiB1c2VBbGxGYWN0b3JMZXZlbHMgPT09ICdib29sZWFuJykgfHwgdXNlQWxsRmFjdG9yTGV2ZWxzID09PSBudWxsKSkge1xuICAgICAgICAgICAgcmV0dXJuIEdlbk1vZGVsLnNldENhdHMkZG91YmxlX0EkZG91YmxlX0EkaW50X0EkaW50JGludF9BJGRvdWJsZV9BJGRvdWJsZV9BJGJvb2xlYW4oZnJvbSwgbnVtcywgY2F0cywgX2NhdHMsIF9jYXRPZmZzZXRzLCBfbm9ybU11bCwgX25vcm1TdWIsIHVzZUFsbEZhY3RvckxldmVscyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKChmcm9tICE9IG51bGwgJiYgZnJvbSBpbnN0YW5jZW9mIEFycmF5ICYmIChmcm9tLmxlbmd0aCA9PSAwIHx8IGZyb21bMF0gPT0gbnVsbCB8fCAodHlwZW9mIGZyb21bMF0gPT09ICdudW1iZXInKSkpIHx8IGZyb20gPT09IG51bGwpICYmICgobnVtcyAhPSBudWxsICYmIG51bXMgaW5zdGFuY2VvZiBBcnJheSAmJiAobnVtcy5sZW5ndGggPT0gMCB8fCBudW1zWzBdID09IG51bGwgfHwgKHR5cGVvZiBudW1zWzBdID09PSAnbnVtYmVyJykpKSB8fCBudW1zID09PSBudWxsKSAmJiAoKHR5cGVvZiBjYXRzID09PSAnbnVtYmVyJykgfHwgY2F0cyA9PT0gbnVsbCkgJiYgKChfY2F0cyAhPSBudWxsICYmIF9jYXRzIGluc3RhbmNlb2YgQXJyYXkgJiYgKF9jYXRzLmxlbmd0aCA9PSAwIHx8IF9jYXRzWzBdID09IG51bGwgfHwgKHR5cGVvZiBfY2F0c1swXSA9PT0gJ251bWJlcicpKSkgfHwgX2NhdHMgPT09IG51bGwpICYmICgodHlwZW9mIF9jYXRPZmZzZXRzID09PSAnYm9vbGVhbicpIHx8IF9jYXRPZmZzZXRzID09PSBudWxsKSAmJiBfbm9ybU11bCA9PT0gdW5kZWZpbmVkICYmIF9ub3JtU3ViID09PSB1bmRlZmluZWQgJiYgdXNlQWxsRmFjdG9yTGV2ZWxzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBHZW5Nb2RlbC5zZXRDYXRzJGRvdWJsZV9BJGludF9BJGludCRpbnRfQSRib29sZWFuKGZyb20sIG51bXMsIGNhdHMsIF9jYXRzLCBfY2F0T2Zmc2V0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIG92ZXJsb2FkJyk7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRDYXRzJGRvdWJsZV9BJGludF9BJGludCRpbnRfQSRib29sZWFuKGZyb20sIHRvLCBjYXRzLCBjYXRPZmZzZXRzLCB1c2VBbGxGYWN0b3JMZXZlbHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRzOyArK2kpIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoIC8qIGlzTmFOICovaXNOYU4oZnJvbVtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9baV0gPSAoY2F0T2Zmc2V0c1tpICsgMV0gLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGMgPSAoZnJvbVtpXSB8IDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXNlQWxsRmFjdG9yTGV2ZWxzKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9baV0gPSBjICsgY2F0T2Zmc2V0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYyAhPT0gMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b1tpXSA9IGMgLSAxICsgY2F0T2Zmc2V0c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b1tpXSA9IC0xO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b1tpXSA+PSBjYXRPZmZzZXRzW2kgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvW2ldID0gKGNhdE9mZnNldHNbaSArIDFdIC0gMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBjb252ZXJ0RG91YmxlMkZsb2F0KGlucHV0KSB7XG4gICAgICAgIGNvbnN0IGFycmF5U2l6ZSA9IGlucHV0Lmxlbmd0aDtcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gKHMgPT4geyBsZXQgYSA9IFtdOyB3aGlsZSAocy0tID4gMClcbiAgICAgICAgICAgIGEucHVzaCgwKTsgcmV0dXJuIGE7IH0pKGFycmF5U2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheVNpemU7IGluZGV4KyspIHtcbiAgICAgICAgICAgIG91dHB1dFtpbmRleF0gPSBNYXRoLmZyb3VuZChpbnB1dFtpbmRleF0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxufVxuR2VuTW9kZWxbXCJfX2NsYXNzXCJdID0gXCJHZW5Nb2RlbFwiO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDIwXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxOV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMThfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE3XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxNl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTVfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDE0XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxM18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMTJfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzlfY2xhc3NfMC5HUlBTUExJVDExXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV85X2NsYXNzXzAuR1JQU1BMSVQxMF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUOV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUOF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUN18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUNl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUNV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUNF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUM18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOV9jbGFzc18wLkdSUFNQTElUMF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMjBfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDE5XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxOF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTdfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDE2XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxNV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTRfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDEzXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxMl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfOF9jbGFzc18wLkdSUFNQTElUMTFfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzhfY2xhc3NfMC5HUlBTUExJVDEwXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ5XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ4XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ3XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ2XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ1XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQ0XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQzXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQyXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQxXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV84X2NsYXNzXzAuR1JQU1BMSVQwXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxOF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTdfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDE2XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxNV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTRfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDEzXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxMl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfN19jbGFzc18wLkdSUFNQTElUMTFfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzdfY2xhc3NfMC5HUlBTUExJVDEwXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ5XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ4XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ3XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ2XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ1XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQ0XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQzXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQyXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQxXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV83X2NsYXNzXzAuR1JQU1BMSVQwXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQyMV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMjBfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE5XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxOF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTdfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDE2XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxNV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTRfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDEzXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxMl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNl9jbGFzc18wLkdSUFNQTElUMTFfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzZfY2xhc3NfMC5HUlBTUExJVDEwXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ5XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ4XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ3XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ2XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ1XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQ0XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQzXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQyXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQxXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV82X2NsYXNzXzAuR1JQU1BMSVQwXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxOV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMThfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE3XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxNl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTVfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDE0XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxM18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMTJfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzVfY2xhc3NfMC5HUlBTUExJVDExXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV81X2NsYXNzXzAuR1JQU1BMSVQxMF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUOV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUOF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUN18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUNl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUNV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUNF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUM18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNV9jbGFzc18wLkdSUFNQTElUMF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMjBfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE5XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxOF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTdfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDE2XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxNV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTRfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDEzXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxMl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfNF9jbGFzc18wLkdSUFNQTElUMTFfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzRfY2xhc3NfMC5HUlBTUExJVDEwXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ5XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ4XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ3XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ2XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ1XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQ0XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQzXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQyXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQxXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV80X2NsYXNzXzAuR1JQU1BMSVQwXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxOV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMThfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDE3XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxNl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTVfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDE0XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxM18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMTJfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzNfY2xhc3NfMC5HUlBTUExJVDExXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8zX2NsYXNzXzAuR1JQU1BMSVQxMF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUOV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUOF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUN18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUNl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUNV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUNF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUM18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfM19jbGFzc18wLkdSUFNQTElUMF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTlfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE4XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxN18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTZfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDE1XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxNF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTNfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDEyXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8yX2NsYXNzXzAuR1JQU1BMSVQxMV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfMl9jbGFzc18wLkdSUFNQTElUMTBfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDlfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDhfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDdfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDZfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDVfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDRfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDNfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDJfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDFfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzJfY2xhc3NfMC5HUlBTUExJVDBfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDE1XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQxNF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMTNfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDEyXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8xX2NsYXNzXzAuR1JQU1BMSVQxMV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfMV9jbGFzc18wLkdSUFNQTElUMTBfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDlfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDhfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDdfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDZfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDVfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDRfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDNfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDJfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDFfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzFfY2xhc3NfMC5HUlBTUExJVDBfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE4XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxN18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTZfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDE1XyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxNF8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTNfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDEyXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfVHJlZV8wX2NsYXNzXzAuR1JQU1BMSVQxMV8kTEkkKCk7XG5nYm1fcG9qb190ZXN0X1RyZWVfMF9jbGFzc18wLkdSUFNQTElUMTBfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDlfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDhfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDdfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDZfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDVfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDRfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDNfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDJfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDFfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9UcmVlXzBfY2xhc3NfMC5HUlBTUExJVDBfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzExLlZBTFVFU18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X0NvbEluZm9fMTEuX19zdGF0aWNfaW5pdGlhbGl6ZSgpO1xuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzEwLlZBTFVFU18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X0NvbEluZm9fMTAuX19zdGF0aWNfaW5pdGlhbGl6ZSgpO1xuZ2JtX3Bvam9fdGVzdF9Db2xJbmZvXzkuVkFMVUVTXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3RfQ29sSW5mb185Ll9fc3RhdGljX2luaXRpYWxpemUoKTtcbmdibV9wb2pvX3Rlc3RfQ29sSW5mb182LlZBTFVFU18kTEkkKCk7XG5nYm1fcG9qb190ZXN0X0NvbEluZm9fNi5fX3N0YXRpY19pbml0aWFsaXplKCk7XG5OYW1lc0hvbGRlcl9nYm1fcG9qb190ZXN0LlZBTFVFU18kTEkkKCk7XG5OYW1lc0hvbGRlcl9nYm1fcG9qb190ZXN0Ll9fc3RhdGljX2luaXRpYWxpemUoKTtcbmdibV9wb2pvX3Rlc3QuTU9ERUxfQ0xBU1NfRElTVFJJQl8kTEkkKCk7XG5nYm1fcG9qb190ZXN0LlBSSU9SX0NMQVNTX0RJU1RSSUJfJExJJCgpO1xuZ2JtX3Bvam9fdGVzdC5ET01BSU5TXyRMSSQoKTtcbmdibV9wb2pvX3Rlc3QuTkFNRVNfJExJJCgpO1xuZXhwb3J0cy5nYm1fcG9qb190ZXN0PWdibV9wb2pvX3Rlc3Q7XG4iLCJjb25zdCB7Z2JtX3Bvam9fdGVzdH09cmVxdWlyZShcIi4vZ2JtX3Bvam9fdGVzdC5qc1wiKTsgbGV0IG09bmV3IGdibV9wb2pvX3Rlc3QoKTsgbGV0IG49Z2JtX3Bvam9fdGVzdC5OQU1FU18kTEkkKCk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImgyb0NhbGNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGgyb19jYWxjdWxhdGUpO1xuZnVuY3Rpb24gaDJvX2NhbGN1bGF0ZSgpIHtcblx0cHJlZCA9IG5ldyBBcnJheSgzKS5maWxsKDApO1xuXHR2YXIgeWVhciA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ5ZWFyXCIpLnZhbHVlKTtcblx0dmFyIG1vbnRoID0gcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vbnRoXCIpLnZhbHVlKTtcblx0dmFyIGRheW9mbW9udGggPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5b2Ztb250aFwiKS52YWx1ZSk7XG5cdHZhciBkYXlvZndlZWsgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF5b2Z3ZWVrXCIpLnZhbHVlKTtcblx0dmFyIGNyc2RlcHRpbWUgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JzZGVwdGltZVwiKS52YWx1ZSk7XG5cdHZhciBjcnNhcnJ0aW1lID0gcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNyc2FycnRpbWVcIikudmFsdWUpO1xuXHR2YXIgdW5pcXVlY2FycmllciA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1bmlxdWVjYXJyaWVyXCIpLnZhbHVlKTtcblx0dmFyIGZsaWdodG51bSA9IHBhcnNlRmxvYXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbGlnaHRudW1cIikudmFsdWUpO1xuXHR2YXIgY3JzZWxhcHNlZHRpbWUgPSBwYXJzZUZsb2F0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY3JzZWxhcHNlZHRpbWVcIikudmFsdWUpO1xuXHR2YXIgb3JpZ2luID0gcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9yaWdpblwiKS52YWx1ZSk7XG5cdHZhciBkZXN0ID0gcGFyc2VGbG9hdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc3RcIikudmFsdWUpO1xuXHRpbnB1dCA9IFt5ZWFyLG1vbnRoLGRheW9mbW9udGgsZGF5b2Z3ZWVrLGNyc2RlcHRpbWUsY3JzYXJydGltZSx1bmlxdWVjYXJyaWVyLGZsaWdodG51bSxjcnNlbGFwc2VkdGltZSxvcmlnaW4sZGVzdF07XG5cdHAgPSBtLnNjb3JlMChpbnB1dCwgcHJlZCk7XG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaDJvUmVzdWx0XCIpLmlubmVySFRNTCA9IHA7XG59XG4iXX0=
