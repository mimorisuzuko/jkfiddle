const Color = require('color');
const _black = Color('rgb(30, 30, 30)');
const _lblack = _black.lighten(0.4);
const _llblack = _lblack.lighten(0.4);
const _white = Color('rgb(212, 212, 212)');
const _dwhite = _white.darken(0.4);
const _blue = Color('rgb(0, 122, 204)');
const black = _black.toString();
const lblack = _lblack.toString();
const llblack = _llblack.toString();
const white = _white.toString();
const dwhite = _dwhite.toString();
const blue = _blue.toString();

module.exports = { black, lblack, llblack, white, dwhite, blue};