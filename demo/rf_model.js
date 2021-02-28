/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
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
class rf_model {
    isSupervised() {
        return true;
    }
    nfeatures() {
        return 4;
    }
    nclasses() {
        return 2;
    }
    static NAMES_$LI$() { if (rf_model.NAMES == null) {
        rf_model.NAMES = NamesHolder_rf_model.VALUES_$LI$();
    } return rf_model.NAMES; }
    static DOMAINS_$LI$() { if (rf_model.DOMAINS == null) {
        rf_model.DOMAINS = [null, rf_model_ColInfo_1.VALUES_$LI$(), null, null, rf_model_ColInfo_4.VALUES_$LI$()];
    } return rf_model.DOMAINS; }
    static PRIOR_CLASS_DISTRIB_$LI$() { if (rf_model.PRIOR_CLASS_DISTRIB == null) {
        rf_model.PRIOR_CLASS_DISTRIB = [0.5973684210526315, 0.4026315789473684];
    } return rf_model.PRIOR_CLASS_DISTRIB; }
    static MODEL_CLASS_DISTRIB_$LI$() { if (rf_model.MODEL_CLASS_DISTRIB == null) {
        rf_model.MODEL_CLASS_DISTRIB = [0.5973684210526315, 0.4026315789473684];
    } return rf_model.MODEL_CLASS_DISTRIB; }
    getUUID() {
        return /* toString */ ('' + (-1424075989895028637));
    }
    score0(data, preds) {
        preds.fill(0);
        rf_model_Forest_0.score0(data, preds);
        rf_model_Forest_1.score0(data, preds);
        rf_model_Forest_2.score0(data, preds);
        rf_model_Forest_3.score0(data, preds);
        rf_model_Forest_4.score0(data, preds);
        rf_model_Forest_5.score0(data, preds);
        rf_model_Forest_6.score0(data, preds);
        rf_model_Forest_7.score0(data, preds);
        rf_model_Forest_8.score0(data, preds);
        rf_model_Forest_9.score0(data, preds);
        preds[1] /= 10;
        preds[2] = 1.0 - preds[1];
        preds[0] = GenModel.getPrediction(preds, rf_model.PRIOR_CLASS_DISTRIB_$LI$(), data, 0.43013908724921995);
        return preds;
    }
}
rf_model.NCLASSES = 2;
rf_model["__class"] = "rf_model";
class NamesHolder_rf_model {
    constructor() {
    }
    static __static_initialize() { if (!NamesHolder_rf_model.__static_initialized) {
        NamesHolder_rf_model.__static_initialized = true;
        NamesHolder_rf_model.__static_initializer_0();
    } }
    static VALUES_$LI$() { NamesHolder_rf_model.__static_initialize(); if (NamesHolder_rf_model.VALUES == null) {
        NamesHolder_rf_model.VALUES = [null, null, null, null];
    } return NamesHolder_rf_model.VALUES; }
    static __static_initializer_0() {
        NamesHolder_rf_model.NamesHolder_rf_model_0.fill(NamesHolder_rf_model.VALUES_$LI$());
    }
}
NamesHolder_rf_model.__static_initialized = false;
NamesHolder_rf_model["__class"] = "NamesHolder_rf_model";
NamesHolder_rf_model["__interfaces"] = ["java.io.Serializable"];
(function (NamesHolder_rf_model) {
    class NamesHolder_rf_model_0 {
        static fill(sa) {
            sa[0] = "AGE";
            sa[1] = "RACE";
            sa[2] = "PSA";
            sa[3] = "GLEASON";
        }
        constructor() {
        }
    }
    NamesHolder_rf_model.NamesHolder_rf_model_0 = NamesHolder_rf_model_0;
    NamesHolder_rf_model_0["__class"] = "NamesHolder_rf_model.NamesHolder_rf_model_0";
    NamesHolder_rf_model_0["__interfaces"] = ["java.io.Serializable"];
})(NamesHolder_rf_model || (NamesHolder_rf_model = {}));
class rf_model_ColInfo_1 {
    constructor() {
    }
    static __static_initialize() { if (!rf_model_ColInfo_1.__static_initialized) {
        rf_model_ColInfo_1.__static_initialized = true;
        rf_model_ColInfo_1.__static_initializer_0();
    } }
    static VALUES_$LI$() { rf_model_ColInfo_1.__static_initialize(); if (rf_model_ColInfo_1.VALUES == null) {
        rf_model_ColInfo_1.VALUES = [null, null];
    } return rf_model_ColInfo_1.VALUES; }
    static __static_initializer_0() {
        rf_model_ColInfo_1.rf_model_ColInfo_1_0.fill(rf_model_ColInfo_1.VALUES_$LI$());
    }
}
rf_model_ColInfo_1.__static_initialized = false;
rf_model_ColInfo_1["__class"] = "rf_model_ColInfo_1";
rf_model_ColInfo_1["__interfaces"] = ["java.io.Serializable"];
(function (rf_model_ColInfo_1) {
    class rf_model_ColInfo_1_0 {
        static fill(sa) {
            sa[0] = "1";
            sa[1] = "2";
        }
        constructor() {
        }
    }
    rf_model_ColInfo_1.rf_model_ColInfo_1_0 = rf_model_ColInfo_1_0;
    rf_model_ColInfo_1_0["__class"] = "rf_model_ColInfo_1.rf_model_ColInfo_1_0";
    rf_model_ColInfo_1_0["__interfaces"] = ["java.io.Serializable"];
})(rf_model_ColInfo_1 || (rf_model_ColInfo_1 = {}));
class rf_model_ColInfo_4 {
    constructor() {
    }
    static __static_initialize() { if (!rf_model_ColInfo_4.__static_initialized) {
        rf_model_ColInfo_4.__static_initialized = true;
        rf_model_ColInfo_4.__static_initializer_0();
    } }
    static VALUES_$LI$() { rf_model_ColInfo_4.__static_initialize(); if (rf_model_ColInfo_4.VALUES == null) {
        rf_model_ColInfo_4.VALUES = [null, null];
    } return rf_model_ColInfo_4.VALUES; }
    static __static_initializer_0() {
        rf_model_ColInfo_4.rf_model_ColInfo_4_0.fill(rf_model_ColInfo_4.VALUES_$LI$());
    }
}
rf_model_ColInfo_4.__static_initialized = false;
rf_model_ColInfo_4["__class"] = "rf_model_ColInfo_4";
rf_model_ColInfo_4["__interfaces"] = ["java.io.Serializable"];
(function (rf_model_ColInfo_4) {
    class rf_model_ColInfo_4_0 {
        static fill(sa) {
            sa[0] = "0";
            sa[1] = "1";
        }
        constructor() {
        }
    }
    rf_model_ColInfo_4.rf_model_ColInfo_4_0 = rf_model_ColInfo_4_0;
    rf_model_ColInfo_4_0["__class"] = "rf_model_ColInfo_4.rf_model_ColInfo_4_0";
    rf_model_ColInfo_4_0["__interfaces"] = ["java.io.Serializable"];
})(rf_model_ColInfo_4 || (rf_model_ColInfo_4 = {}));
class rf_model_Forest_0 {
    static score0(fdata, preds) {
        preds[1] += rf_model_Tree_0_class_0.score0(fdata);
    }
}
rf_model_Forest_0["__class"] = "rf_model_Forest_0";
class rf_model_Tree_0_class_0 {
    static score0(data) {
        const pred = ( /* isNaN */isNaN(data[2]) || data[2] < 14.730078 ? (data[2] < 2.850629 ? (data[2] < 1.3511381 ? 1.0 : (data[3] < 5.5 ? 1.0 : ( /* isNaN */isNaN(data[2]) || data[2] < 2.5056999 ? 0.7419417 : 1.0))) : ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? (data[3] < 5.5 ? ( /* isNaN */isNaN(data[1]) || !GenModel.bitSetIsInRange(32, 0, data[1]) || (GenModel.bitSetIsInRange(32, 0, data[1]) && !GenModel.bitSetContains(rf_model_Tree_0_class_0.GRPSPLIT0_$LI$(), 32, 0, data[1])) ? 0.89825153 : 1.0) : (data[2] < 6.5535574 ? 0.81642 : 0.6561936)) : (data[2] < 7.942156 ? ( /* isNaN */isNaN(data[2]) || data[2] < 7.3368864 ? 0.39099795 : 0.0) : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? 0.65624183 : 0.34012538)))) : (data[3] < 6.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 38.462696 ? ( /* isNaN */isNaN(data[2]) || data[2] < 27.924421 ? (data[0] < 62.5 ? 0.0 : 0.75782496) : 1.0) : ( /* isNaN */isNaN(data[2]) || data[2] < 59.792397 ? 0.0 : 1.0)) : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? ( /* isNaN */isNaN(data[1]) || !GenModel.bitSetIsInRange(32, 0, data[1]) || (GenModel.bitSetIsInRange(32, 0, data[1]) && !GenModel.bitSetContains(rf_model_Tree_0_class_0.GRPSPLIT1_$LI$(), 32, 0, data[1])) ? ( /* isNaN */isNaN(data[0]) || data[0] < 70.5 ? 0.17277394 : 0.5459155) : ( /* isNaN */isNaN(data[2]) || data[2] < 63.58906 ? 0.50365525 : 1.0)) : (data[0] < 65.5 ? 0.0 : (data[2] < 18.703125 ? 1.0 : 0.0)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (rf_model_Tree_0_class_0.GRPSPLIT0 == null) {
        rf_model_Tree_0_class_0.GRPSPLIT0 = [2, 0, 0, 0];
    } return rf_model_Tree_0_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (rf_model_Tree_0_class_0.GRPSPLIT1 == null) {
        rf_model_Tree_0_class_0.GRPSPLIT1 = [2, 0, 0, 0];
    } return rf_model_Tree_0_class_0.GRPSPLIT1; }
}
rf_model_Tree_0_class_0["__class"] = "rf_model_Tree_0_class_0";
class rf_model_Forest_1 {
    static score0(fdata, preds) {
        preds[1] += rf_model_Tree_1_class_0.score0(fdata);
    }
}
rf_model_Forest_1["__class"] = "rf_model_Forest_1";
class rf_model_Tree_1_class_0 {
    static score0(data) {
        const pred = (data[0] < 60.5 ? (data[2] < 6.2898436 ? ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 4.0844755 ? 1.0 : ( /* isNaN */isNaN(data[2]) || data[2] < 5.4397335 ? 0.6659619 : 1.0)) : (data[2] < 3.1455564 ? 0.0 : ( /* isNaN */isNaN(data[2]) || data[2] < 5.082266 ? 0.51445967 : 1.0))) : (data[3] < 5.5 ? 1.0 : (data[3] < 6.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 35.282146 ? 0.46011534 : 0.0) : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? 0.21716766 : 0.0)))) : ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 38.417187 ? (data[3] < 5.5 ? (data[0] < 61.5 ? 0.5015432 : 0.9130482) : (data[0] < 62.5 ? 0.63596886 : 0.77886015)) : ( /* isNaN */isNaN(data[2]) || data[2] < 57.706013 ? 0.0 : 1.0)) : ( /* isNaN */isNaN(data[2]) || data[2] < 15.002344 ? ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? (data[0] < 62.5 ? 0.24203338 : 0.5945421) : ( /* isNaN */isNaN(data[0]) || data[0] < 76.5 ? 0.19695123 : 1.0)) : ( /* isNaN */isNaN(data[0]) || data[0] < 73.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 33.512154 ? 0.3216413 : 0.08292001) : (data[2] < 19.873346 ? 0.0 : 0.661868)))));
        return pred;
    }
}
rf_model_Tree_1_class_0["__class"] = "rf_model_Tree_1_class_0";
class rf_model_Forest_2 {
    static score0(fdata, preds) {
        preds[1] += rf_model_Tree_2_class_0.score0(fdata);
    }
}
rf_model_Forest_2["__class"] = "rf_model_Forest_2";
class rf_model_Tree_2_class_0 {
    static score0(data) {
        const pred = ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 38.55332 ? (!isNaN(data[1]) && (GenModel.bitSetIsInRange(32, 0, data[1]) && !GenModel.bitSetContains(rf_model_Tree_2_class_0.GRPSPLIT0_$LI$(), 32, 0, data[1])) ? (data[2] < 5.9782276 ? (data[3] < 5.5 ? 1.0 : 0.8230654) : (data[3] < 5.5 ? 0.83653766 : 0.6464309)) : ( /* isNaN */isNaN(data[2]) || data[2] < 9.564476 ? 1.0 : (data[0] < 68.5 ? 0.6519453 : 1.0))) : ( /* isNaN */isNaN(data[2]) || data[2] < 59.799477 ? 0.0 : 1.0)) : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 66.73281 ? (data[0] < 66.5 ? (data[0] < 51.5 ? 1.0 : 0.30495015) : ( /* isNaN */isNaN(data[2]) || data[2] < 13.554375 ? 0.65050787 : 0.41581956)) : 0.0) : (data[0] < 66.5 ? (data[2] < 7.3789062 ? 1.0 : 0.0) : (data[0] < 67.5 ? 1.0 : ( /* isNaN */isNaN(data[0]) || data[0] < 76.5 ? 0.17796491 : 0.5086614)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (rf_model_Tree_2_class_0.GRPSPLIT0 == null) {
        rf_model_Tree_2_class_0.GRPSPLIT0 = [2, 0, 0, 0];
    } return rf_model_Tree_2_class_0.GRPSPLIT0; }
}
rf_model_Tree_2_class_0["__class"] = "rf_model_Tree_2_class_0";
class rf_model_Forest_3 {
    static score0(fdata, preds) {
        preds[1] += rf_model_Tree_3_class_0.score0(fdata);
    }
}
rf_model_Forest_3["__class"] = "rf_model_Forest_3";
class rf_model_Tree_3_class_0 {
    static score0(data) {
        const pred = ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? (data[3] < 5.5 ? (data[2] < 5.7453127 ? 1.0 : (data[2] < 6.158667 ? 0.0 : ( /* isNaN */isNaN(data[2]) || data[2] < 17.55175 ? 0.9084882 : 0.70542985))) : ( /* isNaN */isNaN(data[2]) || data[2] < 38.417187 ? ( /* isNaN */isNaN(data[2]) || data[2] < 6.553601 ? (data[0] < 54.5 ? 1.0 : 0.81479037) : (data[2] < 9.014201 ? 0.5451915 : 0.7678115)) : ( /* isNaN */isNaN(data[2]) || data[2] < 59.78884 ? 0.0 : 1.0))) : (data[2] < 14.730078 ? ( /* isNaN */isNaN(data[2]) || data[2] < 7.9312882 ? (data[2] < 2.9503222 ? 1.0 : ( /* isNaN */isNaN(data[2]) || data[2] < 7.3586287 ? 0.39110488 : 0.0)) : (data[2] < 8.539414 ? 1.0 : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? 0.6242069 : 0.3283433))) : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? (data[2] < 21.564371 ? ( /* isNaN */isNaN(data[0]) || data[0] < 68.0 ? 0.19867413 : 0.0) : ( /* isNaN */isNaN(data[0]) || data[0] < 70.5 ? 0.3134182 : 0.87738854)) : (data[0] < 65.5 ? 0.0 : (data[2] < 18.635387 ? 1.0 : 0.0)))));
        return pred;
    }
}
rf_model_Tree_3_class_0["__class"] = "rf_model_Tree_3_class_0";
class rf_model_Forest_4 {
    static score0(fdata, preds) {
        preds[1] += rf_model_Tree_4_class_0.score0(fdata);
    }
}
rf_model_Forest_4["__class"] = "rf_model_Forest_4";
class rf_model_Tree_4_class_0 {
    static score0(data) {
        const pred = ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? (data[3] < 5.5 ? (data[2] < 5.7453127 ? 1.0 : (data[2] < 6.158667 ? 0.0 : ( /* isNaN */isNaN(data[0]) || data[0] < 68.5 ? 0.9552554 : 0.7739901))) : ( /* isNaN */isNaN(data[2]) || data[2] < 38.417187 ? ( /* isNaN */isNaN(data[2]) || data[2] < 6.553601 ? (data[2] < 1.3259814 ? 1.0 : 0.8140716) : (data[2] < 9.014201 ? 0.5475475 : 0.7632063)) : (data[0] < 63.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 59.78884 ? 0.0 : 1.0) : 0.0))) : (data[2] < 14.730078 ? (data[0] < 63.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 12.892567 ? (data[0] < 56.5 ? 0.50311524 : 0.07659774) : 1.0) : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? (data[2] < 3.180011 ? 1.0 : 0.56508213) : ( /* isNaN */isNaN(data[0]) || data[0] < 76.5 ? 0.20980194 : 1.0))) : ( /* isNaN */isNaN(data[2]) || data[2] < 66.9636 ? ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? (data[2] < 21.32045 ? 0.13040559 : 0.55349) : (data[2] < 18.87528 ? 0.5208648 : 0.0)) : 0.0)));
        return pred;
    }
}
rf_model_Tree_4_class_0["__class"] = "rf_model_Tree_4_class_0";
class rf_model_Forest_5 {
    static score0(fdata, preds) {
        preds[1] += rf_model_Tree_5_class_0.score0(fdata);
    }
}
rf_model_Forest_5["__class"] = "rf_model_Forest_5";
class rf_model_Tree_5_class_0 {
    static score0(data) {
        const pred = ( /* isNaN */isNaN(data[2]) || data[2] < 14.730078 ? ( /* isNaN */isNaN(data[0]) || data[0] < 72.5 ? ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 6.5567913 ? ( /* isNaN */isNaN(data[0]) || data[0] < 71.5 ? 0.88208765 : 0.0) : (data[0] < 59.5 ? 0.59481186 : 0.7889378)) : ( /* isNaN */isNaN(data[2]) || data[2] < 10.897088 ? (data[2] < 3.0162737 ? 1.0 : 0.40470117) : (data[0] < 62.5 ? 0.50725746 : 0.76900935))) : (data[2] < 3.4565794 ? 1.0 : ( /* isNaN */isNaN(data[0]) || data[0] < 75.5 ? (data[2] < 7.245621 ? 0.0 : 0.5242647) : ( /* isNaN */isNaN(data[2]) || data[2] < 11.364145 ? 0.7871451 : 0.0)))) : ( /* isNaN */isNaN(data[0]) || data[0] < 72.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 34.012547 ? ( /* isNaN */isNaN(data[2]) || data[2] < 31.686028 ? (data[0] < 61.5 ? 0.12705791 : 0.41602165) : 1.0) : (data[0] < 54.5 ? 1.0 : ( /* isNaN */isNaN(data[2]) || data[2] < 67.03988 ? 0.15376426 : 0.0))) : (data[2] < 16.926815 ? 0.0 : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 55.978905 ? 0.8855548 : 0.0) : 0.0))));
        return pred;
    }
}
rf_model_Tree_5_class_0["__class"] = "rf_model_Tree_5_class_0";
class rf_model_Forest_6 {
    static score0(fdata, preds) {
        preds[1] += rf_model_Tree_6_class_0.score0(fdata);
    }
}
rf_model_Forest_6["__class"] = "rf_model_Forest_6";
class rf_model_Tree_6_class_0 {
    static score0(data) {
        const pred = ( /* isNaN */isNaN(data[2]) || data[2] < 14.730078 ? (data[2] < 2.850629 ? (data[2] < 1.3511381 ? 1.0 : (data[0] < 61.5 ? 1.0 : (data[0] < 64.5 ? 0.4973262 : 0.89153314))) : ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? (data[3] < 5.5 ? (data[2] < 5.8129716 ? 1.0 : 0.87651587) : (data[0] < 55.5 ? 0.44413486 : 0.76065093)) : (!isNaN(data[1]) && (GenModel.bitSetIsInRange(32, 0, data[1]) && !GenModel.bitSetContains(rf_model_Tree_6_class_0.GRPSPLIT0_$LI$(), 32, 0, data[1])) ? 0.2012012 : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? 0.514484 : 0.34402257)))) : (data[3] < 6.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 38.462696 ? ( /* isNaN */isNaN(data[1]) || !GenModel.bitSetIsInRange(32, 0, data[1]) || (GenModel.bitSetIsInRange(32, 0, data[1]) && !GenModel.bitSetContains(rf_model_Tree_6_class_0.GRPSPLIT1_$LI$(), 32, 0, data[1])) ? ( /* isNaN */isNaN(data[2]) || data[2] < 27.924421 ? 0.67186284 : 1.0) : 1.0) : ( /* isNaN */isNaN(data[2]) || data[2] < 59.792397 ? 0.0 : 1.0)) : ( /* isNaN */isNaN(data[2]) || data[2] < 67.004295 ? ( /* isNaN */isNaN(data[2]) || data[2] < 64.149376 ? ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? 0.3378701 : 0.1159581) : 1.0) : 0.0)));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (rf_model_Tree_6_class_0.GRPSPLIT0 == null) {
        rf_model_Tree_6_class_0.GRPSPLIT0 = [1, 0, 0, 0];
    } return rf_model_Tree_6_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (rf_model_Tree_6_class_0.GRPSPLIT1 == null) {
        rf_model_Tree_6_class_0.GRPSPLIT1 = [2, 0, 0, 0];
    } return rf_model_Tree_6_class_0.GRPSPLIT1; }
}
rf_model_Tree_6_class_0["__class"] = "rf_model_Tree_6_class_0";
class rf_model_Forest_7 {
    static score0(fdata, preds) {
        preds[1] += rf_model_Tree_7_class_0.score0(fdata);
    }
}
rf_model_Forest_7["__class"] = "rf_model_Forest_7";
class rf_model_Tree_7_class_0 {
    static score0(data) {
        const pred = ( /* isNaN */isNaN(data[2]) || data[2] < 14.730078 ? (data[2] < 2.850629 ? (data[3] < 5.5 ? 1.0 : ( /* isNaN */isNaN(data[2]) || data[2] < 2.5019102 ? (data[2] < 1.3321455 ? 1.0 : 0.74152786) : 1.0)) : (data[0] < 61.5 ? (data[2] < 6.368411 ? ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? 0.8302636 : 0.4120511) : (data[2] < 7.862821 ? 0.2010468 : 0.61782235)) : ( /* isNaN */isNaN(data[0]) || data[0] < 72.5 ? (data[0] < 67.5 ? 0.7819603 : 0.69164675) : ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? 0.714094 : 0.4190198)))) : (data[3] < 6.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 38.6501 ? (data[0] < 63.0 ? 0.0 : ( /* isNaN */isNaN(data[2]) || data[2] < 24.423866 ? 0.7073945 : 1.0)) : (data[0] < 63.0 ? 0.50385207 : 0.0)) : ( /* isNaN */isNaN(data[0]) || data[0] < 71.0 ? ( /* isNaN */isNaN(data[1]) || !GenModel.bitSetIsInRange(32, 0, data[1]) || (GenModel.bitSetIsInRange(32, 0, data[1]) && !GenModel.bitSetContains(rf_model_Tree_7_class_0.GRPSPLIT0_$LI$(), 32, 0, data[1])) ? ( /* isNaN */isNaN(data[2]) || data[2] < 22.540697 ? 0.25024727 : 0.03833314) : ( /* isNaN */isNaN(data[2]) || data[2] < 75.26238 ? 0.45994905 : 0.0)) : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? (data[2] < 19.611715 ? 0.0 : 0.7808778) : (data[2] < 20.588043 ? 1.0 : 0.0)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (rf_model_Tree_7_class_0.GRPSPLIT0 == null) {
        rf_model_Tree_7_class_0.GRPSPLIT0 = [2, 0, 0, 0];
    } return rf_model_Tree_7_class_0.GRPSPLIT0; }
}
rf_model_Tree_7_class_0["__class"] = "rf_model_Tree_7_class_0";
class rf_model_Forest_8 {
    static score0(fdata, preds) {
        preds[1] += rf_model_Tree_8_class_0.score0(fdata);
    }
}
rf_model_Forest_8["__class"] = "rf_model_Forest_8";
class rf_model_Tree_8_class_0 {
    static score0(data) {
        const pred = ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 38.55332 ? (data[3] < 5.5 ? ( /* isNaN */isNaN(data[1]) || !GenModel.bitSetIsInRange(32, 0, data[1]) || (GenModel.bitSetIsInRange(32, 0, data[1]) && !GenModel.bitSetContains(rf_model_Tree_8_class_0.GRPSPLIT0_$LI$(), 32, 0, data[1])) ? (data[2] < 5.6793733 ? 1.0 : 0.8369665) : 1.0) : ( /* isNaN */isNaN(data[2]) || data[2] < 6.575936 ? (data[0] < 54.5 ? 1.0 : 0.8160717) : (data[0] < 55.5 ? 0.3795227 : 0.7024933))) : ( /* isNaN */isNaN(data[2]) || data[2] < 59.799477 ? 0.0 : 1.0)) : (data[2] < 14.730078 ? ( /* isNaN */isNaN(data[2]) || data[2] < 7.9312882 ? (data[0] < 68.5 ? (data[0] < 56.5 ? 0.5023112 : 0.20491274) : ( /* isNaN */isNaN(data[0]) || data[0] < 72.5 ? 0.6657765 : 0.13976556)) : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? (data[0] < 61.5 ? 0.37948394 : 0.69860077) : ( /* isNaN */isNaN(data[3]) || data[3] < 8.5 ? 0.39492753 : 0.0))) : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? ( /* isNaN */isNaN(data[0]) || data[0] < 70.5 ? ( /* isNaN */isNaN(data[1]) || !GenModel.bitSetIsInRange(32, 0, data[1]) || (GenModel.bitSetIsInRange(32, 0, data[1]) && !GenModel.bitSetContains(rf_model_Tree_8_class_0.GRPSPLIT1_$LI$(), 32, 0, data[1])) ? 0.16594733 : 0.55892485) : (data[2] < 19.495312 ? 0.0 : 0.7786494)) : (data[0] < 65.5 ? 0.0 : (data[2] < 18.703125 ? 1.0 : 0.0)))));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (rf_model_Tree_8_class_0.GRPSPLIT0 == null) {
        rf_model_Tree_8_class_0.GRPSPLIT0 = [2, 0, 0, 0];
    } return rf_model_Tree_8_class_0.GRPSPLIT0; }
    static GRPSPLIT1_$LI$() { if (rf_model_Tree_8_class_0.GRPSPLIT1 == null) {
        rf_model_Tree_8_class_0.GRPSPLIT1 = [2, 0, 0, 0];
    } return rf_model_Tree_8_class_0.GRPSPLIT1; }
}
rf_model_Tree_8_class_0["__class"] = "rf_model_Tree_8_class_0";
class rf_model_Forest_9 {
    static score0(fdata, preds) {
        preds[1] += rf_model_Tree_9_class_0.score0(fdata);
    }
}
rf_model_Forest_9["__class"] = "rf_model_Forest_9";
class rf_model_Tree_9_class_0 {
    static score0(data) {
        const pred = ( /* isNaN */isNaN(data[2]) || data[2] < 14.730078 ? (data[2] < 2.850629 ? (data[3] < 5.5 ? 1.0 : (data[0] < 60.5 ? 1.0 : (data[2] < 1.3546875 ? 1.0 : 0.77213085))) : ( /* isNaN */isNaN(data[3]) || data[3] < 6.5 ? (data[2] < 5.951832 ? (data[3] < 5.5 ? 1.0 : 0.8194202) : (data[2] < 6.082272 ? 0.0 : 0.7532519)) : (data[2] < 7.942156 ? ( /* isNaN */isNaN(data[2]) || data[2] < 7.3368864 ? 0.3934165 : 0.0) : ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? 0.6608058 : 0.33520982)))) : ( /* isNaN */isNaN(data[2]) || data[2] < 66.84156 ? (data[3] < 6.5 ? ( /* isNaN */isNaN(data[2]) || data[2] < 38.584618 ? (data[0] < 63.0 ? 0.0 : 0.7906787) : (data[0] < 63.0 ? 0.49380806 : 0.0)) : ( /* isNaN */isNaN(data[1]) || !GenModel.bitSetIsInRange(32, 0, data[1]) || (GenModel.bitSetIsInRange(32, 0, data[1]) && !GenModel.bitSetContains(rf_model_Tree_9_class_0.GRPSPLIT0_$LI$(), 32, 0, data[1])) ? ( /* isNaN */isNaN(data[3]) || data[3] < 7.5 ? 0.2946013 : 0.13045815) : ( /* isNaN */isNaN(data[2]) || data[2] < 63.588963 ? 0.39701855 : 1.0))) : 0.0));
        return pred;
    }
    static GRPSPLIT0_$LI$() { if (rf_model_Tree_9_class_0.GRPSPLIT0 == null) {
        rf_model_Tree_9_class_0.GRPSPLIT0 = [2, 0, 0, 0];
    } return rf_model_Tree_9_class_0.GRPSPLIT0; }
}
rf_model_Tree_9_class_0["__class"] = "rf_model_Tree_9_class_0";
rf_model_Tree_9_class_0.GRPSPLIT0_$LI$();
rf_model_Tree_8_class_0.GRPSPLIT1_$LI$();
rf_model_Tree_8_class_0.GRPSPLIT0_$LI$();
rf_model_Tree_7_class_0.GRPSPLIT0_$LI$();
rf_model_Tree_6_class_0.GRPSPLIT1_$LI$();
rf_model_Tree_6_class_0.GRPSPLIT0_$LI$();
rf_model_Tree_2_class_0.GRPSPLIT0_$LI$();
rf_model_Tree_0_class_0.GRPSPLIT1_$LI$();
rf_model_Tree_0_class_0.GRPSPLIT0_$LI$();
rf_model_ColInfo_4.VALUES_$LI$();
rf_model_ColInfo_4.__static_initialize();
rf_model_ColInfo_1.VALUES_$LI$();
rf_model_ColInfo_1.__static_initialize();
NamesHolder_rf_model.VALUES_$LI$();
NamesHolder_rf_model.__static_initialize();
rf_model.MODEL_CLASS_DISTRIB_$LI$();
rf_model.PRIOR_CLASS_DISTRIB_$LI$();
rf_model.DOMAINS_$LI$();
rf_model.NAMES_$LI$();
exports.rf_model=rf_model;
