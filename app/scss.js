const scss = require('node-sass');
const minimist = require('minimist');
const _ = require('lodash');
const {argv} = process;
const {data: _data} = minimist(_.slice(argv, 2));
const data = decodeURIComponent(_data);

scss.render({ data }, (err, _result) => {
	if (err) {
		console.error(JSON.stringify(err));
	} else {
		const {css: result} = _result;
		console.log(result.toString());
	}
});