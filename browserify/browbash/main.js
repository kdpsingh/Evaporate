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
