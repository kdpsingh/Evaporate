/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
/**
 * ''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 * JAKE'S EDITS (REMOVED MOST CALLS TO H2O CLASSES!!)
 * ''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 * This is a helper class to support Java generated models.
 * @class
 */
abstract class GenModel {
    public static correctProbabilities(scored: number[], priorClassDist: number[], modelClassDist: number[]): number[] {
        let probsum: number = 0;
        for(let c: number = 1; c < scored.length; c++) {{
            const original_fraction: number = priorClassDist[c - 1];
            const oversampled_fraction: number = modelClassDist[c - 1];
            if (original_fraction !== 0 && oversampled_fraction !== 0)scored[c] *= original_fraction / oversampled_fraction;
            probsum += scored[c];
        };}
        if (probsum > 0)for(let i: number = 1; i < scored.length; ++i) {scored[i] /= probsum;}
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
    public static getPrediction(preds: number[], priorClassDist: number[], data: number[], threshold: number): number {
        if (preds.length === 3){
            return GenModel.getPredictionBinomial(preds, threshold);
        } else {
            return GenModel.getPredictionMultinomial(preds, priorClassDist, data);
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
        let hash: number = 0;
        if (data != null)for(let index121=0; index121 < data.length; index121++) {
            let d = data[index121];
            hash ^= javaemul.internal.DoubleHelper.doubleToRawLongBits(d) >> 6
        }
        if (priorClassDist != null){
            let sum: number = 0;
            for(let index122=ties.iterator();index122.hasNext();) {
                let i = index122.next();
                {
                    sum += priorClassDist[i];
                }
            }
            const rng: java.util.Random = new java.util.Random(hash);
            const tie: number = rng.nextDouble();
            let partialSum: number = 0;
            for(let index123=ties.iterator();index123.hasNext();) {
                let i = index123.next();
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

    public static Kmeans_preprocessData$double_A$double_A$double_A$int_A(data: number[], means: number[], mults: number[], modes: number[]) {
        for(let i: number = 0; i < data.length; i++) {{
            data[i] = GenModel.Kmeans_preprocessData$double$int$double_A$double_A$int_A(data[i], i, means, mults, modes);
        };}
    }

    public static Kmeans_preprocessData$double$int$double_A$double_A$int_A(d: number, i: number, means: number[], mults: number[], modes: number[]): number {
        if (modes[i] === -1){
            if (/* isNaN */isNaN(d))d = means[i];
            if (mults != null){
                d -= means[i];
                d *= mults[i];
            }
        } else {
            if (/* isNaN */isNaN(d))d = modes[i];
        }
        return d;
    }

    public static Kmeans_preprocessData(d?: any, i?: any, means?: any, mults?: any, modes?: any): any {
        if (((typeof d === 'number') || d === null) && ((typeof i === 'number') || i === null) && ((means != null && means instanceof <any>Array && (means.length == 0 || means[0] == null ||(typeof means[0] === 'number'))) || means === null) && ((mults != null && mults instanceof <any>Array && (mults.length == 0 || mults[0] == null ||(typeof mults[0] === 'number'))) || mults === null) && ((modes != null && modes instanceof <any>Array && (modes.length == 0 || modes[0] == null ||(typeof modes[0] === 'number'))) || modes === null)) {
            return <any>GenModel.Kmeans_preprocessData$double$int$double_A$double_A$int_A(d, i, means, mults, modes);
        } else if (((d != null && d instanceof <any>Array && (d.length == 0 || d[0] == null ||(typeof d[0] === 'number'))) || d === null) && ((i != null && i instanceof <any>Array && (i.length == 0 || i[0] == null ||(typeof i[0] === 'number'))) || i === null) && ((means != null && means instanceof <any>Array && (means.length == 0 || means[0] == null ||(typeof means[0] === 'number'))) || means === null) && ((mults != null && mults instanceof <any>Array && (mults.length == 0 || mults[0] == null ||(typeof mults[0] === 'number'))) || mults === null) && modes === undefined) {
            return <any>GenModel.Kmeans_preprocessData$double_A$double_A$double_A$int_A(d, i, means, mults);
        } else throw new Error('invalid overload');
    }

    public static KMeans_closest(centers: number[][], point: number[], domains: string[][]): number {
        let min: number = -1;
        let minSqr: number = javaemul.internal.DoubleHelper.MAX_VALUE;
        for(let cluster: number = 0; cluster < centers.length; cluster++) {{
            const sqr: number = GenModel.KMeans_distance$double_A$double_A$java_lang_String_A_A(centers[cluster], point, domains);
            if (sqr < minSqr){
                min = cluster;
                minSqr = sqr;
            }
        };}
        return min;
    }

    public static KMeans_distances(centers: number[][], point: number[], domains: string[][], distances: number[]): number {
        let min: number = -1;
        let minSqr: number = javaemul.internal.DoubleHelper.MAX_VALUE;
        for(let cluster: number = 0; cluster < centers.length; cluster++) {{
            distances[cluster] = GenModel.KMeans_distance$double_A$double_A$java_lang_String_A_A(centers[cluster], point, domains);
            if (distances[cluster] < minSqr){
                min = cluster;
                minSqr = distances[cluster];
            }
        };}
        return min;
    }

    public static KMeans_simplex(centers: number[][], point: number[], domains: string[][]): number[] {
        const dist: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(centers.length);
        let sum: number = 0;
        let inv_sum: number = 0;
        for(let cluster: number = 0; cluster < centers.length; cluster++) {{
            dist[cluster] = GenModel.KMeans_distance$double_A$double_A$java_lang_String_A_A(centers[cluster], point, domains);
            sum += dist[cluster];
            inv_sum += 1.0 / dist[cluster];
        };}
        const ratios: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(centers.length);
        if (sum === 0){
            const rng: java.util.Random = new java.util.Random();
            const idx: number = rng.nextInt(centers.length);
            ratios[idx] = 1;
        } else {
            let idx: number = -1;
            for(let cluster: number = 0; cluster < centers.length; cluster++) {{
                if (dist[cluster] === 0){
                    idx = cluster;
                    break;
                }
            };}
            if (idx === -1){
                for(let cluster: number = 0; cluster < centers.length; cluster++) {ratios[cluster] = 1.0 / (dist[cluster] * inv_sum);}
            } else ratios[idx] = 1;
        }
        return ratios;
    }

    public static KMeans_distance$double_A$float_A$int_A$double_A$double_A(center: number[], point: number[], modes: number[], colSum: number[], colSumSq: number[]): number {
        let sqr: number = 0;
        let pts: number = point.length;
        for(let column: number = 0; column < center.length; column++) {{
            const d: number = point[column];
            if (/* isNaN */isNaN(d)){
                pts--;
                continue;
            }
            if (modes[column] !== -1){
                if (d !== center[column]){
                    sqr += 1.0;
                }
                if (d !== modes[column]){
                    colSum[column] += 1;
                }
            } else {
                const delta: number = d - center[column];
                sqr += delta * delta;
                colSum[column] += d;
                colSumSq[column] += (<any>Math).fround(d * d);
            }
        };}
        if (0 < pts && pts < point.length){
            const scale: number = (<number>point.length) / pts;
            sqr *= scale;
        }
        return sqr;
    }

    public static KMeans_distance(center?: any, point?: any, modes?: any, colSum?: any, colSumSq?: any): any {
        if (((center != null && center instanceof <any>Array && (center.length == 0 || center[0] == null ||(typeof center[0] === 'number'))) || center === null) && ((point != null && point instanceof <any>Array && (point.length == 0 || point[0] == null ||(typeof point[0] === 'number'))) || point === null) && ((modes != null && modes instanceof <any>Array && (modes.length == 0 || modes[0] == null ||(typeof modes[0] === 'number'))) || modes === null) && ((colSum != null && colSum instanceof <any>Array && (colSum.length == 0 || colSum[0] == null ||(typeof colSum[0] === 'number'))) || colSum === null) && ((colSumSq != null && colSumSq instanceof <any>Array && (colSumSq.length == 0 || colSumSq[0] == null ||(typeof colSumSq[0] === 'number'))) || colSumSq === null)) {
            return <any>GenModel.KMeans_distance$double_A$float_A$int_A$double_A$double_A(center, point, modes, colSum, colSumSq);
        } else if (((center != null && center instanceof <any>Array && (center.length == 0 || center[0] == null ||(typeof center[0] === 'number'))) || center === null) && ((point != null && point instanceof <any>Array && (point.length == 0 || point[0] == null ||(typeof point[0] === 'number'))) || point === null) && ((modes != null && modes instanceof <any>Array && (modes.length == 0 || modes[0] == null ||modes[0] instanceof Array)) || modes === null) && colSum === undefined && colSumSq === undefined) {
            return <any>GenModel.KMeans_distance$double_A$double_A$java_lang_String_A_A(center, point, modes);
        } else throw new Error('invalid overload');
    }

    public static KMeans_distance$double_A$double_A$java_lang_String_A_A(center: number[], point: number[], domains: string[][]): number {
        let sqr: number = 0;
        let pts: number = point.length;
        for(let column: number = 0; column < center.length; column++) {{
            const d: number = point[column];
            if (/* isNaN */isNaN(d)){
                pts--;
                continue;
            }
            if (domains[column] != null){
                if (d !== center[column])sqr += 1.0;
            } else {
                const delta: number = d - center[column];
                sqr += delta * delta;
            }
        };}
        if (0 < pts && pts < point.length)sqr *= (<number>point.length) / pts;
        return sqr;
    }

    public static log_rescale(preds: number[]): number {
        let maxval: number = javaemul.internal.DoubleHelper.NEGATIVE_INFINITY;
        for(let k: number = 1; k < preds.length; k++) {maxval = Math.max(maxval, preds[k]);}
        let dsum: number = 0;
        for(let k: number = 1; k < preds.length; k++) {dsum += (preds[k] = Math.exp(preds[k] - maxval));}
        return dsum;
    }

    public static GBM_rescale(preds: number[]) {
        const sum: number = GenModel.log_rescale(preds);
        for(let k: number = 1; k < preds.length; k++) {preds[k] /= sum;}
    }

    public static GLM_identityInv(x: number): number {
        return x;
    }

    public static GLM_logitInv(x: number): number {
        return 1.0 / (Math.exp(-x) + 1.0);
    }

    public static GLM_logInv(x: number): number {
        return Math.exp(x);
    }

    public static GLM_inverseInv(x: number): number {
        const xx: number = (x < 0) ? Math.min(-1.0E-5, x) : Math.max(1.0E-5, x);
        return 1.0 / xx;
    }

    public static GLM_ologitInv(x: number): number {
        return GenModel.GLM_logitInv(x);
    }

    public static GLM_tweedieInv(x: number, tweedie_link_power: number): number {
        return tweedie_link_power === 0 ? Math.max(2.0E-16, Math.exp(x)) : Math.pow(x, 1.0 / tweedie_link_power);
    }

    /**
     * ???
     * @return {string}
     */
    public getHeader(): string {
        return null;
    }

    public static setInput$double_A$float_A$int$int$int_A$double_A$double_A$boolean$boolean(from: number[], to: number[], _nums: number, _cats: number, _catOffsets: number[], _normMul: number[], _normSub: number[], useAllFactorLevels: boolean, replaceMissingWithZero: boolean) {
        const nums: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(_nums);
        const cats: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(_cats);
        GenModel.setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels);
        java.util.Arrays.fill(to, 0.0);
        for(let i: number = 0; i < _cats; ++i) {if (cats[i] >= 0)to[cats[i]] = 1.0;;}
        for(let i: number = 0; i < _nums; ++i) {to[_catOffsets[_cats] + i] = /* isNaN */isNaN(nums[i]) ? (replaceMissingWithZero ? 0 : javaemul.internal.FloatHelper.NaN) : (<any>Math).fround(nums[i]);}
    }

    public static setInput$double_A$double_A$double_A$int_A$int$int$int_A$double_A$double_A$boolean$boolean(from: number[], to: number[], nums: number[], cats: number[], _nums: number, _cats: number, _catOffsets: number[], _normMul: number[], _normSub: number[], useAllFactorLevels: boolean, replaceMissingWithZero: boolean) {
        GenModel.setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels);
        java.util.Arrays.fill(to, 0.0);
        for(let i: number = 0; i < _cats; ++i) {if (cats[i] >= 0)to[cats[i]] = 1.0;;}
        for(let i: number = 0; i < _nums; ++i) {to[_catOffsets[_cats] + i] = /* isNaN */isNaN(nums[i]) ? (replaceMissingWithZero ? 0 : javaemul.internal.DoubleHelper.NaN) : nums[i];}
    }

    public static setInput(from?: any, to?: any, nums?: any, cats?: any, _nums?: any, _cats?: any, _catOffsets?: any, _normMul?: any, _normSub?: any, useAllFactorLevels?: any, replaceMissingWithZero?: any) {
        if (((from != null && from instanceof <any>Array && (from.length == 0 || from[0] == null ||(typeof from[0] === 'number'))) || from === null) && ((to != null && to instanceof <any>Array && (to.length == 0 || to[0] == null ||(typeof to[0] === 'number'))) || to === null) && ((nums != null && nums instanceof <any>Array && (nums.length == 0 || nums[0] == null ||(typeof nums[0] === 'number'))) || nums === null) && ((cats != null && cats instanceof <any>Array && (cats.length == 0 || cats[0] == null ||(typeof cats[0] === 'number'))) || cats === null) && ((typeof _nums === 'number') || _nums === null) && ((typeof _cats === 'number') || _cats === null) && ((_catOffsets != null && _catOffsets instanceof <any>Array && (_catOffsets.length == 0 || _catOffsets[0] == null ||(typeof _catOffsets[0] === 'number'))) || _catOffsets === null) && ((_normMul != null && _normMul instanceof <any>Array && (_normMul.length == 0 || _normMul[0] == null ||(typeof _normMul[0] === 'number'))) || _normMul === null) && ((_normSub != null && _normSub instanceof <any>Array && (_normSub.length == 0 || _normSub[0] == null ||(typeof _normSub[0] === 'number'))) || _normSub === null) && ((typeof useAllFactorLevels === 'boolean') || useAllFactorLevels === null) && ((typeof replaceMissingWithZero === 'boolean') || replaceMissingWithZero === null)) {
            return <any>GenModel.setInput$double_A$double_A$double_A$int_A$int$int$int_A$double_A$double_A$boolean$boolean(from, to, nums, cats, _nums, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels, replaceMissingWithZero);
        } else if (((from != null && from instanceof <any>Array && (from.length == 0 || from[0] == null ||(typeof from[0] === 'number'))) || from === null) && ((to != null && to instanceof <any>Array && (to.length == 0 || to[0] == null ||(typeof to[0] === 'number'))) || to === null) && ((typeof nums === 'number') || nums === null) && ((typeof cats === 'number') || cats === null) && ((_nums != null && _nums instanceof <any>Array && (_nums.length == 0 || _nums[0] == null ||(typeof _nums[0] === 'number'))) || _nums === null) && ((_cats != null && _cats instanceof <any>Array && (_cats.length == 0 || _cats[0] == null ||(typeof _cats[0] === 'number'))) || _cats === null) && ((_catOffsets != null && _catOffsets instanceof <any>Array && (_catOffsets.length == 0 || _catOffsets[0] == null ||(typeof _catOffsets[0] === 'number'))) || _catOffsets === null) && ((typeof _normMul === 'boolean') || _normMul === null) && ((typeof _normSub === 'boolean') || _normSub === null) && useAllFactorLevels === undefined && replaceMissingWithZero === undefined) {
            return <any>GenModel.setInput$double_A$float_A$int$int$int_A$double_A$double_A$boolean$boolean(from, to, nums, cats, _nums, _cats, _catOffsets, _normMul, _normSub);
        } else throw new Error('invalid overload');
    }

    public static setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from: number[], nums: number[], cats: number[], _cats: number, _catOffsets: number[], _normMul: number[], _normSub: number[], useAllFactorLevels: boolean) {
        GenModel.setCats$double_A$int_A$int$int_A$boolean(from, cats, _cats, _catOffsets, useAllFactorLevels);
        for(let i: number = _cats; i < from.length; ++i) {{
            let d: number = from[i];
            if ((_normMul != null) && (_normMul.length > 0)){
                d = (d - _normSub[i - _cats]) * _normMul[i - _cats];
            }
            nums[i - _cats] = d;
        };}
    }

    public static setCats(from?: any, nums?: any, cats?: any, _cats?: any, _catOffsets?: any, _normMul?: any, _normSub?: any, useAllFactorLevels?: any) {
        if (((from != null && from instanceof <any>Array && (from.length == 0 || from[0] == null ||(typeof from[0] === 'number'))) || from === null) && ((nums != null && nums instanceof <any>Array && (nums.length == 0 || nums[0] == null ||(typeof nums[0] === 'number'))) || nums === null) && ((cats != null && cats instanceof <any>Array && (cats.length == 0 || cats[0] == null ||(typeof cats[0] === 'number'))) || cats === null) && ((typeof _cats === 'number') || _cats === null) && ((_catOffsets != null && _catOffsets instanceof <any>Array && (_catOffsets.length == 0 || _catOffsets[0] == null ||(typeof _catOffsets[0] === 'number'))) || _catOffsets === null) && ((_normMul != null && _normMul instanceof <any>Array && (_normMul.length == 0 || _normMul[0] == null ||(typeof _normMul[0] === 'number'))) || _normMul === null) && ((_normSub != null && _normSub instanceof <any>Array && (_normSub.length == 0 || _normSub[0] == null ||(typeof _normSub[0] === 'number'))) || _normSub === null) && ((typeof useAllFactorLevels === 'boolean') || useAllFactorLevels === null)) {
            return <any>GenModel.setCats$double_A$double_A$int_A$int$int_A$double_A$double_A$boolean(from, nums, cats, _cats, _catOffsets, _normMul, _normSub, useAllFactorLevels);
        } else if (((from != null && from instanceof <any>Array && (from.length == 0 || from[0] == null ||(typeof from[0] === 'number'))) || from === null) && ((nums != null && nums instanceof <any>Array && (nums.length == 0 || nums[0] == null ||(typeof nums[0] === 'number'))) || nums === null) && ((typeof cats === 'number') || cats === null) && ((_cats != null && _cats instanceof <any>Array && (_cats.length == 0 || _cats[0] == null ||(typeof _cats[0] === 'number'))) || _cats === null) && ((typeof _catOffsets === 'boolean') || _catOffsets === null) && _normMul === undefined && _normSub === undefined && useAllFactorLevels === undefined) {
            return <any>GenModel.setCats$double_A$int_A$int$int_A$boolean(from, nums, cats, _cats, _catOffsets);
        } else throw new Error('invalid overload');
    }

    public static setCats$double_A$int_A$int$int_A$boolean(from: number[], to: number[], cats: number, catOffsets: number[], useAllFactorLevels: boolean) {
        for(let i: number = 0; i < cats; ++i) {{
            if (/* isNaN */isNaN(from[i])){
                to[i] = (catOffsets[i + 1] - 1);
            } else {
                const c: number = (<number>from[i]|0);
                if (useAllFactorLevels)to[i] = c + catOffsets[i]; else {
                    if (c !== 0)to[i] = c - 1 + catOffsets[i]; else to[i] = -1;
                }
                if (to[i] >= catOffsets[i + 1])to[i] = (catOffsets[i + 1] - 1);
            }
        };}
    }

    public static convertDouble2Float(input: number[]): number[] {
        const arraySize: number = input.length;
        const output: number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(arraySize);
        for(let index: number = 0; index < arraySize; index++) {output[index] = (<any>Math).fround(input[index]);}
        return output;
    }
}
GenModel["__class"] = "GenModel";



