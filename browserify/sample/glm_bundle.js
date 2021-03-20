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
glm_model_ColInfo_4.VALUES_$LI$();
glm_model_ColInfo_4.__static_initialize();
glm_model_ColInfo_0.VALUES_$LI$();
glm_model_ColInfo_0.__static_initialize();
NamesHolder_glm_model.VALUES_$LI$();
NamesHolder_glm_model.__static_initialize();
glm_model.CAT_MODES.VALUES_$LI$();
glm_model.CAT_MODES.__static_initialize();
glm_model.NUM_MEANS.VALUES_$LI$();
glm_model.NUM_MEANS.__static_initialize();
glm_model.BETA.VALUES_$LI$();
glm_model.BETA.__static_initialize();
glm_model.CATOFFS_$LI$();
glm_model.DOMAINS_$LI$();
glm_model.NAMES_$LI$();

// To Karandeep:
// Feel free to comment this line out
exports.glm_model=glm_model;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImdsbV9tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvKiBHZW5lcmF0ZWQgZnJvbSBKYXZhIHdpdGggSlN3ZWV0IDMuMC4wIC0gaHR0cDovL3d3dy5qc3dlZXQub3JnICovXG4vKipcbiAqICcnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnXG4gKiBKQUtFJ1MgRURJVFMgKFJFTU9WRUQgTU9TVCBDQUxMUyBUTyBIMk8gQ0xBU1NFUyEhKVxuICogJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJydcbiAqIFRoaXMgaXMgYSBoZWxwZXIgY2xhc3MgdG8gc3VwcG9ydCBKYXZhIGdlbmVyYXRlZCBtb2RlbHMuXG4gKiBAY2xhc3NcbiAqL1xuY2xhc3MgR2VuTW9kZWwge1xuICAgIHN0YXRpYyBjb3JyZWN0UHJvYmFiaWxpdGllcyhzY29yZWQsIHByaW9yQ2xhc3NEaXN0LCBtb2RlbENsYXNzRGlzdCkge1xuICAgICAgICBsZXQgcHJvYnN1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGMgPSAxOyBjIDwgc2NvcmVkLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxfZnJhY3Rpb24gPSBwcmlvckNsYXNzRGlzdFtjIC0gMV07XG4gICAgICAgICAgICAgICAgY29uc3Qgb3ZlcnNhbXBsZWRfZnJhY3Rpb24gPSBtb2RlbENsYXNzRGlzdFtjIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsX2ZyYWN0aW9uICE9PSAwICYmIG92ZXJzYW1wbGVkX2ZyYWN0aW9uICE9PSAwKVxuICAgICAgICAgICAgICAgICAgICBzY29yZWRbY10gKj0gb3JpZ2luYWxfZnJhY3Rpb24gLyBvdmVyc2FtcGxlZF9mcmFjdGlvbjtcbiAgICAgICAgICAgICAgICBwcm9ic3VtICs9IHNjb3JlZFtjXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvYnN1bSA+IDApXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHNjb3JlZC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIHNjb3JlZFtpXSAvPSBwcm9ic3VtO1xuICAgICAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2NvcmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGdldCBhIGJlc3QgcHJlZGljdGlvbiBmcm9tIGFuIGFycmF5IG9mIGNsYXNzXG4gICAgICogcHJlZGljdGlvbiBkaXN0cmlidXRpb24uICBJdCByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbWF4LiBwcm9iYWJpbGl0eSAoaWYgdGhhdCBleGlzdHMpLlxuICAgICAqIEluIHRoZSBjYXNlIG9mIHRpZXMsIGl0IHNhbXBsZXMgZnJvbSB0aGUgdGllZCBjbGFzc2VzIHdpdGggdGhlIGxpa2VsaWhvb2QgZ2l2ZW4gYnkgdGhlIHByaW9yIHByb2JhYmlsaXRpZXMuXG4gICAgICogQHBhcmFtIHtkb3VibGVbXX0gcHJlZHMgYW4gYXJyYXkgb2YgcHJlZGljdGlvbiBkaXN0cmlidXRpb24uICBMZW5ndGggb2YgYXJyYXlzIGlzIGVxdWFsIHRvIGEgbnVtYmVyIG9mIGNsYXNzZXMrMS5cbiAgICAgKiBAcGFyYW0ge2RvdWJsZVtdfSBwcmlvckNsYXNzRGlzdCBwcmlvciBjbGFzcyBwcm9iYWJpbGl0aWVzICh1c2VkIHRvIGJyZWFrIHRpZXMpXG4gICAgICogQHBhcmFtIHtkb3VibGVbXX0gZGF0YSBUZXN0IGRhdGFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGhyZXNob2xkIHRocmVzaG9sZCBmb3IgYmluYXJ5IGNsYXNzaWZpZXJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IHRoZSBiZXN0IHByZWRpY3Rpb24gKGluZGV4IG9mIGNsYXNzLCB6ZXJvLWJhc2VkKVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRQcmVkaWN0aW9uKHByZWRzLCBwcmlvckNsYXNzRGlzdCwgZGF0YSwgdGhyZXNob2xkKSB7XG4gICAgICAgIGlmIChwcmVkcy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIHJldHVybiBHZW5Nb2RlbC5nZXRQcmVkaWN0aW9uQmlub21pYWwocHJlZHMsIHRocmVzaG9sZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gR2VuTW9kZWwuZ2V0UHJlZGljdGlvbk11bHRpbm9taWFsKHByZWRzLCBwcmlvckNsYXNzRGlzdCwgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGdldFByZWRpY3Rpb25CaW5vbWlhbChwcmVkcywgdGhyZXNob2xkKSB7XG4gICAgICAgIHJldHVybiAocHJlZHNbMl0gPj0gdGhyZXNob2xkKSA/IDEgOiAwO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0UHJlZGljdGlvbk11bHRpbm9taWFsKHByZWRzLCBwcmlvckNsYXNzRGlzdCwgZGF0YSkge1xuICAgICAgICBjb25zdCB0aWVzID0gKFtdKTtcbiAgICAgICAgdGllcy5wdXNoKDApO1xuICAgICAgICBsZXQgYmVzdCA9IDE7XG4gICAgICAgIGxldCB0aWVDbnQgPSAwO1xuICAgICAgICBmb3IgKGxldCBjID0gMjsgYyA8IHByZWRzLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHByZWRzW2Jlc3RdIDwgcHJlZHNbY10pIHtcbiAgICAgICAgICAgICAgICAgICAgYmVzdCA9IGM7XG4gICAgICAgICAgICAgICAgICAgIHRpZUNudCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByZWRzW2Jlc3RdID09PSBwcmVkc1tjXSkge1xuICAgICAgICAgICAgICAgICAgICB0aWVDbnQrKztcbiAgICAgICAgICAgICAgICAgICAgdGllcy5wdXNoKGMgLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpZUNudCA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiBiZXN0IC0gMTtcbiAgICAgICAgbGV0IGhhc2ggPSAwO1xuICAgICAgICBpZiAoZGF0YSAhPSBudWxsKVxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXgxMjEgPSAwOyBpbmRleDEyMSA8IGRhdGEubGVuZ3RoOyBpbmRleDEyMSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGQgPSBkYXRhW2luZGV4MTIxXTtcbiAgICAgICAgICAgICAgICBoYXNoIF49IChmdW5jdGlvbiAoZikgeyB2YXIgYnVmID0gbmV3IEFycmF5QnVmZmVyKDQpOyAobmV3IEZsb2F0MzJBcnJheShidWYpKVswXSA9IGY7IHJldHVybiAobmV3IFVpbnQzMkFycmF5KGJ1ZikpWzBdOyB9KShNYXRoLmZyb3VuZChkKSkgPj4gNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yQ2xhc3NEaXN0ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXgxMjIgPSB0aWVzLml0ZXJhdG9yKCk7IGluZGV4MTIyLmhhc05leHQoKTspIHtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGluZGV4MTIyLm5leHQoKTtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN1bSArPSBwcmlvckNsYXNzRGlzdFtpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBybmcgPSBuZXcgamF2YS51dGlsLlJhbmRvbShoYXNoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpZSA9IHJuZy5uZXh0RG91YmxlKCk7XG4gICAgICAgICAgICBsZXQgcGFydGlhbFN1bSA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleDEyMyA9IHRpZXMuaXRlcmF0b3IoKTsgaW5kZXgxMjMuaGFzTmV4dCgpOykge1xuICAgICAgICAgICAgICAgIGxldCBpID0gaW5kZXgxMjMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbFN1bSArPSBwcmlvckNsYXNzRGlzdFtpXSAvIHN1bTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpZSA8PSBwYXJ0aWFsU3VtKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlcyA9IHByZWRzW2Jlc3RdO1xuICAgICAgICBsZXQgaWR4ID0gKGhhc2ggfCAwKSAlICh0aWVDbnQgKyAxKTtcbiAgICAgICAgZm9yIChiZXN0ID0gMTsgYmVzdCA8IHByZWRzLmxlbmd0aDsgYmVzdCsrKSB7XG4gICAgICAgICAgICBpZiAocmVzID09PSBwcmVkc1tiZXN0XSAmJiAtLWlkeCA8IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJlc3QgLSAxO1xuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBqYXZhLmxhbmcuUnVudGltZUV4Y2VwdGlvbihcIlNob3VsZCBOb3QgUmVhY2ggSGVyZVwiKTtcbiAgICB9XG4gICAgc3RhdGljIGJpdFNldENvbnRhaW5zKGJpdHMsIG5iaXRzLCBiaXRvZmYsIGRudW0pIHtcbiAgICAgICAgbGV0IGlkeCA9IChkbnVtIHwgMCk7XG4gICAgICAgIGlkeCAtPSBiaXRvZmY7XG4gICAgICAgIHJldHVybiAoYml0c1tpZHggPj4gM10gJiAoKDEgfCAwKSA8PCAoaWR4ICYgNykpKSAhPT0gMDtcbiAgICB9XG4gICAgc3RhdGljIGJpdFNldElzSW5SYW5nZShuYml0cywgYml0b2ZmLCBkbnVtKSB7XG4gICAgICAgIGxldCBpZHggPSAoZG51bSB8IDApO1xuICAgICAgICBpZHggLT0gYml0b2ZmO1xuICAgICAgICByZXR1cm4gKGlkeCA+PSAwICYmIGlkeCA8IG5iaXRzKTtcbiAgICB9XG4gICAgc3RhdGljIEttZWFuc19wcmVwcm9jZXNzRGF0YSRkb3VibGVfQSRkb3VibGVfQSRkb3VibGVfQSRpbnRfQShkYXRhLCBtZWFucywgbXVsdHMsIG1vZGVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBHZW5Nb2RlbC5LbWVhbnNfcHJlcHJvY2Vzc0RhdGEkZG91YmxlJGludCRkb3VibGVfQSRkb3VibGVfQSRpbnRfQShkYXRhW2ldLCBpLCBtZWFucywgbXVsdHMsIG1vZGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgS21lYW5zX3ByZXByb2Nlc3NEYXRhJGRvdWJsZSRpbnQkZG91YmxlX0EkZG91YmxlX0EkaW50X0EoZCwgaSwgbWVhbnMsIG11bHRzLCBtb2Rlcykge1xuICAgICAgICBpZiAobW9kZXNbaV0gPT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoIC8qIGlzTmFOICovaXNOYU4oZCkpXG4gICAgICAgICAgICAgICAgZCA9IG1lYW5zW2ldO1xuICAgICAgICAgICAgaWYgKG11bHRzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkIC09IG1lYW5zW2ldO1xuICAgICAgICAgICAgICAgIGQgKj0gbXVsdHNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoIC8qIGlzTmFOICovaXNOYU4oZCkpXG4gICAgICAgICAgICAgICAgZCA9IG1vZGVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBzdGF0aWMgS21lYW5zX3ByZXByb2Nlc3NEYXRhKGQsIGksIG1lYW5zLCBtdWx0cywgbW9kZXMpIHtcbiAgICAgICAgaWYgKCgodHlwZW9mIGQgPT09ICdudW1iZXInKSB8fCBkID09PSBudWxsKSAmJiAoKHR5cGVvZiBpID09PSAnbnVtYmVyJykgfHwgaSA9PT0gbnVsbCkgJiYgKChtZWFucyAhPSBudWxsICYmIG1lYW5zIGluc3RhbmNlb2YgQXJyYXkgJiYgKG1lYW5zLmxlbmd0aCA9PSAwIHx8IG1lYW5zWzBdID09IG51bGwgfHwgKHR5cGVvZiBtZWFuc1swXSA9PT0gJ251bWJlcicpKSkgfHwgbWVhbnMgPT09IG51bGwpICYmICgobXVsdHMgIT0gbnVsbCAmJiBtdWx0cyBpbnN0YW5jZW9mIEFycmF5ICYmIChtdWx0cy5sZW5ndGggPT0gMCB8fCBtdWx0c1swXSA9PSBudWxsIHx8ICh0eXBlb2YgbXVsdHNbMF0gPT09ICdudW1iZXInKSkpIHx8IG11bHRzID09PSBudWxsKSAmJiAoKG1vZGVzICE9IG51bGwgJiYgbW9kZXMgaW5zdGFuY2VvZiBBcnJheSAmJiAobW9kZXMubGVuZ3RoID09IDAgfHwgbW9kZXNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIG1vZGVzWzBdID09PSAnbnVtYmVyJykpKSB8fCBtb2RlcyA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBHZW5Nb2RlbC5LbWVhbnNfcHJlcHJvY2Vzc0RhdGEkZG91YmxlJGludCRkb3VibGVfQSRkb3VibGVfQSRpbnRfQShkLCBpLCBtZWFucywgbXVsdHMsIG1vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoKGQgIT0gbnVsbCAmJiBkIGluc3RhbmNlb2YgQXJyYXkgJiYgKGQubGVuZ3RoID09IDAgfHwgZFswXSA9PSBudWxsIHx8ICh0eXBlb2YgZFswXSA9PT0gJ251bWJlcicpKSkgfHwgZCA9PT0gbnVsbCkgJiYgKChpICE9IG51bGwgJiYgaSBpbnN0YW5jZW9mIEFycmF5ICYmIChpLmxlbmd0aCA9PSAwIHx8IGlbMF0gPT0gbnVsbCB8fCAodHlwZW9mIGlbMF0gPT09ICdudW1iZXInKSkpIHx8IGkgPT09IG51bGwpICYmICgobWVhbnMgIT0gbnVsbCAmJiBtZWFucyBpbnN0YW5jZW9mIEFycmF5ICYmIChtZWFucy5sZW5ndGggPT0gMCB8fCBtZWFuc1swXSA9PSBudWxsIHx8ICh0eXBlb2YgbWVhbnNbMF0gPT09ICdudW1iZXInKSkpIHx8IG1lYW5zID09PSBudWxsKSAmJiAoKG11bHRzICE9IG51bGwgJiYgbXVsdHMgaW5zdGFuY2VvZiBBcnJheSAmJiAobXVsdHMubGVuZ3RoID09IDAgfHwgbXVsdHNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIG11bHRzWzBdID09PSAnbnVtYmVyJykpKSB8fCBtdWx0cyA9PT0gbnVsbCkgJiYgbW9kZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIEdlbk1vZGVsLkttZWFuc19wcmVwcm9jZXNzRGF0YSRkb3VibGVfQSRkb3VibGVfQSRkb3VibGVfQSRpbnRfQShkLCBpLCBtZWFucywgbXVsdHMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBvdmVybG9hZCcpO1xuICAgIH1cbiAgICBzdGF0aWMgS01lYW5zX2Nsb3Nlc3QoY2VudGVycywgcG9pbnQsIGRvbWFpbnMpIHtcbiAgICAgICAgbGV0IG1pbiA9IC0xO1xuICAgICAgICBsZXQgbWluU3FyID0gamF2YWVtdWwuaW50ZXJuYWwuRG91YmxlSGVscGVyLk1BWF9WQUxVRTtcbiAgICAgICAgZm9yIChsZXQgY2x1c3RlciA9IDA7IGNsdXN0ZXIgPCBjZW50ZXJzLmxlbmd0aDsgY2x1c3RlcisrKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3FyID0gR2VuTW9kZWwuS01lYW5zX2Rpc3RhbmNlJGRvdWJsZV9BJGRvdWJsZV9BJGphdmFfbGFuZ19TdHJpbmdfQV9BKGNlbnRlcnNbY2x1c3Rlcl0sIHBvaW50LCBkb21haW5zKTtcbiAgICAgICAgICAgICAgICBpZiAoc3FyIDwgbWluU3FyKSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbiA9IGNsdXN0ZXI7XG4gICAgICAgICAgICAgICAgICAgIG1pblNxciA9IHNxcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbjtcbiAgICB9XG4gICAgc3RhdGljIEtNZWFuc19kaXN0YW5jZXMoY2VudGVycywgcG9pbnQsIGRvbWFpbnMsIGRpc3RhbmNlcykge1xuICAgICAgICBsZXQgbWluID0gLTE7XG4gICAgICAgIGxldCBtaW5TcXIgPSBqYXZhZW11bC5pbnRlcm5hbC5Eb3VibGVIZWxwZXIuTUFYX1ZBTFVFO1xuICAgICAgICBmb3IgKGxldCBjbHVzdGVyID0gMDsgY2x1c3RlciA8IGNlbnRlcnMubGVuZ3RoOyBjbHVzdGVyKyspIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXN0YW5jZXNbY2x1c3Rlcl0gPSBHZW5Nb2RlbC5LTWVhbnNfZGlzdGFuY2UkZG91YmxlX0EkZG91YmxlX0EkamF2YV9sYW5nX1N0cmluZ19BX0EoY2VudGVyc1tjbHVzdGVyXSwgcG9pbnQsIGRvbWFpbnMpO1xuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZXNbY2x1c3Rlcl0gPCBtaW5TcXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWluID0gY2x1c3RlcjtcbiAgICAgICAgICAgICAgICAgICAgbWluU3FyID0gZGlzdGFuY2VzW2NsdXN0ZXJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWluO1xuICAgIH1cbiAgICBzdGF0aWMgS01lYW5zX3NpbXBsZXgoY2VudGVycywgcG9pbnQsIGRvbWFpbnMpIHtcbiAgICAgICAgY29uc3QgZGlzdCA9IChzID0+IHsgbGV0IGEgPSBbXTsgd2hpbGUgKHMtLSA+IDApXG4gICAgICAgICAgICBhLnB1c2goMCk7IHJldHVybiBhOyB9KShjZW50ZXJzLmxlbmd0aCk7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBsZXQgaW52X3N1bSA9IDA7XG4gICAgICAgIGZvciAobGV0IGNsdXN0ZXIgPSAwOyBjbHVzdGVyIDwgY2VudGVycy5sZW5ndGg7IGNsdXN0ZXIrKykge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpc3RbY2x1c3Rlcl0gPSBHZW5Nb2RlbC5LTWVhbnNfZGlzdGFuY2UkZG91YmxlX0EkZG91YmxlX0EkamF2YV9sYW5nX1N0cmluZ19BX0EoY2VudGVyc1tjbHVzdGVyXSwgcG9pbnQsIGRvbWFpbnMpO1xuICAgICAgICAgICAgICAgIHN1bSArPSBkaXN0W2NsdXN0ZXJdO1xuICAgICAgICAgICAgICAgIGludl9zdW0gKz0gMS4wIC8gZGlzdFtjbHVzdGVyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYXRpb3MgPSAocyA9PiB7IGxldCBhID0gW107IHdoaWxlIChzLS0gPiAwKVxuICAgICAgICAgICAgYS5wdXNoKDApOyByZXR1cm4gYTsgfSkoY2VudGVycy5sZW5ndGgpO1xuICAgICAgICBpZiAoc3VtID09PSAwKSB7XG4gICAgICAgICAgICBjb25zdCBybmcgPSBuZXcgamF2YS51dGlsLlJhbmRvbSgpO1xuICAgICAgICAgICAgY29uc3QgaWR4ID0gcm5nLm5leHRJbnQoY2VudGVycy5sZW5ndGgpO1xuICAgICAgICAgICAgcmF0aW9zW2lkeF0gPSAxO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGlkeCA9IC0xO1xuICAgICAgICAgICAgZm9yIChsZXQgY2x1c3RlciA9IDA7IGNsdXN0ZXIgPCBjZW50ZXJzLmxlbmd0aDsgY2x1c3RlcisrKSB7XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdFtjbHVzdGVyXSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWR4ID0gY2x1c3RlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpZHggPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2x1c3RlciA9IDA7IGNsdXN0ZXIgPCBjZW50ZXJzLmxlbmd0aDsgY2x1c3RlcisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJhdGlvc1tjbHVzdGVyXSA9IDEuMCAvIChkaXN0W2NsdXN0ZXJdICogaW52X3N1bSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJhdGlvc1tpZHhdID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmF0aW9zO1xuICAgIH1cbiAgICBzdGF0aWMgS01lYW5zX2Rpc3RhbmNlJGRvdWJsZV9BJGZsb2F0X0EkaW50X0EkZG91YmxlX0EkZG91YmxlX0EoY2VudGVyLCBwb2ludCwgbW9kZXMsIGNvbFN1bSwgY29sU3VtU3EpIHtcbiAgICAgICAgbGV0IHNxciA9IDA7XG4gICAgICAgIGxldCBwdHMgPSBwb2ludC5sZW5ndGg7XG4gICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IGNlbnRlci5sZW5ndGg7IGNvbHVtbisrKSB7XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IHBvaW50W2NvbHVtbl07XG4gICAgICAgICAgICAgICAgaWYgKCAvKiBpc05hTiAqL2lzTmFOKGQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHB0cy0tO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1vZGVzW2NvbHVtbl0gIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkICE9PSBjZW50ZXJbY29sdW1uXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3FyICs9IDEuMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZCAhPT0gbW9kZXNbY29sdW1uXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sU3VtW2NvbHVtbl0gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBkIC0gY2VudGVyW2NvbHVtbl07XG4gICAgICAgICAgICAgICAgICAgIHNxciArPSBkZWx0YSAqIGRlbHRhO1xuICAgICAgICAgICAgICAgICAgICBjb2xTdW1bY29sdW1uXSArPSBkO1xuICAgICAgICAgICAgICAgICAgICBjb2xTdW1TcVtjb2x1bW5dICs9IE1hdGguZnJvdW5kKGQgKiBkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDAgPCBwdHMgJiYgcHRzIDwgcG9pbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzY2FsZSA9IHBvaW50Lmxlbmd0aCAvIHB0cztcbiAgICAgICAgICAgIHNxciAqPSBzY2FsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3FyO1xuICAgIH1cbiAgICBzdGF0aWMgS01lYW5zX2Rpc3RhbmNlKGNlbnRlciwgcG9pbnQsIG1vZGVzLCBjb2xTdW0sIGNvbFN1bVNxKSB7XG4gICAgICAgIGlmICgoKGNlbnRlciAhPSBudWxsICYmIGNlbnRlciBpbnN0YW5jZW9mIEFycmF5ICYmIChjZW50ZXIubGVuZ3RoID09IDAgfHwgY2VudGVyWzBdID09IG51bGwgfHwgKHR5cGVvZiBjZW50ZXJbMF0gPT09ICdudW1iZXInKSkpIHx8IGNlbnRlciA9PT0gbnVsbCkgJiYgKChwb2ludCAhPSBudWxsICYmIHBvaW50IGluc3RhbmNlb2YgQXJyYXkgJiYgKHBvaW50Lmxlbmd0aCA9PSAwIHx8IHBvaW50WzBdID09IG51bGwgfHwgKHR5cGVvZiBwb2ludFswXSA9PT0gJ251bWJlcicpKSkgfHwgcG9pbnQgPT09IG51bGwpICYmICgobW9kZXMgIT0gbnVsbCAmJiBtb2RlcyBpbnN0YW5jZW9mIEFycmF5ICYmIChtb2Rlcy5sZW5ndGggPT0gMCB8fCBtb2Rlc1swXSA9PSBudWxsIHx8ICh0eXBlb2YgbW9kZXNbMF0gPT09ICdudW1iZXInKSkpIHx8IG1vZGVzID09PSBudWxsKSAmJiAoKGNvbFN1bSAhPSBudWxsICYmIGNvbFN1bSBpbnN0YW5jZW9mIEFycmF5ICYmIChjb2xTdW0ubGVuZ3RoID09IDAgfHwgY29sU3VtWzBdID09IG51bGwgfHwgKHR5cGVvZiBjb2xTdW1bMF0gPT09ICdudW1iZXInKSkpIHx8IGNvbFN1bSA9PT0gbnVsbCkgJiYgKChjb2xTdW1TcSAhPSBudWxsICYmIGNvbFN1bVNxIGluc3RhbmNlb2YgQXJyYXkgJiYgKGNvbFN1bVNxLmxlbmd0aCA9PSAwIHx8IGNvbFN1bVNxWzBdID09IG51bGwgfHwgKHR5cGVvZiBjb2xTdW1TcVswXSA9PT0gJ251bWJlcicpKSkgfHwgY29sU3VtU3EgPT09IG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gR2VuTW9kZWwuS01lYW5zX2Rpc3RhbmNlJGRvdWJsZV9BJGZsb2F0X0EkaW50X0EkZG91YmxlX0EkZG91YmxlX0EoY2VudGVyLCBwb2ludCwgbW9kZXMsIGNvbFN1bSwgY29sU3VtU3EpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCgoY2VudGVyICE9IG51bGwgJiYgY2VudGVyIGluc3RhbmNlb2YgQXJyYXkgJiYgKGNlbnRlci5sZW5ndGggPT0gMCB8fCBjZW50ZXJbMF0gPT0gbnVsbCB8fCAodHlwZW9mIGNlbnRlclswXSA9PT0gJ251bWJlcicpKSkgfHwgY2VudGVyID09PSBudWxsKSAmJiAoKHBvaW50ICE9IG51bGwgJiYgcG9pbnQgaW5zdGFuY2VvZiBBcnJheSAmJiAocG9pbnQubGVuZ3RoID09IDAgfHwgcG9pbnRbMF0gPT0gbnVsbCB8fCAodHlwZW9mIHBvaW50WzBdID09PSAnbnVtYmVyJykpKSB8fCBwb2ludCA9PT0gbnVsbCkgJiYgKChtb2RlcyAhPSBudWxsICYmIG1vZGVzIGluc3RhbmNlb2YgQXJyYXkgJiYgKG1vZGVzLmxlbmd0aCA9PSAwIHx8IG1vZGVzWzBdID09IG51bGwgfHwgbW9kZXNbMF0gaW5zdGFuY2VvZiBBcnJheSkpIHx8IG1vZGVzID09PSBudWxsKSAmJiBjb2xTdW0gPT09IHVuZGVmaW5lZCAmJiBjb2xTdW1TcSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gR2VuTW9kZWwuS01lYW5zX2Rpc3RhbmNlJGRvdWJsZV9BJGRvdWJsZV9BJGphdmFfbGFuZ19TdHJpbmdfQV9BKGNlbnRlciwgcG9pbnQsIG1vZGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgb3ZlcmxvYWQnKTtcbiAgICB9XG4gICAgc3RhdGljIEtNZWFuc19kaXN0YW5jZSRkb3VibGVfQSRkb3VibGVfQSRqYXZhX2xhbmdfU3RyaW5nX0FfQShjZW50ZXIsIHBvaW50LCBkb21haW5zKSB7XG4gICAgICAgIGxldCBzcXIgPSAwO1xuICAgICAgICBsZXQgcHRzID0gcG9pbnQubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjZW50ZXIubGVuZ3RoOyBjb2x1bW4rKykge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSBwb2ludFtjb2x1bW5dO1xuICAgICAgICAgICAgICAgIGlmICggLyogaXNOYU4gKi9pc05hTihkKSkge1xuICAgICAgICAgICAgICAgICAgICBwdHMtLTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkb21haW5zW2NvbHVtbl0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZCAhPT0gY2VudGVyW2NvbHVtbl0pXG4gICAgICAgICAgICAgICAgICAgICAgICBzcXIgKz0gMS4wO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBkIC0gY2VudGVyW2NvbHVtbl07XG4gICAgICAgICAgICAgICAgICAgIHNxciArPSBkZWx0YSAqIGRlbHRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoMCA8IHB0cyAmJiBwdHMgPCBwb2ludC5sZW5ndGgpXG4gICAgICAgICAgICBzcXIgKj0gcG9pbnQubGVuZ3RoIC8gcHRzO1xuICAgICAgICByZXR1cm4gc3FyO1xuICAgIH1cbiAgICBzdGF0aWMgbG9nX3Jlc2NhbGUocHJlZHMpIHtcbiAgICAgICAgbGV0IG1heHZhbCA9IGphdmFlbXVsLmludGVybmFsLkRvdWJsZUhlbHBlci5ORUdBVElWRV9JTkZJTklUWTtcbiAgICAgICAgZm9yIChsZXQgayA9IDE7IGsgPCBwcmVkcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgbWF4dmFsID0gTWF0aC5tYXgobWF4dmFsLCBwcmVkc1trXSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGRzdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBrID0gMTsgayA8IHByZWRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBkc3VtICs9IChwcmVkc1trXSA9IE1hdGguZXhwKHByZWRzW2tdIC0gbWF4dmFsKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRzdW07XG4gICAgfVxuICAgIHN0YXRpYyBHQk1fcmVzY2FsZShwcmVkcykge1xuICAgICAgICBjb25zdCBzdW0gPSBHZW5Nb2RlbC5sb2dfcmVzY2FsZShwcmVkcyk7XG4gICAgICAgIGZvciAobGV0IGsgPSAxOyBrIDwgcHJlZHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHByZWRzW2tdIC89IHN1bTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgR0xNX2lkZW50aXR5SW52KHgpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIHN0YXRpYyBHTE1fbG9naXRJbnYoeCkge1xuICAgICAgICByZXR1cm4gMS4wIC8gKE1hdGguZXhwKC14KSArIDEuMCk7XG4gICAgfVxuICAgIHN0YXRpYyBHTE1fbG9nSW52KHgpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguZXhwKHgpO1xuICAgIH1cbiAgICBzdGF0aWMgR0xNX2ludmVyc2VJbnYoeCkge1xuICAgICAgICBjb25zdCB4eCA9ICh4IDwgMCkgPyBNYXRoLm1pbigtMS4wRS01LCB4KSA6IE1hdGgubWF4KDEuMEUtNSwgeCk7XG4gICAgICAgIHJldHVybiAxLjAgLyB4eDtcbiAgICB9XG4gICAgc3RhdGljIEdMTV9vbG9naXRJbnYoeCkge1xuICAgICAgICByZXR1cm4gR2VuTW9kZWwuR0xNX2xvZ2l0SW52KHgpO1xuICAgIH1cbiAgICBzdGF0aWMgR0xNX3R3ZWVkaWVJbnYoeCwgdHdlZWRpZV9saW5rX3Bvd2VyKSB7XG4gICAgICAgIHJldHVybiB0d2VlZGllX2xpbmtfcG93ZXIgPT09IDAgPyBNYXRoLm1heCgyLjBFLTE2LCBNYXRoLmV4cCh4KSkgOiBNYXRoLnBvdyh4LCAxLjAgLyB0d2VlZGllX2xpbmtfcG93ZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiA/Pz9cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SGVhZGVyKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIHNldElucHV0JGRvdWJsZV9BJGZsb2F0X0EkaW50JGludCRpbnRfQSRkb3VibGVfQSRkb3VibGVfQSRib29sZWFuJGJvb2xlYW4oZnJvbSwgdG8sIF9udW1zLCBfY2F0cywgX2NhdE9mZnNldHMsIF9ub3JtTXVsLCBfbm9ybVN1YiwgdXNlQWxsRmFjdG9yTGV2ZWxzLCByZXBsYWNlTWlzc2luZ1dpdGhaZXJvKSB7XG4gICAgICAgIGNvbnN0IG51bXMgPSAocyA9PiB7IGxldCBhID0gW107IHdoaWxlIChzLS0gPiAwKVxuICAgICAgICAgICAgYS5wdXNoKDApOyByZXR1cm4gYTsgfSkoX251bXMpO1xuICAgICAgICBjb25zdCBjYXRzID0gKHMgPT4geyBsZXQgYSA9IFtdOyB3aGlsZSAocy0tID4gMClcbiAgICAgICAgICAgIGEucHVzaCgwKTsgcmV0dXJuIGE7IH0pKF9jYXRzKTtcbiAgICAgICAgR2VuTW9kZWwuc2V0Q2F0cyRkb3VibGVfQSRkb3VibGVfQSRpbnRfQSRpbnQkaW50X0EkZG91YmxlX0EkZG91YmxlX0EkYm9vbGVhbihmcm9tLCBudW1zLCBjYXRzLCBfY2F0cywgX2NhdE9mZnNldHMsIF9ub3JtTXVsLCBfbm9ybVN1YiwgdXNlQWxsRmFjdG9yTGV2ZWxzKTtcbiAgICAgICAgamF2YS51dGlsLkFycmF5cy5maWxsKHRvLCAwLjApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9jYXRzOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChjYXRzW2ldID49IDApXG4gICAgICAgICAgICAgICAgdG9bY2F0c1tpXV0gPSAxLjA7XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfbnVtczsgKytpKSB7XG4gICAgICAgICAgICB0b1tfY2F0T2Zmc2V0c1tfY2F0c10gKyBpXSA9IC8qIGlzTmFOICovIGlzTmFOKG51bXNbaV0pID8gKHJlcGxhY2VNaXNzaW5nV2l0aFplcm8gPyAwIDogamF2YWVtdWwuaW50ZXJuYWwuRmxvYXRIZWxwZXIuTmFOKSA6IE1hdGguZnJvdW5kKG51bXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBzZXRJbnB1dCRkb3VibGVfQSRkb3VibGVfQSRkb3VibGVfQSRpbnRfQSRpbnQkaW50JGludF9BJGRvdWJsZV9BJGRvdWJsZV9BJGJvb2xlYW4kYm9vbGVhbihmcm9tLCB0bywgbnVtcywgY2F0cywgX251bXMsIF9jYXRzLCBfY2F0T2Zmc2V0cywgX25vcm1NdWwsIF9ub3JtU3ViLCB1c2VBbGxGYWN0b3JMZXZlbHMsIHJlcGxhY2VNaXNzaW5nV2l0aFplcm8pIHtcbiAgICAgICAgR2VuTW9kZWwuc2V0Q2F0cyRkb3VibGVfQSRkb3VibGVfQSRpbnRfQSRpbnQkaW50X0EkZG91YmxlX0EkZG91YmxlX0EkYm9vbGVhbihmcm9tLCBudW1zLCBjYXRzLCBfY2F0cywgX2NhdE9mZnNldHMsIF9ub3JtTXVsLCBfbm9ybVN1YiwgdXNlQWxsRmFjdG9yTGV2ZWxzKTtcbiAgICAgICAgamF2YS51dGlsLkFycmF5cy5maWxsKHRvLCAwLjApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9jYXRzOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChjYXRzW2ldID49IDApXG4gICAgICAgICAgICAgICAgdG9bY2F0c1tpXV0gPSAxLjA7XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfbnVtczsgKytpKSB7XG4gICAgICAgICAgICB0b1tfY2F0T2Zmc2V0c1tfY2F0c10gKyBpXSA9IC8qIGlzTmFOICovIGlzTmFOKG51bXNbaV0pID8gKHJlcGxhY2VNaXNzaW5nV2l0aFplcm8gPyAwIDogTmFOKSA6IG51bXNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIHNldElucHV0KGZyb20sIHRvLCBudW1zLCBjYXRzLCBfbnVtcywgX2NhdHMsIF9jYXRPZmZzZXRzLCBfbm9ybU11bCwgX25vcm1TdWIsIHVzZUFsbEZhY3RvckxldmVscywgcmVwbGFjZU1pc3NpbmdXaXRoWmVybykge1xuICAgICAgICBpZiAoKChmcm9tICE9IG51bGwgJiYgZnJvbSBpbnN0YW5jZW9mIEFycmF5ICYmIChmcm9tLmxlbmd0aCA9PSAwIHx8IGZyb21bMF0gPT0gbnVsbCB8fCAodHlwZW9mIGZyb21bMF0gPT09ICdudW1iZXInKSkpIHx8IGZyb20gPT09IG51bGwpICYmICgodG8gIT0gbnVsbCAmJiB0byBpbnN0YW5jZW9mIEFycmF5ICYmICh0by5sZW5ndGggPT0gMCB8fCB0b1swXSA9PSBudWxsIHx8ICh0eXBlb2YgdG9bMF0gPT09ICdudW1iZXInKSkpIHx8IHRvID09PSBudWxsKSAmJiAoKG51bXMgIT0gbnVsbCAmJiBudW1zIGluc3RhbmNlb2YgQXJyYXkgJiYgKG51bXMubGVuZ3RoID09IDAgfHwgbnVtc1swXSA9PSBudWxsIHx8ICh0eXBlb2YgbnVtc1swXSA9PT0gJ251bWJlcicpKSkgfHwgbnVtcyA9PT0gbnVsbCkgJiYgKChjYXRzICE9IG51bGwgJiYgY2F0cyBpbnN0YW5jZW9mIEFycmF5ICYmIChjYXRzLmxlbmd0aCA9PSAwIHx8IGNhdHNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIGNhdHNbMF0gPT09ICdudW1iZXInKSkpIHx8IGNhdHMgPT09IG51bGwpICYmICgodHlwZW9mIF9udW1zID09PSAnbnVtYmVyJykgfHwgX251bXMgPT09IG51bGwpICYmICgodHlwZW9mIF9jYXRzID09PSAnbnVtYmVyJykgfHwgX2NhdHMgPT09IG51bGwpICYmICgoX2NhdE9mZnNldHMgIT0gbnVsbCAmJiBfY2F0T2Zmc2V0cyBpbnN0YW5jZW9mIEFycmF5ICYmIChfY2F0T2Zmc2V0cy5sZW5ndGggPT0gMCB8fCBfY2F0T2Zmc2V0c1swXSA9PSBudWxsIHx8ICh0eXBlb2YgX2NhdE9mZnNldHNbMF0gPT09ICdudW1iZXInKSkpIHx8IF9jYXRPZmZzZXRzID09PSBudWxsKSAmJiAoKF9ub3JtTXVsICE9IG51bGwgJiYgX25vcm1NdWwgaW5zdGFuY2VvZiBBcnJheSAmJiAoX25vcm1NdWwubGVuZ3RoID09IDAgfHwgX25vcm1NdWxbMF0gPT0gbnVsbCB8fCAodHlwZW9mIF9ub3JtTXVsWzBdID09PSAnbnVtYmVyJykpKSB8fCBfbm9ybU11bCA9PT0gbnVsbCkgJiYgKChfbm9ybVN1YiAhPSBudWxsICYmIF9ub3JtU3ViIGluc3RhbmNlb2YgQXJyYXkgJiYgKF9ub3JtU3ViLmxlbmd0aCA9PSAwIHx8IF9ub3JtU3ViWzBdID09IG51bGwgfHwgKHR5cGVvZiBfbm9ybVN1YlswXSA9PT0gJ251bWJlcicpKSkgfHwgX25vcm1TdWIgPT09IG51bGwpICYmICgodHlwZW9mIHVzZUFsbEZhY3RvckxldmVscyA9PT0gJ2Jvb2xlYW4nKSB8fCB1c2VBbGxGYWN0b3JMZXZlbHMgPT09IG51bGwpICYmICgodHlwZW9mIHJlcGxhY2VNaXNzaW5nV2l0aFplcm8gPT09ICdib29sZWFuJykgfHwgcmVwbGFjZU1pc3NpbmdXaXRoWmVybyA9PT0gbnVsbCkpIHtcbiAgICAgICAgICAgIHJldHVybiBHZW5Nb2RlbC5zZXRJbnB1dCRkb3VibGVfQSRkb3VibGVfQSRkb3VibGVfQSRpbnRfQSRpbnQkaW50JGludF9BJGRvdWJsZV9BJGRvdWJsZV9BJGJvb2xlYW4kYm9vbGVhbihmcm9tLCB0bywgbnVtcywgY2F0cywgX251bXMsIF9jYXRzLCBfY2F0T2Zmc2V0cywgX25vcm1NdWwsIF9ub3JtU3ViLCB1c2VBbGxGYWN0b3JMZXZlbHMsIHJlcGxhY2VNaXNzaW5nV2l0aFplcm8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCgoZnJvbSAhPSBudWxsICYmIGZyb20gaW5zdGFuY2VvZiBBcnJheSAmJiAoZnJvbS5sZW5ndGggPT0gMCB8fCBmcm9tWzBdID09IG51bGwgfHwgKHR5cGVvZiBmcm9tWzBdID09PSAnbnVtYmVyJykpKSB8fCBmcm9tID09PSBudWxsKSAmJiAoKHRvICE9IG51bGwgJiYgdG8gaW5zdGFuY2VvZiBBcnJheSAmJiAodG8ubGVuZ3RoID09IDAgfHwgdG9bMF0gPT0gbnVsbCB8fCAodHlwZW9mIHRvWzBdID09PSAnbnVtYmVyJykpKSB8fCB0byA9PT0gbnVsbCkgJiYgKCh0eXBlb2YgbnVtcyA9PT0gJ251bWJlcicpIHx8IG51bXMgPT09IG51bGwpICYmICgodHlwZW9mIGNhdHMgPT09ICdudW1iZXInKSB8fCBjYXRzID09PSBudWxsKSAmJiAoKF9udW1zICE9IG51bGwgJiYgX251bXMgaW5zdGFuY2VvZiBBcnJheSAmJiAoX251bXMubGVuZ3RoID09IDAgfHwgX251bXNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIF9udW1zWzBdID09PSAnbnVtYmVyJykpKSB8fCBfbnVtcyA9PT0gbnVsbCkgJiYgKChfY2F0cyAhPSBudWxsICYmIF9jYXRzIGluc3RhbmNlb2YgQXJyYXkgJiYgKF9jYXRzLmxlbmd0aCA9PSAwIHx8IF9jYXRzWzBdID09IG51bGwgfHwgKHR5cGVvZiBfY2F0c1swXSA9PT0gJ251bWJlcicpKSkgfHwgX2NhdHMgPT09IG51bGwpICYmICgoX2NhdE9mZnNldHMgIT0gbnVsbCAmJiBfY2F0T2Zmc2V0cyBpbnN0YW5jZW9mIEFycmF5ICYmIChfY2F0T2Zmc2V0cy5sZW5ndGggPT0gMCB8fCBfY2F0T2Zmc2V0c1swXSA9PSBudWxsIHx8ICh0eXBlb2YgX2NhdE9mZnNldHNbMF0gPT09ICdudW1iZXInKSkpIHx8IF9jYXRPZmZzZXRzID09PSBudWxsKSAmJiAoKHR5cGVvZiBfbm9ybU11bCA9PT0gJ2Jvb2xlYW4nKSB8fCBfbm9ybU11bCA9PT0gbnVsbCkgJiYgKCh0eXBlb2YgX25vcm1TdWIgPT09ICdib29sZWFuJykgfHwgX25vcm1TdWIgPT09IG51bGwpICYmIHVzZUFsbEZhY3RvckxldmVscyA9PT0gdW5kZWZpbmVkICYmIHJlcGxhY2VNaXNzaW5nV2l0aFplcm8gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIEdlbk1vZGVsLnNldElucHV0JGRvdWJsZV9BJGZsb2F0X0EkaW50JGludCRpbnRfQSRkb3VibGVfQSRkb3VibGVfQSRib29sZWFuJGJvb2xlYW4oZnJvbSwgdG8sIG51bXMsIGNhdHMsIF9udW1zLCBfY2F0cywgX2NhdE9mZnNldHMsIF9ub3JtTXVsLCBfbm9ybVN1Yik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhbGlkIG92ZXJsb2FkJyk7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRDYXRzJGRvdWJsZV9BJGRvdWJsZV9BJGludF9BJGludCRpbnRfQSRkb3VibGVfQSRkb3VibGVfQSRib29sZWFuKGZyb20sIG51bXMsIGNhdHMsIF9jYXRzLCBfY2F0T2Zmc2V0cywgX25vcm1NdWwsIF9ub3JtU3ViLCB1c2VBbGxGYWN0b3JMZXZlbHMpIHtcbiAgICAgICAgR2VuTW9kZWwuc2V0Q2F0cyRkb3VibGVfQSRpbnRfQSRpbnQkaW50X0EkYm9vbGVhbihmcm9tLCBjYXRzLCBfY2F0cywgX2NhdE9mZnNldHMsIHVzZUFsbEZhY3RvckxldmVscyk7XG4gICAgICAgIGZvciAobGV0IGkgPSBfY2F0czsgaSA8IGZyb20ubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgZCA9IGZyb21baV07XG4gICAgICAgICAgICAgICAgaWYgKChfbm9ybU11bCAhPSBudWxsKSAmJiAoX25vcm1NdWwubGVuZ3RoID4gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZCA9IChkIC0gX25vcm1TdWJbaSAtIF9jYXRzXSkgKiBfbm9ybU11bFtpIC0gX2NhdHNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBudW1zW2kgLSBfY2F0c10gPSBkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBzZXRDYXRzKGZyb20sIG51bXMsIGNhdHMsIF9jYXRzLCBfY2F0T2Zmc2V0cywgX25vcm1NdWwsIF9ub3JtU3ViLCB1c2VBbGxGYWN0b3JMZXZlbHMpIHtcbiAgICAgICAgaWYgKCgoZnJvbSAhPSBudWxsICYmIGZyb20gaW5zdGFuY2VvZiBBcnJheSAmJiAoZnJvbS5sZW5ndGggPT0gMCB8fCBmcm9tWzBdID09IG51bGwgfHwgKHR5cGVvZiBmcm9tWzBdID09PSAnbnVtYmVyJykpKSB8fCBmcm9tID09PSBudWxsKSAmJiAoKG51bXMgIT0gbnVsbCAmJiBudW1zIGluc3RhbmNlb2YgQXJyYXkgJiYgKG51bXMubGVuZ3RoID09IDAgfHwgbnVtc1swXSA9PSBudWxsIHx8ICh0eXBlb2YgbnVtc1swXSA9PT0gJ251bWJlcicpKSkgfHwgbnVtcyA9PT0gbnVsbCkgJiYgKChjYXRzICE9IG51bGwgJiYgY2F0cyBpbnN0YW5jZW9mIEFycmF5ICYmIChjYXRzLmxlbmd0aCA9PSAwIHx8IGNhdHNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIGNhdHNbMF0gPT09ICdudW1iZXInKSkpIHx8IGNhdHMgPT09IG51bGwpICYmICgodHlwZW9mIF9jYXRzID09PSAnbnVtYmVyJykgfHwgX2NhdHMgPT09IG51bGwpICYmICgoX2NhdE9mZnNldHMgIT0gbnVsbCAmJiBfY2F0T2Zmc2V0cyBpbnN0YW5jZW9mIEFycmF5ICYmIChfY2F0T2Zmc2V0cy5sZW5ndGggPT0gMCB8fCBfY2F0T2Zmc2V0c1swXSA9PSBudWxsIHx8ICh0eXBlb2YgX2NhdE9mZnNldHNbMF0gPT09ICdudW1iZXInKSkpIHx8IF9jYXRPZmZzZXRzID09PSBudWxsKSAmJiAoKF9ub3JtTXVsICE9IG51bGwgJiYgX25vcm1NdWwgaW5zdGFuY2VvZiBBcnJheSAmJiAoX25vcm1NdWwubGVuZ3RoID09IDAgfHwgX25vcm1NdWxbMF0gPT0gbnVsbCB8fCAodHlwZW9mIF9ub3JtTXVsWzBdID09PSAnbnVtYmVyJykpKSB8fCBfbm9ybU11bCA9PT0gbnVsbCkgJiYgKChfbm9ybVN1YiAhPSBudWxsICYmIF9ub3JtU3ViIGluc3RhbmNlb2YgQXJyYXkgJiYgKF9ub3JtU3ViLmxlbmd0aCA9PSAwIHx8IF9ub3JtU3ViWzBdID09IG51bGwgfHwgKHR5cGVvZiBfbm9ybVN1YlswXSA9PT0gJ251bWJlcicpKSkgfHwgX25vcm1TdWIgPT09IG51bGwpICYmICgodHlwZW9mIHVzZUFsbEZhY3RvckxldmVscyA9PT0gJ2Jvb2xlYW4nKSB8fCB1c2VBbGxGYWN0b3JMZXZlbHMgPT09IG51bGwpKSB7XG4gICAgICAgICAgICByZXR1cm4gR2VuTW9kZWwuc2V0Q2F0cyRkb3VibGVfQSRkb3VibGVfQSRpbnRfQSRpbnQkaW50X0EkZG91YmxlX0EkZG91YmxlX0EkYm9vbGVhbihmcm9tLCBudW1zLCBjYXRzLCBfY2F0cywgX2NhdE9mZnNldHMsIF9ub3JtTXVsLCBfbm9ybVN1YiwgdXNlQWxsRmFjdG9yTGV2ZWxzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoKGZyb20gIT0gbnVsbCAmJiBmcm9tIGluc3RhbmNlb2YgQXJyYXkgJiYgKGZyb20ubGVuZ3RoID09IDAgfHwgZnJvbVswXSA9PSBudWxsIHx8ICh0eXBlb2YgZnJvbVswXSA9PT0gJ251bWJlcicpKSkgfHwgZnJvbSA9PT0gbnVsbCkgJiYgKChudW1zICE9IG51bGwgJiYgbnVtcyBpbnN0YW5jZW9mIEFycmF5ICYmIChudW1zLmxlbmd0aCA9PSAwIHx8IG51bXNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIG51bXNbMF0gPT09ICdudW1iZXInKSkpIHx8IG51bXMgPT09IG51bGwpICYmICgodHlwZW9mIGNhdHMgPT09ICdudW1iZXInKSB8fCBjYXRzID09PSBudWxsKSAmJiAoKF9jYXRzICE9IG51bGwgJiYgX2NhdHMgaW5zdGFuY2VvZiBBcnJheSAmJiAoX2NhdHMubGVuZ3RoID09IDAgfHwgX2NhdHNbMF0gPT0gbnVsbCB8fCAodHlwZW9mIF9jYXRzWzBdID09PSAnbnVtYmVyJykpKSB8fCBfY2F0cyA9PT0gbnVsbCkgJiYgKCh0eXBlb2YgX2NhdE9mZnNldHMgPT09ICdib29sZWFuJykgfHwgX2NhdE9mZnNldHMgPT09IG51bGwpICYmIF9ub3JtTXVsID09PSB1bmRlZmluZWQgJiYgX25vcm1TdWIgPT09IHVuZGVmaW5lZCAmJiB1c2VBbGxGYWN0b3JMZXZlbHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIEdlbk1vZGVsLnNldENhdHMkZG91YmxlX0EkaW50X0EkaW50JGludF9BJGJvb2xlYW4oZnJvbSwgbnVtcywgY2F0cywgX2NhdHMsIF9jYXRPZmZzZXRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFsaWQgb3ZlcmxvYWQnKTtcbiAgICB9XG4gICAgc3RhdGljIHNldENhdHMkZG91YmxlX0EkaW50X0EkaW50JGludF9BJGJvb2xlYW4oZnJvbSwgdG8sIGNhdHMsIGNhdE9mZnNldHMsIHVzZUFsbEZhY3RvckxldmVscykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhdHM7ICsraSkge1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICggLyogaXNOYU4gKi9pc05hTihmcm9tW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICB0b1tpXSA9IChjYXRPZmZzZXRzW2kgKyAxXSAtIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYyA9IChmcm9tW2ldIHwgMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1c2VBbGxGYWN0b3JMZXZlbHMpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b1tpXSA9IGMgKyBjYXRPZmZzZXRzW2ldO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjICE9PSAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvW2ldID0gYyAtIDEgKyBjYXRPZmZzZXRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvW2ldID0gLTE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvW2ldID49IGNhdE9mZnNldHNbaSArIDFdKVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9baV0gPSAoY2F0T2Zmc2V0c1tpICsgMV0gLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGNvbnZlcnREb3VibGUyRmxvYXQoaW5wdXQpIHtcbiAgICAgICAgY29uc3QgYXJyYXlTaXplID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICBjb25zdCBvdXRwdXQgPSAocyA9PiB7IGxldCBhID0gW107IHdoaWxlIChzLS0gPiAwKVxuICAgICAgICAgICAgYS5wdXNoKDApOyByZXR1cm4gYTsgfSkoYXJyYXlTaXplKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5U2l6ZTsgaW5kZXgrKykge1xuICAgICAgICAgICAgb3V0cHV0W2luZGV4XSA9IE1hdGguZnJvdW5kKGlucHV0W2luZGV4XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9XG59XG5HZW5Nb2RlbFtcIl9fY2xhc3NcIl0gPSBcIkdlbk1vZGVsXCI7XG5jbGFzcyBnbG1fbW9kZWwge1xuICAgIGlzU3VwZXJ2aXNlZCgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG5mZWF0dXJlcygpIHtcbiAgICAgICAgcmV0dXJuIDQ7XG4gICAgfVxuICAgIG5jbGFzc2VzKCkge1xuICAgICAgICByZXR1cm4gMjtcbiAgICB9XG4gICAgc3RhdGljIE5BTUVTXyRMSSQoKSB7IGlmIChnbG1fbW9kZWwuTkFNRVMgPT0gbnVsbCkge1xuICAgICAgICBnbG1fbW9kZWwuTkFNRVMgPSBOYW1lc0hvbGRlcl9nbG1fbW9kZWwuVkFMVUVTXyRMSSQoKTtcbiAgICB9IHJldHVybiBnbG1fbW9kZWwuTkFNRVM7IH1cbiAgICBzdGF0aWMgRE9NQUlOU18kTEkkKCkgeyBpZiAoZ2xtX21vZGVsLkRPTUFJTlMgPT0gbnVsbCkge1xuICAgICAgICBnbG1fbW9kZWwuRE9NQUlOUyA9IFtnbG1fbW9kZWxfQ29sSW5mb18wLlZBTFVFU18kTEkkKCksIG51bGwsIG51bGwsIG51bGwsIGdsbV9tb2RlbF9Db2xJbmZvXzQuVkFMVUVTXyRMSSQoKV07XG4gICAgfSByZXR1cm4gZ2xtX21vZGVsLkRPTUFJTlM7IH1cbiAgICBnZXRVVUlEKCkge1xuICAgICAgICByZXR1cm4gLyogdG9TdHJpbmcgKi8gKCcnICsgKDE0MTkzNTY2NjgyNzYzNTc2OCkpO1xuICAgIH1cbiAgICBzY29yZTAoZGF0YSwgcHJlZHMpIHtcbiAgICAgICAgY29uc3QgYiA9IGdsbV9tb2RlbC5CRVRBLlZBTFVFU18kTEkkKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTsgKytpKSB7XG4gICAgICAgICAgICBpZiAoIC8qIGlzTmFOICovaXNOYU4oZGF0YVtpXSkpXG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGdsbV9tb2RlbC5DQVRfTU9ERVMuVkFMVUVTXyRMSSQoKVtpXTtcbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7ICsraSkge1xuICAgICAgICAgICAgaWYgKCAvKiBpc05hTiAqL2lzTmFOKGRhdGFbaSArIDFdKSlcbiAgICAgICAgICAgICAgICBkYXRhW2kgKyAxXSA9IGdsbV9tb2RlbC5OVU1fTUVBTlMuVkFMVUVTXyRMSSQoKVtpXTtcbiAgICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXRhID0gMC4wO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdsbV9tb2RlbC5DQVRPRkZTXyRMSSQoKS5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsZXQgaXZhbCA9IChkYXRhW2ldIHwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKGl2YWwgIT09IGRhdGFbaV0pXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBqYXZhLmxhbmcuSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uKFwiY2F0ZWdvcmljYWwgdmFsdWUgb3V0IG9mIHJhbmdlXCIpO1xuICAgICAgICAgICAgICAgIGl2YWwgKz0gZ2xtX21vZGVsLkNBVE9GRlNfJExJJCgpW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpdmFsIDwgZ2xtX21vZGVsLkNBVE9GRlNfJExJJCgpW2kgKyAxXSlcbiAgICAgICAgICAgICAgICAgICAgZXRhICs9IGJbaXZhbF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBiLmxlbmd0aCAtIDEgLSAxOyArK2kpIHtcbiAgICAgICAgICAgIGV0YSArPSBiWzEgKyBpXSAqIGRhdGFbaV07XG4gICAgICAgIH1cbiAgICAgICAgZXRhICs9IGJbYi5sZW5ndGggLSAxXTtcbiAgICAgICAgY29uc3QgbXUgPSBHZW5Nb2RlbC5HTE1fbG9naXRJbnYoZXRhKTtcbiAgICAgICAgcHJlZHNbMF0gPSAobXUgPj0gMC4zMDEzODE0NDY3MTIwMDc5KSA/IDEgOiAwO1xuICAgICAgICBwcmVkc1sxXSA9IDEuMCAtIG11O1xuICAgICAgICBwcmVkc1syXSA9IG11O1xuICAgICAgICByZXR1cm4gcHJlZHM7XG4gICAgfVxuICAgIHN0YXRpYyBDQVRPRkZTXyRMSSQoKSB7IGlmIChnbG1fbW9kZWwuQ0FUT0ZGUyA9PSBudWxsKSB7XG4gICAgICAgIGdsbV9tb2RlbC5DQVRPRkZTID0gWzAsIDJdO1xuICAgIH0gcmV0dXJuIGdsbV9tb2RlbC5DQVRPRkZTOyB9XG59XG5nbG1fbW9kZWwuTkNMQVNTRVMgPSAyO1xuZ2xtX21vZGVsLlBSSU9SX0NMQVNTX0RJU1RSSUIgPSBudWxsO1xuZ2xtX21vZGVsLk1PREVMX0NMQVNTX0RJU1RSSUIgPSBudWxsO1xuZ2xtX21vZGVsW1wiX19jbGFzc1wiXSA9IFwiZ2xtX21vZGVsXCI7XG4oZnVuY3Rpb24gKGdsbV9tb2RlbCkge1xuICAgIGNsYXNzIEJFVEEge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgX19zdGF0aWNfaW5pdGlhbGl6ZSgpIHsgaWYgKCFCRVRBLl9fc3RhdGljX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBCRVRBLl9fc3RhdGljX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgIEJFVEEuX19zdGF0aWNfaW5pdGlhbGl6ZXJfMCgpO1xuICAgICAgICB9IH1cbiAgICAgICAgc3RhdGljIFZBTFVFU18kTEkkKCkgeyBCRVRBLl9fc3RhdGljX2luaXRpYWxpemUoKTsgaWYgKEJFVEEuVkFMVUVTID09IG51bGwpIHtcbiAgICAgICAgICAgIEJFVEEuVkFMVUVTID0gWzAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICB9IHJldHVybiBCRVRBLlZBTFVFUzsgfVxuICAgICAgICBzdGF0aWMgX19zdGF0aWNfaW5pdGlhbGl6ZXJfMCgpIHtcbiAgICAgICAgICAgIEJFVEEuQkVUQV8wLmZpbGwoQkVUQS5WQUxVRVNfJExJJCgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBCRVRBLl9fc3RhdGljX2luaXRpYWxpemVkID0gZmFsc2U7XG4gICAgZ2xtX21vZGVsLkJFVEEgPSBCRVRBO1xuICAgIEJFVEFbXCJfX2NsYXNzXCJdID0gXCJnbG1fbW9kZWwuQkVUQVwiO1xuICAgIEJFVEFbXCJfX2ludGVyZmFjZXNcIl0gPSBbXCJqYXZhLmlvLlNlcmlhbGl6YWJsZVwiXTtcbiAgICAoZnVuY3Rpb24gKEJFVEEpIHtcbiAgICAgICAgY2xhc3MgQkVUQV8wIHtcbiAgICAgICAgICAgIHN0YXRpYyBmaWxsKHNhKSB7XG4gICAgICAgICAgICAgICAgc2FbMF0gPSAwLjI1MDI1Mjg3MDcwODg1ODc7XG4gICAgICAgICAgICAgICAgc2FbMV0gPSAtMC4yNDIwMzkwMDY2MTYyODY1NTtcbiAgICAgICAgICAgICAgICBzYVsyXSA9IC0wLjAyMTU3NDg3NzMxMTEzMzk1ODtcbiAgICAgICAgICAgICAgICBzYVszXSA9IDAuMDI4MjM2MjQ0NzUzNjYwOTI7XG4gICAgICAgICAgICAgICAgc2FbNF0gPSAxLjA3MjkzNDc2OTcxMTQyNDtcbiAgICAgICAgICAgICAgICBzYVs1XSA9IC02LjUzMTE1NDIzOTI3Njg5NjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIEJFVEEuQkVUQV8wID0gQkVUQV8wO1xuICAgICAgICBCRVRBXzBbXCJfX2NsYXNzXCJdID0gXCJnbG1fbW9kZWwuQkVUQS5CRVRBXzBcIjtcbiAgICAgICAgQkVUQV8wW1wiX19pbnRlcmZhY2VzXCJdID0gW1wiamF2YS5pby5TZXJpYWxpemFibGVcIl07XG4gICAgfSkoQkVUQSA9IGdsbV9tb2RlbC5CRVRBIHx8IChnbG1fbW9kZWwuQkVUQSA9IHt9KSk7XG4gICAgY2xhc3MgTlVNX01FQU5TIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGljIF9fc3RhdGljX2luaXRpYWxpemUoKSB7IGlmICghTlVNX01FQU5TLl9fc3RhdGljX2luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICBOVU1fTUVBTlMuX19zdGF0aWNfaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgTlVNX01FQU5TLl9fc3RhdGljX2luaXRpYWxpemVyXzAoKTtcbiAgICAgICAgfSB9XG4gICAgICAgIHN0YXRpYyBWQUxVRVNfJExJJCgpIHsgTlVNX01FQU5TLl9fc3RhdGljX2luaXRpYWxpemUoKTsgaWYgKE5VTV9NRUFOUy5WQUxVRVMgPT0gbnVsbCkge1xuICAgICAgICAgICAgTlVNX01FQU5TLlZBTFVFUyA9IFswLCAwLCAwXTtcbiAgICAgICAgfSByZXR1cm4gTlVNX01FQU5TLlZBTFVFUzsgfVxuICAgICAgICBzdGF0aWMgX19zdGF0aWNfaW5pdGlhbGl6ZXJfMCgpIHtcbiAgICAgICAgICAgIE5VTV9NRUFOUy5OVU1fTUVBTlNfMC5maWxsKE5VTV9NRUFOUy5WQUxVRVNfJExJJCgpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBOVU1fTUVBTlMuX19zdGF0aWNfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBnbG1fbW9kZWwuTlVNX01FQU5TID0gTlVNX01FQU5TO1xuICAgIE5VTV9NRUFOU1tcIl9fY2xhc3NcIl0gPSBcImdsbV9tb2RlbC5OVU1fTUVBTlNcIjtcbiAgICBOVU1fTUVBTlNbXCJfX2ludGVyZmFjZXNcIl0gPSBbXCJqYXZhLmlvLlNlcmlhbGl6YWJsZVwiXTtcbiAgICAoZnVuY3Rpb24gKE5VTV9NRUFOUykge1xuICAgICAgICBjbGFzcyBOVU1fTUVBTlNfMCB7XG4gICAgICAgICAgICBzdGF0aWMgZmlsbChzYSkge1xuICAgICAgICAgICAgICAgIHNhWzBdID0gNjYuMDM5NDczNjg0MjExMDM7XG4gICAgICAgICAgICAgICAgc2FbMV0gPSAxNS40MDg2MzE1Nzg5NDczNDM7XG4gICAgICAgICAgICAgICAgc2FbMl0gPSA2LjM4NDIxMDUyNjMxNTcyNztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIE5VTV9NRUFOUy5OVU1fTUVBTlNfMCA9IE5VTV9NRUFOU18wO1xuICAgICAgICBOVU1fTUVBTlNfMFtcIl9fY2xhc3NcIl0gPSBcImdsbV9tb2RlbC5OVU1fTUVBTlMuTlVNX01FQU5TXzBcIjtcbiAgICAgICAgTlVNX01FQU5TXzBbXCJfX2ludGVyZmFjZXNcIl0gPSBbXCJqYXZhLmlvLlNlcmlhbGl6YWJsZVwiXTtcbiAgICB9KShOVU1fTUVBTlMgPSBnbG1fbW9kZWwuTlVNX01FQU5TIHx8IChnbG1fbW9kZWwuTlVNX01FQU5TID0ge30pKTtcbiAgICBjbGFzcyBDQVRfTU9ERVMge1xuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgfVxuICAgICAgICBzdGF0aWMgX19zdGF0aWNfaW5pdGlhbGl6ZSgpIHsgaWYgKCFDQVRfTU9ERVMuX19zdGF0aWNfaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIENBVF9NT0RFUy5fX3N0YXRpY19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBDQVRfTU9ERVMuX19zdGF0aWNfaW5pdGlhbGl6ZXJfMCgpO1xuICAgICAgICB9IH1cbiAgICAgICAgc3RhdGljIFZBTFVFU18kTEkkKCkgeyBDQVRfTU9ERVMuX19zdGF0aWNfaW5pdGlhbGl6ZSgpOyBpZiAoQ0FUX01PREVTLlZBTFVFUyA9PSBudWxsKSB7XG4gICAgICAgICAgICBDQVRfTU9ERVMuVkFMVUVTID0gWzBdO1xuICAgICAgICB9IHJldHVybiBDQVRfTU9ERVMuVkFMVUVTOyB9XG4gICAgICAgIHN0YXRpYyBfX3N0YXRpY19pbml0aWFsaXplcl8wKCkge1xuICAgICAgICAgICAgQ0FUX01PREVTLkNBVF9NT0RFU18wLmZpbGwoQ0FUX01PREVTLlZBTFVFU18kTEkkKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIENBVF9NT0RFUy5fX3N0YXRpY19pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIGdsbV9tb2RlbC5DQVRfTU9ERVMgPSBDQVRfTU9ERVM7XG4gICAgQ0FUX01PREVTW1wiX19jbGFzc1wiXSA9IFwiZ2xtX21vZGVsLkNBVF9NT0RFU1wiO1xuICAgIENBVF9NT0RFU1tcIl9faW50ZXJmYWNlc1wiXSA9IFtcImphdmEuaW8uU2VyaWFsaXphYmxlXCJdO1xuICAgIChmdW5jdGlvbiAoQ0FUX01PREVTKSB7XG4gICAgICAgIGNsYXNzIENBVF9NT0RFU18wIHtcbiAgICAgICAgICAgIHN0YXRpYyBmaWxsKHNhKSB7XG4gICAgICAgICAgICAgICAgc2FbMF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgQ0FUX01PREVTLkNBVF9NT0RFU18wID0gQ0FUX01PREVTXzA7XG4gICAgICAgIENBVF9NT0RFU18wW1wiX19jbGFzc1wiXSA9IFwiZ2xtX21vZGVsLkNBVF9NT0RFUy5DQVRfTU9ERVNfMFwiO1xuICAgICAgICBDQVRfTU9ERVNfMFtcIl9faW50ZXJmYWNlc1wiXSA9IFtcImphdmEuaW8uU2VyaWFsaXphYmxlXCJdO1xuICAgIH0pKENBVF9NT0RFUyA9IGdsbV9tb2RlbC5DQVRfTU9ERVMgfHwgKGdsbV9tb2RlbC5DQVRfTU9ERVMgPSB7fSkpO1xufSkoZ2xtX21vZGVsIHx8IChnbG1fbW9kZWwgPSB7fSkpO1xuY2xhc3MgTmFtZXNIb2xkZXJfZ2xtX21vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgc3RhdGljIF9fc3RhdGljX2luaXRpYWxpemUoKSB7IGlmICghTmFtZXNIb2xkZXJfZ2xtX21vZGVsLl9fc3RhdGljX2luaXRpYWxpemVkKSB7XG4gICAgICAgIE5hbWVzSG9sZGVyX2dsbV9tb2RlbC5fX3N0YXRpY19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIE5hbWVzSG9sZGVyX2dsbV9tb2RlbC5fX3N0YXRpY19pbml0aWFsaXplcl8wKCk7XG4gICAgfSB9XG4gICAgc3RhdGljIFZBTFVFU18kTEkkKCkgeyBOYW1lc0hvbGRlcl9nbG1fbW9kZWwuX19zdGF0aWNfaW5pdGlhbGl6ZSgpOyBpZiAoTmFtZXNIb2xkZXJfZ2xtX21vZGVsLlZBTFVFUyA9PSBudWxsKSB7XG4gICAgICAgIE5hbWVzSG9sZGVyX2dsbV9tb2RlbC5WQUxVRVMgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgfSByZXR1cm4gTmFtZXNIb2xkZXJfZ2xtX21vZGVsLlZBTFVFUzsgfVxuICAgIHN0YXRpYyBfX3N0YXRpY19pbml0aWFsaXplcl8wKCkge1xuICAgICAgICBOYW1lc0hvbGRlcl9nbG1fbW9kZWwuTmFtZXNIb2xkZXJfZ2xtX21vZGVsXzAuZmlsbChOYW1lc0hvbGRlcl9nbG1fbW9kZWwuVkFMVUVTXyRMSSQoKSk7XG4gICAgfVxufVxuTmFtZXNIb2xkZXJfZ2xtX21vZGVsLl9fc3RhdGljX2luaXRpYWxpemVkID0gZmFsc2U7XG5OYW1lc0hvbGRlcl9nbG1fbW9kZWxbXCJfX2NsYXNzXCJdID0gXCJOYW1lc0hvbGRlcl9nbG1fbW9kZWxcIjtcbk5hbWVzSG9sZGVyX2dsbV9tb2RlbFtcIl9faW50ZXJmYWNlc1wiXSA9IFtcImphdmEuaW8uU2VyaWFsaXphYmxlXCJdO1xuKGZ1bmN0aW9uIChOYW1lc0hvbGRlcl9nbG1fbW9kZWwpIHtcbiAgICBjbGFzcyBOYW1lc0hvbGRlcl9nbG1fbW9kZWxfMCB7XG4gICAgICAgIHN0YXRpYyBmaWxsKHNhKSB7XG4gICAgICAgICAgICBzYVswXSA9IFwiUkFDRVwiO1xuICAgICAgICAgICAgc2FbMV0gPSBcIkFHRVwiO1xuICAgICAgICAgICAgc2FbMl0gPSBcIlBTQVwiO1xuICAgICAgICAgICAgc2FbM10gPSBcIkdMRUFTT05cIjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgfVxuICAgIH1cbiAgICBOYW1lc0hvbGRlcl9nbG1fbW9kZWwuTmFtZXNIb2xkZXJfZ2xtX21vZGVsXzAgPSBOYW1lc0hvbGRlcl9nbG1fbW9kZWxfMDtcbiAgICBOYW1lc0hvbGRlcl9nbG1fbW9kZWxfMFtcIl9fY2xhc3NcIl0gPSBcIk5hbWVzSG9sZGVyX2dsbV9tb2RlbC5OYW1lc0hvbGRlcl9nbG1fbW9kZWxfMFwiO1xuICAgIE5hbWVzSG9sZGVyX2dsbV9tb2RlbF8wW1wiX19pbnRlcmZhY2VzXCJdID0gW1wiamF2YS5pby5TZXJpYWxpemFibGVcIl07XG59KShOYW1lc0hvbGRlcl9nbG1fbW9kZWwgfHwgKE5hbWVzSG9sZGVyX2dsbV9tb2RlbCA9IHt9KSk7XG5jbGFzcyBnbG1fbW9kZWxfQ29sSW5mb18wIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG4gICAgc3RhdGljIF9fc3RhdGljX2luaXRpYWxpemUoKSB7IGlmICghZ2xtX21vZGVsX0NvbEluZm9fMC5fX3N0YXRpY19pbml0aWFsaXplZCkge1xuICAgICAgICBnbG1fbW9kZWxfQ29sSW5mb18wLl9fc3RhdGljX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgZ2xtX21vZGVsX0NvbEluZm9fMC5fX3N0YXRpY19pbml0aWFsaXplcl8wKCk7XG4gICAgfSB9XG4gICAgc3RhdGljIFZBTFVFU18kTEkkKCkgeyBnbG1fbW9kZWxfQ29sSW5mb18wLl9fc3RhdGljX2luaXRpYWxpemUoKTsgaWYgKGdsbV9tb2RlbF9Db2xJbmZvXzAuVkFMVUVTID09IG51bGwpIHtcbiAgICAgICAgZ2xtX21vZGVsX0NvbEluZm9fMC5WQUxVRVMgPSBbbnVsbCwgbnVsbF07XG4gICAgfSByZXR1cm4gZ2xtX21vZGVsX0NvbEluZm9fMC5WQUxVRVM7IH1cbiAgICBzdGF0aWMgX19zdGF0aWNfaW5pdGlhbGl6ZXJfMCgpIHtcbiAgICAgICAgZ2xtX21vZGVsX0NvbEluZm9fMC5nbG1fbW9kZWxfQ29sSW5mb18wXzAuZmlsbChnbG1fbW9kZWxfQ29sSW5mb18wLlZBTFVFU18kTEkkKCkpO1xuICAgIH1cbn1cbmdsbV9tb2RlbF9Db2xJbmZvXzAuX19zdGF0aWNfaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbmdsbV9tb2RlbF9Db2xJbmZvXzBbXCJfX2NsYXNzXCJdID0gXCJnbG1fbW9kZWxfQ29sSW5mb18wXCI7XG5nbG1fbW9kZWxfQ29sSW5mb18wW1wiX19pbnRlcmZhY2VzXCJdID0gW1wiamF2YS5pby5TZXJpYWxpemFibGVcIl07XG4oZnVuY3Rpb24gKGdsbV9tb2RlbF9Db2xJbmZvXzApIHtcbiAgICBjbGFzcyBnbG1fbW9kZWxfQ29sSW5mb18wXzAge1xuICAgICAgICBzdGF0aWMgZmlsbChzYSkge1xuICAgICAgICAgICAgc2FbMF0gPSBcIjFcIjtcbiAgICAgICAgICAgIHNhWzFdID0gXCIyXCI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2xtX21vZGVsX0NvbEluZm9fMC5nbG1fbW9kZWxfQ29sSW5mb18wXzAgPSBnbG1fbW9kZWxfQ29sSW5mb18wXzA7XG4gICAgZ2xtX21vZGVsX0NvbEluZm9fMF8wW1wiX19jbGFzc1wiXSA9IFwiZ2xtX21vZGVsX0NvbEluZm9fMC5nbG1fbW9kZWxfQ29sSW5mb18wXzBcIjtcbiAgICBnbG1fbW9kZWxfQ29sSW5mb18wXzBbXCJfX2ludGVyZmFjZXNcIl0gPSBbXCJqYXZhLmlvLlNlcmlhbGl6YWJsZVwiXTtcbn0pKGdsbV9tb2RlbF9Db2xJbmZvXzAgfHwgKGdsbV9tb2RlbF9Db2xJbmZvXzAgPSB7fSkpO1xuY2xhc3MgZ2xtX21vZGVsX0NvbEluZm9fNCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIHN0YXRpYyBfX3N0YXRpY19pbml0aWFsaXplKCkgeyBpZiAoIWdsbV9tb2RlbF9Db2xJbmZvXzQuX19zdGF0aWNfaW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgZ2xtX21vZGVsX0NvbEluZm9fNC5fX3N0YXRpY19pbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgIGdsbV9tb2RlbF9Db2xJbmZvXzQuX19zdGF0aWNfaW5pdGlhbGl6ZXJfMCgpO1xuICAgIH0gfVxuICAgIHN0YXRpYyBWQUxVRVNfJExJJCgpIHsgZ2xtX21vZGVsX0NvbEluZm9fNC5fX3N0YXRpY19pbml0aWFsaXplKCk7IGlmIChnbG1fbW9kZWxfQ29sSW5mb180LlZBTFVFUyA9PSBudWxsKSB7XG4gICAgICAgIGdsbV9tb2RlbF9Db2xJbmZvXzQuVkFMVUVTID0gW251bGwsIG51bGxdO1xuICAgIH0gcmV0dXJuIGdsbV9tb2RlbF9Db2xJbmZvXzQuVkFMVUVTOyB9XG4gICAgc3RhdGljIF9fc3RhdGljX2luaXRpYWxpemVyXzAoKSB7XG4gICAgICAgIGdsbV9tb2RlbF9Db2xJbmZvXzQuZ2xtX21vZGVsX0NvbEluZm9fNF8wLmZpbGwoZ2xtX21vZGVsX0NvbEluZm9fNC5WQUxVRVNfJExJJCgpKTtcbiAgICB9XG59XG5nbG1fbW9kZWxfQ29sSW5mb180Ll9fc3RhdGljX2luaXRpYWxpemVkID0gZmFsc2U7XG5nbG1fbW9kZWxfQ29sSW5mb180W1wiX19jbGFzc1wiXSA9IFwiZ2xtX21vZGVsX0NvbEluZm9fNFwiO1xuZ2xtX21vZGVsX0NvbEluZm9fNFtcIl9faW50ZXJmYWNlc1wiXSA9IFtcImphdmEuaW8uU2VyaWFsaXphYmxlXCJdO1xuKGZ1bmN0aW9uIChnbG1fbW9kZWxfQ29sSW5mb180KSB7XG4gICAgY2xhc3MgZ2xtX21vZGVsX0NvbEluZm9fNF8wIHtcbiAgICAgICAgc3RhdGljIGZpbGwoc2EpIHtcbiAgICAgICAgICAgIHNhWzBdID0gXCIwXCI7XG4gICAgICAgICAgICBzYVsxXSA9IFwiMVwiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB9XG4gICAgfVxuICAgIGdsbV9tb2RlbF9Db2xJbmZvXzQuZ2xtX21vZGVsX0NvbEluZm9fNF8wID0gZ2xtX21vZGVsX0NvbEluZm9fNF8wO1xuICAgIGdsbV9tb2RlbF9Db2xJbmZvXzRfMFtcIl9fY2xhc3NcIl0gPSBcImdsbV9tb2RlbF9Db2xJbmZvXzQuZ2xtX21vZGVsX0NvbEluZm9fNF8wXCI7XG4gICAgZ2xtX21vZGVsX0NvbEluZm9fNF8wW1wiX19pbnRlcmZhY2VzXCJdID0gW1wiamF2YS5pby5TZXJpYWxpemFibGVcIl07XG59KShnbG1fbW9kZWxfQ29sSW5mb180IHx8IChnbG1fbW9kZWxfQ29sSW5mb180ID0ge30pKTtcbmdsbV9tb2RlbF9Db2xJbmZvXzQuVkFMVUVTXyRMSSQoKTtcbmdsbV9tb2RlbF9Db2xJbmZvXzQuX19zdGF0aWNfaW5pdGlhbGl6ZSgpO1xuZ2xtX21vZGVsX0NvbEluZm9fMC5WQUxVRVNfJExJJCgpO1xuZ2xtX21vZGVsX0NvbEluZm9fMC5fX3N0YXRpY19pbml0aWFsaXplKCk7XG5OYW1lc0hvbGRlcl9nbG1fbW9kZWwuVkFMVUVTXyRMSSQoKTtcbk5hbWVzSG9sZGVyX2dsbV9tb2RlbC5fX3N0YXRpY19pbml0aWFsaXplKCk7XG5nbG1fbW9kZWwuQ0FUX01PREVTLlZBTFVFU18kTEkkKCk7XG5nbG1fbW9kZWwuQ0FUX01PREVTLl9fc3RhdGljX2luaXRpYWxpemUoKTtcbmdsbV9tb2RlbC5OVU1fTUVBTlMuVkFMVUVTXyRMSSQoKTtcbmdsbV9tb2RlbC5OVU1fTUVBTlMuX19zdGF0aWNfaW5pdGlhbGl6ZSgpO1xuZ2xtX21vZGVsLkJFVEEuVkFMVUVTXyRMSSQoKTtcbmdsbV9tb2RlbC5CRVRBLl9fc3RhdGljX2luaXRpYWxpemUoKTtcbmdsbV9tb2RlbC5DQVRPRkZTXyRMSSQoKTtcbmdsbV9tb2RlbC5ET01BSU5TXyRMSSQoKTtcbmdsbV9tb2RlbC5OQU1FU18kTEkkKCk7XG5leHBvcnRzLmdsbV9tb2RlbD1nbG1fbW9kZWw7XG4iXX0=
