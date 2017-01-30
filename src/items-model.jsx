const Immutable = require('immutable');
const fs = require('fs');
const libpath = require('path');
const {Record, List} = Immutable;
/** @type {{name: string, display: string}[]} */
const json = JSON.parse(fs.readFileSync(libpath.join(__dirname, '../../common/items.json')));

class ItemsModel extends Record({ contents: json, index: 0 }) { }

module.exports = ItemsModel;