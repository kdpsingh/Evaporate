cn = [];
for (var i = 0; i < n.length; i++)
    cn.push(n[i].toLowerCase()); 

var html = "";
html += '<div class="h2o">\n';
html += '\t<h2>Enter Your:</h2>\n';

for (var i = 0; i < cn.length; i++) {
	html += '\t<label for=' + cn[i] + '>' + cn[i].toUpperCase() + '</label>\n';
	html += '\t<input type="text" id=' + cn[i] + ' value="0"></br>\n';
}

html += '\t<p id="h2oCalc">H2O Calculate!</p>\n';
html += '</div>\n';

html += '<div id="h2oResult"></div>\n';
html += '<script src="bundle.js"></script>'
console.log(html)
