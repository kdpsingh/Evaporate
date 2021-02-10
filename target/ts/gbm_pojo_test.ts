/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
class GenMod {
    public static bitSetContains(bits: number[], nbits: number, bitoff: number, dnum: number): boolean {
        let idx: number = (<number>dnum|0);
        idx -= bitoff;
        return (bits[idx >> 3] & ((<number>1|0) << (idx & 7))) !== 0;
    }

    public static bitSetIsInRange(nbits: number, bitoff: number, dnum: number): boolean {
        let idx: number = (<number>dnum|0);
        idx -= bitoff;
        return (idx >= 0 && idx < nbits);
    }

    public static getPrediction(preds: number[], priorClassDist: number[], data: number[], threshold: number): number {
        if (preds.length === 3){
            return GenMod.getPredictionBinomial(preds, threshold);
        } else {
            return GenMod.getPredictionMultinomial(preds, priorClassDist, data);
        }
    }

    public static getPredictionBinomial(preds: number[], threshold: number): number {
        return (preds[2] >= threshold) ? 1 : 0;
    }

    public static getPredictionMultinomial(preds: number[], priorClassDist: number[], data: number[]): number {
        const ties: java.util.List<number> = <any>(new java.util.ArrayList<any>());
        ties.add(0);
        let best: number = 1;
        let tieCnt: number = 0;
        for(let c: number = 2; c < preds.length; c++) {{
            if (preds[best] < preds[c]){
                best = c;
                tieCnt = 0;
            } else if (preds[best] === preds[c]){
                tieCnt++;
                ties.add(c - 1);
            }
        };}
        if (tieCnt === 0)return best - 1;
        const hash: number = new java.util.Random().nextLong();
        if (priorClassDist != null){
            let sum: number = 0;
            for(let index121=ties.iterator();index121.hasNext();) {
                let i = index121.next();
                {
                    sum += priorClassDist[i];
                }
            }
            const rng: java.util.Random = new java.util.Random(hash);
            const tie: number = rng.nextDouble();
            let partialSum: number = 0;
            for(let index122=ties.iterator();index122.hasNext();) {
                let i = index122.next();
                {
                    partialSum += priorClassDist[i] / sum;
                    if (tie <= partialSum)return i;
                }
            }
        }
        const res: number = preds[best];
        let idx: number = (<number>hash|0) % (tieCnt + 1);
        for(best = 1; best < preds.length; best++) {if (res === preds[best] && --idx < 0)return best - 1;;}
        throw new java.lang.RuntimeException("Should Not Reach Here");
    }
}
GenMod["__class"] = "GenMod";


class gbm_pojo_test {
    public isSupervised(): boolean {
        return true;
    }

    public nfeatures(): number {
        return 11;
    }

    public nclasses(): number {
        return 2;
    }

    public static NAMES: string[]; public static NAMES_$LI$(): string[] { if (gbm_pojo_test.NAMES == null) { gbm_pojo_test.NAMES = NamesHolder_gbm_pojo_test.VALUES_$LI$(); }  return gbm_pojo_test.NAMES; }

    public static NCLASSES: number = 2;

    public static DOMAINS: string[][]; public static DOMAINS_$LI$(): string[][] { if (gbm_pojo_test.DOMAINS == null) { gbm_pojo_test.DOMAINS = [null, null, null, null, null, null, gbm_pojo_test_ColInfo_6.VALUES_$LI$(), null, null, gbm_pojo_test_ColInfo_9.VALUES_$LI$(), gbm_pojo_test_ColInfo_10.VALUES_$LI$(), gbm_pojo_test_ColInfo_11.VALUES_$LI$()]; }  return gbm_pojo_test.DOMAINS; }

    public static PRIOR_CLASS_DISTRIB: number[]; public static PRIOR_CLASS_DISTRIB_$LI$(): number[] { if (gbm_pojo_test.PRIOR_CLASS_DISTRIB == null) { gbm_pojo_test.PRIOR_CLASS_DISTRIB = [0.47494201646277684, 0.5250579835372231]; }  return gbm_pojo_test.PRIOR_CLASS_DISTRIB; }

    public static MODEL_CLASS_DISTRIB: number[]; public static MODEL_CLASS_DISTRIB_$LI$(): number[] { if (gbm_pojo_test.MODEL_CLASS_DISTRIB == null) { gbm_pojo_test.MODEL_CLASS_DISTRIB = [0.47494201646277684, 0.5250579835372231]; }  return gbm_pojo_test.MODEL_CLASS_DISTRIB; }

    public getUUID(): string {
        return /* toString */(''+(916966837873556288));
    }

    public score0(data: number[], preds: number[]): number[] {
        java.util.Arrays.fill(preds, 0);
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
        preds[0] = GenMod.getPrediction(preds, gbm_pojo_test.PRIOR_CLASS_DISTRIB_$LI$(), data, 0.44517145663915264);
        return preds;
    }
}
gbm_pojo_test["__class"] = "gbm_pojo_test";


class NamesHolder_gbm_pojo_test implements java.io.Serializable {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!NamesHolder_gbm_pojo_test.__static_initialized) { NamesHolder_gbm_pojo_test.__static_initialized = true; NamesHolder_gbm_pojo_test.__static_initializer_0(); } }

    public static VALUES: string[]; public static VALUES_$LI$(): string[] { NamesHolder_gbm_pojo_test.__static_initialize(); if (NamesHolder_gbm_pojo_test.VALUES == null) { NamesHolder_gbm_pojo_test.VALUES = (s => { let a=[]; while(s-->0) a.push(null); return a; })(11); }  return NamesHolder_gbm_pojo_test.VALUES; }

    static  __static_initializer_0() {
        NamesHolder_gbm_pojo_test.NamesHolder_gbm_pojo_test_0.fill(NamesHolder_gbm_pojo_test.VALUES_$LI$());
    }

    constructor() {
    }
}
NamesHolder_gbm_pojo_test["__class"] = "NamesHolder_gbm_pojo_test";
NamesHolder_gbm_pojo_test["__interfaces"] = ["java.io.Serializable"];



namespace NamesHolder_gbm_pojo_test {

    export class NamesHolder_gbm_pojo_test_0 implements java.io.Serializable {
        static fill(sa: string[]) {
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
    NamesHolder_gbm_pojo_test_0["__class"] = "NamesHolder_gbm_pojo_test.NamesHolder_gbm_pojo_test_0";
    NamesHolder_gbm_pojo_test_0["__interfaces"] = ["java.io.Serializable"];


}


class gbm_pojo_test_ColInfo_6 implements java.io.Serializable {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!gbm_pojo_test_ColInfo_6.__static_initialized) { gbm_pojo_test_ColInfo_6.__static_initialized = true; gbm_pojo_test_ColInfo_6.__static_initializer_0(); } }

    public static VALUES: string[]; public static VALUES_$LI$(): string[] { gbm_pojo_test_ColInfo_6.__static_initialize(); if (gbm_pojo_test_ColInfo_6.VALUES == null) { gbm_pojo_test_ColInfo_6.VALUES = [null, null, null, null, null, null, null, null, null, null]; }  return gbm_pojo_test_ColInfo_6.VALUES; }

    static  __static_initializer_0() {
        gbm_pojo_test_ColInfo_6.gbm_pojo_test_ColInfo_6_0.fill(gbm_pojo_test_ColInfo_6.VALUES_$LI$());
    }

    constructor() {
    }
}
gbm_pojo_test_ColInfo_6["__class"] = "gbm_pojo_test_ColInfo_6";
gbm_pojo_test_ColInfo_6["__interfaces"] = ["java.io.Serializable"];



namespace gbm_pojo_test_ColInfo_6 {

    export class gbm_pojo_test_ColInfo_6_0 implements java.io.Serializable {
        static fill(sa: string[]) {
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
    gbm_pojo_test_ColInfo_6_0["__class"] = "gbm_pojo_test_ColInfo_6.gbm_pojo_test_ColInfo_6_0";
    gbm_pojo_test_ColInfo_6_0["__interfaces"] = ["java.io.Serializable"];


}


class gbm_pojo_test_ColInfo_9 implements java.io.Serializable {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!gbm_pojo_test_ColInfo_9.__static_initialized) { gbm_pojo_test_ColInfo_9.__static_initialized = true; gbm_pojo_test_ColInfo_9.__static_initializer_0(); } }

    public static VALUES: string[]; public static VALUES_$LI$(): string[] { gbm_pojo_test_ColInfo_9.__static_initialize(); if (gbm_pojo_test_ColInfo_9.VALUES == null) { gbm_pojo_test_ColInfo_9.VALUES = (s => { let a=[]; while(s-->0) a.push(null); return a; })(132); }  return gbm_pojo_test_ColInfo_9.VALUES; }

    static  __static_initializer_0() {
        gbm_pojo_test_ColInfo_9.gbm_pojo_test_ColInfo_9_0.fill(gbm_pojo_test_ColInfo_9.VALUES_$LI$());
    }

    constructor() {
    }
}
gbm_pojo_test_ColInfo_9["__class"] = "gbm_pojo_test_ColInfo_9";
gbm_pojo_test_ColInfo_9["__interfaces"] = ["java.io.Serializable"];



namespace gbm_pojo_test_ColInfo_9 {

    export class gbm_pojo_test_ColInfo_9_0 implements java.io.Serializable {
        static fill(sa: string[]) {
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
    gbm_pojo_test_ColInfo_9_0["__class"] = "gbm_pojo_test_ColInfo_9.gbm_pojo_test_ColInfo_9_0";
    gbm_pojo_test_ColInfo_9_0["__interfaces"] = ["java.io.Serializable"];


}


class gbm_pojo_test_ColInfo_10 implements java.io.Serializable {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!gbm_pojo_test_ColInfo_10.__static_initialized) { gbm_pojo_test_ColInfo_10.__static_initialized = true; gbm_pojo_test_ColInfo_10.__static_initializer_0(); } }

    public static VALUES: string[]; public static VALUES_$LI$(): string[] { gbm_pojo_test_ColInfo_10.__static_initialize(); if (gbm_pojo_test_ColInfo_10.VALUES == null) { gbm_pojo_test_ColInfo_10.VALUES = (s => { let a=[]; while(s-->0) a.push(null); return a; })(134); }  return gbm_pojo_test_ColInfo_10.VALUES; }

    static  __static_initializer_0() {
        gbm_pojo_test_ColInfo_10.gbm_pojo_test_ColInfo_10_0.fill(gbm_pojo_test_ColInfo_10.VALUES_$LI$());
    }

    constructor() {
    }
}
gbm_pojo_test_ColInfo_10["__class"] = "gbm_pojo_test_ColInfo_10";
gbm_pojo_test_ColInfo_10["__interfaces"] = ["java.io.Serializable"];



namespace gbm_pojo_test_ColInfo_10 {

    export class gbm_pojo_test_ColInfo_10_0 implements java.io.Serializable {
        static fill(sa: string[]) {
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
    gbm_pojo_test_ColInfo_10_0["__class"] = "gbm_pojo_test_ColInfo_10.gbm_pojo_test_ColInfo_10_0";
    gbm_pojo_test_ColInfo_10_0["__interfaces"] = ["java.io.Serializable"];


}


class gbm_pojo_test_ColInfo_11 implements java.io.Serializable {
    static __static_initialized: boolean = false;
    static __static_initialize() { if (!gbm_pojo_test_ColInfo_11.__static_initialized) { gbm_pojo_test_ColInfo_11.__static_initialized = true; gbm_pojo_test_ColInfo_11.__static_initializer_0(); } }

    public static VALUES: string[]; public static VALUES_$LI$(): string[] { gbm_pojo_test_ColInfo_11.__static_initialize(); if (gbm_pojo_test_ColInfo_11.VALUES == null) { gbm_pojo_test_ColInfo_11.VALUES = [null, null]; }  return gbm_pojo_test_ColInfo_11.VALUES; }

    static  __static_initializer_0() {
        gbm_pojo_test_ColInfo_11.gbm_pojo_test_ColInfo_11_0.fill(gbm_pojo_test_ColInfo_11.VALUES_$LI$());
    }

    constructor() {
    }
}
gbm_pojo_test_ColInfo_11["__class"] = "gbm_pojo_test_ColInfo_11";
gbm_pojo_test_ColInfo_11["__interfaces"] = ["java.io.Serializable"];



namespace gbm_pojo_test_ColInfo_11 {

    export class gbm_pojo_test_ColInfo_11_0 implements java.io.Serializable {
        static fill(sa: string[]) {
            sa[0] = "NO";
            sa[1] = "YES";
        }

        constructor() {
        }
    }
    gbm_pojo_test_ColInfo_11_0["__class"] = "gbm_pojo_test_ColInfo_11.gbm_pojo_test_ColInfo_11_0";
    gbm_pojo_test_ColInfo_11_0["__interfaces"] = ["java.io.Serializable"];


}


class gbm_pojo_test_Forest_0 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += gbm_pojo_test_Tree_0_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_0["__class"] = "gbm_pojo_test_Forest_0";


class gbm_pojo_test_Tree_0_class_0 {
    static score0(data: number[]): number {
        const pred: number = (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (data[2] < 5.5 ? (/* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT1_$LI$(), 131, 0, data[9])) ? (data[5] < 1214.5 ? -0.08490811 : -0.0074444837) : (data[5] < 1325.5 ? -0.0026011502 : 0.0672389)) : (data[5] < 1104.5 ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(132, 1, data[10]) || (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT2_$LI$(), 132, 1, data[10])) ? -0.041237872 : 0.08666507) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(66, 51, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT3_$LI$(), 66, 51, data[9])) ? 0.070153005 : 0.16985005))) : (data[0] < 1998.0 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(131, 0, data[9]) || (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT4_$LI$(), 131, 0, data[9])) ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(134, 0, data[10]) || (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT5_$LI$(), 134, 0, data[10])) ? -0.07675884 : -0.015552446) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT6_$LI$(), 134, 0, data[10])) ? -0.025045818 : 0.041781697)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT7_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(131, 0, data[9]) || (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT8_$LI$(), 131, 0, data[9])) ? -0.1403306 : -0.08559531) : (/* isNaN */isNaN(data[5]) || data[5] < 1622.5 ? -0.09153927 : -0.02366724)))) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT9_$LI$(), 134, 0, data[10])) ? (data[2] < 7.5 ? (data[4] < 917.5 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(124, 3, data[9]) || (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT10_$LI$(), 124, 3, data[9])) ? -0.046503622 : 0.12153205) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(124, 3, data[9]) || (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT11_$LI$(), 124, 3, data[9])) ? 0.03362562 : 0.10945965)) : (data[0] < 1997.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT12_$LI$(), 124, 3, data[9])) ? -0.055411227 : 0.034853708) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT13_$LI$(), 124, 3, data[9])) ? -0.12390993 : -0.06337517))) : (data[2] < 7.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT14_$LI$(), 129, 3, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(132, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT15_$LI$(), 132, 0, data[10])) ? -0.0022618792 : 0.06443829) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(129, 3, data[9]) || (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT16_$LI$(), 129, 3, data[9])) ? 0.10094735 : 0.17672203)) : (/* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT17_$LI$(), 129, 3, data[9])) ? 0.013672127 : 0.07838874) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_0_class_0.GRPSPLIT18_$LI$(), 129, 3, data[9])) ? -0.08370597 : 0.0076616695)))));
        return pred;
    }

    public static GRPSPLIT0: number[]; public static GRPSPLIT0_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT0 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT0 = [120, 6, 41, -30, -60, 36, -29, 97, -37, 42, -128, 95, -25, 75, -53, 92, 8]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT0; }

    public static GRPSPLIT1: number[]; public static GRPSPLIT1_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT1 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT1 = [3, -96, 2, 1, 58, 9, 0, 0, 0, -48, 6, -128, 24, -128, 52, 1, 6]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT1; }

    public static GRPSPLIT2: number[]; public static GRPSPLIT2_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT2 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT2 = [-65, -17, -5, -65, -65, -33, -17, -1, -13, -9, -1, -1, -9, -9, -97, -7, 15]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT2; }

    public static GRPSPLIT3: number[]; public static GRPSPLIT3_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT3 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT3 = [-65, -17, -1, -1, -9, -1, -1, -1, 3]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT3; }

    public static GRPSPLIT4: number[]; public static GRPSPLIT4_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT4 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT4 = [1, -128, 66, 1, 11, 1, 8, 0, 0, 16, 0, -128, 16, 36, 32, 0, 0]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT4; }

    public static GRPSPLIT5: number[]; public static GRPSPLIT5_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT5 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT5 = [0, 0, 2, 0, 0, 4, 0, 0, -112, 0, 0, 3, 8, 0, 64, 4, 16]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT5; }

    public static GRPSPLIT6: number[]; public static GRPSPLIT6_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT6 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT6 = [0, 0, 88, 1, 2, 4, 20, 2, -128, 4, -128, 64, 48, -124, 64, 0, 0]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT6; }

    public static GRPSPLIT7: number[]; public static GRPSPLIT7_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT7 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT7 = [40, -28, 9, 1, 0, 68, 1, 16, -119, 96, 49, 97, 27, -31, 96, 45, 5]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT7; }

    public static GRPSPLIT8: number[]; public static GRPSPLIT8_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT8 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT8 = [0, -88, 4, 17, 33, 1, 0, 0, 0, 0, 0, 0, 16, 0, 4, 0, 0]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT8; }

    public static GRPSPLIT9: number[]; public static GRPSPLIT9_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT9 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT9 = [-65, -75, -8, -103, -80, -35, -67, -48, -2, -65, -64, -33, 125, -3, -13, 62, 47]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT9; }

    public static GRPSPLIT10: number[]; public static GRPSPLIT10_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT10 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT10 = [1, 0, 0, 8, 0, 0, 0, 0, 88, 0, 0, -127, 0, 1, 0, 0]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT10; }

    public static GRPSPLIT11: number[]; public static GRPSPLIT11_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT11 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT11 = [8, 0, 0, 0, -128, 0, 0, 76, 80, 0, -64, -127, 88, 33, 0, 2]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT11; }

    public static GRPSPLIT12: number[]; public static GRPSPLIT12_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT12 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT12 = [-1, -1, -2, -5, -1, -1, -1, -5, -1, -1, -1, -9, -69, -1, -1, 5]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT12; }

    public static GRPSPLIT13: number[]; public static GRPSPLIT13_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT13 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT13 = [-1, -1, -2, 111, -1, -1, -9, -73, -9, -5, 127, 95, -97, -33, -17, 7]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT13; }

    public static GRPSPLIT14: number[]; public static GRPSPLIT14_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT14 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT14 = [61, -1, -66, -29, -1, -33, -33, -1, -2, -2, -1, -1, -37, -9, -10, -1, 0]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT14; }

    public static GRPSPLIT15: number[]; public static GRPSPLIT15_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT15 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT15 = [111, 127, -1, -1, -33, -65, -1, -65, 119, -51, -1, -70, -33, -6, 44, -5, 3]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT15; }

    public static GRPSPLIT16: number[]; public static GRPSPLIT16_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT16 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT16 = [0, 0, 4, 0, 16, 0, 0, 0, 66, 4, 0, 0, 8, 0, 0, 3, 0]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT16; }

    public static GRPSPLIT17: number[]; public static GRPSPLIT17_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT17 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT17 = [126, -1, -65, -1, 127, -1, -17, -5, -65, -1, 63, 127, -1, -41, -10, -9, 0]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT17; }

    public static GRPSPLIT18: number[]; public static GRPSPLIT18_$LI$(): number[] { if (gbm_pojo_test_Tree_0_class_0.GRPSPLIT18 == null) { gbm_pojo_test_Tree_0_class_0.GRPSPLIT18 = [12, 32, 1, -124, -128, 64, 0, 0, 16, 0, 64, 9, 100, 0, -127, 10, 0]; }  return gbm_pojo_test_Tree_0_class_0.GRPSPLIT18; }
}
gbm_pojo_test_Tree_0_class_0["__class"] = "gbm_pojo_test_Tree_0_class_0";


class gbm_pojo_test_Forest_1 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += gbm_pojo_test_Tree_1_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_1["__class"] = "gbm_pojo_test_Forest_1";


class gbm_pojo_test_Tree_1_class_0 {
    static score0(data: number[]): number {
        const pred: number = (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (data[2] < 5.5 ? (/* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT1_$LI$(), 131, 0, data[9])) ? (data[4] < 975.5 ? -0.095463976 : -0.014495662) : (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT2_$LI$(), 32, 0, data[6])) ? -0.049982212 : 0.04667776)) : (data[5] < 1104.5 ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(132, 1, data[10]) || (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT3_$LI$(), 132, 1, data[10])) ? -0.031231511 : 0.086104415) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(66, 51, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT4_$LI$(), 66, 51, data[9])) ? 0.06345302 : 0.15539458))) : (data[0] < 1998.0 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT5_$LI$(), 131, 0, data[9])) ? (data[5] < 1274.5 ? -0.09608598 : -0.04030581) : (/* isNaN */isNaN(data[5]) || data[5] < 1548.5 ? -0.020994632 : 0.038413852)) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT6_$LI$(), 131, 0, data[9])) ? (/* isNaN */isNaN(data[5]) || data[5] < 1878.5 ? -0.12219516 : -0.06311011) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT7_$LI$(), 134, 0, data[10])) ? -0.10240176 : -0.032094374)))) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT8_$LI$(), 134, 0, data[10])) ? (data[2] < 7.5 ? (data[4] < 918.5 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(129, 3, data[9]) || (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT9_$LI$(), 129, 3, data[9])) ? -0.044791684 : 0.11350671) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(129, 3, data[9]) || (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT10_$LI$(), 129, 3, data[9])) ? 0.03744709 : 0.10671422)) : (data[0] < 1997.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT11_$LI$(), 129, 3, data[9])) ? -0.05136065 : 0.034544434) : (data[5] < 1441.5 ? -0.110554494 : -0.05872382))) : (data[2] < 7.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT12_$LI$(), 124, 3, data[9])) ? (data[5] < 1180.0 ? 8.2124857E-4 : 0.061129592) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(124, 3, data[9]) || (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT13_$LI$(), 124, 3, data[9])) ? 0.0957122 : 0.1668169)) : (/* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT14_$LI$(), 124, 3, data[9])) ? 0.020376673 : 0.07489993) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_1_class_0.GRPSPLIT15_$LI$(), 124, 3, data[9])) ? -0.06373164 : 0.015438366)))));
        return pred;
    }

    public static GRPSPLIT0: number[]; public static GRPSPLIT0_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT0 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT0 = [120, 6, 41, -30, -28, 36, -29, 97, -37, 42, -128, 95, -25, 75, -53, 92, 8]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT0; }

    public static GRPSPLIT1: number[]; public static GRPSPLIT1_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT1 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT1 = [3, -96, -126, 1, 26, 9, 0, 0, 0, -48, 6, -128, 24, -124, 52, 1, 6]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT1; }

    public static GRPSPLIT2: number[]; public static GRPSPLIT2_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT2 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT2 = [-45, 3, 0, 0]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT2; }

    public static GRPSPLIT3: number[]; public static GRPSPLIT3_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT3 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT3 = [-65, -17, -5, -65, -65, -33, -17, -1, -13, -9, -1, -9, -9, -9, -97, -7, 15]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT3; }

    public static GRPSPLIT4: number[]; public static GRPSPLIT4_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT4 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT4 = [-65, -17, -1, -1, -9, -1, -1, -1, 3]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT4; }

    public static GRPSPLIT5: number[]; public static GRPSPLIT5_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT5 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT5 = [1, -128, -62, 1, 27, 65, 8, 0, 0, 17, 0, -128, 16, 36, 32, 1, 2]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT5; }

    public static GRPSPLIT6: number[]; public static GRPSPLIT6_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT6 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT6 = [2, -96, -128, 17, 11, -128, 0, 4, 0, 1, 0, 0, 16, 0, 48, 1, 0]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT6; }

    public static GRPSPLIT7: number[]; public static GRPSPLIT7_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT7 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT7 = [-74, -2, -19, -31, -45, -33, -5, -35, 111, -17, -67, -29, -65, -63, 126, -81, 55]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT7; }

    public static GRPSPLIT8: number[]; public static GRPSPLIT8_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT8 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT8 = [-65, -75, -8, -39, -80, 89, -67, -48, -2, -65, -64, -97, 125, -3, -14, 62, 44]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT8; }

    public static GRPSPLIT9: number[]; public static GRPSPLIT9_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT9 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT9 = [1, 0, 0, 8, 0, 0, 0, 0, 88, 0, 0, -127, 0, 1, 0, 0, 0]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT9; }

    public static GRPSPLIT10: number[]; public static GRPSPLIT10_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT10 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT10 = [0, 0, 0, 16, -116, 0, 0, 12, 80, 0, -64, -63, 120, 33, 0, 2, 0]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT10; }

    public static GRPSPLIT11: number[]; public static GRPSPLIT11_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT11 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT11 = [-1, -1, -2, -5, -1, -1, -17, -5, -17, -1, -1, -9, -69, -1, -1, -9, 1]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT11; }

    public static GRPSPLIT12: number[]; public static GRPSPLIT12_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT12 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT12 = [61, -1, -66, -29, -1, -33, -41, -1, -2, -2, 127, -1, -37, -41, -10, 15]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT12; }

    public static GRPSPLIT13: number[]; public static GRPSPLIT13_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT13 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT13 = [0, 0, 4, 0, 16, 0, 0, 0, 66, 4, 0, 0, 8, 0, 0, 1]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT13; }

    public static GRPSPLIT14: number[]; public static GRPSPLIT14_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT14 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT14 = [126, -1, -65, -1, 127, -1, -1, -5, -65, -1, 63, 127, -33, -41, -10, 7]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT14; }

    public static GRPSPLIT15: number[]; public static GRPSPLIT15_$LI$(): number[] { if (gbm_pojo_test_Tree_1_class_0.GRPSPLIT15 == null) { gbm_pojo_test_Tree_1_class_0.GRPSPLIT15 = [12, 32, 1, 4, -128, 64, 0, 0, 16, 0, 64, 9, 36, 0, -127, 10]; }  return gbm_pojo_test_Tree_1_class_0.GRPSPLIT15; }
}
gbm_pojo_test_Tree_1_class_0["__class"] = "gbm_pojo_test_Tree_1_class_0";


class gbm_pojo_test_Forest_2 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += gbm_pojo_test_Tree_2_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_2["__class"] = "gbm_pojo_test_Forest_2";


class gbm_pojo_test_Tree_2_class_0 {
    static score0(data: number[]): number {
        const pred: number = (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (/* isNaN */isNaN(data[0]) || data[0] < 2006.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT1_$LI$(), 131, 0, data[9])) ? (data[0] < 1987.5 ? (/* isNaN */isNaN(data[7]) || data[7] < 1535.5 ? 0.07354705 : -0.038398083) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT2_$LI$(), 133, 1, data[10])) ? -0.12525378 : -0.065879285)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT3_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[7]) || data[7] < 679.5 ? -0.0399611 : -0.08144096) : (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT4_$LI$(), 32, 0, data[6])) ? -0.0800385 : 0.008836972))) : (data[5] < 1242.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 1, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT5_$LI$(), 129, 1, data[9])) ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(132, 1, data[10]) || (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT6_$LI$(), 132, 1, data[10])) ? -0.13485901 : 0.077487275) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT7_$LI$(), 132, 1, data[10])) ? -0.003762017 : 0.07857362)) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 1, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT8_$LI$(), 129, 1, data[9])) ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(132, 1, data[10]) || (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT9_$LI$(), 132, 1, data[10])) ? 0.0014935309 : 0.15552887) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT10_$LI$(), 132, 1, data[10])) ? 0.10809928 : 0.15701)))) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT11_$LI$(), 134, 0, data[10])) ? (data[2] < 5.5 ? (data[5] < 1081.5 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(129, 3, data[9]) || (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT12_$LI$(), 129, 3, data[9])) ? -0.049810037 : 0.12804708) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT13_$LI$(), 129, 3, data[9])) ? 0.033265512 : 0.10477275)) : (data[0] < 1997.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT14_$LI$(), 129, 3, data[9])) ? -0.03614877 : 0.027475996) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT15_$LI$(), 129, 3, data[9])) ? -0.09453595 : -0.03963656))) : (data[2] < 7.5 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(124, 3, data[9]) || (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT16_$LI$(), 124, 3, data[9])) ? (data[4] < 1216.5 ? 0.035695385 : 0.08741104) : (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT17_$LI$(), 32, 0, data[6])) ? -0.037707943 : 0.11799982)) : (/* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT18_$LI$(), 124, 3, data[9])) ? 0.02139124 : 0.07292731) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_2_class_0.GRPSPLIT19_$LI$(), 124, 3, data[9])) ? -0.0563367 : 0.011105511)))));
        return pred;
    }

    public static GRPSPLIT0: number[]; public static GRPSPLIT0_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT0 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT0 = [104, 6, 41, -30, -28, 36, -29, 97, -37, 42, -128, 95, -57, 107, -53, 92, 8]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT0; }

    public static GRPSPLIT1: number[]; public static GRPSPLIT1_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT1 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT1 = [3, -96, -62, 1, 11, 1, 0, 0, 0, -127, 16, 0, 56, 4, 32, 1, 6]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT1; }

    public static GRPSPLIT2: number[]; public static GRPSPLIT2_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT2 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT2 = [-66, -35, -1, -5, -67, 127, -9, -3, -6, -25, -12, -5, -1, 117, -81, -17, 31]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT2; }

    public static GRPSPLIT3: number[]; public static GRPSPLIT3_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT3 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT3 = [0, -60, 81, 1, 2, 68, 16, 4, 82, 100, -79, 64, 59, -59, 98, 37, 21]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT3; }

    public static GRPSPLIT4: number[]; public static GRPSPLIT4_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT4 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT4 = [-9, 3, 0, 0]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT4; }

    public static GRPSPLIT5: number[]; public static GRPSPLIT5_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT5 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT5 = [-9, -37, -1, -5, -1, -1, -7, -65, -17, -1, -33, -1, -1, -1, 119, 127, 0]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT5; }

    public static GRPSPLIT6: number[]; public static GRPSPLIT6_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT6 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT6 = [0, 48, 0, 0, 0, -128, 0, 0, 8, 1, 0, 0, 9, -128, 0, 0, 4]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT6; }

    public static GRPSPLIT7: number[]; public static GRPSPLIT7_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT7 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT7 = [-1, -1, -7, -2, -65, -33, -1, -17, -5, -13, 111, -1, -9, -1, -66, -5, 5]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT7; }

    public static GRPSPLIT8: number[]; public static GRPSPLIT8_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT8 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT8 = [-65, -1, -4, -5, -1, -5, -7, -66, -1, -1, -1, -1, -1, -1, 127, 127, 0]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT8; }

    public static GRPSPLIT9: number[]; public static GRPSPLIT9_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT9 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT9 = [64, 16, 0, 5, 0, 0, 64, 0, 24, 0, 0, 4, 1, 0, 72, 16, 6]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT9; }

    public static GRPSPLIT10: number[]; public static GRPSPLIT10_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT10 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT10 = [-10, -1, -5, -65, -17, 127, -17, 127, -5, -25, -1, -9, 127, -9, -2, -21, 13]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT10; }

    public static GRPSPLIT11: number[]; public static GRPSPLIT11_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT11 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT11 = [-65, 53, -8, -39, -78, 89, -67, -112, -2, -65, -64, -97, 125, -3, -46, 62, 44]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT11; }

    public static GRPSPLIT12: number[]; public static GRPSPLIT12_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT12 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT12 = [1, 0, 0, 8, 0, 0, 0, 0, 88, 0, 0, 1, 0, 32, 0, 0, 0]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT12; }

    public static GRPSPLIT13: number[]; public static GRPSPLIT13_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT13 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT13 = [-1, -1, -66, -9, 127, -37, -9, -65, -1, -5, -17, -10, -33, -97, -2, -9, 0]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT13; }

    public static GRPSPLIT14: number[]; public static GRPSPLIT14_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT14 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT14 = [-1, -1, -2, -5, -1, -1, -25, -5, -17, -1, -1, -9, -65, -1, -1, -9, 1]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT14; }

    public static GRPSPLIT15: number[]; public static GRPSPLIT15_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT15 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT15 = [9, 0, 64, 0, -124, 4, 0, 0, 16, 0, 64, 10, 32, 1, 9, 2, 0]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT15; }

    public static GRPSPLIT16: number[]; public static GRPSPLIT16_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT16 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT16 = [8, 0, 4, 0, -112, 64, 20, 40, 82, 4, 48, -63, 8, 0, -112, 3]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT16; }

    public static GRPSPLIT17: number[]; public static GRPSPLIT17_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT17 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT17 = [127, 3, 0, 0]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT17; }

    public static GRPSPLIT18: number[]; public static GRPSPLIT18_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT18 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT18 = [126, -1, -66, -1, 127, -1, -1, -5, -65, -1, 63, 127, -33, -41, -10, 6]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT18; }

    public static GRPSPLIT19: number[]; public static GRPSPLIT19_$LI$(): number[] { if (gbm_pojo_test_Tree_2_class_0.GRPSPLIT19 == null) { gbm_pojo_test_Tree_2_class_0.GRPSPLIT19 = [76, 32, 1, 4, -128, 64, 0, 0, 16, 0, 64, 9, 32, 0, -127, 10]; }  return gbm_pojo_test_Tree_2_class_0.GRPSPLIT19; }
}
gbm_pojo_test_Tree_2_class_0["__class"] = "gbm_pojo_test_Tree_2_class_0";


class gbm_pojo_test_Forest_3 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += gbm_pojo_test_Tree_3_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_3["__class"] = "gbm_pojo_test_Forest_3";


class gbm_pojo_test_Tree_3_class_0 {
    static score0(data: number[]): number {
        const pred: number = (data[2] < 6.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT1_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT2_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT3_$LI$(), 132, 0, data[9])) ? -0.14475606 : -0.07131989) : (data[5] < 1088.0 ? -0.06947046 : 0.032513283)) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT4_$LI$(), 132, 0, data[9])) ? (data[5] < 1327.5 ? -0.058298577 : 0.007936995) : (data[5] < 1143.5 ? 0.008775314 : 0.076927535))) : (data[5] < 1180.0 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(131, 0, data[9]) || (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT5_$LI$(), 131, 0, data[9])) ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(133, 0, data[10]) || (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT6_$LI$(), 133, 0, data[10])) ? -0.041947298 : 0.03570212) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT7_$LI$(), 133, 0, data[10])) ? 0.023365906 : 0.09398554)) : (/* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT8_$LI$(), 32, 0, data[6])) ? -0.010184068 : 0.0750181) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT9_$LI$(), 131, 0, data[9])) ? 0.11923278 : 0.15482864)))) : (/* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT10_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT11_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[6]) || !GenMod.bitSetIsInRange(32, 0, data[6]) || (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT12_$LI$(), 32, 0, data[6])) ? -0.06809773 : 0.09678831) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT13_$LI$(), 132, 0, data[9])) ? -0.03513849 : 0.02532822)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT14_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[4]) || data[4] < 1511.5 ? -0.025363052 : 0.04103205) : (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT15_$LI$(), 32, 0, data[6])) ? -0.028269341 : 0.05953272))) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT16_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT17_$LI$(), 134, 0, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT18_$LI$(), 132, 0, data[9])) ? -0.13941258 : -0.10332655) : (data[5] < 1327.5 ? -0.09895605 : -0.03512637)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_3_class_0.GRPSPLIT19_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[5]) || data[5] < 1770.0 ? -0.07830333 : -0.019202774) : (data[5] < 1475.0 ? -0.022279682 : 0.03281123)))));
        return pred;
    }

    public static GRPSPLIT0: number[]; public static GRPSPLIT0_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT0 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT0 = [107, -94, 41, -32, -2, 46, -29, 97, -37, -78, -44, -1, -33, -114, -81, 94, 4]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT0; }

    public static GRPSPLIT1: number[]; public static GRPSPLIT1_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT1 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT1 = [-3, 127, -11, -5, 122, -33, -49, -23, 114, -57, -97, -99, -33, 111, -3, -3, 31]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT1; }

    public static GRPSPLIT2: number[]; public static GRPSPLIT2_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT2 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT2 = [16, 13, 6, 2, 0, 1, 16, 18, 32, 65, 2, 0, 0, 32, 16, 0, 0]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT2; }

    public static GRPSPLIT3: number[]; public static GRPSPLIT3_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT3 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT3 = [-5, -17, -81, -25, -1, -1, -9, 115, -5, -1, -1, -1, -1, -17, -1, 127, 13]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT3; }

    public static GRPSPLIT4: number[]; public static GRPSPLIT4_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT4 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT4 = [0, 64, -126, 1, 1, 1, 12, 2, 0, 0, 0, 0, 0, 1, 0, 1, 2]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT4; }

    public static GRPSPLIT5: number[]; public static GRPSPLIT5_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT5 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT5 = [73, 34, 1, -128, 84, 12, -126, 64, -63, -78, 0, -120, 76, -128, 2, 16, 0]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT5; }

    public static GRPSPLIT6: number[]; public static GRPSPLIT6_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT6 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT6 = [10, 52, 10, -120, -124, 97, 33, 0, -87, -32, 32, 89, 41, -120, -48, 36, 5]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT6; }

    public static GRPSPLIT7: number[]; public static GRPSPLIT7_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT7 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT7 = [-1, 43, -5, -3, 127, -65, -1, -1, -2, -1, -33, -50, 125, -22, -4, -41, 3]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT7; }

    public static GRPSPLIT8: number[]; public static GRPSPLIT8_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT8 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT8 = [-42, 3, 0, 0]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT8; }

    public static GRPSPLIT9: number[]; public static GRPSPLIT9_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT9 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT9 = [0, 0, 0, 0, 0, 0, -128, 97, 8, 2, -112, 17, 64, 0, 5, 0, 0]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT9; }

    public static GRPSPLIT10: number[]; public static GRPSPLIT10_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT10 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT10 = [120, -34, 107, -21, -18, 62, 111, -39, -5, 60, -64, -33, -89, -5, -45, 30, 9]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT10; }

    public static GRPSPLIT11: number[]; public static GRPSPLIT11_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT11 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT11 = [-1, -1, -9, -5, -5, -1, -17, -37, -1, -34, -33, -34, 111, -33, 126, -1, 31]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT11; }

    public static GRPSPLIT12: number[]; public static GRPSPLIT12_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT12 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT12 = [2, 0, 0, 0]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT12; }

    public static GRPSPLIT13: number[]; public static GRPSPLIT13_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT13 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT13 = [0, 0, 4, 0, 17, 1, 0, 2, 0, 0, 0, 0, 0, 4, 0, 64, 2]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT13; }

    public static GRPSPLIT14: number[]; public static GRPSPLIT14_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT14 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT14 = [-5, -43, -40, -3, -106, 79, -3, -110, -68, -65, -9, -105, 125, -69, -9, 127, 45]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT14; }

    public static GRPSPLIT15: number[]; public static GRPSPLIT15_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT15 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT15 = [-9, 3, 0, 0]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT15; }

    public static GRPSPLIT16: number[]; public static GRPSPLIT16_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT16 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT16 = [96, -94, 9, 35, 45, -124, 2, 0, -128, 1, 0, 90, 48, 3, 72, 84, 0]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT16; }

    public static GRPSPLIT17: number[]; public static GRPSPLIT17_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT17 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT17 = [96, -32, 2, 2, 0, 4, 65, 0, -118, 48, 0, 36, 26, 0, 100, 44, 12]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT17; }

    public static GRPSPLIT18: number[]; public static GRPSPLIT18_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT18 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT18 = [-2, -65, -1, -1, -1, -11, -1, -3, -1, -53, 125, 127, -9, -25, 95, -4, 15]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT18; }

    public static GRPSPLIT19: number[]; public static GRPSPLIT19_$LI$(): number[] { if (gbm_pojo_test_Tree_3_class_0.GRPSPLIT19 == null) { gbm_pojo_test_Tree_3_class_0.GRPSPLIT19 = [0, -124, 8, 72, 8, 76, 1, 0, 25, 32, 49, 65, 25, -61, 34, 35, 5]; }  return gbm_pojo_test_Tree_3_class_0.GRPSPLIT19; }
}
gbm_pojo_test_Tree_3_class_0["__class"] = "gbm_pojo_test_Tree_3_class_0";


class gbm_pojo_test_Forest_4 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += gbm_pojo_test_Tree_4_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_4["__class"] = "gbm_pojo_test_Forest_4";


class gbm_pojo_test_Tree_4_class_0 {
    static score0(data: number[]): number {
        const pred: number = (data[2] < 6.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (data[5] < 1032.5 ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(133, 1, data[10]) || (GenMod.bitSetIsInRange(133, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT1_$LI$(), 133, 1, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 1, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT2_$LI$(), 131, 1, data[9])) ? -0.12371421 : -0.062322695) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 1, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT3_$LI$(), 131, 1, data[9])) ? -0.07444072 : 0.045755927)) : (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(133, 1, data[10]) || (GenMod.bitSetIsInRange(133, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT4_$LI$(), 133, 1, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 1, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT5_$LI$(), 131, 1, data[9])) ? -0.13140881 : 0.0013696944) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 1, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT6_$LI$(), 131, 1, data[9])) ? -0.040153 : 0.07998007))) : (data[4] < 1041.5 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(131, 0, data[9]) || (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT7_$LI$(), 131, 0, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT8_$LI$(), 133, 0, data[10])) ? -0.073470205 : 0.020269897) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT9_$LI$(), 133, 0, data[10])) ? 0.0081113335 : 0.096475005)) : (/* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT10_$LI$(), 133, 0, data[10])) ? 0.014573026 : 0.07913743) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT11_$LI$(), 131, 0, data[9])) ? 0.11842765 : 0.14836372)))) : (/* isNaN */isNaN(data[0]) || data[0] < 1999.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT12_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT13_$LI$(), 32, 0, data[6])) ? (data[4] < 811.5 ? -0.13078639 : -0.04807093) : (/* isNaN */isNaN(data[0]) || data[0] < 1992.5 ? -0.03275934 : 0.022654513)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT14_$LI$(), 134, 0, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT15_$LI$(), 132, 0, data[9])) ? -0.03371911 : 0.017215878) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT16_$LI$(), 132, 0, data[9])) ? 0.025642848 : 0.07064418))) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT17_$LI$(), 132, 0, data[9])) ? (data[5] < 1438.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(130, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT18_$LI$(), 130, 0, data[9])) ? -0.13195784 : -0.08627914) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(132, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT19_$LI$(), 132, 0, data[10])) ? -0.090834394 : -0.035032675)) : (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(134, 0, data[10]) || (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_4_class_0.GRPSPLIT20_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[5]) || data[5] < 1585.5 ? -0.070559286 : -0.018396154) : (data[4] < 1401.5 ? -0.0020808042 : 0.04909105)))));
        return pred;
    }

    public static GRPSPLIT0: number[]; public static GRPSPLIT0_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT0 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT0 = [73, 34, 33, -96, -10, 44, -94, 96, -37, -78, -108, -33, -49, -114, -113, 92, 4]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT0; }

    public static GRPSPLIT1: number[]; public static GRPSPLIT1_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT1 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT1 = [-65, -65, -1, -84, -19, -33, -1, 15, -13, 122, -1, -23, -25, 21, -42, -6, 27]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT1; }

    public static GRPSPLIT2: number[]; public static GRPSPLIT2_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT2 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT2 = [-73, -41, 59, -33, 127, -1, -7, -65, 111, -1, -1, -1, -17, -1, 119, -1, 7]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT2; }

    public static GRPSPLIT3: number[]; public static GRPSPLIT3_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT3 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT3 = [65, 66, 71, -96, 0, -128, 32, 1, 0, 0, 0, 0, 16, 16, -80, 0, 0]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT3; }

    public static GRPSPLIT4: number[]; public static GRPSPLIT4_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT4 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT4 = [101, 62, -128, 68, 16, -94, 64, 80, 56, -58, 0, -100, 5, -10, 24, -112, 10]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT4; }

    public static GRPSPLIT5: number[]; public static GRPSPLIT5_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT5 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT5 = [-3, -1, -9, -13, -1, -41, -5, -71, -3, -1, -21, -1, -17, -9, -1, -65, 7]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT5; }

    public static GRPSPLIT6: number[]; public static GRPSPLIT6_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT6 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT6 = [-1, -1, -1, -1, -1, -97, -9, -1, -1, 127, -33, -1, -17, -33, -41, 127, 3]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT6; }

    public static GRPSPLIT7: number[]; public static GRPSPLIT7_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT7 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT7 = [9, 2, 0, 0, 20, 4, -126, 64, -127, -78, 0, -128, 77, 0, 8, 16, 0]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT7; }

    public static GRPSPLIT8: number[]; public static GRPSPLIT8_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT8 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT8 = [-3, 107, -5, -5, 125, -69, 127, -5, -1, -17, -34, -9, -1, -66, -33, -11, 11]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT8; }

    public static GRPSPLIT9: number[]; public static GRPSPLIT9_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT9 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT9 = [-1, -77, -1, -3, -33, -5, -17, -6, -2, 47, -1, -50, -3, -30, 125, -9, 15]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT9; }

    public static GRPSPLIT10: number[]; public static GRPSPLIT10_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT10 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT10 = [-11, -1, -7, -17, -10, -3, -75, -7, -10, -1, -54, 118, -1, 100, -38, -5, 6]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT10; }

    public static GRPSPLIT11: number[]; public static GRPSPLIT11_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT11 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT11 = [0, 0, 0, 0, 0, 0, -128, 96, 8, 2, -112, 17, 64, 0, 3, 0, 0]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT11; }

    public static GRPSPLIT12: number[]; public static GRPSPLIT12_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT12 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT12 = [120, -34, 107, -21, -20, 62, 111, -39, -5, 60, -64, -33, -89, 59, -61, 94, 9]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT12; }

    public static GRPSPLIT13: number[]; public static GRPSPLIT13_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT13 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT13 = [-14, 1, 0, 0]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT13; }

    public static GRPSPLIT14: number[]; public static GRPSPLIT14_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT14 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT14 = [-5, -43, -40, -7, -98, 95, -19, -110, -68, -65, -9, -105, 125, -69, -9, 127, 44]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT14; }

    public static GRPSPLIT15: number[]; public static GRPSPLIT15_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT15 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT15 = [0, 0, 64, -126, 0, 0, 0, 0, -62, 0, -128, 10, -127, 0, 2, 0, 8]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT15; }

    public static GRPSPLIT16: number[]; public static GRPSPLIT16_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT16 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT16 = [64, 2, 33, 1, -128, 0, 96, 64, 19, 32, 0, 72, 3, 0, -128, 68, 0]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT16; }

    public static GRPSPLIT17: number[]; public static GRPSPLIT17_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT17 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT17 = [104, -94, 9, 35, 41, -124, 2, 4, -128, 1, 0, 90, 48, 8, 120, 0, 0]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT17; }

    public static GRPSPLIT18: number[]; public static GRPSPLIT18_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT18 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT18 = [2, 73, 70, -128, 18, 1, 80, 32, 64, 64, 10, 0, 65, 0, 2, 0, 2]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT18; }

    public static GRPSPLIT19: number[]; public static GRPSPLIT19_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT19 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT19 = [0, -64, 2, 2, 0, 4, 64, 34, -112, 32, 0, 33, 26, 0, -28, 12, 4]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT19; }

    public static GRPSPLIT20: number[]; public static GRPSPLIT20_$LI$(): number[] { if (gbm_pojo_test_Tree_4_class_0.GRPSPLIT20 == null) { gbm_pojo_test_Tree_4_class_0.GRPSPLIT20 = [0, -128, 8, 64, 8, 76, 0, 0, 16, 32, 32, 65, 17, -63, 98, 34, 5]; }  return gbm_pojo_test_Tree_4_class_0.GRPSPLIT20; }
}
gbm_pojo_test_Tree_4_class_0["__class"] = "gbm_pojo_test_Tree_4_class_0";


class gbm_pojo_test_Forest_5 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += gbm_pojo_test_Tree_5_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_5["__class"] = "gbm_pojo_test_Forest_5";


class gbm_pojo_test_Tree_5_class_0 {
    static score0(data: number[]): number {
        const pred: number = (data[2] < 6.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT1_$LI$(), 134, 0, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT2_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT3_$LI$(), 134, 0, data[10])) ? -0.17535403 : -0.11951502) : (/* isNaN */isNaN(data[4]) || data[4] < 1272.0 ? -0.08784636 : -0.022800786)) : (data[4] < 1180.0 ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(130, 1, data[10]) || (GenMod.bitSetIsInRange(130, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT4_$LI$(), 130, 1, data[10])) ? -0.05467794 : 0.123772666) : (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(130, 1, data[10]) || (GenMod.bitSetIsInRange(130, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT5_$LI$(), 130, 1, data[10])) ? -6.35277E-4 : 0.1540596))) : (data[5] < 1327.5 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(131, 0, data[9]) || (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT6_$LI$(), 131, 0, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT7_$LI$(), 133, 0, data[10])) ? -0.04405936 : 0.019320041) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT8_$LI$(), 133, 0, data[10])) ? 0.005152084 : 0.07956682)) : (/* isNaN */isNaN(data[0]) || data[0] < 2003.5 ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT9_$LI$(), 133, 0, data[10])) ? -0.052023977 : 0.059355058) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(130, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT10_$LI$(), 130, 0, data[9])) ? 0.043730453 : 0.1109079)))) : (/* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT11_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT12_$LI$(), 134, 0, data[10])) ? (data[5] < 1106.5 ? -0.107170016 : -0.045113467) : (/* isNaN */isNaN(data[4]) || data[4] < 1364.5 ? -0.04108156 : 0.0054534846)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT13_$LI$(), 134, 0, data[10])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT14_$LI$(), 134, 0, data[10])) ? -0.083889164 : -0.010010638) : (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT15_$LI$(), 32, 0, data[6])) ? -0.02485342 : 0.046775978))) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT16_$LI$(), 132, 0, data[9])) ? (/* isNaN */isNaN(data[5]) || data[5] < 1881.0 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(130, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT17_$LI$(), 130, 0, data[9])) ? -0.10566193 : -0.06981868) : (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(131, 0, data[10]) || (GenMod.bitSetIsInRange(131, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT18_$LI$(), 131, 0, data[10])) ? -0.08136055 : -0.015339674)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_5_class_0.GRPSPLIT19_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[0]) || data[0] < 2004.5 ? -0.07521195 : -0.01897317) : (data[4] < 1180.0 ? -0.042753506 : 0.014415721)))));
        return pred;
    }

    public static GRPSPLIT0: number[]; public static GRPSPLIT0_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT0 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT0 = [107, -94, 43, -29, -2, 47, -29, 99, -37, -13, -44, -1, -33, -17, -81, 95, 6]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT0; }

    public static GRPSPLIT1: number[]; public static GRPSPLIT1_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT1 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT1 = [-1, 127, -9, -5, 123, -5, -17, -1, 123, -25, -33, -99, -1, -17, -3, -1, 31]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT1; }

    public static GRPSPLIT2: number[]; public static GRPSPLIT2_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT2 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT2 = [127, -81, -21, -1, -2, -1, -5, 115, -37, -1, -1, -1, -1, -17, -1, 127, 15]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT2; }

    public static GRPSPLIT3: number[]; public static GRPSPLIT3_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT3 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT3 = [0, 0, 8, 4, -128, 0, 16, 0, 0, 0, 0, 32, 0, 0, 0, 0, 32]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT3; }

    public static GRPSPLIT4: number[]; public static GRPSPLIT4_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT4 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT4 = [0, 48, -127, 0, 0, -128, 0, 0, 16, 0, 0, 0, 0, 0, 0, 2, 0]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT4; }

    public static GRPSPLIT5: number[]; public static GRPSPLIT5_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT5 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT5 = [64, 48, 0, 0, 0, 0, 64, -112, 16, 64, 0, 0, 1, -96, 24, 17, 2]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT5; }

    public static GRPSPLIT6: number[]; public static GRPSPLIT6_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT6 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT6 = [73, 34, 0, -128, 20, 4, -126, 64, -61, -78, 4, -128, 79, 0, 10, 16, 4]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT6; }

    public static GRPSPLIT7: number[]; public static GRPSPLIT7_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT7 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT7 = [-19, 127, -31, -15, -35, -69, -1, 59, 110, -25, -66, -14, -33, 14, -36, -9, 7]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT7; }

    public static GRPSPLIT8: number[]; public static GRPSPLIT8_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT8 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT8 = [-2, 51, -5, -7, -33, -5, -25, -38, -2, 63, -34, -50, -1, -25, -3, -1, 6]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT8; }

    public static GRPSPLIT9: number[]; public static GRPSPLIT9_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT9 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT9 = [-11, -97, -69, -17, -10, -35, -67, -23, -11, -1, -49, -66, -67, -2, -37, -41, 23]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT9; }

    public static GRPSPLIT10: number[]; public static GRPSPLIT10_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT10 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT10 = [-1, 125, -11, -65, -9, -9, -66, -4, -1, -1, -5, -1, -1, -3, -3, -2, 1]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT10; }

    public static GRPSPLIT11: number[]; public static GRPSPLIT11_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT11 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT11 = [120, -34, 107, -21, -17, 126, 111, -39, -5, 60, -64, -33, -89, -1, -13, 30, 9]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT11; }

    public static GRPSPLIT12: number[]; public static GRPSPLIT12_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT12 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT12 = [-1, -1, -11, -5, -1, -1, -17, -37, -1, -34, -33, -33, -17, -1, 127, -1, 63]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT12; }

    public static GRPSPLIT13: number[]; public static GRPSPLIT13_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT13 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT13 = [-5, -43, -40, -3, -74, 79, -3, -110, -68, -65, -9, -66, 125, -69, -9, 127, 45]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT13; }

    public static GRPSPLIT14: number[]; public static GRPSPLIT14_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT14 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT14 = [-1, -1, -2, -1, -73, -17, -1, -74, -1, -1, -1, -1, 127, -1, -9, -1, 63]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT14; }

    public static GRPSPLIT15: number[]; public static GRPSPLIT15_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT15 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT15 = [-9, 3, 0, 0]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT15; }

    public static GRPSPLIT16: number[]; public static GRPSPLIT16_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT16 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT16 = [106, -94, 9, 51, 47, -124, 2, 4, -128, 1, 2, 90, 48, 11, 123, 85, 0]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT16; }

    public static GRPSPLIT17: number[]; public static GRPSPLIT17_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT17 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT17 = [0, 9, -122, -128, 16, 1, 64, 32, 0, 64, -120, 4, 5, 0, 4, 0, 2]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT17; }

    public static GRPSPLIT18: number[]; public static GRPSPLIT18_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT18 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT18 = [64, 0, 2, 0, 32, 68, 0, 2, -126, 32, 0, 48, 26, 0, -96, 6, 0]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT18; }

    public static GRPSPLIT19: number[]; public static GRPSPLIT19_$LI$(): number[] { if (gbm_pojo_test_Tree_5_class_0.GRPSPLIT19 == null) { gbm_pojo_test_Tree_5_class_0.GRPSPLIT19 = [0, -92, 8, 72, 2, 76, 1, 20, -119, 32, 49, 65, 27, -61, 98, 43, 5]; }  return gbm_pojo_test_Tree_5_class_0.GRPSPLIT19; }
}
gbm_pojo_test_Tree_5_class_0["__class"] = "gbm_pojo_test_Tree_5_class_0";


class gbm_pojo_test_Forest_6 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += gbm_pojo_test_Tree_6_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_6["__class"] = "gbm_pojo_test_Forest_6";


class gbm_pojo_test_Tree_6_class_0 {
    static score0(data: number[]): number {
        const pred: number = (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (/* isNaN */isNaN(data[0]) || data[0] < 2006.5 ? (data[5] < 1444.5 ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(134, 0, data[10]) || (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT1_$LI$(), 134, 0, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT2_$LI$(), 132, 0, data[9])) ? -0.07994515 : -0.038213454) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT3_$LI$(), 132, 0, data[9])) ? -0.03815278 : 0.013343556)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT4_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT5_$LI$(), 132, 0, data[9])) ? -0.05748715 : 0.062956914) : (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT6_$LI$(), 32, 0, data[6])) ? -0.059515014 : 0.013447878))) : (data[4] < 1124.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 1, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT7_$LI$(), 129, 1, data[9])) ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(132, 1, data[10]) || (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT8_$LI$(), 132, 1, data[10])) ? -0.1732277 : -0.04905467) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT9_$LI$(), 132, 1, data[10])) ? -0.14933641 : 0.037337136)) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(129, 1, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT10_$LI$(), 129, 1, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT11_$LI$(), 132, 1, data[10])) ? -0.051000718 : 0.06068832) : (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(132, 1, data[10]) || (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT12_$LI$(), 132, 1, data[10])) ? 0.09433502 : 0.13511497)))) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT13_$LI$(), 134, 0, data[10])) ? (data[2] < 5.5 ? (data[5] < 1081.5 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(124, 3, data[9]) || (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT14_$LI$(), 124, 3, data[9])) ? -0.03974043 : 0.09754446) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT15_$LI$(), 133, 0, data[10])) ? -0.006901633 : 0.07263307)) : (/* isNaN */isNaN(data[0]) || data[0] < 1997.5 ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT16_$LI$(), 133, 0, data[10])) ? -0.029186554 : 0.021131588) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(124, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT17_$LI$(), 124, 3, data[9])) ? -0.07091319 : -0.027239723))) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT18_$LI$(), 132, 0, data[9])) ? (/* isNaN */isNaN(data[5]) || data[5] < 1640.5 ? (/* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? 0.027061231 : -0.021917144) : (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(131, 1, data[10]) || (GenMod.bitSetIsInRange(131, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT19_$LI$(), 131, 1, data[10])) ? 0.025699666 : 0.083474666)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT20_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_6_class_0.GRPSPLIT21_$LI$(), 132, 0, data[9])) ? 0.013190969 : 0.073076054) : (data[5] < 921.5 ? 0.0071072467 : 0.075247064)))));
        return pred;
    }

    public static GRPSPLIT0: number[]; public static GRPSPLIT0_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT0 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT0 = [104, 6, 41, -30, -28, 36, -29, 97, -37, 42, -128, 95, -57, 43, -54, 92, 0]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT0; }

    public static GRPSPLIT1: number[]; public static GRPSPLIT1_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT1 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT1 = [106, 32, 32, 1, 2, 4, 1, 0, 9, 16, 96, 64, -87, -55, -62, 5, 20]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT1; }

    public static GRPSPLIT2: number[]; public static GRPSPLIT2_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT2 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT2 = [0, -96, -64, 5, 27, -63, 0, 20, 0, -63, 26, -128, 0, 0, 17, 0, 0]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT2; }

    public static GRPSPLIT3: number[]; public static GRPSPLIT3_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT3 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT3 = [3, -96, 0, 1, 3, 0, 0, 2, 0, 16, 4, 0, 32, 4, 32, 0, 4]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT3; }

    public static GRPSPLIT4: number[]; public static GRPSPLIT4_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT4 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT4 = [52, -33, -3, -29, 83, -33, -18, -19, -16, -18, -103, -29, -65, -27, 126, -69, 23]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT4; }

    public static GRPSPLIT5: number[]; public static GRPSPLIT5_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT5 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT5 = [0, 32, 68, 0, 0, 9, 0, 0, 0, 0, 0, 0, 48, 0, 16, 0, 0]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT5; }

    public static GRPSPLIT6: number[]; public static GRPSPLIT6_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT6 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT6 = [-15, 3, 0, 0]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT6; }

    public static GRPSPLIT7: number[]; public static GRPSPLIT7_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT7 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT7 = [-9, -33, -1, -5, -1, -1, -7, -65, -17, -1, -1, -1, -1, -1, -1, 127, 0]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT7; }

    public static GRPSPLIT8: number[]; public static GRPSPLIT8_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT8 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT8 = [64, 0, 0, 64, 0, -128, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1, 2]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT8; }

    public static GRPSPLIT9: number[]; public static GRPSPLIT9_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT9 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT9 = [-9, -1, -1, -2, -1, -33, -1, -1, -1, -5, -17, -1, 127, -1, -10, -5, 15]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT9; }

    public static GRPSPLIT10: number[]; public static GRPSPLIT10_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT10 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT10 = [-65, -1, -4, -5, -1, -1, -7, -66, -1, -1, -33, -1, -1, -1, 127, 127, 0]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT10; }

    public static GRPSPLIT11: number[]; public static GRPSPLIT11_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT11 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT11 = [-2, -9, -1, -1, -83, -1, -17, -1, -5, -30, -1, -35, -1, -1, -2, -2, 15]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT11; }

    public static GRPSPLIT12: number[]; public static GRPSPLIT12_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT12 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT12 = [-2, -33, -7, -65, -17, 127, -1, 127, -13, -81, -1, -9, 127, -9, -1, -7, 13]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT12; }

    public static GRPSPLIT13: number[]; public static GRPSPLIT13_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT13 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT13 = [-126, 20, -120, -120, -78, 73, -67, -128, -70, -72, 0, -99, 61, -52, -46, 46, 12]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT13; }

    public static GRPSPLIT14: number[]; public static GRPSPLIT14_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT14 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT14 = [65, 0, 0, 0, 0, 0, 0, 0, 88, 0, 0, 1, 0, 1, 0, 0]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT14; }

    public static GRPSPLIT15: number[]; public static GRPSPLIT15_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT15 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT15 = [-17, -1, -1, -37, -2, -3, -65, -7, -2, -1, -23, -1, 127, -2, -5, -1, 31]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT15; }

    public static GRPSPLIT16: number[]; public static GRPSPLIT16_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT16 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT16 = [77, -126, 0, 4, 5, -124, 0, 32, 1, 0, 2, 32, 2, 17, 33, 0, 1]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT16; }

    public static GRPSPLIT17: number[]; public static GRPSPLIT17_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT17 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT17 = [-1, -1, -2, 111, -1, -1, -9, -73, -9, -5, -33, 94, -65, -65, -17, 7]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT17; }

    public static GRPSPLIT18: number[]; public static GRPSPLIT18_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT18 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT18 = [-9, -7, -9, -99, -69, -5, -1, -34, -9, -9, 127, -71, -5, -4, -75, -1, 15]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT18; }

    public static GRPSPLIT19: number[]; public static GRPSPLIT19_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT19 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT19 = [-1, -3, -1, -1, -18, 127, -17, -65, -30, -1, -1, -71, -29, -69, -97, -21, 3]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT19; }

    public static GRPSPLIT20: number[]; public static GRPSPLIT20_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT20 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT20 = [127, -1, -1, -1, -33, -1, -25, -1, -1, 103, -1, -2, -33, -9, 125, -33, 63]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT20; }

    public static GRPSPLIT21: number[]; public static GRPSPLIT21_$LI$(): number[] { if (gbm_pojo_test_Tree_6_class_0.GRPSPLIT21 == null) { gbm_pojo_test_Tree_6_class_0.GRPSPLIT21 = [-65, -1, -1, -1, -1, -1, 126, -65, 61, -1, -1, -10, -2, -1, -1, -65, 15]; }  return gbm_pojo_test_Tree_6_class_0.GRPSPLIT21; }
}
gbm_pojo_test_Tree_6_class_0["__class"] = "gbm_pojo_test_Tree_6_class_0";


class gbm_pojo_test_Forest_7 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += gbm_pojo_test_Tree_7_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_7["__class"] = "gbm_pojo_test_Forest_7";


class gbm_pojo_test_Tree_7_class_0 {
    static score0(data: number[]): number {
        const pred: number = (data[2] < 6.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (data[5] < 1041.5 ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(133, 1, data[10]) || (GenMod.bitSetIsInRange(133, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT1_$LI$(), 133, 1, data[10])) ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT2_$LI$(), 132, 0, data[9])) ? -0.077967025 : 0.025046602) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT3_$LI$(), 132, 0, data[9])) ? -0.07011788 : 0.035904076)) : (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(133, 1, data[10]) || (GenMod.bitSetIsInRange(133, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT4_$LI$(), 133, 1, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT5_$LI$(), 132, 0, data[9])) ? -0.042469706 : 0.016547324) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT6_$LI$(), 132, 0, data[9])) ? -0.01932079 : 0.076523185))) : (data[4] < 829.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(128, 3, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT7_$LI$(), 128, 3, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT8_$LI$(), 133, 0, data[10])) ? -0.16542368 : -0.0136284735) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT9_$LI$(), 133, 0, data[10])) ? -0.01292895 : 0.0797437)) : (/* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT10_$LI$(), 133, 0, data[10])) ? -0.0094185425 : 0.061720364) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT11_$LI$(), 133, 0, data[10])) ? 0.08849967 : 0.12887704)))) : (/* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT12_$LI$(), 132, 0, data[9])) ? (data[0] < 1987.5 ? (data[4] < 1211.5 ? -0.05261361 : 0.059977558) : (/* isNaN */isNaN(data[2]) || data[2] < 20.5 ? -0.01599408 : -0.055944283)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT13_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[0]) || data[0] < 1993.5 ? -0.0101492535 : 0.057988476) : (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT14_$LI$(), 32, 0, data[6])) ? -0.022203758 : 0.04871426))) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT15_$LI$(), 134, 0, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT16_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT17_$LI$(), 132, 0, data[9])) ? -0.13240871 : -0.086979926) : (/* isNaN */isNaN(data[0]) || data[0] < 2004.5 ? -0.06318535 : -0.011012612)) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_7_class_0.GRPSPLIT18_$LI$(), 132, 0, data[9])) ? (data[5] < 1327.5 ? -0.06991185 : -0.02522777) : (data[4] < 1143.5 ? -0.025657265 : 0.028593613)))));
        return pred;
    }

    public static GRPSPLIT0: number[]; public static GRPSPLIT0_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT0 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT0 = [72, 2, 33, -96, -10, 12, -94, 97, -45, -78, 4, -33, -57, -118, -121, 92, 4]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT0; }

    public static GRPSPLIT1: number[]; public static GRPSPLIT1_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT1 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT1 = [-1, -65, -4, -84, -3, -33, -1, 13, -9, 122, -1, -63, -25, 29, -74, -6, 27]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT1; }

    public static GRPSPLIT2: number[]; public static GRPSPLIT2_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT2 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT2 = [1, 32, 0, 2, 0, 64, 64, 2, 0, 0, -64, 0, 0, 1, 0, 0, 3]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT2; }

    public static GRPSPLIT3: number[]; public static GRPSPLIT3_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT3 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT3 = [-17, -74, -1, -11, -1, -65, -13, 127, -33, -1, 63, -1, -17, -2, -17, -33, 12]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT3; }

    public static GRPSPLIT4: number[]; public static GRPSPLIT4_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT4 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT4 = [101, 42, -128, 68, 0, -126, 64, 80, 56, -58, 0, -100, 65, 102, 88, -112, 10]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT4; }

    public static GRPSPLIT5: number[]; public static GRPSPLIT5_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT5 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT5 = [122, -73, -17, -25, -10, 47, -89, 99, -5, -13, -41, -1, -33, -17, -65, 127, 14]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT5; }

    public static GRPSPLIT6: number[]; public static GRPSPLIT6_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT6 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT6 = [-1, -9, -1, -1, -1, 31, -1, 127, -1, -1, -66, -1, -33, -65, -65, -1, 6]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT6; }

    public static GRPSPLIT7: number[]; public static GRPSPLIT7_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT7 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT7 = [-1, -1, -1, -65, -3, -1, -33, -69, -1, 127, -97, -43, -65, -98, -1, -9]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT7; }

    public static GRPSPLIT8: number[]; public static GRPSPLIT8_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT8 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT8 = [-3, 127, -1, -9, 127, -1, -1, -69, -1, -17, -34, -1, -3, -6, -98, -9, 15]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT8; }

    public static GRPSPLIT9: number[]; public static GRPSPLIT9_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT9 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT9 = [-1, 11, -5, -9, 123, -65, -1, -1, -2, 111, -1, -2, -3, -22, -1, -45, 7]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT9; }

    public static GRPSPLIT10: number[]; public static GRPSPLIT10_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT10 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT10 = [-1, -77, -7, -17, -2, -3, -75, -8, -2, -1, -17, 119, -1, 102, -37, -1, 30]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT10; }

    public static GRPSPLIT11: number[]; public static GRPSPLIT11_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT11 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT11 = [-3, -49, -13, 117, -1, -1, 126, -33, -9, -33, -34, -1, -9, 110, 125, -41, 27]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT11; }

    public static GRPSPLIT12: number[]; public static GRPSPLIT12_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT12 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT12 = [120, -34, 107, -21, -18, 62, 111, -39, -5, 60, -64, -33, -93, -65, -45, 30, 9]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT12; }

    public static GRPSPLIT13: number[]; public static GRPSPLIT13_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT13 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT13 = [2, -128, -104, 8, 6, 64, 29, 2, -112, -76, -126, 0, 61, -103, -31, 32, 5]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT13; }

    public static GRPSPLIT14: number[]; public static GRPSPLIT14_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT14 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT14 = [-9, 3, 0, 0]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT14; }

    public static GRPSPLIT15: number[]; public static GRPSPLIT15_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT15 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT15 = [32, -92, 8, 72, 8, 76, 65, 20, -125, 32, 17, 96, 27, -61, 38, 39, 5]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT15; }

    public static GRPSPLIT16: number[]; public static GRPSPLIT16_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT16 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT16 = [72, -85, 11, 17, 115, 5, 2, 0, -126, 0, 8, 78, 21, 0, 79, 16, 0]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT16; }

    public static GRPSPLIT17: number[]; public static GRPSPLIT17_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT17 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT17 = [-2, -1, -1, -3, -1, -9, -1, -5, -1, -34, -19, -2, -73, -32, 95, -4, 15]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT17; }

    public static GRPSPLIT18: number[]; public static GRPSPLIT18_$LI$(): number[] { if (gbm_pojo_test_Tree_7_class_0.GRPSPLIT18 == null) { gbm_pojo_test_Tree_7_class_0.GRPSPLIT18 = [96, 34, 9, 1, 21, -115, 0, 6, -128, 65, 2, -34, 0, 9, 105, 85, 0]; }  return gbm_pojo_test_Tree_7_class_0.GRPSPLIT18; }
}
gbm_pojo_test_Tree_7_class_0["__class"] = "gbm_pojo_test_Tree_7_class_0";


class gbm_pojo_test_Forest_8 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += gbm_pojo_test_Tree_8_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_8["__class"] = "gbm_pojo_test_Forest_8";


class gbm_pojo_test_Tree_8_class_0 {
    static score0(data: number[]): number {
        const pred: number = (data[2] < 6.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT1_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT2_$LI$(), 132, 0, data[9])) ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(134, 0, data[10]) || (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT3_$LI$(), 134, 0, data[10])) ? -0.08960409 : -0.036350418) : (data[0] < 1993.5 ? -0.05960466 : 0.03154628)) : (data[5] < 1014.5 ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(132, 1, data[10]) || (GenMod.bitSetIsInRange(132, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT4_$LI$(), 132, 1, data[10])) ? -0.045764044 : 0.052963074) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT5_$LI$(), 132, 0, data[9])) ? -0.018311732 : 0.037378646))) : (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT6_$LI$(), 32, 0, data[6])) ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT7_$LI$(), 132, 0, data[9])) ? (data[2] < 2.5 ? -0.12705249 : -0.05079043) : (/* isNaN */isNaN(data[0]) || data[0] < 1999.0 ? 0.074032426 : -0.03185142)) : (data[4] < 1106.5 ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT8_$LI$(), 133, 0, data[10])) ? -0.014158565 : 0.044793554) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT9_$LI$(), 133, 0, data[10])) ? 0.03150996 : 0.08309605)))) : (/* isNaN */isNaN(data[0]) || data[0] < 1999.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT10_$LI$(), 132, 0, data[9])) ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(134, 0, data[10]) || (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT11_$LI$(), 134, 0, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT12_$LI$(), 132, 0, data[9])) ? -0.13306955 : -0.037829727) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT13_$LI$(), 132, 0, data[9])) ? -0.021149727 : 0.028858071)) : (!/* isNaN */isNaN(data[6]) && (GenMod.bitSetIsInRange(32, 0, data[6]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT14_$LI$(), 32, 0, data[6])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT15_$LI$(), 132, 0, data[9])) ? -0.07009283 : -0.004869465) : (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(134, 0, data[10]) || (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT16_$LI$(), 134, 0, data[10])) ? 0.015709344 : 0.054861084))) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT17_$LI$(), 132, 0, data[9])) ? (data[5] < 1438.5 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(130, 0, data[9]) || (GenMod.bitSetIsInRange(130, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT18_$LI$(), 130, 0, data[9])) ? -0.10968897 : -0.0684205) : (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(131, 0, data[10]) || (GenMod.bitSetIsInRange(131, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT19_$LI$(), 131, 0, data[10])) ? -0.06700152 : -0.0053774575)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_8_class_0.GRPSPLIT20_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[0]) || data[0] < 2004.5 ? -0.07106419 : -0.005718407) : (data[5] < 1548.5 ? -0.028868884 : 0.019552873)))));
        return pred;
    }

    public static GRPSPLIT0: number[]; public static GRPSPLIT0_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT0 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT0 = [74, 2, 33, -96, -10, 12, -94, 96, -45, -78, -124, -33, -49, -118, -121, 92, 4]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT0; }

    public static GRPSPLIT1: number[]; public static GRPSPLIT1_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT1 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT1 = [-17, 127, -83, -37, -6, -1, -17, -87, -6, -3, -65, -71, -1, 127, -3, -9, 31]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT1; }

    public static GRPSPLIT2: number[]; public static GRPSPLIT2_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT2 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT2 = [0, 40, 2, 2, 0, 65, 0, 0, 0, 0, 16, 0, 16, 32, 112, 0, 0]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT2; }

    public static GRPSPLIT3: number[]; public static GRPSPLIT3_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT3 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT3 = [16, 0, 82, 0, 0, 0, 0, 4, 0, 2, 64, 70, 0, -128, 2, 0, 0]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT3; }

    public static GRPSPLIT4: number[]; public static GRPSPLIT4_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT4 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT4 = [5, 8, 0, 4, 65, 0, 64, 0, 0, 76, 16, -128, 1, 12, 0, 18, 0]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT4; }

    public static GRPSPLIT5: number[]; public static GRPSPLIT5_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT5 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT5 = [122, -9, -5, -25, -1, 63, -17, 127, -1, -9, -44, -1, -33, -65, -81, -1, 6]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT5; }

    public static GRPSPLIT6: number[]; public static GRPSPLIT6_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT6 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT6 = [-9, 3, 0, 0]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT6; }

    public static GRPSPLIT7: number[]; public static GRPSPLIT7_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT7 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT7 = [64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT7; }

    public static GRPSPLIT8: number[]; public static GRPSPLIT8_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT8 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT8 = [-1, 39, -5, -15, 85, -5, 103, -38, -2, -81, -34, -41, -3, -90, -1, -41, 15]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT8; }

    public static GRPSPLIT9: number[]; public static GRPSPLIT9_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT9 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT9 = [-91, -3, -7, -17, -26, -3, -67, -7, -1, -1, -55, 87, -35, 116, -101, -1, 22]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT9; }

    public static GRPSPLIT10: number[]; public static GRPSPLIT10_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT10 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT10 = [72, -126, 99, -93, -121, 68, 104, 64, -45, 56, -128, -50, -93, 1, -61, 92, 0]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT10; }

    public static GRPSPLIT11: number[]; public static GRPSPLIT11_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT11 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT11 = [-1, -1, -15, -5, -5, -1, -17, -37, -1, -34, -33, -34, 111, -33, 126, -1, 27]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT11; }

    public static GRPSPLIT12: number[]; public static GRPSPLIT12_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT12 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT12 = [-1, -1, -1, -1, -1, -1, -1, -3, -5, -1, -1, -1, -1, -3, -1, -33, 13]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT12; }

    public static GRPSPLIT13: number[]; public static GRPSPLIT13_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT13 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT13 = [0, 0, 12, 0, 16, 1, 0, 2, 0, 0, 0, 0, 0, 6, 0, 0, 2]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT13; }

    public static GRPSPLIT14: number[]; public static GRPSPLIT14_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT14 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT14 = [-9, 3, 0, 0]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT14; }

    public static GRPSPLIT15: number[]; public static GRPSPLIT15_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT15 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT15 = [-1, -1, -1, -1, -3, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 15]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT15; }

    public static GRPSPLIT16: number[]; public static GRPSPLIT16_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT16 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT16 = [2, 0, -112, 9, 2, 64, 5, 2, 0, 52, 2, 0, 21, 0, 97, 32, 4]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT16; }

    public static GRPSPLIT17: number[]; public static GRPSPLIT17_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT17 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT17 = [104, -86, 13, 51, 43, -124, 2, 4, -128, 1, 2, 90, 48, 8, 120, 0, 0]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT17; }

    public static GRPSPLIT18: number[]; public static GRPSPLIT18_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT18 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT18 = [2, 65, 66, -128, 16, 1, 80, 34, 64, 80, 8, 0, 65, 4, 2, 0, 2]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT18; }

    public static GRPSPLIT19: number[]; public static GRPSPLIT19_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT19 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT19 = [64, 0, 2, 2, 0, 4, 64, 34, 16, 0, 0, 48, 10, 0, 4, 4, 4]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT19; }

    public static GRPSPLIT20: number[]; public static GRPSPLIT20_$LI$(): number[] { if (gbm_pojo_test_Tree_8_class_0.GRPSPLIT20 == null) { gbm_pojo_test_Tree_8_class_0.GRPSPLIT20 = [0, -92, 8, 76, 2, 76, 1, 4, 9, 32, 49, 97, 49, -61, 98, 35, 5]; }  return gbm_pojo_test_Tree_8_class_0.GRPSPLIT20; }
}
gbm_pojo_test_Tree_8_class_0["__class"] = "gbm_pojo_test_Tree_8_class_0";


class gbm_pojo_test_Forest_9 {
    public static score0(fdata: number[], preds: number[]) {
        preds[1] += gbm_pojo_test_Tree_9_class_0.score0(fdata);
    }
}
gbm_pojo_test_Forest_9["__class"] = "gbm_pojo_test_Forest_9";


class gbm_pojo_test_Tree_9_class_0 {
    static score0(data: number[]): number {
        const pred: number = (data[2] < 6.5 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT0_$LI$(), 132, 0, data[9])) ? (data[5] < 1041.5 ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(133, 1, data[10]) || (GenMod.bitSetIsInRange(133, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT1_$LI$(), 133, 1, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 1, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT2_$LI$(), 131, 1, data[9])) ? -0.15235789 : -0.048692) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(131, 1, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT3_$LI$(), 131, 1, data[9])) ? -0.06283237 : 0.03258739)) : (/* isNaN */isNaN(data[0]) || data[0] < 2007.5 ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT4_$LI$(), 133, 1, data[10])) ? -0.034710344 : 0.022741744) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 1, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT5_$LI$(), 133, 1, data[10])) ? 0.033610754 : 0.11563232))) : (data[2] < 1.5 ? (/* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT6_$LI$(), 133, 0, data[10])) ? -0.094179556 : 0.06645071) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT7_$LI$(), 133, 0, data[10])) ? -0.12691893 : 0.017173646)) : (data[4] < 717.5 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(131, 0, data[9]) || (GenMod.bitSetIsInRange(131, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT8_$LI$(), 131, 0, data[9])) ? -0.052207164 : 0.082908764) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT9_$LI$(), 133, 0, data[10])) ? 0.02356362 : 0.07073981)))) : (/* isNaN */isNaN(data[0]) || data[0] < 1998.0 ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT10_$LI$(), 132, 0, data[9])) ? (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT11_$LI$(), 134, 0, data[10])) ? (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT12_$LI$(), 132, 0, data[9])) ? -0.13247876 : -0.03522225) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT13_$LI$(), 132, 0, data[9])) ? -0.033556167 : 0.013424614)) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(134, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT14_$LI$(), 134, 0, data[10])) ? (/* isNaN */isNaN(data[5]) || data[5] < 1678.0 ? -0.049635213 : 0.027109658) : (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(132, 0, data[9]) || (GenMod.bitSetIsInRange(132, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT15_$LI$(), 132, 0, data[9])) ? 0.017906439 : 0.049174905))) : (/* isNaN */isNaN(data[5]) || data[5] < 1631.5 ? (/* isNaN */isNaN(data[9]) || !GenMod.bitSetIsInRange(130, 0, data[9]) || (GenMod.bitSetIsInRange(130, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT16_$LI$(), 130, 0, data[9])) ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(133, 0, data[10]) || (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT17_$LI$(), 133, 0, data[10])) ? -0.07433795 : -0.040629175) : (data[0] < 2000.5 ? 0.020971054 : -0.029973244)) : (!/* isNaN */isNaN(data[9]) && (GenMod.bitSetIsInRange(130, 0, data[9]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT18_$LI$(), 130, 0, data[9])) ? (/* isNaN */isNaN(data[10]) || !GenMod.bitSetIsInRange(133, 0, data[10]) || (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT19_$LI$(), 133, 0, data[10])) ? -0.06287862 : -0.004335585) : (!/* isNaN */isNaN(data[10]) && (GenMod.bitSetIsInRange(133, 0, data[10]) && !GenMod.bitSetContains(gbm_pojo_test_Tree_9_class_0.GRPSPLIT20_$LI$(), 133, 0, data[10])) ? -0.04766358 : 0.024850857)))));
        return pred;
    }

    public static GRPSPLIT0: number[]; public static GRPSPLIT0_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT0 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT0 = [73, 0, 33, -96, -10, 12, -94, 96, -45, -78, 4, -49, -57, -118, -121, 92, 4]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT0; }

    public static GRPSPLIT1: number[]; public static GRPSPLIT1_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT1 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT1 = [-5, -67, -3, -84, -3, -33, -65, 15, -9, 122, -33, -31, -25, -99, -74, -6, 27]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT1; }

    public static GRPSPLIT2: number[]; public static GRPSPLIT2_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT2 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT2 = [-9, -41, -1, -33, -1, -1, -3, -65, -5, -1, -1, -9, -1, -3, 95, -1, 7]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT2; }

    public static GRPSPLIT3: number[]; public static GRPSPLIT3_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT3 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT3 = [119, -37, -33, -6, 127, -33, 121, -1, -17, -1, -97, -1, 119, -1, -9, 127, 6]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT3; }

    public static GRPSPLIT4: number[]; public static GRPSPLIT4_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT4 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT4 = [-9, -65, -60, 109, -4, -17, -9, 86, -71, -10, 111, -44, 95, 119, -1, -8, 15]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT4; }

    public static GRPSPLIT5: number[]; public static GRPSPLIT5_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT5 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT5 = [-2, -17, -5, -1, -3, -33, -1, -1, -1, -9, -1, -33, -2, -1, -18, -17, 31]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT5; }

    public static GRPSPLIT6: number[]; public static GRPSPLIT6_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT6 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT6 = [-1, 83, -2, -5, -34, -66, -17, -6, -2, -1, -3, 63, -1, -73, 127, -41, 12]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT6; }

    public static GRPSPLIT7: number[]; public static GRPSPLIT7_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT7 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT7 = [61, -81, -3, -17, -3, -3, -1, -5, 111, -1, -8, -42, -49, -12, 9, -39, 19]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT7; }

    public static GRPSPLIT8: number[]; public static GRPSPLIT8_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT8 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT8 = [0, 0, 0, -128, 68, 12, 2, 0, -127, -110, 0, 4, 68, 8, 3, 80, 0]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT8; }

    public static GRPSPLIT9: number[]; public static GRPSPLIT9_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT9 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT9 = [-2, -79, -5, -19, -18, -7, 52, -8, -1, -1, -49, -9, 93, -10, -5, -9, 14]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT9; }

    public static GRPSPLIT10: number[]; public static GRPSPLIT10_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT10 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT10 = [72, -126, 107, -93, -122, 4, 96, 64, -45, 56, -128, -54, -93, 3, -61, 24, 0]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT10; }

    public static GRPSPLIT11: number[]; public static GRPSPLIT11_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT11 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT11 = [-1, -1, -9, -5, -7, -1, -17, -37, -1, -34, -33, -34, 111, -33, 126, -1, 62]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT11; }

    public static GRPSPLIT12: number[]; public static GRPSPLIT12_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT12 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT12 = [-1, -1, -1, -1, -1, -1, -1, -3, -5, -1, -1, -5, -1, -1, -1, -33, 13]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT12; }

    public static GRPSPLIT13: number[]; public static GRPSPLIT13_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT13 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT13 = [1, 0, 4, 16, 17, 65, -120, 38, 0, 0, 16, 4, 20, 68, 32, 64, 2]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT13; }

    public static GRPSPLIT14: number[]; public static GRPSPLIT14_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT14 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT14 = [-1, -41, -36, -3, -74, -49, -1, -78, -65, -65, -9, -1, 127, -5, -9, 127, 61]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT14; }

    public static GRPSPLIT15: number[]; public static GRPSPLIT15_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT15 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT15 = [64, 2, 33, 35, -128, 0, 96, 0, 83, 32, -128, 8, -125, 0, -128, 0, 0]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT15; }

    public static GRPSPLIT16: number[]; public static GRPSPLIT16_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT16 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT16 = [104, 32, 8, 2, 61, -128, 2, 0, -128, 1, 0, 16, 0, 1, 24, 80, 0]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT16; }

    public static GRPSPLIT17: number[]; public static GRPSPLIT17_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT17 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT17 = [98, -94, 0, 8, 40, 12, 1, 36, 11, 48, 83, 64, 18, -104, 1, 1, 4]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT17; }

    public static GRPSPLIT18: number[]; public static GRPSPLIT18_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT18 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT18 = [66, -94, -53, 36, 3, 5, 0, 4, -128, 0, 6, 94, 48, 11, 73, 69, 0]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT18; }

    public static GRPSPLIT19: number[]; public static GRPSPLIT19_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT19 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT19 = [0, 36, 10, 1, 0, 4, 68, 16, -112, 96, 1, 112, 11, -31, 4, 46, 5]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT19; }

    public static GRPSPLIT20: number[]; public static GRPSPLIT20_$LI$(): number[] { if (gbm_pojo_test_Tree_9_class_0.GRPSPLIT20 == null) { gbm_pojo_test_Tree_9_class_0.GRPSPLIT20 = [-1, -65, -1, -1, -33, -1, -2, -37, -1, -81, -35, -21, -33, -17, 127, -41, 7]; }  return gbm_pojo_test_Tree_9_class_0.GRPSPLIT20; }
}
gbm_pojo_test_Tree_9_class_0["__class"] = "gbm_pojo_test_Tree_9_class_0";




gbm_pojo_test_ColInfo_11.__static_initialize();

gbm_pojo_test_ColInfo_10.__static_initialize();

gbm_pojo_test_ColInfo_9.__static_initialize();

gbm_pojo_test_ColInfo_6.__static_initialize();

NamesHolder_gbm_pojo_test.__static_initialize();
