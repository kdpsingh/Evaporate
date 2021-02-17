java_array='new java.util.ArrayList()'
java_doubleToBits='javaemul.internal.DoubleHelper.doubleToRawLongBits(d)'
jvsc_doubleToBits='(function (f) { var buf = new ArrayBuffer(4); (new Float32Array(buf))[0] = f; return (new Uint32Array(buf))[0]; })(Math.fround(d))'
# need to deal with java.util.Arrays.fill

java_filter () {
	sed -i "s/$java_array/[]/g" 				$1
	sed -i "s/$java_doubleToBits/$jvsc_doubleToBits/g" 	$1
	sed -i "s/.add/.push/g" 				$1
}

java_filter $1
