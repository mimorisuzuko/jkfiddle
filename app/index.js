const {app} = require('electron');
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