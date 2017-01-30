const scss = require('node-sass');
const minimist = require('minimist');
const _ = require('lodash');
const {argv} = process;
const {data: _data} = minimist(_.slice(argv, 2));
const data = decodeURIComponent(_data);

scss.render({ data }, (err, result) => {
	if (err) {
		console.log(err);
	} else {
		const {css} = result;
		console.log(result);
	}
});