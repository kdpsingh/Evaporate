(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
exports.GenModel=GenModel;

},{}],2:[function(require,module,exports){
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

},{"./GenModel.js":1}],3:[function(require,module,exports){
const {glm_model} = require("./classes/glm_model");
document.getElementById("h2oCalc").addEventListener("click", h2o_calculate);

function h2o_calculate() {
	let m = new glm_model();
	pred = new Array(3).fill(0);

	var race = document.getElementById("race").value;
	var age = document.getElementById("age").value;
	var psa = document.getElementById("psa").value;
	var gleason = document.getElementById("gleason").value;

	race = parseFloat(race);
	age = parseFloat(age);
	psa = parseFloat(psa);
	gleason = parseFloat(gleason);

	input = [race, age, psa, gleason];
	p = m.score0(input, pred);

	document.getElementById("pr").innerHTML = "predict: " + p[0];
	document.getElementById("p0").innerHTML = "p0: " + p[1];
	document.getElementById("p1").innerHTML = "p1: " + p[2];
}

},{"./classes/glm_model":2}]},{},[3]);
