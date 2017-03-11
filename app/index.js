const { app, ipcMain } = require('electron');
const pug = require('pug');
const { exec } = require('child_process');
const Single = require('./single-window');
const single = new Single();

/**
 * @param {string} value
 * @returns {Promise<{status: string, result: string>}
 */
const compilePug = (value) => new Promise((resolve) => {
	try {
		resolve({
			status: 'success',
			result: pug.render(value)
		});
	} catch ({ line, column, msg }) {
		resolve({
			status: 'error',
			result: `${line}:${column}: ${msg}`
		});
	}
});

/**
 * @param {string} value
 * @returns {Promise<{status: string, result: string}>}
 */
const compileSCSS = (value) => new Promise((resolve) => {
	exec(`node app/scss.js --data ${encodeURIComponent(value)}`, (err, stdout, stderr) => {
		if (stderr) {
			const { line, column, message } = JSON.parse(stderr);
			resolve({
				status: 'error',
				result: `${line}:${column}: ${message}`
			});
		} else {
			resolve({
				status: 'success',
				result: stdout
			});
		}
	});
});

/**
 * @param {string} value
 * @param {Promise<status: string, result: string>}
 */
const compileJS = (value) => new Promise((resolve) => {
	resolve({
		status: 'success',
		result: value
	});
});

app.on('ready', () => {
	single.create();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') { app.quit(); }
});

app.on('activate', () => {
	if (!single.exist()) { single.create(); }
});

ipcMain.on('compile', (event, args) => {
	const [pugString, scssString, jsString] = args;

	Promise.all([
		compilePug(pugString),
		compileSCSS(scssString),
		compileJS(jsString)
	]).then((result) => {
		event.returnValue = result;
	});
});