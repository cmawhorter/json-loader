/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(source) {
	this.cacheable && this.cacheable();
	var parsed = typeof source === "string" ? JSON.parse(source) : source;
	var value;
	if (/\bpackage\.json$/.test(this.resourcePath)) {
		value = {};
		for (var k in parsed) {
			if (k[0] !== "_") value[k] = parsed[k];
		}
	}
	else {
		value = parsed;
	}
	this.value = [value];
	return "module.exports = " + JSON.stringify(value) + ";";
}
