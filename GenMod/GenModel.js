/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
/**
 * ''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 * JAKE'S EDITS (REMOVED MOST CALLS TO H2O CLASSES!!; also adjusted doubleToRawLongBits)
 * ''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 * This is a helper class to support Java generated models.
 * @class
 */
class GenModelEva {
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
            return GenModelEva.getPredictionBinomial(preds, threshold);
        }
        else {
            return GenModelEva.getPredictionMultinomial(preds, priorClassDist, data);
        }
    }
    static getPredictionBinomial(preds, threshold) {
        return (preds[2] >= threshold) ? 1 : 0;
    }
    static getPredictionMultinomial(preds, priorClassDist, data) {
        const ties = (new java.util.ArrayList());
        ties.add(0);
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
                    ties.add(c - 1);
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
                hash ^= /* doubleToRawLongBits */ (function (f) { var buf = new ArrayBuffer(4); (new Float32Array(buf))[0] = f; return (new Uint32Array(buf))[0]; })(Math.fround(d)) >> 6;           
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
                data[i] = GenModelEva.Kmeans_preprocessData$double$int$double_A$double_A$int_A(data[i], i, means, mults, modes);
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
            return GenModelEva.Kmeans_preprocessData$double$int$double_A$double_A$int_A(d, i, means, mults, modes);
        }
        else if (((d != null && d instanceof Array && (d.length == 0 || d[0] == null || (typeof d[0] === 'number'))) || d === null) && ((i != null && i instanceof Array && (i.length == 0 || i[0] == null || (typeof i[0] === 'number'))) || i === null) && ((means != null && means instanceof Array && (means.length == 0 || means[0] == null || (typeof means[0] === 'number'))) || means === null) && ((mults != null && mults instanceof Array && (mults.length == 0 || mults[0] == null || (typeof mults[0] === 'number'))) || mults === null) && modes === undefined) {
            return GenModelEva.Kmeans_preprocessData$double_A$double_A$double_A$int_A(d, i, means, mults);
        }
        else
            throw new Error('invalid overload');
    }
    static KMeans_closest(centers, point, domains) {
        let min = -1;
        let minSqr = javaemul.internal.DoubleHelper.MAX_VALUE;
        for (let cluster = 0; cluster < centers.length; cluster++) {
            {
                const sqr = GenModelEva.KMeans_distance$double_A$double_A$java_lang_String_A_A(centers[cluster], point, domains);
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
                distances[cluster] = GenModelEva.KMeans_distance$double_A$double_A$java_lang_String_A_A(centers[cluster], point, domains);
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
                dist[cluster] = GenModelEva.KMeans_distance$double_A$double_A$java_lang_String_A_A(centers[cluster], point, domains);
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
            return GenModelEva.KMeans_distance$double_A$float_A$int_A$double_A$double_A(center, point, modes, colSum, colSumSq);
        }
        else if (((center != null && center instanceof Array && (center.length == 0 || center[0] == null || (typeof center[0] === 'number'))) || center === null) && ((point != null && point instanceof Array && (point.length == 0 || point[0] == null || (typeof point[0] === 'number'))) || point === null) && ((modes != null && modes instanceof Array && (modes.length == 0 || modes[0] == null || modes[0] instanceof Array)) || modes === null) && colSum === undefined && colSumSq === undefined) {
            return GenModelEva.KMeans_distance$double_A$double_A$java_lang_String_A_A(center, point, modes);
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
        const sum = GenModelEva.log_rescale(preds);
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
        return GenModelEva.GLM_logitInv(x);
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
        GenModelEva.setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels);
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
        GenModelEva.setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels);
        java.util.Arrays.fill(to, 0.0);
        for (let i = 0; i < _cats; ++i) {
            if (cats[i] >= 0)
                to[cats[i]] = 1.0;
            ;
        }
        for (let i = 0; i < _nums; ++i) {
            to[_catOffsets[_cats] + i] = /* isNaN */ isNaN(nums[i]) ? (replaceMissingWithZero ? 0 : javaemul.internal.DoubleHelper.NaN) : nums[i];
        }
    }
    static setInput(from, to, nums, cats, _nums, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels, replaceMissingWithZero) {
        if (((from != null && from instanceof Array && (from.length == 0 || from[0] == null || (typeof from[0] === 'number'))) || from === null) && ((to != null && to instanceof Array && (to.length == 0 || to[0] == null || (typeof to[0] === 'number'))) || to === null) && ((nums != null && nums instanceof Array && (nums.length == 0 || nums[0] == null || (typeof nums[0] === 'number'))) || nums === null) && ((cats != null && cats instanceof Array && (cats.length == 0 || cats[0] == null || (typeof cats[0] === 'number'))) || cats === null) && ((typeof _nums === 'number') || _nums === null) && ((typeof _cats === 'number') || _cats === null) && ((_catOffsets != null && _catOffsets instanceof Array && (_catOffsets.length == 0 || _catOffsets[0] == null || (typeof _catOffsets[0] === 'number'))) || _catOffsets === null) && ((_normMul != null && _normMul instanceof Array && (_normMul.length == 0 || _normMul[0] == null || (typeof _normMul[0] === 'number'))) || _normMul === null) && ((_normSub != null && _normSub instanceof Array && (_normSub.length == 0 || _normSub[0] == null || (typeof _normSub[0] === 'number'))) || _normSub === null) && ((typeof useAllFactorLevels === 'boolean') || useAllFactorLevels === null) && ((typeof replaceMissingWithZero === 'boolean') || replaceMissingWithZero === null)) {
            return GenModelEva.setInput$double_A$double_A$double_A$int_A$int$int$int_A$double_A$double_A$boolean$boolean(from, to, nums, cats, _nums, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels, replaceMissingWithZero);
        }
        else if (((from != null && from instanceof Array && (from.length == 0 || from[0] == null || (typeof from[0] === 'number'))) || from === null) && ((to != null && to instanceof Array && (to.length == 0 || to[0] == null || (typeof to[0] === 'number'))) || to === null) && ((typeof nums === 'number') || nums === null) && ((typeof cats === 'number') || cats === null) && ((_nums != null && _nums instanceof Array && (_nums.length == 0 || _nums[0] == null || (typeof _nums[0] === 'number'))) || _nums === null) && ((_cats != null && _cats instanceof Array && (_cats.length == 0 || _cats[0] == null || (typeof _cats[0] === 'number'))) || _cats === null) && ((_catOffsets != null && _catOffsets instanceof Array && (_catOffsets.length == 0 || _catOffsets[0] == null || (typeof _catOffsets[0] === 'number'))) || _catOffsets === null) && ((typeof _normMul === 'boolean') || _normMul === null) && ((typeof _normSub === 'boolean') || _normSub === null) && useAllFactorLevels === undefined && replaceMissingWithZero === undefined) {
            return GenModelEva.setInput$double_A$float_A$int$int$int_A$double_A$double_A$boolean$boolean(from, to, nums, cats, _nums, _cats, _catOffsets, _normMul, _normSub);
        }
        else
            throw new Error('invalid overload');
    }
    static setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels) {
        GenModelEva.setCats$double_A$int_A$int$int_A$boolean(from, cats, _cats, _catOffsets, useAllFactorLevels);
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
            return GenModelEva.setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels);
        }
        else if (((from != null && from instanceof Array && (from.length == 0 || from[0] == null || (typeof from[0] === 'number'))) || from === null) && ((nums != null && nums instanceof Array && (nums.length == 0 || nums[0] == null || (typeof nums[0] === 'number'))) || nums === null) && ((typeof cats === 'number') || cats === null) && ((_cats != null && _cats instanceof Array && (_cats.length == 0 || _cats[0] == null || (typeof _cats[0] === 'number'))) || _cats === null) && ((typeof _catOffsets === 'boolean') || _catOffsets === null) && _normMul === undefined && _normSub === undefined && useAllFactorLevels === undefined) {
            return GenModelEva.setCats$double_A$int_A$int$int_A$boolean(from, nums, cats, _cats, _catOffsets);
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
GenModelEva["__class"] = "GenModelEva";
