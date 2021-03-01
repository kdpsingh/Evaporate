cn = [];
for (var i = 0; i < n.length; i++)
    cn.push(n[i].toLowerCase());

//MAIN.JS
js_code = "";
js_code += 'document.getElementById("h2oCalc").addEventListener("click", h2o_calculate);\n';
js_code += 'function h2o_calculate() {\n'
js_code += '\tpred = new Array(3).fill(0);\n'

for (var i = 0; i < cn.length; i++) {
    js_code += '\tvar ' + cn[i] + ' = parseFloat(document.getElementById(' + JSON.stringify(cn[i]) + ').value);\n';
}

js_code += '\tinput = [' + cn.join() + '];\n';
js_code += '\tp = m.score0(input, pred);\n';
js_code += '\tdocument.getElementById("h2oResult").innerHTML = p;\n'
js_code += '}';

console.log(js_code);
