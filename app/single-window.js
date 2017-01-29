const libpath = require('path');
const {BrowserWindow} = require('electron');

module.exports = class SingleWindow {
	constructor() {

		/** @type {Electron.BrowserWindow} */
		this.window = null;
	}

	create() {
		const window = new BrowserWindow({
			width: 800,
			height: 600
		});
		window.loadURL(`file://${libpath.join(__dirname, 'dst/index.html')}`);
		window.on('closed', this.onClosed.bind(this));
	}

	onClosed() {
		this.window = null;
	}
	
	/**
	 * @returns {boolean}
	 */
	exist() {
		const {window} = this;

		return window !== null;
	}
};