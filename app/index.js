const {app, ipcMain} = require('electron');
const pug = require('pug');
const {exec} = require('child_process');
const Single = require('./single-window');
const single = new Single();

app.on('ready', () => {
	single.create();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') { app.quit(); }
});

app.on('activate', () => {
	if (!single.exist()) { single.create(); }
});

ipcMain.on('pug', (event, args) => {
	const {value} = args;

	event.returnValue = pug.render(value);
});

ipcMain.on('scss', (event, args) => {
	const {value} = args;

	exec(`node app/scss.js --data ${encodeURIComponent(value)}`, (err, stdout, stderr) => {
		event.returnValue = stdout;
	});
});