const _ = require('lodash');
const React = require('react');
const electron = require('electron');
const {Component} = React;
const {ipcRenderer} = electron;

module.exports = class HTMLRender extends Component {
	render() {
		const {props: {pug, scss, javascript}} = this;
		const $html = document.createElement('html');
		$html.innerHTML = ipcRenderer.sendSync('pug', { value: pug });
		const $style = document.createElement('style');
		$style.innerHTML = ipcRenderer.sendSync('scss', { value: scss });
		$html.querySelector('head').appendChild($style);
		const $script = document.createElement('script');
		$script.innerHTML = javascript;
		$html.querySelector('body').appendChild($script);

		return (
			<iframe srcDoc={$html.innerHTML} style={{
				display: 'block',
				border: 'none',
				width: '100%',
				height: '100%'
			}}></iframe>
		);
	}
};