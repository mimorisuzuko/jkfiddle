const _ = require('lodash');
const React = require('react');
const electron = require('electron');
const {Component} = React;
const {ipcRenderer} = electron;

module.exports = class HTMLRender extends Component {
	render() {
		const {props: {pug, scss, js}} = this;
		const [
			{status: htmlStatus, result: htmlResult},
			{status: cssStatus, result: cssResult},
			{status: jsStatus, result: jsResult}
		] = ipcRenderer.sendSync('compile', [pug, scss, js]);
		let srcDoc = '';

		if (_.every([htmlStatus, cssStatus, jsStatus], (a) => a === 'success')) {
			const $html = document.createElement('html');
			$html.innerHTML = htmlResult;
			const $style = document.createElement('style');
			$style.innerHTML = cssResult;
			$html.querySelector('head').appendChild($style);
			const $script = document.createElement('script');
			$script.innerHTML = jsResult;
			$html.querySelector('body').appendChild($script);
			srcDoc = $html.innerHTML;
		}

		return (
			<iframe srcDoc={srcDoc} style={{
				display: 'block',
				border: 'none',
				width: '100%',
				height: '100%'
			}}></iframe>
		);
	}
};