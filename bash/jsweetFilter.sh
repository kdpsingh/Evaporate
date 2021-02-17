#!/bin/bash

# this bash command is supposed to be run on the JavaScript code produced by JSweet
# since JSweet isn't perfect, it still leaves some remnants of Java code;
# here we try to overwrite some known JSweet-leftover Java code into workable JavaScript
# (to be continue...)

java_array='new java.util.ArrayList()'
java_doubleToBits='javaemul.internal.DoubleHelper.doubleToRawLongBits(d)'
java_NaN='javaemul.internal.DoubleHelper.NaN'
jvsc_doubleToBits='(function (f) { var buf = new ArrayBuffer(4); (new Float32Array(buf))[0] = f; return (new Uint32Array(buf))[0]; })(Math.fround(d))'
java_arrFill='java.util.Arrays.fill(preds, 0);'

java_filter () {
	sed -i "s/$java_array/[]/g" 				$1
	sed -i "s/$java_doubleToBits/$jvsc_doubleToBits/g" 	$1
	sed -i "s/.add/.push/g" 				$1
	sed -i "s/$java_NaN/NaN/g"				$1
	sed -i "s/$java_arrFill/preds.fill(0);/g"		$1
}

java_filter $1
