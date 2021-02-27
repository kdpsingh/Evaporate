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
