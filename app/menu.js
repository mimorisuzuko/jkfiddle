const _ = require('lodash');
const { shell, app } = require('electron');

const menu = [
	{
		label: 'Edit',
		submenu: [
			{
				role: 'undo'
			},
			{
				role: 'redo'
			},
			{
				type: 'separator'
			},
			{
				role: 'cut'
			},
			{
				role: 'copy'
			},
			{
				role: 'paste'
			},
			{
				role: 'pasteandmatchstyle'
			},
			{
				role: 'delete'
			},
			{
				role: 'selectall'
			},
			{
				type: 'separator'
			},
			{
				label: 'Format Document',
				accelerator: 'CmdOrCtrl+T',
				click(item, focusedWindow) {
					if (!focusedWindow) { return; }
					focusedWindow.webContents.send('format-document-from-menu');
				}
			}
		]
	},
	{
		label: 'View',
		submenu: [
			{
				label: 'Reload',
				accelerator: 'CmdOrCtrl+R',
				click(item, focusedWindow) {
					if (!focusedWindow) { return; }
					focusedWindow.reload();
				}
			},
			{
				label: 'Toggle Developer Tools',
				accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
				click(item, focusedWindow) {
					if (!focusedWindow) { return; }
					focusedWindow.webContents.toggleDevTools();
				}
			},
			{
				type: 'separator'
			},
			{
				role: 'resetzoom'
			},
			{
				role: 'zoomin'
			},
			{
				role: 'zoomout'
			},
			{
				type: 'separator'
			},
			{
				role: 'togglefullscreen'
			}
		]
	},
	{
		role: 'window',
		submenu: [
			{
				role: 'minimize'
			},
			{
				role: 'close'
			}
		]
	},
	{
		role: 'help',
		submenu: [
			{
				label: 'Learn More',
				click() {
					shell.openExternal('http://electron.atom.io');
				}
			}
		]
	}
];

if (process.platform === 'darwin') {
	const name = app.getName();
	menu.unshift({
		label: name,
		submenu: [
			{
				role: 'about'
			},
			{
				type: 'separator'
			},
			{
				role: 'services',
				submenu: []
			},
			{
				type: 'separator'
			},
			{
				role: 'hide'
			},
			{
				role: 'hideothers'
			},
			{
				role: 'unhide'
			},
			{
				type: 'separator'
			},
			{
				role: 'quit'
			}
		]
	});

	// Edit menu.
	menu[_.findIndex(menu, (a) => a.label === 'Edit')].submenu.push(
		{
			type: 'separator'
		},
		{
			label: 'Speech',
			submenu: [
				{
					role: 'startspeaking'
				},
				{
					role: 'stopspeaking'
				}
			]
		}
	);

	// Window menu.
	menu[_.findIndex(menu, (a) => a.role === 'window')].submenu = _.concat([
		{
			label: 'Close',
			accelerator: 'CmdOrCtrl+W',
			role: 'close'
		},
		{
			label: 'Minimize',
			accelerator: 'CmdOrCtrl+M',
			role: 'minimize'
		},
		{
			label: 'Zoom',
			role: 'zoom'
		},
		{
			type: 'separator'
		},
		{
			label: 'Bring All to Front',
			role: 'front'
		},
		{
			type: 'separator'
		}
	], _.map([
		{
			name: 'pug',
			display: 'Pug'
		},
		{
			name: 'scss',
			display: 'SCSS'
		},
		{
			name: 'javascript',
			display: 'JS'
		},
		{
			name: 'result',
			display: 'Result'
		}
	], ({ display }, i) => ({
		label: display,
		accelerator: `CmdOrCtrl+${i + 1}`,
		click(item, focusedWindow) {
			if (!focusedWindow) { return; }
			focusedWindow.webContents.send('open-item-from-menu', { index: i });
		}
	})
	));
}

module.exports = menu;